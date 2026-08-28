const fs = require('fs');
let ask = fs.readFileSync('src/pages/Ask.tsx', 'utf8');

ask = ask.replace(/Apna Shar‘i Sawal Poochiye/g, "اپنا شرعی سوال پوچھیے");
ask = ask.replace(/“Apna Shar‘i sawal anonymously submit karein. Humare scholars iska jawab website par publish karenge \(aapki identity posheeda rakhi jayegi\)\.”/g, "اپنا شرعی سوال نام ظاہر کیے بغیر جمع کروائیں۔ ہمارے علماء اس کا جواب ویب سائٹ پر شائع کریں گے (آپ کی شناخت پوشیدہ رکھی جائے گی)۔");
ask = ask.replace(/Important Notice/g, "اہم اطلاع");
ask = ask.replace(/Sensitive personal questions \(jaise specific talaq ke alfaz, waghaira\) should be reviewed by a qualified Mufti face-to-face or via a secure fatwa center before a final ruling is given\. Yeh form aam masail ki rehnumai ke liye hai\./g, "حساس ذاتی سوالات (جیسے طلاق کے مخصوص الفاظ وغیرہ) کا حتمی جواب حاصل کرنے سے پہلے کسی مستند مفتی سے آمنے سامنے یا کسی مستند دارالافتاء کے ذریعے جائزہ لینا ضروری ہے۔ یہ فارم عام مسائل کی رہنمائی کے لیے ہے۔");
ask = ask.replace(/Jazakallah Khair/g, "جزاک اللہ خیراً");
ask = ask.replace(/Aapka sawal submit ho chuka hai. Hum koshish karenge ke jald hi iska jawab publish kiya jaye\./g, "آپ کا سوال جمع ہو چکا ہے۔ ہم کوشش کریں گے کہ جلد ہی اس کا جواب شائع کیا جائے۔");
ask = ask.replace(/Ek aur sawal poochiye/g, "ایک اور سوال پوچھیں");
ask = ask.replace(/>Name \(Optional\)</g, ">نام (اختیاری)<");
ask = ask.replace(/placeholder="Anonymous"/g, 'placeholder="نام ظاہر نہ کریں" dir="rtl"');
ask = ask.replace(/>Email \(Optional\)</g, ">ای میل (اختیاری)<");
ask = ask.replace(/placeholder="For notification when answered"/g, 'placeholder="جواب ملنے پر اطلاع کے لیے" dir="rtl"');
ask = ask.replace(/>Category <span/g, ">زمرہ <span");
ask = ask.replace(/>Select a category\.\.\.</g, ">ایک زمرہ منتخب کریں...<");
ask = ask.replace(/>Other \/ Not sure</g, ">دیگر / معلوم نہیں<");
ask = ask.replace(/>Your Question <span/g, ">آپ کا سوال <span");
ask = ask.replace(/placeholder="Apna masla tafseel se likhein\.\.\."/g, 'placeholder="اپنا مسئلہ تفصیل سے لکھیں..." dir="rtl"');
ask = ask.replace(/>Madhhab \(Optional\)</g, ">مسلک (اختیاری)<");
ask = ask.replace(/>Select madhhab if you follow a specific one\.\.\.</g, ">اگر آپ کسی مخصوص مسلک کی پیروی کرتے ہیں تو منتخب کریں...<");
ask = ask.replace(/>Hanafi</g, ">حنفی<");
ask = ask.replace(/>Shafi'i</g, ">شافعی<");
ask = ask.replace(/>Maliki</g, ">مالکی<");
ask = ask.replace(/>Hanbali</g, ">حنبلی<");
ask = ask.replace(/>Not specific \/ I don't know</g, ">مخصوص نہیں / مجھے معلوم نہیں<");
ask = ask.replace(/Main samajhti hu ke yeh ek educational platform hai aur mera sawal website par \(baghair naam ke\) publish kiya ja sakta hai\./g, "میں سمجھتی ہوں کہ یہ ایک تعلیمی پلیٹ فارم ہے اور میرا سوال ویب سائٹ پر (بغیر نام کے) شائع کیا جا سکتا ہے۔");
ask = ask.replace(/Submit Question/g, "سوال جمع کروائیں");
ask = ask.replace(/className="ml-3 text-sm"/g, 'className="mr-3 text-sm"'); // RTL adjustment
ask = ask.replace(/className="mr-2"/g, 'className="ml-2"'); // RTL adjustment

fs.writeFileSync('src/pages/Ask.tsx', ask);

