export interface Category {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  subcategories: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  subcategory: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  scholarReviewer?: string;
  reviewStatus: 'Draft' | 'Pending Scholar Review' | 'Reviewed' | 'Published';
  madhhab?: string;
  sources: string[];
  quranReferences?: string[];
  hadithReferences?: string[];
  tags?: string[];
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  publishedDate: string;
  lastUpdatedDate?: string;
  isFeatured?: boolean;
  views?: number;
}

export const categories: Category[] = [
  {
    id: 'haiz',
    title: 'Haiz',
    slug: 'haiz',
    icon: '🩸',
    description: 'Haiz se mutalliq bunyadi aur rozmarrah Shar‘i masail.',
    subcategories: [
      'Haiz kya hai?', 'Haiz ki muddat', 'Haiz ki alamat', 'Haiz aur namaz', 
      'Haiz aur roza', 'Haiz aur Quran', 'Haiz aur zikr', 'Haiz ke baad ghusl', 
      'Istihaza', 'Haiz se related common questions'
    ]
  },
  {
    id: 'nifas',
    title: 'Nifas',
    slug: 'nifas',
    icon: '🤱',
    description: 'Delivery aur nifas ke dauran ibadat aur taharat ke masail.',
    subcategories: [
      'Nifas kya hai?', 'Nifas ki muddat', 'Nifas aur namaz', 'Nifas aur roza', 
      'Nifas ke baad ghusl', 'Delivery ke baad bleeding', 'Nifas ke common questions'
    ]
  },
  {
    id: 'taharat',
    title: 'Taharat & Ghusl',
    slug: 'taharat',
    icon: '🚿',
    description: 'Paaki, napaaki, wuzu aur ghusl ke aham masail.',
    subcategories: [
      'Ghusl ke masail', 'Ghusl ka tareeqa', 'Wuzu', 'Wuzu ke masail', 
      'Paaki aur napaaki', 'Kapron ki taharat', 'Mani, Mazi aur Wadi', 'Doubt/Waswasa related questions'
    ]
  },
  {
    id: 'namaz',
    title: 'Namaz',
    slug: 'namaz',
    icon: '🕌',
    description: 'Khawateen ki namaz aur us se mutalliq masail.',
    subcategories: [
      'Khawateen ki namaz', 'Namaz ke faraiz', 'Namaz ke wajibaat', 'Sajda-e-sahw', 
      'Qaza namaz', 'Haiz ke baad namaz', 'Nifas ke baad namaz', 'Travel prayer'
    ]
  },
  {
    id: 'roza',
    title: 'Roza',
    slug: 'roza',
    icon: '🌙',
    description: 'Ramadan, qaza roza aur khawateen ke rozay ke masail.',
    subcategories: [
      'Ramadan', 'Haiz aur roza', 'Nifas aur roza', 'Qaza roze', 
      'Fidya', 'Pregnancy aur roza', 'Breastfeeding aur roza', 'Roza tootne ke masail'
    ]
  },
  {
    id: 'nikah',
    title: 'Nikah',
    slug: 'nikah',
    icon: '💍',
    description: 'Nikah, mahr aur miya-biwi ke Shar‘i huqooq.',
    subcategories: [
      'Nikah', 'Mahr', 'Nikah ki sharaait', 'Miya-biwi ke huqooq', 
      'Biwi ke huqooq', 'Shohar ke huqooq', 'Married life etiquette'
    ]
  },
  {
    id: 'iddat',
    title: 'Iddat & Khula',
    slug: 'iddat',
    icon: '⚖️',
    description: 'Talaq, khula aur iddat ke bunyadi masail.',
    subcategories: [
      'Talaq', 'Khula', 'Iddat', 'Talaq ki iddat', 
      'Widow\'s iddat', 'Iddat ke basic rules', 'Iddat se related questions'
    ]
  },
  {
    id: 'purdah',
    title: 'Purdah & Haya',
    slug: 'purdah',
    icon: '🧕',
    description: 'Hijab, mahram/non-mahram aur haya se mutalliq guidance.',
    subcategories: [
      'Hijab', 'Purdah', 'Mahram', 'Non-mahram', 
      'Clothing', 'Makeup', 'Perfume', 'Jewellery', 'Social media & modesty'
    ]
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy & Motherhood',
    slug: 'pregnancy',
    icon: '🤰',
    description: 'Hamal, breastfeeding aur motherhood se mutalliq masail.',
    subcategories: [
      'Pregnancy & worship', 'Pregnancy & fasting', 'Breastfeeding', 'Postpartum guidance', 
      'Newborn-related Islamic guidance', 'Aqeeqah', 'Motherhood in Islam'
    ]
  },
  {
    id: 'islamic-knowledge',
    title: 'Islamic Knowledge',
    slug: 'islamic-knowledge',
    icon: '📚',
    description: 'Khawateen se related Quran, Hadith aur Islamic knowledge.',
    subcategories: [
      'Quranic guidance', 'Hadith', 'Sahabiyat', 'Islamic history', 
      'Muslim women in Islamic history', 'Sunnah', 'Islamic manners'
    ]
  }
];

