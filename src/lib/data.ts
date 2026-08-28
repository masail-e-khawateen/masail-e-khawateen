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
    title: 'حیض',
    slug: 'haiz',
    icon: '🩸',
    description: 'حیض سے متعلق بنیادی اور روزمرہ کے شرعی مسائل۔',
    subcategories: [
      'حیض کیا ہے؟', 'حیض کی مدت', 'حیض کی علامات', 'حیض اور نماز', 
      'حیض اور روزہ', 'حیض اور قرآن', 'حیض اور ذکر', 'حیض کے بعد غسل', 
      'استحاضہ', 'حیض سے متعلق عام سوالات'
    ]
  },
  {
    id: 'nifas',
    title: 'نفاس',
    slug: 'nifas',
    icon: '🤱',
    description: 'زچگی اور نفاس کے دوران عبادت اور طہارت کے مسائل۔',
    subcategories: [
      'نفاس کیا ہے؟', 'نفاس کی مدت', 'نفاس اور نماز', 'نفاس اور روزہ', 
      'Nifas ke baad ghusl', 'زچگی کے بعد خون', 'نفاس کے عام سوالات'
    ]
  },
  {
    id: 'taharat',
    title: 'طہارت و غسل',
    slug: 'taharat',
    icon: '🚿',
    description: 'پاکی، ناپاکی، وضو اور غسل کے اہم مسائل۔',
    subcategories: [
      'غسل کے مسائل', 'غسل کا طریقہ', 'وضو', 'وضو کے مسائل', 
      'پاکی اور ناپاکی', 'کپڑوں کی طہارت', 'مذی اور ودی', 'وسوسوں سے متعلق سوالات'
    ]
  },
  {
    id: 'namaz',
    title: 'نماز',
    slug: 'namaz',
    icon: '🕌',
    description: 'خواتین کی نماز اور اس سے متعلق مسائل۔',
    subcategories: [
      'خواتین کی نماز', 'نماز کے فرائض', 'نماز کے واجبات', 'سجدہ سہو', 
      'قضا نماز', 'حیض کے بعد نماز', 'نفاس کے بعد نماز', 'سفر کی نماز'
    ]
  },
  {
    id: 'roza',
    title: 'روزہ',
    slug: 'roza',
    icon: '🌙',
    description: 'رمضان، قضا روزے اور خواتین کے روزے سے متعلق مسائل۔',
    subcategories: [
      'رمضان', 'حیض اور روزہ', 'نفاس اور روزہ', 'قضا روزے', 
      'فدیہ', 'حمل اور روزہ', 'دودھ پلانا اور روزہ', 'روزہ ٹوٹنے کے مسائل'
    ]
  },
  {
    id: 'nikah',
    title: 'نکاح',
    slug: 'nikah',
    icon: '💍',
    description: 'نکاح، مہر اور میاں بیوی کے شرعی حقوق۔',
    subcategories: [
      'نکاح', 'مہر', 'نکاح کی شرائط', 'میاں بیوی کے حقوق', 
      'بیوی کے حقوق', 'شوہر کے حقوق', 'ازدواجی زندگی کے آداب'
    ]
  },
  {
    id: 'iddat',
    title: 'عدت و خلع',
    slug: 'iddat',
    icon: '⚖️',
    description: 'طلاق، خلع اور عدت کے بنیادی مسائل۔',
    subcategories: [
      'طلاق', 'خلع', 'عدت', 'طلاق کی عدت', 
      'بیوہ کی عدت', 'عدت کے بنیادی اصول', 'عدت سے متعلق سوالات'
    ]
  },
  {
    id: 'purdah',
    title: 'پردہ و حیا',
    slug: 'purdah',
    icon: '🧕',
    description: 'حجاب، محرم و نامحرم اور حیا سے متعلق رہنمائی۔',
    subcategories: [
      'حجاب', 'پردہ', 'محرم', 'نامحرم', 
      'لباس', 'میک اپ', 'عطر', 'زیورات', 'سوشل میڈیا اور حیا'
    ]
  },
  {
    id: 'pregnancy',
    title: 'حمل اور زچگی',
    slug: 'pregnancy',
    icon: '🤰',
    description: 'حمل، دودھ پلانے اور ماں بننے سے متعلق مسائل۔',
    subcategories: [
      'حمل اور عبادات', 'حمل اور روزہ', 'دودھ پلانا', 'زچگی کے بعد کی رہنمائی', 
      'نومولود کے اسلامی احکام', 'عقیقہ', 'اسلام میں ماں کا مقام'
    ]
  },
  {
    id: 'islamic-knowledge',
    title: 'اسلامی معلومات',
    slug: 'islamic-knowledge',
    icon: '📚',
    description: 'خواتین سے متعلق قرآن، حدیث اور اسلامی معلومات۔',
    subcategories: [
      'قرآنی رہنمائی', 'حدیث', 'صحابیات', 'اسلامی تاریخ', 
      'اسلامی تاریخ میں مسلمان خواتین', 'سنت', 'اسلامی آداب'
    ]
  }
];

