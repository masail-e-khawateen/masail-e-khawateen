const fs = require('fs');

let content = fs.readFileSync('src/pages/Article.tsx', 'utf8');

content = content.replace(/<span className="block text-xs text-gray-400">Published<\/span>/g, '<span className="block text-xs text-gray-400">اشاعت</span>');
content = content.replace(/<span className="block text-xs text-gray-400">Last Updated<\/span>/g, '<span className="block text-xs text-gray-400">آخری اپڈیٹ</span>');
content = content.replace(/<span>Share<\/span>/g, '<span>شیئر</span>');
content = content.replace(/alert\('Link copied to clipboard!'\)/g, "alert('لنک کاپی ہو گیا!')");

content = content.replace(/Verified by Scholar/g, "عالم سے تصدیق شدہ");
content = content.replace(/This article has been reviewed for Islamic accuracy by \$\{article.scholarReviewer \|\| 'a qualified scholar'\}\./g, "اس مضمون کی شرعی درستگی کا جائزہ ${article.scholarReviewer || 'ایک مستند عالم'} نے لیا ہے۔");
content = content.replace(/This article is currently a draft or demo content and has not yet been verified by a qualified scholar\./g, "یہ مضمون فی الحال مسودہ یا نمونہ ہے اور کسی مستند عالم نے اس کی تصدیق نہیں کی ہے۔");
content = content.replace(/\{article\.reviewStatus\}/g, "{article.reviewStatus === 'Pending Scholar Review' ? 'علمی جائزے کا منتظر' : article.reviewStatus === 'Draft' ? 'مسودہ' : article.reviewStatus === 'Published' ? 'شائع شدہ' : article.reviewStatus === 'Demo Content' ? 'نمونہ مواد' : article.reviewStatus}");

content = content.replace(/References & Sources/g, "حوالہ جات اور ماخذ");
content = content.replace(/<strong>Madhhab\/Fiqh:<\/strong>/g, "<strong>فقہ / مسلک:</strong>");

content = content.replace(/Important Disclaimer/g, "اہم دستبرداری");
content = content.replace(/The information provided here is for educational purposes\. For sensitive personal issues \(like Talaq, Khula, or complex medical conditions\), please consult a qualified Mufti or local scholar directly\. Individual circumstances can change Islamic rulings\./g, "یہاں دی گئی معلومات تعلیمی مقاصد کے لیے ہیں۔ حساس نوعیت کے مسائل (جیسے طلاق، خلع یا پیچیدہ طبی مسائل) کے لیے براہ کرم کسی مستند مفتی یا عالمِ دین سے رجوع کریں۔ انفرادی حالات سے شرعی احکام تبدیل ہو سکتے ہیں۔");

content = content.replace(/Related Articles/g, "متعلقہ مضامین");
content = content.replace(/View all in /g, "مزید مضامین - ");

content = content.replace(/<ArrowLeft/g, "<ArrowRight");
content = content.replace(/<ArrowRight([^>]*?)className="ml-2/g, "<ArrowLeft$1className=\"mr-2");

fs.writeFileSync('src/pages/Article.tsx', content);