export const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'Haiz aur Istihaza: Bunyadi Farq',
    slug: 'haiz-aur-istihaza-bunyadi-farq',
    categoryId: 'haiz',
    subcategory: 'Istihaza',
    excerpt: 'Haiz aur Istihaza ke darmiyan farq ko samajhna har aurat ke liye zaroori hai, taake ibadat sahih tariqe se ada ki ja sake.',
    content: 'Haiz ek fitri khoon hai jo aurat ko har mahine aata hai, jabke istihaza bimari ka khoon hai. Haiz mein namaz aur roza maaf hai (roze ki qaza hogi), lekin istihaza mein aurat pak shumar hoti hai aur us par namaz farz hoti hai. (Demo Content - Scholar Review Required)',
    author: 'Admin',
    reviewStatus: 'Published',
    madhhab: 'General (Hanafi/Shafi/Maliki/Hanbali differences exist)',
    sources: ['Placeholder Fiqh Reference'],
    quranReferences: ['Al-Baqarah 2:222 (Demo Reference)'],
    hadithReferences: ['Sahih Bukhari (Demo Reference)'],
    tags: ['Haiz', 'Istihaza', 'Taharat', 'Women Health'],
    seoTitle: 'Haiz aur Istihaza: Bunyadi Farq - Islamic Guidance',
    metaDescription: 'Learn the basic difference between Haiz and Istihaza in Islam, and how it affects a woman\'s daily prayers and fasting.',
    canonicalUrl: '/haiz/haiz-aur-istihaza-bunyadi-farq',
    publishedDate: '2024-03-01',
    lastUpdatedDate: '2024-03-02',
    isFeatured: true,
    views: 1520
  },
  {
    id: '2',
    title: 'Haiz ke Baad Ghusl Ka Tareeqa',
    slug: 'haiz-ke-baad-ghusl-ka-tareeqa',
    categoryId: 'taharat',
    subcategory: 'Ghusl ka tareeqa',
    excerpt: 'Haiz ke khatam hone par ghusl kis tarah farz hota hai aur us ka sunnat tareeqa kya hai.',
    content: 'Ghusl ke faraiz teen hain: 1. Kulli karna (muh mein pani dalna). 2. Naak mein pani dalna. 3. Poore jism par is tarah pani bahana ke koi baal barabar jagah sookhi na rahe. Aurat ko apne baalon ki jadon tak pani pahunchana zaroori hai. (Demo Content - Scholar Review Required)',
    author: 'Admin',
    reviewStatus: 'Published',
    sources: ['Placeholder Fiqh Reference'],
    tags: ['Ghusl', 'Taharat', 'Purity'],
    seoTitle: 'Haiz ke Baad Ghusl Ka Tareeqa - Step by Step',
    metaDescription: 'A complete step-by-step guide on how to perform Fard Ghusl (purification bath) after menstruation in Islam.',
    canonicalUrl: '/taharat/haiz-ke-baad-ghusl-ka-tareeqa',
    publishedDate: '2024-03-05',
  },
  {
    id: '3',
    title: 'Haiz mein Namaz ka Hukm',
    slug: 'haiz-mein-namaz-ka-hukm',
    categoryId: 'namaz',
    subcategory: 'Haiz aur namaz',
    excerpt: 'Kya haiz ke dauran chhuti hui namazon ki qaza lazim hai? Shariat is bare mein kya kehti hai?',
    content: 'Shariat-e-Islamiya ne khawateen ko asani di hai. Haiz aur nifas ke dauran chhuti hui namazon ki qaza wajib nahi hai. Hazrat Ayesha (RA) se riwayat hai ke humein (haiz ke baad) rozon ki qaza ka hukm diya jata tha, namazon ki qaza ka nahi. (Demo Content - Scholar Review Required)',
    author: 'Admin',
    reviewStatus: 'Published',
    sources: ['Sahih Muslim'],
    hadithReferences: ['Sahih Muslim: Book of Menstruation (Demo)'],
    tags: ['Namaz', 'Haiz', 'Salah', 'Faraiz'],
    seoTitle: 'Haiz mein Namaz ka Hukm - Ruling on Prayers',
    metaDescription: 'Understand the Islamic rulings regarding missed prayers during menstruation and whether Qaza is required.',
    canonicalUrl: '/namaz/haiz-mein-namaz-ka-hukm',
    publishedDate: '2024-03-10',
  }
];

