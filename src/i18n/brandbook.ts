import type { Locale } from "@/i18n/config";
import type { ServicePageContent } from "@/i18n/logo";
import { withServiceProductImages } from "@/i18n/service-products";

const uk: ServicePageContent = {
  eyebrow: "Послуги / Брендбук",
  title: "Брендбук",
  titleAccent: "Розробка брендбуку",
  lead:
    "Розробляємо брендбуки, які об'єднують правила бренду в єдину систему та зберігають його цілісність у кожній точці контакту з клієнтом.",
  sub: "",
  cta: "Обговорити проєкт",
  heroAlt: "Розробка брендбуку",
  heroCaption: "Від хаосу візуалу — до чіткої системи бренду.",
  metricsTitle: "Факти про ZOND",
  stats: [
    { value: "6", label: "років\nу дизайні" },
    { value: "6", label: "експертів\nу команді" },
    { value: "50+", label: "брендбуків\nстворено" },
    { value: "30+", label: "ніш\nдосліджено" },
    { value: "55", label: "брендів\nу портфоліо" },
  ],
  audienceTitle: "Кому не обійтися без брендбуку?",
  audienceItems: [
    { index: "01", title: "Тим, хто запускає новий бізнес" },
    { index: "02", title: "Тим, у кого хаос у візуалі" },
    { index: "03", title: "Тим, хто масштабує бізнес" },
    { index: "04", title: "Тим, хто працює з підрядниками" },
  ],
  includesTitle: "Що всередині брендбуку?",
  includes: [
    "Правила використання логотипа",
    "Правила роботи з фірмовими кольорами",
    "Система шрифтів і типографіки",
    "Правила використання графічних елементів",
    "Правила оформлення ключових носіїв",
    "Готові шаблони або макети носіїв",
    "Упорядкований комплект робочих файлів",
  ],
  includeCards: [
    {
      index: "01",
      title: "Правила логотипа",
      description: "Як використовувати знак бренду коректно на всіх носіях.",
      image: "/assets/photography/brandbook-0.webp",
      alt: "Правила використання логотипа",
    },
    {
      index: "02",
      title: "Фірмові кольори",
      description: "Палітра та правила роботи з кольором бренду.",
      image: "/assets/photography/identity-1.webp",
      alt: "Правила роботи з фірмовими кольорами",
    },
    {
      index: "03",
      title: "Типографіка",
      description: "Система шрифтів і ієрархія текстів для єдиного стилю.",
      image: "/assets/real-cases/altep-03.webp",
      alt: "Система шрифтів і типографіки",
    },
    {
      index: "04",
      title: "Графічні елементи",
      description: "Правила використання графіки, патернів і декоративних елементів.",
      image: "/assets/photography/logo-2.webp",
      alt: "Правила використання графічних елементів",
    },
    {
      index: "05",
      title: "Ключові носії",
      description: "Як оформлювати візитівки, бланки, соцмережі та інші точки контакту.",
      image: "/assets/photography/branding-3.webp",
      alt: "Правила оформлення ключових носіїв",
    },
    {
      index: "06",
      title: "Шаблони й макети",
      description: "Готові шаблони, з якими команда працює одразу.",
      image: "/assets/photography/graphics-1.webp",
      alt: "Шаблони та макети носіїв",
    },
    {
      index: "07",
      title: "Робочі файли",
      description: "Упорядкований комплект файлів для внутрішньої команди й підрядників.",
      image: "/assets/photography/brandbook-3.webp",
      alt: "Комплект робочих файлів брендбуку",
    },
  ],
  casesTitle: "Наші кейси з розробки брендбуків",
  processTitle: "Як ми впорядковуємо бренд",
  process: [
    {
      index: "01",
      title: "Занурюємося в бренд",
      description: "Вивчаємо бізнес, його цілі та наявну айдентику.",
      duration: "1 день",
    },
    {
      index: "02",
      title: "Досліджуємо нішу",
      description: "Аналізуємо конкурентів, тренди ринку та потреби аудиторії.",
      duration: "2–3 дні",
    },
    {
      index: "03",
      title: "Упорядковуємо систему",
      description: "Усуваємо суперечності та допрацьовуємо відсутні елементи айдентики.",
      duration: "2–5 днів",
    },
    {
      index: "04",
      title: "Фіксуємо правила",
      description:
        "Прописуємо, як використовувати логотип, кольори, шрифти, графіку й інші елементи бренду.",
      duration: "3–7 днів",
    },
    {
      index: "05",
      title: "Тестуємо",
      description: "Перевіряємо брендбук на різних носіях і в різних контекстах.",
      duration: "1–2 дні",
    },
    {
      index: "06",
      title: "Готуємо бренд до запуску",
      description:
        "Презентуємо брендбук, передаємо файли та пояснюємо, як користуватися системою.",
      duration: "1–2 дні",
    },
  ],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Чому варто обрати ZOND",
  whyItems: [
    {
      title: "Створюємо сильну айдентику",
      description:
        "Формуємо стиль, який передає характер бренду, вирізняє його серед конкурентів та запам'ятовується.",
    },
    {
      title: "Розробляємо робочий інструмент",
      description:
        "Ви отримуєте брендбук, яким команда реально користується, а не залишає припадати пилом у папці.",
    },
    {
      title: "Говоримо простою мовою",
      description:
        "Пишемо документ так, щоб у ньому легко розібрався і маркетолог, і менеджер, і підрядник.",
    },
    {
      title: "Не працюємо за шаблонами",
      description: "Кожен брендбук будується навколо вашого бізнесу, а не готової структури.",
    },
  ],
  compareTitle: "Чому ZOND, а не генератор чи фриланс?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    {
      criterion: "Команда",
      zond: "Артдиректор, бренд-дизайнер, стратег",
      freelance: "Одна людина",
      generator: "Алгоритм",
    },
    {
      criterion: "Основа рішення",
      zond: "Дослідження ринку та ДНК бренду",
      freelance: "Бачення виконавця",
      generator: "Промпт",
    },
    {
      criterion: "Результат",
      zond: "Чітка бренд-система з правилами",
      freelance: "Набір пояснень без єдиного стандарту",
      generator: "Випадкові інструкції без сенсу",
    },
  ],
  reviewsTitle: "Відгуки",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    {
      label: "Приклад відгуку 01",
      quote:
        "Потрібно було навести лад у візуалі бренду. Брендбук допоміг команді та підрядникам працювати за єдиними правилами без постійних уточнень.",
      name: "Ім'я клієнта · Компанія",
      role: "Брендбук та система",
    },
    {
      label: "Приклад відгуку 02",
      quote:
        "Документ написаний зрозумілою мовою — не лише для дизайнерів. Тепер простіше готувати нові матеріали та контролювати якість.",
      name: "Ім'я клієнта · Компанія",
      role: "Правила та шаблони",
    },
    {
      label: "Приклад відгуку 03",
      quote:
        "Процес був структурованим: від аналізу до фінальної передачі файлів. Отримали робочий інструмент, а не формальний PDF.",
      name: "Ім'я клієнта · Компанія",
      role: "Розробка брендбуку",
    },
  ],
  productTitle: "Брендбук у дії.",
  productNote: "Правила, які працюють на носіях і в комунікації.",
  products: withServiceProductImages([
    { alt: "Носії за правилами брендбуку", caption: "Брендовані носії" },
    { alt: "Мерч у єдиній системі", caption: "Мерч" },
    { alt: "Digital за гайдлайнами", caption: "Соцмережі" },
    { alt: "Одяг за фірмовим стилем", caption: "Одяг" },
    { alt: "Упаковка за стандартами бренду", caption: "Упаковка" },
    { alt: "Outdoor за брендбуком", caption: "Outdoor" },
  ]),
  formTitle: "Саме час перетворити бренд на систему",
  formDescription:
    "Заповніть форму, і ми розробимо брендбук, завдяки якому кожен, хто працює з вашим брендом, діятиме за єдиними правилами.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Що таке брендбук і навіщо він потрібен бізнесу?",
      answer:
        "Брендбук — це документ, у якому зібрані правила використання логотипа, кольорів, шрифтів, графіки та інших елементів бренду. Він допомагає зберігати єдиний стиль у всіх точках контакту з клієнтом незалежно від того, хто працює над створенням реклами, сайту, поліграфії чи контенту.",
    },
    {
      question: "Які основні розділи та елементи має включати брендбук?",
      answer:
        "До брендбуку входять правила використання логотипа, фірмової палітри, шрифтів, графічних елементів та інших елементів айдентики.",
    },
    {
      question: "Які етапи включає процес розробки брендбуку?",
      answer:
        "Розробка брендбуку починається з аналізу бізнесу, ринку та цільової аудиторії. Далі створюється або допрацьовується айдентика та описуються правила її використання. Після цього брендбук тестується та готується до передачі замовнику.",
    },
    {
      question: "Скільки коштує розробка брендбуку і від чого залежить ціна?",
      answer:
        "Орієнтовна вартість — 35–150 тис. грн. Остаточний кошторис залежить від обсягу завдання та погодженого складу робіт.",
    },
    {
      question: "Коли компанії потрібен брендбук, а коли його розробка не є необхідною?",
      answer:
        "Брендбук обов'язково потрібен, коли компанія масштабується, виходить на нові ринки, оновлює стиль або залучає нових підрядників. Без нього можна обійтися стартапам на етапі перевірки гіпотез та компаніям із незмінним локальним продуктом.",
    },
    {
      question: "Які типові помилки виникають при створенні брендбуку і як їх уникнути?",
      answer:
        "Найпоширеніші помилки під час створення брендбуку — копіювання чужих рішень, перевантаження документа зайвою інформацією або, навпаки, відсутність чітких правил використання айдентики. Якісний брендбук має бути зрозумілим, практичним і створеним під реальні завдання конкретного бізнесу.",
    },
    {
      question: "Чим відрізняється брендбук від логобука, гайдбука чи фірмового стилю?",
      answer:
        "Логобук описує правила використання логотипа. Гайдбук, або бренд-гайд, — це документ із правилами використання фірмового стилю компанії. Фірмовий стиль — це сукупність візуальних елементів бренду. Брендбук об'єднує все це в одному документі.",
    },
    {
      question: "Як забезпечити ефективне використання брендбуку після його створення?",
      answer:
        "Після створення брендбук має стати основним документом для всіх, хто працює з брендом. Важливо використовувати його під час створення реклами, сайту, поліграфії, презентацій, упаковки та будь-яких інших матеріалів.",
    },
  ],
  relatedTitle: "Суміжні послуги",
  related: [
    { title: "Брендинг", slug: "branding" },
    { title: "Логотип", slug: "logo" },
    { title: "Айдентика", slug: "identity" },
  ],
};

