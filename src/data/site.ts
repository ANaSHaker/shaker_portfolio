import type { L } from './types';

export const profile = {
  name: { en: 'Mahmoud Shaker', ar: 'محمود شاكر' } as L,
  role: { en: 'Senior Flutter & Android Engineer', ar: 'مهندس Flutter و Android أول' } as L,
  city: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' } as L,
  tagline: {
    en: 'I build production mobile products for MENA businesses: delivery platforms, e-commerce, POS, legal-tech and education.',
    ar: 'أبني منتجات موبايل جاهزة للإنتاج لشركات الشرق الأوسط وشمال أفريقيا: منصات توصيل، متاجر إلكترونية، نقاط بيع، تقنيات قانونية، وتعليم.',
  } as L,
  bio: {
    en: [
      "I'm a mobile developer specialising in Flutter and native Android (Java and Kotlin) with 7+ years of professional experience. I've worked part-time and full-time inside product companies and remotely with clients as a freelancer, delivering large multi-app platforms end-to-end and leading small teams to ship them on time and to a high bar.",
      'Today I build complete products for businesses across Egypt, Saudi Arabia, Iraq and Palestine: the customer app, the driver app, the merchant or restaurant app, the web app and the admin side, then publish them on Google Play and the App Store. I care about clean architecture, smooth Arabic-first UX, and code that keeps working after launch.',
    ],
    ar: [
      'أنا مطوّر تطبيقات متخصص في Flutter وفي تطوير Android الأصلي بلغتي Java و Kotlin، بخبرة احترافية تزيد على 7 سنوات. عملت بدوام جزئي وكامل داخل شركات منتجات، وعن بُعد مع عملاء كمستقل، وسلّمت منصات كبيرة متعددة التطبيقات من البداية للنهاية، وقُدت فرقًا صغيرة لتسليمها في موعدها وبجودة عالية.',
      'اليوم أبني منتجات كاملة لعملاء في مصر والسعودية والعراق وفلسطين: تطبيق العميل، وتطبيق المندوب، وتطبيق التاجر أو المطعم، وتطبيق الويب ولوحة التحكم، ثم أنشرها على Google Play و App Store. يهمني المعمار النظيف، وتجربة عربية سلسة أولًا، وكود يستمر في العمل بعد الإطلاق.',
    ],
  },
};

export const links = {
  whatsapp: 'https://wa.me/201140279111',
  linkedin: 'https://www.linkedin.com/in/anashaker/',
  email: 'mailto:mahmoudshaker382001@gmail.com',
  emailText: 'mahmoudshaker382001@gmail.com',
  github: 'https://github.com/ANaSHaker',
  khamsat: 'https://khamsat.com/user/sheko201566',
  mostaql: 'https://mostaql.com/u/ShekoShaker',
  pubdev: 'https://pub.dev/packages/video_walkthrough',
};

export const stats: { value: number; suffix: string; label: L }[] = [
  { value: 7, suffix: '+', label: { en: 'years shipping', ar: 'سنوات خبرة' } },
  { value: 40, suffix: '+', label: { en: 'apps delivered', ar: 'تطبيق تم تسليمه' } },
  { value: 100, suffix: 'K+', label: { en: 'installs on one app', ar: 'تثبيت لتطبيق واحد' } },
  { value: 4, suffix: '', label: { en: 'countries served', ar: 'دول خدمت عملاءها' } },
];

export const services: { key: string; title: L; lead: L; items: string[] }[] = [
  {
    key: 'mobile',
    title: { en: 'Mobile', ar: 'تطبيقات الموبايل' },
    lead: {
      en: 'Native Android and Flutter apps for Android and iOS, Arabic-first and built to last.',
      ar: 'تطبيقات Android أصلية وتطبيقات Flutter على Android و iOS، عربية أولًا ومبنية لتدوم.',
    },
    items: ['Flutter & Dart', 'Kotlin / Java', 'Jetpack Compose', 'Bloc / Cubit', 'Clean Architecture', 'Shorebird OTA', 'Arabic RTL'],
  },
  {
    key: 'product',
    title: { en: 'Product', ar: 'بناء المنتجات' },
    lead: {
      en: 'Whole platforms, not single screens: customer, driver, merchant, web and admin.',
      ar: 'منصات كاملة لا شاشات منفردة: العميل والمندوب والتاجر والويب ولوحة التحكم.',
    },
    items: ['White-label platforms', 'Realtime tracking', 'Thermal POS printing', 'Payments & wallets', 'Offline sync', 'Push & chat'],
  },
  {
    key: 'backend',
    title: { en: 'Backend & integrations', ar: 'الباك إند والتكاملات' },
    lead: {
      en: 'The services an app talks to, wired in cleanly, and the release pipeline to the stores.',
      ar: 'الخدمات التي يتصل بها التطبيق، مربوطة بشكل نظيف، ومسار النشر حتى المتاجر.',
    },
    items: ['REST APIs', 'Firebase', 'Supabase', 'Postman', 'Push notifications', 'Payment gateways', 'Git / GitHub', 'CI/CD'],
  },
];

