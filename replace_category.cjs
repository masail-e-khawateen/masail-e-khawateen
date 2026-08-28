const fs = require('fs');

let cat = fs.readFileSync('src/pages/Category.tsx', 'utf8');

cat = cat.replace(/>Sawal Poochiye</g, ">سوال پوچھیں<");
cat = cat.replace(/Apna masla mufti sahiban se samajhne ke liye sawal bhejein\./g, "اپنا مسئلہ مفتی صاحبان سے سمجھنے کے لیے سوال بھیجیں۔");

fs.writeFileSync('src/pages/Category.tsx', cat);
