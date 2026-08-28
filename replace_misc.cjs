const fs = require('fs');

// Header.tsx
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(/>\s*More\s*</g, ">مزید<");
header = header.replace(/className="ml-1"/g, "className=\"mr-1\"");
header = header.replace(/pl-4 border-l/g, "pr-4 border-r");
header = header.replace(/left-0/g, "right-0");
fs.writeFileSync('src/components/Header.tsx', header);

// Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/text-right/g, "text-left");
fs.writeFileSync('src/components/Footer.tsx', footer);

// Category.tsx
let category = fs.readFileSync('src/pages/Category.tsx', 'utf8');
category = category.replace(/Category not found/g, "زمرہ نہیں ملا");
category = category.replace(/Return to Home/g, "ہوم پر واپس جائیں");
category = category.replace(/Home/g, "ہوم");
category = category.replace(/Articles in /g, "مضامین - ");
category = category.replace(/No articles found in this category yet\./g, "اس زمرے میں ابھی کوئی مضمون موجود نہیں ہے۔");
category = category.replace(/Ask a question about /g, "سوال پوچھیں - ");
category = category.replace(/className="ml-1"/g, 'className="mr-1 rotate-180"');
category = category.replace(/<ChevronRight/g, "<ChevronLeft"); // Replace ChevronRight with ChevronLeft for RTL
fs.writeFileSync('src/pages/Category.tsx', category);

// Categories.tsx
let categories = fs.readFileSync('src/pages/Categories.tsx', 'utf8');
categories = categories.replace(/>\s*Categories\s*</g, ">زمرہ جات<");
categories = categories.replace(/Browse all topics and find answers to your questions/g, "تمام موضوعات دیکھیں اور اپنے سوالات کے جوابات تلاش کریں");
fs.writeFileSync('src/pages/Categories.tsx', categories);

// Search.tsx
let search = fs.readFileSync('src/pages/Search.tsx', 'utf8');
search = search.replace(/Search Results/g, "تلاش کے نتائج");
search = search.replace(/Search masail\.\.\./g, "تلاش کریں...");
search = search.replace(/Results for "/g, "نتائج برائے \"");
search = search.replace(/No results found for/g, "اس کے لیے کوئی نتیجہ نہیں ملا:");
search = search.replace(/Try different keywords or check out our popular topics\./g, "مختلف الفاظ آزما کر دیکھیں یا ہمارے مقبول موضوعات چیک کریں۔");
search = search.replace(/Category/g, "زمرہ");
fs.writeFileSync('src/pages/Search.tsx', search);

