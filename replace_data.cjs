const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf8');

// Categories
content = content.replace(/title: 'Haiz',/g, "title: 'حیض',");
content = content.replace(/title: 'Nifas',/g, "title: 'نفاس',");
content = content.replace(/title: 'Taharat & Ghusl',/g, "title: 'طہارت و غسل',");
content = content.replace(/title: 'Namaz',/g, "title: 'نماز',");
content = content.replace(/title: 'Roza',/g, "title: 'روزہ',");
content = content.replace(/title: 'Nikah',/g, "title: 'نکاح',");
content = content.replace(/title: 'Iddat & Khula',/g, "title: 'عدت و خلع',");
content = content.replace(/title: 'Purdah & Haya',/g, "title: 'پردہ و حیا',");
content = content.replace(/title: 'Pregnancy & Motherhood',/g, "title: 'حمل اور زچگی',");
content = content.replace(/title: 'Islamic Knowledge',/g, "title: 'اسلامی معلومات',");

content = content.replace(/description: 'Haiz se mutalliq bunyadi aur rozmarrah Shar‘i masail\.',/g, "description: 'حیض سے متعلق بنیادی اور روزمرہ کے شرعی مسائل۔',");
content = content.replace(/description: 'Delivery aur nifas ke dauran ibadat aur taharat ke masail\.',/g, "description: 'زچگی اور نفاس کے دوران عبادت اور طہارت کے مسائل۔',");
content = content.replace(/description: 'Paaki, napaaki, wuzu aur ghusl ke aham masail\.',/g, "description: 'پاکی، ناپاکی، وضو اور غسل کے اہم مسائل۔',");
content = content.replace(/description: 'Khawateen ki namaz aur us se mutalliq masail\.',/g, "description: 'خواتین کی نماز اور اس سے متعلق مسائل۔',");
content = content.replace(/description: 'Ramadan, qaza roza aur khawateen ke rozay ke masail\.',/g, "description: 'رمضان، قضا روزے اور خواتین کے روزے سے متعلق مسائل۔',");
content = content.replace(/description: 'Nikah, mahr aur miya-biwi ke Shar‘i huqooq\.',/g, "description: 'نکاح، مہر اور میاں بیوی کے شرعی حقوق۔',");
content = content.replace(/description: 'Talaq, khula aur iddat ke bunyadi masail\.',/g, "description: 'طلاق، خلع اور عدت کے بنیادی مسائل۔',");
content = content.replace(/description: 'Hijab, mahram\/non-mahram aur haya se mutalliq guidance\.',/g, "description: 'حجاب، محرم و نامحرم اور حیا سے متعلق رہنمائی۔',");
content = content.replace(/description: 'Hamal, breastfeeding aur motherhood se mutalliq masail\.',/g, "description: 'حمل، دودھ پلانے اور ماں بننے سے متعلق مسائل۔',");
content = content.replace(/description: 'Khawateen se related Quran, Hadith aur Islamic knowledge\.',/g, "description: 'خواتین سے متعلق قرآن، حدیث اور اسلامی معلومات۔',");

// Articles
content = content.replace(/'Haiz aur Istihaza: Bunyadi Farq'/g, "'حیض اور استحاضہ: بنیادی فرق'");
content = content.replace(/'Haiz aur Istihaza ke darmiyan farq ko samajhna har aurat ke liye zaroori hai, taake ibadat sahih tariqe se ada ki ja sake\.'/g, "'حیض اور استحاضہ کے درمیان فرق کو سمجھنا ہر عورت کے لیے ضروری ہے، تاکہ عبادت صحیح طریقے سے ادا کی جا سکے۔'");
content = content.replace(/'Haiz ek fitri khoon hai jo aurat ko har mahine aata hai, jabke istihaza bimari ka khoon hai\. Haiz mein namaz aur roza maaf hai \(roze ki qaza hogi\), lekin istihaza mein aurat pak shumar hoti hai aur us par namaz farz hoti hai\. \(Demo Content - Scholar Review Required\)'/g, "'حیض ایک فطری خون ہے جو عورت کو ہر مہینے آتا ہے، جبکہ استحاضہ بیماری کا خون ہے۔ حیض میں نماز اور روزہ معاف ہے (روزے کی قضا ہوگی)، لیکن استحاضہ میں عورت پاک شمار ہوتی ہے اور اس پر نماز فرض ہوتی ہے۔ (Demo Content — Scholar Review Required)'");

