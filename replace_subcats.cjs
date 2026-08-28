const fs = require('fs');
let data = fs.readFileSync('src/lib/data.ts', 'utf8');

// Note: I shouldn't mess up categoryId or slugs, only user-facing strings.

data = data.replace(/'Haiz kya hai\?', 'Haiz ki muddat', 'Haiz ki alamat', 'Haiz aur namaz'/g, "'حیض کیا ہے؟', 'حیض کی مدت', 'حیض کی علامات', 'حیض اور نماز'");
data = data.replace(/'Haiz aur roza', 'Haiz aur Quran', 'Haiz aur zikr', 'Haiz ke baad ghusl'/g, "'حیض اور روزہ', 'حیض اور قرآن', 'حیض اور ذکر', 'حیض کے بعد غسل'");
data = data.replace(/'Istihaza', 'Haiz se related common questions'/g, "'استحاضہ', 'حیض سے متعلق عام سوالات'");

data = data.replace(/'Nifas kya hai\?', 'Nifas ki muddat', 'Nifas aur namaz', 'Nifas aur roza'/g, "'نفاس کیا ہے؟', 'نفاس کی مدت', 'نفاس اور نماز', 'نفاس اور روزہ'");
data = data.replace(/'Delivery ke baad bleeding', 'Nifas ke common questions'/g, "'زچگی کے بعد خون', 'نفاس کے عام سوالات'");

data = data.replace(/'Ghusl ke masail', 'Ghusl ka tareeqa', 'Wuzu', 'Wuzu ke masail'/g, "'غسل کے مسائل', 'غسل کا طریقہ', 'وضو', 'وضو کے مسائل'");
data = data.replace(/'Paaki aur napaaki', 'Kapron ki taharat', 'Mani, Mazi aur Wadi', 'Doubt\/Waswasa related questions'/g, "'پاکی اور ناپاکی', 'کپڑوں کی طہارت', 'مذی اور ودی', 'وسوسوں سے متعلق سوالات'");

data = data.replace(/'Khawateen ki namaz', 'Namaz ke faraiz', 'Namaz ke wajibaat', 'Sajda-e-sahw'/g, "'خواتین کی نماز', 'نماز کے فرائض', 'نماز کے واجبات', 'سجدہ سہو'");
data = data.replace(/'Qaza namaz', 'Haiz ke baad namaz', 'Nifas ke baad namaz', 'Travel prayer'/g, "'قضا نماز', 'حیض کے بعد نماز', 'نفاس کے بعد نماز', 'سفر کی نماز'");

data = data.replace(/'Ramadan', 'Haiz aur roza', 'Nifas aur roza', 'Qaza roze'/g, "'رمضان', 'حیض اور روزہ', 'نفاس اور روزہ', 'قضا روزے'");
data = data.replace(/'Fidya', 'Pregnancy aur roza', 'Breastfeeding aur roza', 'Roza tootne ke masail'/g, "'فدیہ', 'حمل اور روزہ', 'دودھ پلانا اور روزہ', 'روزہ ٹوٹنے کے مسائل'");

data = data.replace(/'Nikah', 'Mahr', 'Nikah ki sharaait', 'Miya-biwi ke huqooq'/g, "'نکاح', 'مہر', 'نکاح کی شرائط', 'میاں بیوی کے حقوق'");
data = data.replace(/'Biwi ke huqooq', 'Shohar ke huqooq', 'Married life etiquette'/g, "'بیوی کے حقوق', 'شوہر کے حقوق', 'ازدواجی زندگی کے آداب'");

data = data.replace(/'Talaq', 'Khula', 'Iddat', 'Talaq ki iddat'/g, "'طلاق', 'خلع', 'عدت', 'طلاق کی عدت'");
data = data.replace(/'Widow\\'s iddat', 'Iddat ke basic rules', 'Iddat se related questions'/g, "'بیوہ کی عدت', 'عدت کے بنیادی اصول', 'عدت سے متعلق سوالات'");

data = data.replace(/'Hijab', 'Purdah', 'Mahram', 'Non-mahram'/g, "'حجاب', 'پردہ', 'محرم', 'نامحرم'");
data = data.replace(/'Clothing', 'Makeup', 'Perfume', 'Jewellery', 'Social media & modesty'/g, "'لباس', 'میک اپ', 'عطر', 'زیورات', 'سوشل میڈیا اور حیا'");

data = data.replace(/'Pregnancy & worship', 'Pregnancy & fasting', 'Breastfeeding', 'Postpartum guidance'/g, "'حمل اور عبادات', 'حمل اور روزہ', 'دودھ پلانا', 'زچگی کے بعد کی رہنمائی'");
data = data.replace(/'Newborn-related Islamic guidance', 'Aqeeqah', 'Motherhood in Islam'/g, "'نومولود کے اسلامی احکام', 'عقیقہ', 'اسلام میں ماں کا مقام'");

data = data.replace(/'Quranic guidance', 'Hadith', 'Sahabiyat', 'Islamic history'/g, "'قرآنی رہنمائی', 'حدیث', 'صحابیات', 'اسلامی تاریخ'");
data = data.replace(/'Muslim women in Islamic history', 'Sunnah', 'Islamic manners'/g, "'اسلامی تاریخ میں مسلمان خواتین', 'سنت', 'اسلامی آداب'");

// Also update the subcategories in the sample articles
data = data.replace(/subcategory: 'Istihaza'/g, "subcategory: 'استحاضہ'");
data = data.replace(/subcategory: 'Ghusl ka tareeqa'/g, "subcategory: 'غسل کا طریقہ'");
data = data.replace(/subcategory: 'Haiz aur namaz'/g, "subcategory: 'حیض اور نماز'");

fs.writeFileSync('src/lib/data.ts', data);

// Home placeholder fix
let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/\(e\.g\. Haiz ke baad ghusl kab karna hai\?\)/g, "(جیسے: حیض کے بعد غسل کب کرنا ہے؟)");
fs.writeFileSync('src/pages/Home.tsx', home);