export const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'حیض اور استحاضہ: بنیادی فرق',
    slug: 'haiz-aur-istihaza-bunyadi-farq',
    categoryId: 'haiz',
    subcategory: 'استحاضہ',
    excerpt: 'حیض اور استحاضہ کے درمیان فرق کو سمجھنا ہر عورت کے لیے ضروری ہے، تاکہ عبادت صحیح طریقے سے ادا کی جا سکے۔',
    content: 'حیض ایک فطری خون ہے جو عورت کو ہر مہینے آتا ہے، جبکہ استحاضہ بیماری کا خون ہے۔ حیض میں نماز اور روزہ معاف ہے (روزے کی قضا ہوگی)، لیکن استحاضہ میں عورت پاک شمار ہوتی ہے اور اس پر نماز فرض ہوتی ہے۔ (Demo Content — Scholar Review Required)',
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
    title: 'حیض کے بعد غسل کا طریقہ',
    slug: 'haiz-ke-baad-ghusl-ka-tareeqa',
    categoryId: 'taharat',
    subcategory: 'غسل کا طریقہ',
    excerpt: 'حیض کے ختم ہونے پر غسل کس طرح فرض ہوتا ہے اور اس کا سنت طریقہ کیا ہے۔',
    content: 'غسل کے فرائض تین ہیں: 1. کلی کرنا (منہ میں پانی ڈالنا)۔ 2. ناک میں پانی ڈالنا۔ 3. پورے جسم پر اس طرح پانی بہانا کہ کوئی بال برابر جگہ سوکھی نہ رہے۔ عورت کو اپنے بالوں کی جڑوں تک پانی پہنچانا ضروری ہے۔ (Demo Content — Scholar Review Required)',
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
    title: 'حیض اور نماز',
    slug: 'haiz-mein-namaz-ka-hukm',
    categoryId: 'namaz',
    subcategory: 'حیض اور نماز',
    excerpt: 'کیا حیض کے دوران چھوٹی ہوئی نمازوں کی قضا لازم ہے؟ شریعت اس بارے میں کیا کہتی ہے؟',
    content: 'شریعتِ اسلامیہ نے خواتین کو آسانی دی ہے۔ حیض اور نفاس کے دوران چھوٹی ہوئی نمازوں کی قضا واجب نہیں ہے۔ حضرت عائشہ (رضی اللہ عنہا) سے روایت ہے کہ ہمیں (حیض کے بعد) روزوں کی قضا کا حکم دیا جاتا تھا، نمازوں کی قضا کا نہیں۔ (Demo Content — Scholar Review Required)',
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
    question: "حیض اور استحاضہ میں کیا فرق ہے؟",
    answer: "حیض عام طور پر آنے والا فطری خون ہے جس میں عبادت کی اجازت نہیں ہوتی۔ استحاضہ بیماری کی وجہ سے آنے والا بے قاعدہ خون ہے، اس حالت میں عورت پاک شمار ہوتی ہے اور اسے نماز/روزہ ادا کرنا ہوتا ہے۔ (نمونہ مواد)"
  },
  {
    question: "حیض ختم ہونے کا پتا کیسے چلے؟",
    answer: "جب خون کا رنگ مکمل طور پر سفید یا صاف ہو جائے (یا ٹشو پیپر پر کوئی دھبہ نہ رہے)، تو حیض ختم شمار ہوتا ہے۔ (نمونہ مواد)"
  },
  {
    question: "حیض میں نماز کا کیا حکم ہے؟",
    answer: "حیض کی حالت میں نماز پڑھنا منع ہے، اور بعد میں ان کی قضا بھی نہیں کرنی ہوتی۔"
  },
  {
    question: "حیض میں روزے کا کیا حکم ہے؟",
    answer: "حیض کی حالت میں روزہ نہیں رکھا جا سکتا، لیکن رمضان کے ان روزوں کی قضا بعد میں رکھنا فرض ہے۔"
  },
  {
    question: "غسل کب فرض ہوتا ہے؟",
    answer: "حیض ختم ہونے پر، نفاس ختم ہونے پر، اور جنابت کے بعد غسل فرض ہوتا ہے۔"
  },
  {
    question: "نفاس کتنے دن ہوتا ہے؟",
    answer: "نفاس کی زیادہ سے زیادہ مدت 40 دن ہے (حنفی فقہ کے مطابق)۔ اگر 40 دن سے پہلے خون بند ہو جائے تو غسل کر کے عبادت شروع کرنی چاہیے۔"
  },
  {
    question: "عدت کیا ہے؟",
    answer: "طلاق یا شوہر کے انتقال کے بعد عورت کے لیے ایک مخصوص مدت تک انتظار کرنا اور دوسرا نکاح نہ کرنا عدت کہلاتا ہے۔"
  },
  {
    question: "خلع کیا ہوتا ہے؟",
    answer: "جب عورت اپنے شوہر سے طلاق کا مطالبہ کرے (عام طور پر مہر واپس کر کے)، اور شوہر اس پر راضی ہو جائے، تو اسے خلع کہتے ہیں۔"
  },
  {
    question: "حمل کے دوران روزہ رکھنے کا کیا حکم ہے؟",
    answer: "اگر حمل کے دوران روزہ رکھنے سے ماں یا بچے کو نقصان کا اندیشہ ہو، تو روزہ چھوڑنے کی اجازت ہے۔ ان روزوں کی بعد میں قضا کرنی ہوگی۔"
  },
  {
    question: "دودھ پلانے کے دوران روزہ؟",
    answer: "اگر دودھ پلانے والی ماں کو بچے کے دودھ میں کمی ہونے یا اپنی صحت خراب ہونے کا ڈر ہو تو وہ روزہ چھوڑ سکتی ہے اور بعد میں قضا کرے گی۔"
  }
];