content = content.replace(/'Haiz ke Baad Ghusl Ka Tareeqa'/g, "'حیض کے بعد غسل کا طریقہ'");
content = content.replace(/'Haiz ke khatam hone par ghusl kis tarah farz hota hai aur us ka sunnat tareeqa kya hai\.'/g, "'حیض کے ختم ہونے پر غسل کس طرح فرض ہوتا ہے اور اس کا سنت طریقہ کیا ہے۔'");
content = content.replace(/'Ghusl ke faraiz teen hain: 1\. Kulli karna \(muh mein pani dalna\)\. 2\. Naak mein pani dalna\. 3\. Poore jism par is tarah pani bahana ke koi baal barabar jagah sookhi na rahe\. Aurat ko apne baalon ki jadon tak pani pahunchana zaroori hai\. \(Demo Content - Scholar Review Required\)'/g, "'غسل کے فرائض تین ہیں: 1. کلی کرنا (منہ میں پانی ڈالنا)۔ 2. ناک میں پانی ڈالنا۔ 3. پورے جسم پر اس طرح پانی بہانا کہ کوئی بال برابر جگہ سوکھی نہ رہے۔ عورت کو اپنے بالوں کی جڑوں تک پانی پہنچانا ضروری ہے۔ (Demo Content — Scholar Review Required)'");

content = content.replace(/'Haiz mein Namaz ka Hukm'/g, "'حیض اور نماز'");
content = content.replace(/'Kya haiz ke dauran chhuti hui namazon ki qaza lazim hai\? Shariat is bare mein kya kehti hai\?'/g, "'کیا حیض کے دوران چھوٹی ہوئی نمازوں کی قضا لازم ہے؟ شریعت اس بارے میں کیا کہتی ہے؟'");
content = content.replace(/'Shariat-e-Islamiya ne khawateen ko asani di hai\. Haiz aur nifas ke dauran chhuti hui namazon ki qaza wajib nahi hai\. Hazrat Ayesha \(RA\) se riwayat hai ke humein \(haiz ke baad\) rozon ki qaza ka hukm diya jata tha, namazon ki qaza ka nahi\. \(Demo Content - Scholar Review Required\)'/g, "'شریعتِ اسلامیہ نے خواتین کو آسانی دی ہے۔ حیض اور نفاس کے دوران چھوٹی ہوئی نمازوں کی قضا واجب نہیں ہے۔ حضرت عائشہ (رضی اللہ عنہا) سے روایت ہے کہ ہمیں (حیض کے بعد) روزوں کی قضا کا حکم دیا جاتا تھا، نمازوں کی قضا کا نہیں۔ (Demo Content — Scholar Review Required)'");

// FAQs
content = content.replace(/"Haiz aur istihaza mein kya farq hai\?"/g, '"حیض اور استحاضہ میں کیا فرق ہے؟"');
content = content.replace(/"Haiz aam taur par aane wala fitri khoon hai jis mein ibadat ki ijazat nahi hoti\. Istihaza bimari ki wajah se aane wala be-qaida khoon hai, is haalat mein aurat pak shumar hoti hai aur use namaz\/roza ada karna hota hai\. \(Demo Content\)"/g, '"حیض عام طور پر آنے والا فطری خون ہے جس میں عبادت کی اجازت نہیں ہوتی۔ استحاضہ بیماری کی وجہ سے آنے والا بے قاعدہ خون ہے، اس حالت میں عورت پاک شمار ہوتی ہے اور اسے نماز/روزہ ادا کرنا ہوتا ہے۔ (نمونہ مواد)"');

content = content.replace(/"Haiz khatam hone ka pata kaise chale\?"/g, '"حیض ختم ہونے کا پتا کیسے چلے؟"');
content = content.replace(/"Jab khoon ka rang mukammal taur par safed ya clear ho jaye \(ya tissue paper par koi dhabba na rahe\), toh haiz khatam shumar hota hai\. \(Demo Content\)"/g, '"جب خون کا رنگ مکمل طور پر سفید یا صاف ہو جائے (یا ٹشو پیپر پر کوئی دھبہ نہ رہے)، تو حیض ختم شمار ہوتا ہے۔ (نمونہ مواد)"');

