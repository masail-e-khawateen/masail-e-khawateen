const fs = require('fs');

let search = fs.readFileSync('src/pages/Search.tsx', 'utf8');

search = search.replace(/Search results for/g, "تلاش کے نتائج برائے");
search = search.replace(/Search Masail/g, "مسائل تلاش کریں");
search = search.replace(/Search through our authentic database of Islamic rulings and articles\./g, "شرعی احکام اور مضامین کے مستند مجموعے میں تلاش کریں۔");
search = search.replace(/Search for a topic\.\.\./g, 'کوئی موضوع تلاش کریں..." dir="rtl');
search = search.replace(/>\s*Search\s*</g, ">تلاش کریں<");
search = search.replace(/Found \{results\.length\} result\{results\.length !== 1 \? 's' : ''\} for "\{query\}"/g, "{results.length} نتائج ملے برائے \"{query}\"");
search = search.replace(/Humein is sawal ka article nahi mila/g, "ہمیں اس سوال کا مضمون نہیں ملا");
search = search.replace(/We couldn't find any articles matching your search\. Please try different keywords or ask a new question\./g, "ہمیں آپ کی تلاش کے مطابق کوئی مضمون نہیں مل سکا۔ براہ کرم مختلف الفاظ آزما کر دیکھیں یا کوئی نیا سوال پوچھیں۔");
search = search.replace(/>\s*Sawal Poochiye\s*</g, ">سوال پوچھیے<");
search = search.replace(/Enter a search term to find articles and rulings\./g, "مضامین اور شرعی احکام تلاش کرنے کے لیے کوئی لفظ درج کریں۔");

// RTL input layout adjustments
search = search.replace(/inset-y-0 left-0 pl-4/g, "inset-y-0 right-0 pr-4");
search = search.replace(/pl-12 pr-4/g, "pr-12 pl-4");
search = search.replace(/inset-y-0 right-0 pr-2/g, "inset-y-0 left-0 pl-2");

fs.writeFileSync('src/pages/Search.tsx', search);