const en: ServicePageContent = {
  eyebrow: "Services / Brand book",
  title: "Brand book",
  titleAccent: "Brand book development",
  lead:
    "We develop brand books that bring a brand's rules into one system and keep it consistent at every point of contact with customers.",
  sub: "",
  cta: "Discuss the project",
  heroAlt: "Brand book development",
  heroCaption: "From visual chaos to a clear brand system.",
  metricsTitle: "Facts about ZOND",
  stats: [
    { value: "6", label: "years\nin design" },
    { value: "6", label: "experts\non the team" },
    { value: "50+", label: "brand books\ncreated" },
    { value: "30+", label: "niches\nresearched" },
    { value: "55", label: "brands\nin the portfolio" },
  ],
  audienceTitle: "Who can't do without a brand book?",
  audienceItems: [
    { index: "01", title: "Those launching a new business" },
    { index: "02", title: "Those whose visuals are in chaos" },
    { index: "03", title: "Those scaling their business" },
    { index: "04", title: "Those working with contractors" },
  ],
  includesTitle: "What's inside a brand book?",
  includes: [
    "Logo usage rules",
    "Rules for working with brand colors",
    "Font and typography system",
    "Rules for using graphic elements",
    "Design rules for key media",
    "Ready-made templates or layouts for media",
    "An organized set of working files",
  ],
  includeCards: [
    {
      index: "01",
      title: "Logo rules",
      description: "How to use the brand mark correctly on every medium.",
      image: "/assets/photography/brandbook-0.webp",
      alt: "Logo usage rules",
    },
    {
      index: "02",
      title: "Brand colors",
      description: "The palette and the rules for working with brand color.",
      image: "/assets/photography/identity-1.webp",
      alt: "Rules for working with brand colors",
    },
    {
      index: "03",
      title: "Typography",
      description: "A font system and text hierarchy for one consistent style.",
      image: "/assets/real-cases/altep-03.webp",
      alt: "Font and typography system",
    },
    {
      index: "04",
      title: "Graphic elements",
      description: "Rules for using graphics, patterns, and decorative elements.",
      image: "/assets/photography/logo-2.webp",
      alt: "Rules for using graphic elements",
    },
    {
      index: "05",
      title: "Key media",
      description: "How to design business cards, letterheads, social media, and other points of contact.",
      image: "/assets/photography/branding-3.webp",
      alt: "Design rules for key media",
    },
    {
      index: "06",
      title: "Templates and layouts",
      description: "Ready-made templates your team can use right away.",
      image: "/assets/photography/graphics-1.webp",
      alt: "Media templates and layouts",
    },
    {
      index: "07",
      title: "Working files",
      description: "An organized set of files for your in-house team and contractors.",
      image: "/assets/photography/brandbook-3.webp",
      alt: "Brand book working files",
    },
  ],
  casesTitle: "Our brand book cases",
  processTitle: "How we bring order to a brand",
  process: [
    {
      index: "01",
      title: "We immerse ourselves in the brand",
      description: "We study the business, its goals, and its current identity.",
      duration: "1 day",
    },
    {
      index: "02",
      title: "We research the niche",
      description: "We analyze competitors, market trends, and audience needs.",
      duration: "2-3 days",
    },
    {
      index: "03",
      title: "We organize the system",
      description: "We remove contradictions and complete the missing identity elements.",
      duration: "2-5 days",
    },
    {
      index: "04",
      title: "We set the rules",
      description:
        "We describe how to use the logo, colors, fonts, graphics, and other brand elements.",
      duration: "3-7 days",
    },
    {
      index: "05",
      title: "We test",
      description: "We check the brand book on different media and in different contexts.",
      duration: "1-2 days",
    },
    {
      index: "06",
      title: "We prepare the brand for launch",
      description:
        "We present the brand book, hand over the files, and explain how to use the system.",
      duration: "1-2 days",
    },
  ],
  teamTitle: "Who leads the project",
  whyTitle: "Why choose ZOND",
  whyItems: [
    {
      title: "We create strong identity",
      description:
        "We build a style that conveys the brand's character, sets it apart from competitors, and sticks in memory.",
    },
    {
      title: "We build a working tool",
      description:
        "You get a brand book your team actually uses, not one that gathers dust in a folder.",
    },
    {
      title: "We speak plain language",
      description:
        "We write the document so that a marketer, a manager, and a contractor can all find their way around it.",
    },
    {
      title: "We don't work from templates",
      description: "Every brand book is built around your business, not around a ready-made structure.",
    },
  ],
  compareTitle: "Why ZOND and not a generator or a freelancer?",
  compareColumns: ["Criterion", "ZOND", "Freelancer", "Generator (AI)"],
  compareRows: [
    {
      criterion: "Team",
      zond: "Art director, brand designer, strategist",
      freelance: "One person",
      generator: "An algorithm",
    },
    {
      criterion: "What the solution is based on",
      zond: "Market research and brand DNA",
      freelance: "The designer's own vision",
      generator: "A prompt",
    },
    {
      criterion: "Result",
      zond: "A clear brand system with rules",
      freelance: "A set of explanations without a single standard",
      generator: "Random instructions with no meaning",
    },
  ],
  reviewsTitle: "Reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    {
      label: "Sample review 01",
      quote:
        "We needed to bring order to our brand visuals. The brand book helped our team and contractors work by the same rules without constant back-and-forth.",
      name: "Client name · Company",
      role: "Brand book and system",
    },
    {
      label: "Sample review 02",
      quote:
        "The document is written in clear language, and not only for designers. Now it is easier to prepare new materials and keep quality under control.",
      name: "Client name · Company",
      role: "Rules and templates",
    },
    {
      label: "Sample review 03",
      quote:
        "The process was well structured, from the analysis to the final file handover. We got a working tool, not a PDF for the record.",
      name: "Client name · Company",
      role: "Brand book development",
    },
  ],
  productTitle: "The brand book in action.",
  productNote: "Rules that work on media and in communication.",
  products: withServiceProductImages([
    { alt: "Media designed by the brand book rules", caption: "Branded items" },
    { alt: "Merch in one consistent system", caption: "Merch" },
    { alt: "Digital designed by the guidelines", caption: "Social media" },
    { alt: "Apparel in the corporate style", caption: "Apparel" },
    { alt: "Packaging that follows the brand standards", caption: "Packaging" },
    { alt: "Outdoor advertising by the brand book", caption: "Outdoor" },
  ]),
  formTitle: "It's time to turn your brand into a system",
  formDescription:
    "Fill out the form, and we will develop a brand book that makes everyone who works with your brand follow the same rules.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "What is a brand book, and why does a business need one?",
      answer:
        "A brand book is a document that collects the rules for using the logo, colors, fonts, graphics, and other brand elements. It keeps the style consistent at every point of contact with customers, no matter who creates the advertising, website, print materials, or content.",
    },
    {
      question: "What are the main sections and elements of a brand book?",
      answer:
        "A brand book includes rules for using the logo, the brand palette, fonts, graphic elements, and other identity elements.",
    },
    {
      question: "What are the stages of brand book development?",
      answer:
        "Brand book development starts with an analysis of the business, the market, and the target audience. Next, the identity is created or completed, and the rules for using it are described. After that, the brand book is tested and prepared for handover to the client.",
    },
    {
      question: "How much does a brand book cost, and what affects the price?",
      answer:
        "The approximate cost is UAH 35,000-150,000. The final estimate depends on the scope of the task and the agreed list of work.",
    },
    {
      question: "When does a company need a brand book, and when can it do without one?",
      answer:
        "A brand book is a must when a company is scaling, entering new markets, updating its style, or bringing in new contractors. Startups still testing their hypotheses and companies with an unchanging local product can do without one.",
    },
    {
      question: "What are the typical mistakes in creating a brand book, and how do you avoid them?",
      answer:
        "The most common mistakes are copying other people's solutions, overloading the document with unnecessary information, or, on the contrary, leaving out clear rules for using the identity. A good brand book should be clear, practical, and made for the real tasks of a specific business.",
    },
    {
      question: "How is a brand book different from a logobook, a guidebook, or a corporate identity?",
      answer:
        "A logobook describes the rules for using the logo. A guidebook, or brand guide, is a document with the rules for using the company's corporate identity. A corporate identity is the set of the brand's visual elements. A brand book brings all of this together in one document.",
    },
    {
      question: "How do you make sure a brand book is used well once it is created?",
      answer:
        "Once created, the brand book should become the main document for everyone who works with the brand. It is important to use it when creating advertising, the website, print materials, presentations, packaging, and any other materials.",
    },
  ],
  relatedTitle: "Related services",
  related: [
    { title: "Branding", slug: "branding" },
    { title: "Logo", slug: "logo" },
    { title: "Identity", slug: "identity" },
  ],
};

