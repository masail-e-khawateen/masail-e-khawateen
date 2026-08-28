const fs = require('fs');

let contact = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

const submitHandlerRegex = /const \[isSubmitted, setIsSubmitted\] = useState\(false\);\s*const handleSubmit = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\);\s*setIsSubmitted\(true\);\s*\};/s;

const newSubmitHandler = `const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('form-name', 'contact');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('پیغام بھیجنے میں مسئلہ ہوا۔ براہ کرم دوبارہ کوشش کریں۔');
      }
    } catch (err) {
      setError('انٹرنیٹ کنکشن کا مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔');
    } finally {
      setIsSubmitting(false);
    }
  };`;

contact = contact.replace(submitHandlerRegex, newSubmitHandler);

contact = contact.replace(/<form onSubmit=\{handleSubmit\} className="space-y-6">/, `<form onSubmit={handleSubmit} className="space-y-6" name="contact" data-netlify="true">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-urdu">
                      {error}
                    </div>
                  )}
                  <input type="hidden" name="form-name" value="contact" />`);

// Add names
contact = contact.replace(/<input \s*required\s*type="text"/, '<input required type="text" name="name"');
contact = contact.replace(/<input \s*required\s*type="email"/, '<input required type="email" name="email"');
contact = contact.replace(/<select defaultValue="" \s*required/, '<select name="subject" defaultValue="" required');
contact = contact.replace(/<textarea \s*required/, '<textarea name="message" required');

// Disable button while submitting
contact = contact.replace(/<button \s*type="submit"/, '<button type="submit" disabled={isSubmitting}');

fs.writeFileSync('src/pages/Contact.tsx', contact);
