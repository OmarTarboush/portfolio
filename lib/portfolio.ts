export type Locale = "en" | "ar";

type LocalizedText = Record<Locale, string>;

export type PortfolioProject = {
  name: string;
  role: LocalizedText;
  description: LocalizedText;
  impact: LocalizedText;
  stack: string[];
  icon: string;
  screenshots: string[];
  playStore?: string;
  appStore?: string;
};

export type ExperienceItem = {
  company: string;
  location: LocalizedText;
  role: LocalizedText;
  period: string;
  points: LocalizedText[];
};

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const profile = {
  name: "Omar Tarboush",
  title: {
    en: "Flutter Mobile App Developer",
    ar: "مطور تطبيقات Flutter",
  },
  secondaryTitle: {
    en: "AI Graduate",
    ar: "خريج اختصاص الذكاء الاصطناعي",
  },
  email: "omartarboush191@gmail.com",
  phone: "+963 941 717 409",
  linkedin: "Omar Tarboush",
  portfolio: "https://github.com/OmarTarboush/portfolio",
  location: {
    en: "Damascus, Syria",
    ar: "دمشق، سوريا",
  },
  education: {
    en: "BSc Information Technology, AI major - Arab International University",
    ar: "بكالوريوس تكنولوجيا المعلومات، اختصاص الذكاء الاصطناعي - الجامعة العربية الدولية",
  },
  languages: {
    en: "Arabic native, English good",
    ar: "العربية لغة أم، والإنجليزية جيدة",
  },
  summary: {
    en: "Flutter developer and AI graduate with 4+ years of production mobile app experience and 12+ applications across the UAE, Saudi Arabia, and Syria. Strong in Flutter, Firebase, GetX, Riverpod, REST/GraphQL APIs, maps, deep linking, notifications, secure access, and automated testing.",
    ar: "مطور Flutter وخريج ذكاء اصطناعي بخبرة 4+ سنوات في تطبيقات الموبايل الإنتاجية وأكثر من 12 تطبيقاً ضمن الإمارات والسعودية وسوريا. أعمل على Flutter وFirebase وGetX وRiverpod وREST/GraphQL والخرائط والتنبيهات والروابط العميقة والحماية والاختبارات.",
  },
};

export const roles = [
  {
    title: {
      en: "Production Flutter Development",
      ar: "تطوير Flutter إنتاجي",
    },
    text: {
      en: "Build and maintain store-ready mobile apps with polished user flows, scalable state management, and reliable release behavior.",
      ar: "بناء وصيانة تطبيقات موبايل جاهزة للنشر مع تدفقات مستخدم مصقولة وإدارة حالة قابلة للتوسع وسلوك إطلاق موثوق.",
    },
  },
  {
    title: {
      en: "Firebase & API Systems",
      ar: "أنظمة Firebase وواجهات API",
    },
    text: {
      en: "Integrate Firebase Auth, Firestore, Analytics, Messaging, REST APIs, GraphQL, SQL views, and backend-facing data flows.",
      ar: "دمج Firebase Auth وFirestore وAnalytics وMessaging وREST APIs وGraphQL وSQL views وتدفقات البيانات المرتبطة بالخلفية.",
    },
  },
  {
    title: {
      en: "Secure Product Workflows",
      ar: "تدفقات منتجات آمنة",
    },
    text: {
      en: "Implement secure access patterns such as PIN entry, encryption, role-based permissions, cloud backup, and account restrictions.",
      ar: "تنفيذ أنماط وصول آمنة مثل PIN والتشفير والصلاحيات حسب الدور والنسخ الاحتياطي السحابي وقيود الحسابات.",
    },
  },
  {
    title: {
      en: "Delivery & Team Coordination",
      ar: "التسليم وتنسيق الفريق",
    },
    text: {
      en: "Plan schedules, delegate tasks, coordinate cross-functional delivery, and support legacy codebases without breaking production flows.",
      ar: "تخطيط الجداول وتوزيع المهام وتنسيق التسليم بين الفرق ودعم الأنظمة القديمة دون كسر التدفقات الإنتاجية.",
    },
  },
];

