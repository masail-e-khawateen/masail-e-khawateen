const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(/Apna Masla Search Karein/g, "اپنا مسئلہ تلاش کریں");
content = content.replace(/Apna masla search karein\.\.\./g, "اپنا مسئلہ تلاش کریں...");
content = content.replace(/Popular:/g, "مقبول موضوعات:");
content = content.replace(/Khawateen ke Aham Masail/g, "خواتین کے اہم شرعی مسائل");
content = content.replace(/Aaj Ka Masla/g, "آج کا مسئلہ");
content = content.replace(/Read More/g, "مزید پڑھیں");
content = content.replace(/Khawateen ke Aam Sawalat/g, "خواتین کے عام سوالات");
content = content.replace(/Latest Articles/g, "تازہ مضامین");
content = content.replace(/View All/g, "سب دیکھیں");
content = content.replace(/Apna Shar‘i Sawal Poochiye/g, "اپنا شرعی سوال پوچھیے");
content = content.replace(/“Agar aapko apne kisi personal Shar‘i maslay ke bare mein rehnumai chahiye to apna sawal submit karein\. Sensitive personal questions should be reviewed by a qualified Mufti or scholar\.”/g, "اگر آپ کو اپنے کسی ذاتی شرعی مسئلے کے بارے میں رہنمائی چاہیے تو اپنا سوال جمع کروائیں۔ ذاتی اور حساس سوالات کا جائزہ کسی مستند مفتی یا عالمِ دین سے کروایا جانا چاہیے۔");
content = content.replace(/Sawal Poochiye/g, "سوال پوچھیے");
content = content.replace(/Authentic Sources & Scholar Review/g, "مستند مصادر اور علمی جائزہ");
content = content.replace(/Quran & Hadith References/g, "قرآن و حدیث کے حوالہ جات");
content = content.replace(/Fiqh\/Madhhab Mentioned/g, "فقہ / مکتبِ فکر کا ذکر");
content = content.replace(/Scholar Review Status/g, "علمی جائزے کی حیثیت");
content = content.replace(/Last Reviewed Date/g, "آخری جائزے کی تاریخ");
content = content.replace(/Hamari Editorial Policy/g, "ہماری ادارتی پالیسی");
content = content.replace(/<span>⭐ Aaj Ka Masla<\/span>/g, "<span>⭐ آج کا مسئلہ</span>");
content = content.replace(/>Reviewed<\/span>/g, ">جائزہ لیا گیا</span>");
content = content.replace(/{article.reviewStatus}/g, "{article.reviewStatus === 'Pending Scholar Review' ? 'علمی جائزے کا منتظر' : article.reviewStatus === 'Draft' ? 'مسودہ' : article.reviewStatus === 'Published' ? 'شائع شدہ' : article.reviewStatus === 'Demo Content' ? 'نمونہ مواد' : article.reviewStatus}");

// RTL adjustments for elements containing Urdu text but hardcoded with ml/mr
content = content.replace(/mr-2 py-1 font-medium text-gray-700/g, "ml-2 py-1 font-medium text-gray-700");
content = content.replace(/className="ml-1"/g, "className=\"mr-1 rotate-180\"");
content = content.replace(/<ChevronRight size=\{20\} \/>/g, "<ChevronRight size={20} className=\"rotate-180 mr-1\" />");
content = content.replace(/<ChevronRight size=\{20\} className="ml-1" \/>/g, "<ChevronRight size={20} className=\"mr-1 rotate-180\" />");
content = content.replace(/mr-4 mt-1/g, "ml-4 mt-1");

fs.writeFileSync('src/pages/Home.tsx', content);
