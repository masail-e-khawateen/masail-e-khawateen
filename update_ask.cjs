const fs = require('fs');

let ask = fs.readFileSync('src/pages/Ask.tsx', 'utf8');

const submitHandlerRegex = /const \[isSubmitted, setIsSubmitted\] = useState\(false\);\s*const handleSubmit = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\);\s*setIsSubmitted\(true\);\s*\};/s;

const newSubmitHandler = `const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('form-name', 'sawal');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('سوال بھیجنے میں مسئلہ ہوا۔ براہ کرم دوبارہ کوشش کریں۔');
      }
    } catch (err) {
      setError('انٹرنیٹ کنکشن کا مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔');
    } finally {
      setIsSubmitting(false);
    }
  };`;

ask = ask.replace(submitHandlerRegex, newSubmitHandler);

ask = ask.replace(/<form onSubmit=\{handleSubmit\} className="space-y-6">/, `<form onSubmit={handleSubmit} className="space-y-6" name="sawal" data-netlify="true">
                            {error && (
                              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-urdu mb-4">
                                {error}
                              </div>
                            )}
                            <input type="hidden" name="form-name" value="sawal" />`);

// Add names
ask = ask.replace(/<input \s*type="text"/, '<input type="text" name="name"');
ask = ask.replace(/<input \s*type="email"/, '<input type="email" name="email"');
ask = ask.replace(/<select defaultValue="" \s*required/, '<select name="category" defaultValue="" required');
ask = ask.replace(/<textarea \s*required/, '<textarea name="question" required');
ask = ask.replace(/<select defaultValue="" className="w-full px-4 py-3/, '<select name="madhhab" defaultValue="" className="w-full px-4 py-3');

// Disable button
ask = ask.replace(/<button \s*type="submit"/, '<button type="submit" disabled={isSubmitting}');

fs.writeFileSync('src/pages/Ask.tsx', ask);