export const projects: PortfolioProject[] = [
  {
    name: "H1 SMS",
    role: {
      en: "Unified SMS Manager",
      ar: "مدير رسائل SMS موحد",
    },
    description: {
      en: "Unifies SMS communication from multiple numbers in one protected interface with cloud backup, PIN access, encrypted data, and organized message workflows.",
      ar: "يوحد رسائل SMS من عدة أرقام داخل واجهة محمية مع نسخ احتياطي سحابي ودخول PIN وتشفير للبيانات وتنظيم لتدفقات الرسائل.",
    },
    impact: {
      en: "Secure communication product for teams that need controlled access to shared SMS channels.",
      ar: "منتج تواصل آمن للفرق التي تحتاج إلى وصول مضبوط لقنوات SMS مشتركة.",
    },
    stack: ["Flutter", "Firebase", "Encryption", "Cloud backup"],
    icon: "/uploads/projects/h1-sms-icon.png",
    screenshots: [
      "/uploads/projects/h1-sms-1.png",
      "/uploads/projects/h1-sms-2.png",
      "/uploads/projects/h1-sms-3.png",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.wealthcoders.h1sms",
    appStore: "https://apps.apple.com/sa/app/h1-sms/id6737338273",
  },
  {
    name: "H1 Mail",
    role: {
      en: "Secure Multi-Account Email",
      ar: "بريد آمن متعدد الحسابات",
    },
    description: {
      en: "Brings multiple mailboxes into one protected app with PIN login, encryption, mailbox restrictions, notification flows, and multi-account organization.",
      ar: "يجمع عدة صناديق بريد في تطبيق محمي مع تسجيل دخول PIN وتشفير وقيود على الصناديق وتنبيهات وتنظيم للحسابات المتعددة.",
    },
    impact: {
      en: "Built for controlled email access where account security and mailbox separation matter.",
      ar: "مصمم للوصول المنضبط إلى البريد عندما تكون حماية الحساب وفصل الصناديق ضرورية.",
    },
    stack: ["Flutter", "IMAP", "Firebase", "Security"],
    icon: "/uploads/projects/h1-mail-icon.png",
    screenshots: [
      "/uploads/projects/h1-mail-1.png",
      "/uploads/projects/h1-mail-2.png",
      "/uploads/projects/h1-mail-3.png",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.wealthcoders.h1mail",
    appStore: "https://apps.apple.com/sa/app/h1-mail/id6504540125",
  },
  {
    name: "H1 Assignment",
    role: {
      en: "Team Task Platform",
      ar: "منصة مهام للفرق",
    },
    description: {
      en: "Organizes tasks, groups, meetings, role-based access, profiles, real-time updates, and powerful search for operational teams.",
      ar: "تنظم المهام والمجموعات والاجتماعات والصلاحيات حسب الدور والملفات الشخصية والتحديثات الفورية والبحث للفرق التشغيلية.",
    },
    impact: {
      en: "Operational workflow app for teams that need task visibility, access control, and searchable coordination.",
      ar: "تطبيق سير عمل تشغيلي للفرق التي تحتاج إلى وضوح المهام والتحكم بالصلاحيات والتنسيق القابل للبحث.",
    },
    stack: ["Flutter", "Firebase", "RBAC", "Real-time"],
    icon: "/uploads/projects/h1-assignment-icon.png",
    screenshots: [
      "/uploads/projects/h1-assignment-1.png",
      "/uploads/projects/h1-assignment-2.png",
      "/uploads/projects/h1-assignment-3.png",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.wealthcoders.h1task",
    appStore: "https://apps.apple.com/sa/app/h1-assignment/id6478490331",
  },
  {
    name: "Aklat24",
    role: {
      en: "Meal-Sharing Marketplace",
      ar: "سوق مشاركة الوجبات",
    },
    description: {
      en: "Connects meal seekers with providers to reduce food waste and close the gap between daily food supply and consumption.",
      ar: "يربط الباحثين عن الوجبات مع المزودين للمساعدة في تقليل هدر الطعام وسد الفجوة بين العرض والاستهلاك اليومي.",
    },
    impact: {
      en: "Marketplace app with maps, provider discovery, and food-sharing flows.",
      ar: "تطبيق سوق يتضمن خرائط واكتشاف مزودين وتدفقات مشاركة الطعام.",
    },
    stack: ["Flutter", "GetX", "Maps", "REST APIs"],
    icon: "/uploads/projects/aklat24-icon.png",
    screenshots: [
      "/uploads/projects/aklat24-1.jpg",
      "/uploads/projects/aklat24-2.jpg",
      "/uploads/projects/aklat24-3.jpg",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.inprosa.aklat24",
    appStore: "https://apps.apple.com/sa/app/aklat-24/id1616309043",
  },
  {
    name: "Mapy",
    role: {
      en: "Social Location App",
      ar: "تطبيق اجتماعي للمواقع",
    },
    description: {
      en: "A location-based social product with Instagram-like sharing, hidden gems discovery, maps, profile flows, and content exploration.",
      ar: "منتج اجتماعي يعتمد على الموقع مع مشاركة تشبه Instagram واكتشاف أماكن مميزة وخرائط وملفات شخصية واستكشاف محتوى.",
    },
    impact: {
      en: "Consumer app combining map interaction, social content, profiles, and GraphQL/Firebase integration.",
      ar: "تطبيق للمستخدمين يجمع بين تفاعل الخرائط والمحتوى الاجتماعي والملفات الشخصية ودمج GraphQL/Firebase.",
    },
    stack: ["Flutter", "Google Maps", "GraphQL", "Firebase"],
    icon: "/uploads/projects/mapy-icon.jpg",
    screenshots: [
      "/uploads/projects/mapy-1.jpg",
      "/uploads/projects/mapy-2.jpg",
      "/uploads/projects/mapy-3.jpg",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.ixcoders.mapy",
    appStore: "https://apps.apple.com/sa/app/mapy/id6446064290",
  },
  {
    name: "Wonder Beauties",
    role: {
      en: "Beauty Consultations",
      ar: "استشارات تجميل",
    },
    description: {
      en: "Free skin and hair consultations by pharmacists and doctors, with personalized product recommendations and a 4.8/5 satisfaction rating across thousands of orders.",
      ar: "استشارات مجانية للبشرة والشعر من صيادلة وأطباء مع توصيات منتجات مخصصة وتقييم رضا 4.8/5 عبر آلاف الطلبات.",
    },
    impact: {
      en: "Beauty commerce and consultation app with product recommendations and original product discovery.",
      ar: "تطبيق تجميل واستشارات يتضمن توصيات منتجات واكتشاف منتجات أصلية.",
    },
    stack: ["Flutter", "Firebase", "E-commerce", "Consultations"],
    icon: "/uploads/projects/wonder-beauties-icon.png",
    screenshots: [
      "/uploads/projects/wonder-beauties-1.png",
      "/uploads/projects/wonder-beauties-2.png",
      "/uploads/projects/wonder-beauties-3.png",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.wonderbeauties.app",
    appStore: "https://apps.apple.com/sa/app/wonder-beauties/id6472045044",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "We Got Nerds",
    location: {
      en: "Dubai, United Arab Emirates",
      ar: "دبي، الإمارات العربية المتحدة",
    },
    role: {
      en: "Full-Time Flutter Developer",
      ar: "مطور Flutter بدوام كامل",
    },
    period: "Oct 2025 - Present",
    points: [
      {
        en: "Managed project timelines, delegated development tasks, and coordinated cross-functional delivery.",
        ar: "إدارة جداول المشاريع وتوزيع مهام التطوير وتنسيق التسليم بين فرق متعددة.",
      },
      {
        en: "Implemented Riverpod state management and optimized data queries for stronger app performance.",
        ar: "تنفيذ Riverpod لإدارة الحالة وتحسين استعلامات البيانات لدعم أداء أقوى للتطبيق.",
      },
      {
        en: "Integrated Firebase Auth, Firestore, Analytics, third-party REST APIs, widget tests, and integration tests.",
        ar: "دمج Firebase Auth وFirestore وAnalytics وREST APIs خارجية واختبارات widgets واختبارات تكامل.",
      },
    ],
  },
  {
    company: "ANS Soft",
    location: {
      en: "Abu Dhabi, United Arab Emirates",
      ar: "أبوظبي، الإمارات العربية المتحدة",
    },
    role: {
      en: "Full-Time Flutter Developer",
      ar: "مطور Flutter بدوام كامل",
    },
    period: "Aug 2023 - Oct 2025",
    points: [
      {
        en: "Delivered and supported production mobile applications including Aklat24 and Mapy.",
        ar: "تسليم ودعم تطبيقات موبايل إنتاجية منها Aklat24 وMapy.",
      },
      {
        en: "Led special projects, planned schedules, supervised delivery work, and maintained large-scale legacy codebases.",
        ar: "قيادة مشاريع خاصة وتخطيط الجداول والإشراف على أعمال التسليم وصيانة قواعد كود قديمة واسعة.",
      },
      {
        en: "Built GetX architectures, SQL views, Firebase Messaging, deep links, GraphQL, REST APIs, and Patrol tests.",
        ar: "بناء معماريات GetX وSQL views وFirebase Messaging والروابط العميقة وGraphQL وREST APIs واختبارات Patrol.",
      },
    ],
  },
  {
    company: "Seba School",
    location: {
      en: "Damascus, Syria",
      ar: "دمشق، سوريا",
    },
    role: {
      en: "Full-Time Flutter Developer / Programming Instructor",
      ar: "مطور Flutter ومدرب برمجة بدوام كامل",
    },
    period: "Sep 2023 - Sep 2024",
    points: [
      {
        en: "Taught programming fundamentals with a focus on Python and practical problem solving.",
        ar: "تدريس أساسيات البرمجة مع التركيز على Python وحل المشكلات العملي.",
      },
      {
        en: "Organized student competitions and learning events to encourage hands-on practice.",
        ar: "تنظيم مسابقات وفعاليات تعليمية للطلاب لتشجيع التطبيق العملي.",
      },
    ],
  },
  {
    company: "Goma Plus",
    location: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية",
    },
    role: {
      en: "Full-Time Flutter Developer",
      ar: "مطور Flutter بدوام كامل",
    },
    period: "May 2023 - Aug 2023",
    points: [
      {
        en: "Developed mobile apps using GetX and Firebase notifications.",
        ar: "تطوير تطبيقات موبايل باستخدام GetX وتنبيهات Firebase.",
      },
      {
        en: "Created stored procedures, database views, complex queries, and REST API integrations.",
        ar: "إنشاء stored procedures وdatabase views واستعلامات معقدة ودمج REST APIs.",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: {
      en: "Mobile",
      ar: "الموبايل",
    },
    items: ["Flutter", "Dart", "GetX", "Riverpod", "Patrol", "Mockito", "Widget tests"],
  },
  {
    title: {
      en: "Backend & Data",
      ar: "الخلفية والبيانات",
    },
    items: ["Firebase", "Firestore", "Cloud Functions", "SQL", "Stored procedures", "REST", "GraphQL", "IMAP"],
  },
  {
    title: {
      en: "Product Systems",
      ar: "أنظمة المنتج",
    },
    items: [
      "Push notifications",
      "Deep linking",
      "Google Maps",
      "In-app purchases",
      "Role-based access",
      "RBAC",
      "Real-time",
      "Cloud backup",
    ],
  },
  {
    title: {
      en: "Quality & Delivery",
      ar: "الجودة والتسليم",
    },
    items: [
      "Testing",
      "Debugging",
      "Git",
      "GitHub",
      "GitLab",
      "Legacy refactors",
      "Encryption",
      "E-commerce",
      "Consultations",
    ],
  },
];