export const faqs = [
  {
    question: "Haiz aur istihaza mein kya farq hai?",
    answer: "Haiz aam taur par aane wala fitri khoon hai jis mein ibadat ki ijazat nahi hoti. Istihaza bimari ki wajah se aane wala be-qaida khoon hai, is haalat mein aurat pak shumar hoti hai aur use namaz/roza ada karna hota hai. (Demo Content)"
  },
  {
    question: "Haiz khatam hone ka pata kaise chale?",
    answer: "Jab khoon ka rang mukammal taur par safed ya clear ho jaye (ya tissue paper par koi dhabba na rahe), toh haiz khatam shumar hota hai. (Demo Content)"
  },
  {
    question: "Haiz mein namaz ka kya hukm hai?",
    answer: "Haiz ki halat mein namaz padhna mana hai, aur baad mein inki qaza bhi nahi karni hoti."
  },
  {
    question: "Haiz mein roza ka kya hukm hai?",
    answer: "Haiz ki halat mein roza nahi rakha ja sakta, lekin ramadan ke un rozon ki qaza baad mein rakhna farz hai."
  },
  {
    question: "Ghusl kab farz hota hai?",
    answer: "Haiz (menstruation) khatam hone par, nifas (postnatal bleeding) khatam hone par, aur janabat (marital relations) ke baad ghusl farz hota hai."
  },
  {
    question: "Nifas kitne din hota hai?",
    answer: "Nifas (bacha paida hone ke baad ka khoon) ki ziyada se ziyada muddat 40 din hai (Hanafi fiqh ke mutabiq). Agar 40 din se pehle khoon band ho jaye toh ghusl kar ke ibadat shuru karni chahiye."
  },
  {
    question: "Iddat kya hai?",
    answer: "Talaq ya shohar ke inteqal ke baad aurat ke liye ek makhsoos muddat tak intezar karna aur dusra nikah na karna iddat kehlata hai."
  },
  {
    question: "Khula kya hota hai?",
    answer: "Jab aurat apne shohar se talaq ka mutalba kare (aam taur par mahr wapas kar ke), aur shohar us par raazi ho jaye, toh ise Khula kehte hain."
  },
  {
    question: "Pregnancy mein roza rakhne ka kya hukm hai?",
    answer: "Agar pregnancy mein roza rakhne se maa ya bache ko nuqsan ka andesha ho, toh roza chhorne ki ijazat hai. In rozon ki baad mein qaza karni hogi."
  },
  {
    question: "Breastfeeding ke dauran roza?",
    answer: "Agar doodh pilane wali maa ko bache ke doodh mein kami hone ya apni sehat kharab hone ka dar ho toh woh roza chhor sakti hai aur baad mein qaza karegi."
  }
];
