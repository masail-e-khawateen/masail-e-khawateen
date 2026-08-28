const fs = require('fs');

let bottomNav = fs.readFileSync('src/components/BottomNav.tsx', 'utf8');

bottomNav = bottomNav.replace(/"Home"/g, '"ہوم"');
bottomNav = bottomNav.replace(/"Search"/g, '"تلاش"');
bottomNav = bottomNav.replace(/"Categories"/g, '"زمرہ جات"');
bottomNav = bottomNav.replace(/"Ask"/g, '"سوال پوچھیں"');

fs.writeFileSync('src/components/BottomNav.tsx', bottomNav);