const ru: ServicePageContent = {
  ...uk,
  eyebrow: "Услуги / Брендбук",
  title: "Брендбук",
  titleAccent: "Разработка брендбука",
  lead:
    "Разрабатываем брендбуки, которые объединяют правила бренда в единую систему и сохраняют его целостность в каждой точке контакта с клиентом.",
  cta: "Обсудить проект",
  heroAlt: "Разработка брендбука",
  heroCaption: "От хаоса в визуале — к четкой системе бренда.",
  metricsTitle: "Факты о ZOND",
  stats: [
    { value: "6", label: "лет\nв дизайне" },
    { value: "6", label: "экспертов\nв команде" },
    { value: "50+", label: "брендбуков\nсоздано" },
    { value: "30+", label: "ниш\nисследовано" },
    { value: "55", label: "брендов\nв портфолио" },
  ],
  audienceTitle: "Кому не обойтись без брендбука?",
  audienceItems: [
    { index: "01", title: "Тем, кто запускает новый бизнес" },
    { index: "02", title: "Тем, у кого хаос в визуале" },
    { index: "03", title: "Тем, кто масштабирует бизнес" },
    { index: "04", title: "Тем, кто работает с подрядчиками" },
  ],
  includesTitle: "Что внутри брендбука?",
  includes: [
    "Правила использования логотипа",
    "Правила работы с фирменными цветами",
    "Система шрифтов и типографики",
    "Правила использования графических элементов",
    "Правила оформления ключевых носителей",
    "Готовые шаблоны или макеты носителей",
    "Упорядоченный комплект рабочих файлов",
  ],
  includeCards: [
    {
      index: "01",
      title: "Правила логотипа",
      description: "Как использовать знак бренда корректно на всех носителях.",
      image: "/assets/photography/brandbook-0.webp",
      alt: "Правила использования логотипа",
    },
    {
      index: "02",
      title: "Фирменные цвета",
      description: "Палитра и правила работы с цветом бренда.",
      image: "/assets/photography/identity-1.webp",
      alt: "Правила работы с фирменными цветами",
    },
    {
      index: "03",
      title: "Типографика",
      description: "Система шрифтов и иерархия текстов для единого стиля.",
      image: "/assets/real-cases/altep-03.webp",
      alt: "Система шрифтов и типографики",
    },
    {
      index: "04",
      title: "Графические элементы",
      description: "Правила использования графики, паттернов и декоративных элементов.",
      image: "/assets/photography/logo-2.webp",
      alt: "Правила использования графических элементов",
    },
    {
      index: "05",
      title: "Ключевые носители",
      description: "Как оформлять визитки, бланки, соцсети и другие точки контакта.",
      image: "/assets/photography/branding-3.webp",
      alt: "Правила оформления ключевых носителей",
    },
    {
      index: "06",
      title: "Шаблоны и макеты",
      description: "Готовые шаблоны, с которыми команда работает сразу.",
      image: "/assets/photography/graphics-1.webp",
      alt: "Шаблоны и макеты носителей",
    },
    {
      index: "07",
      title: "Рабочие файлы",
      description: "Упорядоченный комплект файлов для внутренней команды и подрядчиков.",
      image: "/assets/photography/brandbook-3.webp",
      alt: "Комплект рабочих файлов брендбука",
    },
  ],
  casesTitle: "Наши кейсы по разработке брендбуков",
  processTitle: "Как мы упорядочиваем бренд",
  process: [
    {
      index: "01",
      title: "Погружаемся в бренд",
      description: "Изучаем бизнес, его цели и существующую айдентику.",
      duration: "1 день",
    },
    {
      index: "02",
      title: "Исследуем нишу",
      description: "Анализируем конкурентов, тренды рынка и потребности аудитории.",
      duration: "2–3 дня",
    },
    {
      index: "03",
      title: "Упорядочиваем систему",
      description: "Устраняем противоречия и дорабатываем недостающие элементы айдентики.",
      duration: "2–5 дней",
    },
    {
      index: "04",
      title: "Фиксируем правила",
      description:
        "Прописываем, как использовать логотип, цвета, шрифты, графику и другие элементы бренда.",
      duration: "3–7 дней",
    },
    {
      index: "05",
      title: "Тестируем",
      description: "Проверяем брендбук на разных носителях и в разных контекстах.",
      duration: "1–2 дня",
    },
    {
      index: "06",
      title: "Готовим бренд к запуску",
      description:
        "Презентуем брендбук, передаем файлы и объясняем, как пользоваться системой.",
      duration: "1–2 дня",
    },
  ],
  teamTitle: "Кто ведет проект",
  whyTitle: "Почему стоит выбрать ZOND",
  whyItems: [
    {
      title: "Создаем сильную айдентику",
      description:
        "Формируем стиль, который передает характер бренда, выделяет его среди конкурентов и запоминается.",
    },
    {
      title: "Разрабатываем рабочий инструмент",
      description:
        "Вы получаете брендбук, которым команда реально пользуется, а не оставляет пылиться в папке.",
    },
    {
      title: "Говорим простым языком",
      description:
        "Пишем документ так, чтобы в нем легко разобрался и маркетолог, и менеджер, и подрядчик.",
    },
    {
      title: "Не работаем по шаблонам",
      description: "Каждый брендбук строится вокруг вашего бизнеса, а не готовой структуры.",
    },
  ],
  compareTitle: "Почему ZOND, а не генератор или фриланс?",
  compareColumns: ["Критерий", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    {
      criterion: "Команда",
      zond: "Арт-директор, бренд-дизайнер, стратег",
      freelance: "Один человек",
      generator: "Алгоритм",
    },
    {
      criterion: "Основа решения",
      zond: "Исследование рынка и ДНК бренда",
      freelance: "Видение исполнителя",
      generator: "Промпт",
    },
    {
      criterion: "Результат",
      zond: "Четкая бренд-система с правилами",
      freelance: "Набор пояснений без единого стандарта",
      generator: "Случайные инструкции без смысла",
    },
  ],
  reviewsTitle: "Отзывы",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    {
      label: "Пример отзыва 01",
      quote:
        "Нужно было навести порядок в визуале бренда. Брендбук помог команде и подрядчикам работать по единым правилам без постоянных уточнений.",
      name: "Имя клиента · Компания",
      role: "Брендбук и система",
    },
    {
      label: "Пример отзыва 02",
      quote:
        "Документ написан понятным языком — не только для дизайнеров. Теперь проще готовить новые материалы и контролировать качество.",
      name: "Имя клиента · Компания",
      role: "Правила и шаблоны",
    },
    {
      label: "Пример отзыва 03",
      quote:
        "Процесс был структурированным: от анализа до финальной передачи файлов. Получили рабочий инструмент, а не формальный PDF.",
      name: "Имя клиента · Компания",
      role: "Разработка брендбука",
    },
  ],
  productTitle: "Брендбук в действии.",
  productNote: "Правила, которые работают на носителях и в коммуникации.",
  products: withServiceProductImages([
    { alt: "Носители по правилам брендбука", caption: "Брендированные носители" },
    { alt: "Мерч в единой системе", caption: "Мерч" },
    { alt: "Digital по гайдлайнам", caption: "Соцсети" },
    { alt: "Одежда в фирменном стиле", caption: "Одежда" },
    { alt: "Упаковка по стандартам бренда", caption: "Упаковка" },
    { alt: "Outdoor по брендбуку", caption: "Outdoor" },
  ]),
  formTitle: "Самое время превратить бренд в систему",
  formDescription:
    "Заполните форму, и мы разработаем брендбук, благодаря которому каждый, кто работает с вашим брендом, будет действовать по единым правилам.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Что такое брендбук и зачем он нужен бизнесу?",
      answer:
        "Брендбук — это документ, в котором собраны правила использования логотипа, цветов, шрифтов, графики и других элементов бренда. Он помогает сохранять единый стиль во всех точках контакта с клиентом независимо от того, кто работает над созданием рекламы, сайта, полиграфии или контента.",
    },
    {
      question: "Какие основные разделы и элементы должен включать брендбук?",
      answer:
        "В брендбук входят правила использования логотипа, фирменной палитры, шрифтов, графических элементов и других элементов айдентики.",
    },
    {
      question: "Какие этапы включает процесс разработки брендбука?",
      answer:
        "Разработка брендбука начинается с анализа бизнеса, рынка и целевой аудитории. Дальше создается или дорабатывается айдентика и описываются правила ее использования. После этого брендбук тестируется и готовится к передаче заказчику.",
    },
    {
      question: "Сколько стоит разработка брендбука и от чего зависит цена?",
      answer:
        "Ориентировочная стоимость — 35–150 тыс. грн. Итоговая смета зависит от объема задачи и согласованного состава работ.",
    },
    {
      question: "Когда компании нужен брендбук, а когда его разработка не является необходимой?",
      answer:
        "Брендбук обязательно нужен, когда компания масштабируется, выходит на новые рынки, обновляет стиль или привлекает новых подрядчиков. Без него можно обойтись стартапам на этапе проверки гипотез и компаниям с неизменным локальным продуктом.",
    },
    {
      question: "Какие типичные ошибки возникают при создании брендбука и как их избежать?",
      answer:
        "Самые распространенные ошибки при создании брендбука — копирование чужих решений, перегрузка документа лишней информацией или, наоборот, отсутствие четких правил использования айдентики. Качественный брендбук должен быть понятным, практичным и созданным под реальные задачи конкретного бизнеса.",
    },
    {
      question: "Чем отличается брендбук от логобука, гайдбука или фирменного стиля?",
      answer:
        "Логобук описывает правила использования логотипа. Гайдбук, или бренд-гайд, — это документ с правилами использования фирменного стиля компании. Фирменный стиль — это совокупность визуальных элементов бренда. Брендбук объединяет все это в одном документе.",
    },
    {
      question: "Как обеспечить эффективное использование брендбука после его создания?",
      answer:
        "После создания брендбук должен стать основным документом для всех, кто работает с брендом. Важно использовать его при создании рекламы, сайта, полиграфии, презентаций, упаковки и любых других материалов.",
    },
  ],
  relatedTitle: "Смежные услуги",
  related: [
    { title: "Брендинг", slug: "branding" },
    { title: "Логотип", slug: "logo" },
    { title: "Айдентика", slug: "identity" },
  ],
};

export const brandbookPage: Record<Locale, ServicePageContent> = { uk, en, ru };
