const fs = require('fs');

let contact = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

contact = contact.replace(/Contact Us/g, "رابطہ کریں");
contact = contact.replace(/Humein apne sujhau \(suggestions\), corrections, ya technical issues ke baray mein aagah karein\./g, "ہمیں اپنی تجاویز، تصحیحات، یا تکنیکی مسائل کے بارے میں آگاہ کریں۔");
contact = contact.replace(/Email/g, "ای میل");
contact = contact.replace(/>Ask a Fatwa\?</g, ">شرعی سوال پوچھنا ہے؟<");
contact = contact.replace(/Agar aapko Shar‘i masla poochna hai toh baraye meharbani 'Ask a Question' page use karein\./g, "اگر آپ کو کوئی شرعی مسئلہ پوچھنا ہے تو براہ کرم 'سوال پوچھیں' کا صفحہ استعمال کریں۔");
contact = contact.replace(/Go to Ask a Question &rarr;/g, "سوالات کے صفحے پر جائیں &larr;");
contact = contact.replace(/>Message Sent</g, ">پیغام بھیج دیا گیا<");
contact = contact.replace(/Aapka paigham humein mil gaya hai\. Hum jald az jald aapse rabta karne ki koshish karenge\./g, "آپ کا پیغام ہمیں مل گیا ہے۔ ہم جلد از جلد آپ سے رابطہ کرنے کی کوشش کریں گے۔");
contact = contact.replace(/>Name</g, ">نام<");
contact = contact.replace(/>Subject</g, ">موضوع<");
contact = contact.replace(/>Select subject\.\.\.</g, ">موضوع منتخب کریں...<");
contact = contact.replace(/>General Inquiry</g, ">عام معلومات<");
contact = contact.replace(/>Report a Correction</g, ">غلطی کی نشاندہی<");
contact = contact.replace(/>Source Request</g, ">حوالہ طلب کریں<");
contact = contact.replace(/>Technical Issue</g, ">تکنیکی مسئلہ<");
contact = contact.replace(/>Scholar Review Application</g, ">علمی جائزے کی درخواست<");
contact = contact.replace(/>Other</g, ">دیگر<");
contact = contact.replace(/>Message</g, ">پیغام<");
contact = contact.replace(/>\s*Send Message\s*</g, ">پیغام بھیجیں<");
contact = contact.replace(/className="mr-2"/g, 'className="ml-2"'); // RTL adjustment
contact = contact.replace(/pointer-events-none absolute inset-y-0 right-0/g, 'pointer-events-none absolute inset-y-0 left-0'); // Select arrow to left side for RTL

fs.writeFileSync('src/pages/Contact.tsx', contact);