content = content.replace(/"Haiz mein namaz ka kya hukm hai\?"/g, '"حیض میں نماز کا کیا حکم ہے؟"');
content = content.replace(/"Haiz ki halat mein namaz padhna mana hai, aur baad mein inki qaza bhi nahi karni hoti\."/g, '"حیض کی حالت میں نماز پڑھنا منع ہے، اور بعد میں ان کی قضا بھی نہیں کرنی ہوتی۔"');

content = content.replace(/"Haiz mein roza ka kya hukm hai\?"/g, '"حیض میں روزے کا کیا حکم ہے؟"');
content = content.replace(/"Haiz ki halat mein roza nahi rakha ja sakta, lekin ramadan ke un rozon ki qaza baad mein rakhna farz hai\."/g, '"حیض کی حالت میں روزہ نہیں رکھا جا سکتا، لیکن رمضان کے ان روزوں کی قضا بعد میں رکھنا فرض ہے۔"');

content = content.replace(/"Ghusl kab farz hota hai\?"/g, '"غسل کب فرض ہوتا ہے؟"');
content = content.replace(/"Haiz \(menstruation\) khatam hone par, nifas \(postnatal bleeding\) khatam hone par, aur janabat \(marital relations\) ke baad ghusl farz hota hai\."/g, '"حیض ختم ہونے پر، نفاس ختم ہونے پر، اور جنابت کے بعد غسل فرض ہوتا ہے۔"');

content = content.replace(/"Nifas kitne din hota hai\?"/g, '"نفاس کتنے دن ہوتا ہے؟"');
content = content.replace(/"Nifas \(bacha paida hone ke baad ka khoon\) ki ziyada se ziyada muddat 40 din hai \(Hanafi fiqh ke mutabiq\)\. Agar 40 din se pehle khoon band ho jaye toh ghusl kar ke ibadat shuru karni chahiye\."/g, '"نفاس کی زیادہ سے زیادہ مدت 40 دن ہے (حنفی فقہ کے مطابق)۔ اگر 40 دن سے پہلے خون بند ہو جائے تو غسل کر کے عبادت شروع کرنی چاہیے۔"');

content = content.replace(/"Iddat kya hai\?"/g, '"عدت کیا ہے؟"');
content = content.replace(/"Talaq ya shohar ke inteqal ke baad aurat ke liye ek makhsoos muddat tak intezar karna aur dusra nikah na karna iddat kehlata hai\."/g, '"طلاق یا شوہر کے انتقال کے بعد عورت کے لیے ایک مخصوص مدت تک انتظار کرنا اور دوسرا نکاح نہ کرنا عدت کہلاتا ہے۔"');

content = content.replace(/"Khula kya hota hai\?"/g, '"خلع کیا ہوتا ہے؟"');
content = content.replace(/"Jab aurat apne shohar se talaq ka mutalba kare \(aam taur par mahr wapas kar ke\), aur shohar us par raazi ho jaye, toh ise Khula kehte hain\."/g, '"جب عورت اپنے شوہر سے طلاق کا مطالبہ کرے (عام طور پر مہر واپس کر کے)، اور شوہر اس پر راضی ہو جائے، تو اسے خلع کہتے ہیں۔"');

content = content.replace(/"Pregnancy mein roza rakhne ka kya hukm hai\?"/g, '"حمل کے دوران روزہ رکھنے کا کیا حکم ہے؟"');
content = content.replace(/"Agar pregnancy mein roza rakhne se maa ya bache ko nuqsan ka andesha ho, toh roza chhorne ki ijazat hai\. In rozon ki baad mein qaza karni hogi\."/g, '"اگر حمل کے دوران روزہ رکھنے سے ماں یا بچے کو نقصان کا اندیشہ ہو، تو روزہ چھوڑنے کی اجازت ہے۔ ان روزوں کی بعد میں قضا کرنی ہوگی۔"');

content = content.replace(/"Breastfeeding ke dauran roza\?"/g, '"دودھ پلانے کے دوران روزہ؟"');
content = content.replace(/"Agar doodh pilane wali maa ko bache ke doodh mein kami hone ya apni sehat kharab hone ka dar ho toh woh roza chhor sakti hai aur baad mein qaza karegi\."/g, '"اگر دودھ پلانے والی ماں کو بچے کے دودھ میں کمی ہونے یا اپنی صحت خراب ہونے کا ڈر ہو تو وہ روزہ چھوڑ سکتی ہے اور بعد میں قضا کرے گی۔"');

fs.writeFileSync('src/lib/data.ts', content);