/** Tech stack, grouped. `icon` = simple-icons export name (siXxx) or a UI icon name; `color` overrides the brand colour. */
export const stack: { group: L; items: { name: string; icon?: string; color?: string }[] }[] = [
  {
    group: { en: 'Mobile', ar: 'الموبايل' },
    items: [
      { name: 'Flutter', icon: 'siFlutter' },
      { name: 'Dart', icon: 'siDart' },
      { name: 'Kotlin', icon: 'siKotlin' },
      { name: 'Java', icon: 'siOpenjdk' },
      { name: 'Android', icon: 'siAndroid' },
      { name: 'Jetpack Compose', icon: 'siJetpackcompose' },
      { name: 'iOS', icon: 'siApple' },
    ],
  },
  {
    group: { en: 'Backend-as-a-service & APIs', ar: 'خدمات الباك إند والـ APIs' },
    items: [
      { name: 'Firebase', icon: 'siFirebase' },
      { name: 'Supabase', icon: 'siSupabase' },
      { name: 'REST APIs', icon: 'code' },
      { name: 'Postman', icon: 'siPostman' },
    ],
  },
  {
    group: { en: 'Tools & stores', ar: 'الأدوات والمتاجر' },
    items: [
      { name: 'Android Studio', icon: 'siAndroidstudio' },
      { name: 'Xcode', icon: 'siXcode' },
      { name: 'Git', icon: 'siGit' },
      { name: 'GitHub', icon: 'siGithub' },
      { name: 'Figma', icon: 'siFigma' },
      { name: 'Play Console', icon: 'siGoogleplay', color: '#34A853' },
      { name: 'App Store Connect', icon: 'siAppstore' },
    ],
  },
];

export const processSteps: { title: L; body: L }[] = [
  {
    title: { en: 'Understand the business', ar: 'فهم النشاط' },
    body: {
      en: 'Who uses it, what they need on day one, and which flows make the money. Scope gets written down before code.',
      ar: 'من سيستخدمه، وماذا يحتاج من اليوم الأول، وأي المسارات تصنع الإيراد. النطاق يُكتب قبل الكود.',
    },
  },
  {
    title: { en: 'Architect for the long run', ar: 'معمار يدوم' },
    body: {
      en: 'Clean architecture, clear state management and shared design tokens, so one codebase can serve many apps and brands.',
      ar: 'معمار نظيف وإدارة حالة واضحة ورموز تصميم مشتركة، ليخدم كود واحد عدة تطبيقات وعلامات تجارية.',
    },
  },
  {
    title: { en: 'Build in visible steps', ar: 'بناء على مراحل واضحة' },
    body: {
      en: 'Working builds early and often, Arabic-first UX from the start, and tests where bugs would hurt the most.',
      ar: 'نسخ تعمل مبكرًا وباستمرار، وتجربة عربية أولًا من البداية، واختبارات حيث تكون الأخطاء أكثر ضررًا.',
    },
  },
  {
    title: { en: 'Ship to the stores', ar: 'النشر على المتاجر' },
    body: {
      en: 'Google Play and App Store releases, web builds, crash reporting and over-the-air fixes when speed matters.',
      ar: 'إصدارات Google Play و App Store ونسخ الويب، ومتابعة الأعطال، وتحديثات عبر الهواء حين تهم السرعة.',
    },
  },
  {
    title: { en: 'Keep it working', ar: 'استمرار بعد الإطلاق' },
    body: {
      en: 'Production fixes, new features and clear hand-off docs, so the product keeps growing after launch.',
      ar: 'إصلاحات الإنتاج والميزات الجديدة ووثائق تسليم واضحة، ليستمر المنتج في النمو بعد الإطلاق.',
    },
  },
];

export const categories: { key: string; label: L }[] = [
  { key: 'all', label: { en: 'All', ar: 'الكل' } },
  { key: 'commerce', label: { en: 'Delivery & commerce', ar: 'التوصيل والتجارة' } },
  { key: 'legaltech', label: { en: 'LegalTech', ar: 'التقنية القانونية' } },
  { key: 'edtech', label: { en: 'EdTech', ar: 'التعليم' } },
  { key: 'health', label: { en: 'Health', ar: 'الصحة' } },
  { key: 'fintech', label: { en: 'Finance & insurance', ar: 'التمويل والتأمين' } },
  { key: 'opensource', label: { en: 'Open source', ar: 'مفتوح المصدر' } },
  { key: 'own', label: { en: 'Own products', ar: 'منتجاتي' } },
];
