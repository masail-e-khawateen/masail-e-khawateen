const fs = require('fs');

let disclaimer = fs.readFileSync('src/pages/Disclaimer.tsx', 'utf8');
disclaimer = disclaimer.replace(/<div className="prose prose-lg max-w-none text-gray-700">/, '<div className="prose prose-lg max-w-none text-gray-700" dir="rtl">');
fs.writeFileSync('src/pages/Disclaimer.tsx', disclaimer);

let policy = fs.readFileSync('src/pages/EditorialPolicy.tsx', 'utf8');
policy = policy.replace(/<div className="prose prose-lg max-w-none text-gray-700">/, '<div className="prose prose-lg max-w-none text-gray-700" dir="rtl">');
fs.writeFileSync('src/pages/EditorialPolicy.tsx', policy);

