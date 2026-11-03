import { getCases } from "@/i18n/cases";
import type { Locale } from "@/i18n/config";
import type { ProjectItem } from "@/i18n/dictionary";
import type { ServicePageContent } from "@/i18n/logo";
import { getCaseDetailPath } from "@/i18n/routing";

const webDevelopmentCaseCards: Record<
  Locale,
  Array<{ slug: string; category: string; image: string; poster?: string }>
> = {
  uk: [
    {
      slug: "carbit",
      category: "Сервіс пошуку авто",
      image: "/services/web-development/carbit.mp4",
      poster: "/services/web-development/carbit.webp",
    },
    {
      slug: "nove-misto",
      category: "Девелопмент",
      image: "/services/web-development/nove.gif",
    },
    {
      slug: "kyiv-tourism-department",
      category: "Міський бренд",
      image: "/services/web-development/kyiv.jpg",
    },
    {
      slug: "digital-residence",
      category: "Нерухомість",
      image: "/services/web-development/digital.mp4",
      poster: "/services/web-development/digital.webp",
    },
  ],
  en: [
    {
      slug: "carbit",
      category: "Car search service",
      image: "/services/web-development/carbit.mp4",
      poster: "/services/web-development/carbit.webp",
    },
    {
      slug: "nove-misto",
      category: "Real estate development",
      image: "/services/web-development/nove.gif",
    },
    {
      slug: "kyiv-tourism-department",
      category: "City brand",
      image: "/services/web-development/kyiv.jpg",
    },
    {
      slug: "digital-residence",
      category: "Real estate",
      image: "/services/web-development/digital.mp4",
      poster: "/services/web-development/digital.webp",
    },
  ],
  ru: [
    {
      slug: "carbit",
      category: "Сервис поиска авто",
      image: "/services/web-development/carbit.mp4",
      poster: "/services/web-development/carbit.webp",
    },
    {
      slug: "nove-misto",
      category: "Девелопмент",
      image: "/services/web-development/nove.gif",
    },
    {
      slug: "kyiv-tourism-department",
      category: "Городской бренд",
      image: "/services/web-development/kyiv.jpg",
    },
    {
      slug: "digital-residence",
      category: "Недвижимость",
      image: "/services/web-development/digital.mp4",
      poster: "/services/web-development/digital.webp",
    },
  ],
};

const uk: ServicePageContent = {
  "eyebrow": "Послуги / Веб-розробка",
  "title": "Розробка корпоративного сайту",
  "titleAccent": "",
  "lead": "Створюємо сайти компаній зі зрозумілою структурою, дизайном у стилі бренду і ясним шляхом клієнта до заявки.",
  "sub": "Ведемо проєкт від брифу і прототипу до адаптивної розробки та запуску сайту.",
  "cta": "Обговорити проєкт",
  "heroAlt": "Ноутбук і телефон з адаптивним дизайном сайту в студійному просторі",
  "heroCaption": "Ваш бренд у цифровому середовищі.",
  "metricsTitle": "Сайт як цілісна система.",
  "stats": [
    {
      "value": "01",
      "label": "зрозуміла ціль у кожної сторінки сайту"
    },
    {
      "value": "03",
      "label": "формати екрана: телефон, планшет, комп’ютер"
    },
    {
      "value": "06",
      "label": "етапів від першого брифу до запуску сайту"
    },
    {
      "value": "04",
      "label": "опори: структура, контент, дизайн і код"
    }
  ],
  "audienceTitle": "Коли компанії потрібен сайт",
  "audienceItems": [
    {
      "index": "01",
      "title": "Нова компанія",
      "description": "Треба розповісти, чим ви займаєтеся, і дати клієнтам і партнерам зрозумілий шлях до звернення."
    },
    {
      "index": "02",
      "title": "Старий сайт",
      "description": "Компанія виросла, а на сторінках немає нових послуг, і зовнішній вигляд відстав від фірмового стилю."
    },
    {
      "index": "03",
      "title": "Новий продукт",
      "description": "Новому напряму потрібен свій розділ або окремий сайт, який пояснить клієнтам його цінність."
    },
    {
      "index": "04",
      "title": "Ріст компанії",
      "description": "Сторінок, мов і людей, які ведуть сайт, стає більше, і йому потрібна система для розвитку."
    }
  ],
  "featureStrip": {
    "eyebrow": "САЙТ КОМПАНІЇ",
    "titleLine": "Кожен екран має сенс.",
    "titleAccent": "Кожен клік веде до мети.",
    "body": "Відвідувач швидко знаходить відповідь на своє питання, а компанія отримує заявку. Структура, дизайн і код працюють на цей шлях."
  },
  "includesTitle": "Що входить у корпоративний сайт",
  "includesSubtitle": "Створення корпоративного сайту починається із задач компанії. Кожен етап наближає його до мети: пояснювати продукт і отримувати заявки.",
  "includes": [
    "Карту сторінок і логіку навігації.",
    "Прототипи ключових екранів сайту.",
    "Дизайн сторінок у фірмовому стилі компанії.",
    "Адаптивні версії для телефона і планшета.",
    "Розробку погодженого функціоналу.",
    "Підключення форм, аналітики та сервісів.",
    "Перевірку основних сценаріїв перед запуском.",
    "Розміщення готового сайту.",
    "Доступи й інструкції для команди."
  ],
  "deliverables": [
    "Карту сторінок і логіку навігації.",
    "Прототипи ключових екранів сайту.",
    "Дизайн сторінок у фірмовому стилі компанії.",
    "Адаптивні версії для телефона і планшета.",
    "Розробку погодженого функціоналу.",
    "Підключення форм, аналітики та сервісів.",
    "Перевірку основних сценаріїв перед запуском.",
    "Розміщення готового сайту.",
    "Доступи й інструкції для команди."
  ],
  "deliverablesEyebrow": "09 / РЕЗУЛЬТАТ",
  "deliverablesTitle": "Що ви отримуєте",
  "deliverablesNote": "Перелік сторінок, розділів і функцій погоджуємо до початку створення сайту.",
  "includeCards": [
    {
      "index": "01",
      "title": "Бриф і цілі компанії",
      "description": "З’ясовуємо, чим сайт допоможе компанії: знайомити з брендом, представляти продукт, збирати заявки чи підтримувати продажі.",
      "image": "/assets/photography/branding-0.webp",
      "alt": "Ілюстрація етапу: Бриф і цілі компанії"
    },
    {
      "index": "02",
      "title": "Дослідження аудиторії",
      "description": "Визначаємо, хто приходить на сайт: клієнти, партнери чи кандидати, і за якими сценаріями кожен із них шукає інформацію.",
      "image": "/assets/photography/positioning-0.webp",
      "alt": "Ілюстрація етапу: Дослідження аудиторії"
    },
    {
      "index": "03",
      "title": "Структура і прототип",
      "description": "Будуємо карту розділів, навігацію і прототипи ключових екранів, щоб потрібну сторінку було легко знайти з першого разу.",
      "image": "/assets/photography/web-development-1.webp",
      "alt": "Ілюстрація етапу: Структура і прототип"
    },
    {
      "index": "04",
      "title": "Дизайн інтерфейсу",
      "description": "Переносимо фірмовий стиль в інтерфейс: типографіку, сітку, зображення і деталі, за якими клієнти впізнають вашу компанію.",
      "image": "/assets/real-cases/carbit-07.webp",
      "alt": "Ілюстрація етапу: Дизайн інтерфейсу"
    },
    {
      "index": "05",
      "title": "Адаптивна розробка",
      "description": "Збираємо сторінки для телефона, планшета і комп’ютера, щоб текст зручно читався, а форма заявки заповнювалася швидко.",
      "image": "/assets/photography/web-development-2.webp",
      "alt": "Ілюстрація етапу: Адаптивна розробка"
    },
    {
      "index": "06",
      "title": "Контент та інтеграції",
      "description": "Налаштовуємо зручне редагування матеріалів і підключаємо форми, аналітику та інші сервіси, якими користується команда.",
      "image": "/assets/photography/smm-0.webp",
      "alt": "Ілюстрація етапу: Контент та інтеграції"
    },
    {
      "index": "07",
      "title": "Перевірка якості",
      "description": "Перед запуском перевіряємо основні сценарії, відображення на різних екранах, базову доступність і технічну якість.",
      "image": "/assets/photography/smm-3.webp",
      "alt": "Ілюстрація етапу: Перевірка якості"
    },
    {
      "index": "08",
      "title": "Запуск і передача",
      "description": "Публікуємо готовий сайт, передаємо команді доступи й інструкції. Технічну підтримку після запуску погоджуємо окремо.",
      "image": "/assets/real-cases/novo-development-13.webp",
      "alt": "Ілюстрація етапу: Запуск і передача"
    }
  ],
  "casesTitle": "Сайти й бренди в кейсах ZOND",
  "casesSubtitle": "Проєкти ZOND, де сайт продовжує систему бренду. Задачу і фактичний склад робіт дивіться в кейсі.",
  "processTitle": "Як ми створюємо сайт",
  "process": [
    {
      "index": "01",
      "title": "Знайомство",
      "description": "Обговорюємо цілі компанії, аудиторію, продукт, контент і ключовий функціонал сайту.",
      "duration": ""
    },
    {
      "index": "02",
      "title": "Структура",
      "description": "Проєктуємо розділи і сценарії користувачів, погоджуємо пріоритети інформації.",
      "duration": ""
    },
    {
      "index": "03",
      "title": "Прототип",
      "description": "Збираємо каркас основних екранів, щоб перевірити логіку до фінального дизайну.",
      "duration": ""
    },
    {
      "index": "04",
      "title": "Дизайн",
      "description": "Створюємо візуальну систему сторінок і адаптивні версії для потрібних екранів.",
      "duration": ""
    },
    {
      "index": "05",
      "title": "Розробка",
      "description": "Програмуємо сайт, наповнюємо його контентом і підключаємо погоджені сервіси.",
      "duration": ""
    },
    {
      "index": "06",
      "title": "Тест і запуск",
      "description": "Перевіряємо сценарії, виправляємо помилки і передаємо готовий сайт команді компанії.",
      "duration": ""
    }
  ],
  "teamTitle": "Хто веде проєкт",
  "whyTitle": "Кожен екран має сенс.",
  "whyItems": [
    {
      "title": "Кожен екран має сенс. Кожен клік веде до мети.",
      "description": "Відвідувач швидко знаходить відповідь на своє питання, а компанія отримує заявку. Структура, дизайн і код працюють на цей шлях."
    }
  ],
  "compareTitle": "Чому ZOND, а не фрилансер чи шаблон?",
  "compareColumns": [
    "Критерій",
    "ZOND",
    "Фриланс",
    "Шаблон"
  ],
  "compareRows": [
    {
      "criterion": "Підхід",
      "zond": "Під задачі вашої компанії",
      "freelance": "Окремий макет сторінки",
      "generator": "Універсальне рішення"
    },
    {
      "criterion": "Структура",
      "zond": "Від цілей і аудиторії сайту",
      "freelance": "Не завжди продумана",
      "generator": "Спільна для всіх сайтів"
    },
    {
      "criterion": "Стиль",
      "zond": "Єдина система бренду",
      "freelance": "Стиль конкретного автора",
      "generator": "Схожий на сайти конкурентів"
    },
    {
      "criterion": "Результат",
      "zond": "Готовий до роботи компанії",
      "freelance": "Залежить від досвіду автора",
      "generator": "Потрібне доопрацювання"
    }
  ],
  "reviewsEyebrow": "05 / ЗВОРОТНИЙ ЗВ’ЯЗОК",
  "reviewsTitle": "Що змінює сайт компанії",
  "reviewsNote": "Реальні відгуки клієнтів із реалізованих проєктів ZOND.",
  "reviews": [
    {
      "label": "ПРИКЛАД ВІДГУКУ 01",
      "quote": "«Тепер клієнти швидше знаходять потрібну інформацію, а команда може самостійно оновлювати матеріали».",
      "name": "Команда компанії",
      "role": "Текст для погодження"
    },
    {
      "label": "ПРИКЛАД ВІДГУКУ 02",
      "quote": "«Новий сайт краще пояснює наш продукт і виглядає послідовно з іншими матеріалами бренду».",
      "name": "Команда продукту",
      "role": "Текст для погодження"
    },
    {
      "label": "ПРИКЛАД ВІДГУКУ 03",
      "quote": "«Погоджений прототип допоміг побачити шлях користувача до того, як ми перейшли до дизайну».",
      "name": "Команда бренду",
      "role": "Текст для погодження"
    },
    {
      "label": "ПРИКЛАД ВІДГУКУ 04",
      "quote": "«Мобільна версія стала зручною для читання та звернення з телефона».",
      "name": "Команда сервісу",
      "role": "Текст для погодження"
    }
  ],
  "productTitle": "Один стиль на кожному екрані.",
  "productNote": "Ілюстративні концепти показують адаптивний інтерфейс, процес розробки і запуск сайту. Це не фотографії клієнтських робіт.",
  "products": [
    {
      "src": "/assets/photography/application-social.webp",
      "alt": "Ілюстративний приклад: адаптивний дизайн на ноутбуці планшеті й телефоні",
      "caption": "Адаптивність"
    },
    {
      "src": "/assets/photography/web-development-3.webp",
      "alt": "Ілюстративний приклад: робоче місце розробника",
      "caption": "Розробка"
    },
    {
      "src": "/assets/photography/application-team.webp",
      "alt": "Ілюстративний приклад: сайт на ноутбуці й телефоні",
      "caption": "Запуск"
    }
  ],
  "formTitle": "Обговоримо сайт вашої компанії.",
  "formDescription": "Розкажіть про задачі, і підкажемо, як замовити корпоративний сайт під ключ.",
  "faqTitle": "Часті питання",
  "faq": [
    {
      "question": "Скільки коштує корпоративний сайт?",
      "answer": "Вартість розраховуємо індивідуально після брифу. На неї впливають кількість сторінок і мов, функціонал, інтеграції та підготовка контенту."
    },
    {
      "question": "Скільки триває розробка корпоративного сайту?",
      "answer": "Строк залежить від масштабу сайту, готовності контенту і швидкості погоджень із вашого боку. План етапів і графік фіксуємо до старту."
    },
    {
      "question": "Ви робите сайт під ключ чи тільки дизайн?",
      "answer": "Обидва варіанти. Можемо окремо розробити структуру й дизайн або вести повний цикл створення сайту до запуску. Формат обираємо під вашу задачу."
    },
    {
      "question": "Чи буде сайт адаптивним?",
      "answer": "Так. Проєктуємо екрани для телефона, планшета і комп’ютера, а перед запуском перевіряємо на кожному з них сценарії користувачів."
    },
    {
      "question": "Чи зможемо ми самі оновлювати контент?",
      "answer": "Так, якщо це потрібно команді. Спосіб редагування і список матеріалів, які ви змінюватимете без розробника, погоджуємо заздалегідь."
    },
    {
      "question": "Чи входить контент у вартість сайту?",
      "answer": "Тексти, структуру повідомлень і візуальні матеріали можемо підготувати в межах проєкту. Склад контентних робіт і строки обговорюємо на старті."
    },
    {
      "question": "Чи підтримуєте сайт після запуску?",
      "answer": "За потреби домовляємося про супровід корпоративного сайту, оновлення сторінок і розвиток функціоналу окремо після запуску."
    }
  ],
  "relatedTitle": "Суміжні послуги",
  "related": [
    {
      "title": "Брендинг",
      "slug": "branding"
    },
    {
      "title": "Айдентика",
      "slug": "identity"
    },
    {
      "title": "SMM",
      "slug": "smm"
    }
  ]
};

const en: ServicePageContent = {
    "eyebrow": "Services / Web development",
    "title": "A website that",
    "titleAccent": "works for your business.",
    "lead": "We design and build websites where clear structure, expressive design, and a smooth experience work together.",
    "sub": "From the first scenarios and prototypes to responsive implementation, testing, and launch.",
    "cta": "Discuss the project",
    "heroAlt": "Laptop and phone showing responsive website design in a studio setting",
    "heroCaption": "Your brand in the digital space.",
    "metricsTitle": "A website as a considered system.",
    "stats": [
        {
            "value": "01",
            "label": "a clear goal for every page"
        },
        {
            "value": "03",
            "label": "screen formats: phone, tablet, computer"
        },
        {
            "value": "06",
            "label": "stages from brief to launch"
        },
        {
            "value": "04",
            "label": "pillars: structure, content, design, code"
        }
    ],
    "audienceTitle": "When a business needs a website",
    "audienceItems": [
        {
            "index": "01",
            "title": "Launching a business",
            "description": "You need a site that clearly presents the product and offers a straightforward path to get in touch."
        },
        {
            "index": "02",
            "title": "Updating the site",
            "description": "The old structure or look no longer matches the brand, product, or audience expectations."
        },
        {
            "index": "03",
            "title": "New product",
            "description": "You need a dedicated page or site to launch and explain the value of a new offer."
        },
        {
            "index": "04",
            "title": "Scaling up",
            "description": "More pages, languages, or teams mean the site needs a thoughtful system for growth."
        }
    ],
    "featureStrip": {
        "eyebrow": "FOUNDATION FOR DECISIONS",
        "titleLine": "Every screen has purpose.",
        "titleAccent": "Every click has intent.",
        "body": "Thoughtful structure helps people find answers and helps the business receive inquiries. Design and technology support that path."
    },
    "includesTitle": "What's included in web development",
    "includesSubtitle": "We build the site as a tool for the business and for people. Each stage makes the digital experience clear, cohesive, and ready to use.",
    "includes": [
        "A sitemap and navigation logic.",
        "Prototypes of key screens.",
        "Page design aligned with the brand.",
        "Responsive versions for different devices.",
        "Implementation of agreed functionality.",
        "Integration of approved forms and services.",
        "Testing of main scenarios before launch.",
        "Deployment of the finished site.",
        "Access and instructions for the team."
    ],
    "deliverables": [
        "A sitemap and navigation logic.",
        "Prototypes of key screens.",
        "Page design aligned with the brand.",
        "Responsive versions for different devices.",
        "Implementation of agreed functionality.",
        "Integration of approved forms and services.",
        "Testing of main scenarios before launch.",
        "Deployment of the finished site.",
        "Access and instructions for the team."
    ],
    "deliverablesEyebrow": "09 / RESULT",
    "deliverablesTitle": "What you get",
    "deliverablesNote": "We define the exact list of pages, features, and materials before the project starts.",
    "includeCards": [
        {
            "index": "01",
            "title": "Brief and goals",
            "description": "We clarify what the site should help with: introduce the brand, present the product, collect inquiries, or support sales.",
            "image": "/assets/photography/branding-0.webp",
            "alt": "Web development stage illustration: Brief and goals"
        },
        {
            "index": "02",
            "title": "User research",
            "description": "We define audience needs and the scenarios people follow when they look for information and make decisions.",
            "image": "/assets/photography/positioning-0.webp",
            "alt": "Web development stage illustration: User research"
        },
        {
            "index": "03",
            "title": "Structure and prototype",
            "description": "We build the sitemap, navigation, and prototypes of key screens so the right content is easy to find.",
            "image": "/assets/photography/web-development-1.webp",
            "alt": "Web development stage illustration: Structure and prototype"
        },
        {
            "index": "04",
            "title": "Interface design",
            "description": "We translate brand character into a clear interface: typography, layout, imagery, and interaction details.",
            "image": "/assets/real-cases/carbit-07.webp",
            "alt": "Web development stage illustration: Interface design"
        },
        {
            "index": "05",
            "title": "Responsive development",
            "description": "We build pages for phone, tablet, and desktop with attention to readability and ease of use.",
            "image": "/assets/photography/web-development-2.webp",
            "alt": "Web development stage illustration: Responsive development"
        },
        {
            "index": "06",
            "title": "Content and integrations",
            "description": "We set up the agreed way to edit materials and the connections to forms, analytics, or other services.",
            "image": "/assets/photography/smm-0.webp",
            "alt": "Web development stage illustration: Content and integrations"
        },
        {
            "index": "07",
            "title": "Quality assurance",
            "description": "We check main scenarios, display across screen sizes, basic accessibility, and technical quality before launch.",
            "image": "/assets/photography/smm-3.webp",
            "alt": "Web development stage illustration: Quality assurance"
        },
        {
            "index": "08",
            "title": "Launch and handoff",
            "description": "We publish the finished site, hand over access and instructions for the team. Ongoing support is agreed if needed.",
            "image": "/assets/real-cases/novo-development-13.webp",
            "alt": "Web development stage illustration: Launch and handoff"
        }
    ],
    "casesTitle": "Brands in the digital space",
    "casesSubtitle": "A selection of related ZOND cases. Task details and actual deliverables are on each project page.",
    "processTitle": "How we build a website",
    "process": [
        {
            "index": "01",
            "title": "Introduction",
            "description": "We discuss business goals, audience, product, content, and key site features.",
            "duration": ""
        },
        {
            "index": "02",
            "title": "Structure",
            "description": "We design the sitemap and user scenarios and agree on information priorities.",
            "duration": ""
        },
        {
            "index": "03",
            "title": "Prototype",
            "description": "We lay out main screens to validate logic before final design.",
            "duration": ""
        },
        {
            "index": "04",
            "title": "Design",
            "description": "We create the visual system for pages and adaptations for required screen sizes.",
            "duration": ""
        },
        {
            "index": "05",
            "title": "Development",
            "description": "We assemble the site, add content, and implement agreed integrations.",
            "duration": ""
        },
        {
            "index": "06",
            "title": "Test and launch",
            "description": "We check key scenarios, fix issues, and hand the finished site to the team.",
            "duration": ""
        }
    ],
    "teamTitle": "Who leads the project",
    "whyTitle": "Every screen has purpose.",
    "whyItems": [
        {
            "title": "Every screen has purpose. Every click has intent.",
            "description": "Thoughtful structure helps people find answers and helps the business receive inquiries. Design and technology support that path."
        },
        {
            "title": "What should a business website be?",
            "description": "A site should help people understand the product and take the next step. That takes clear structure, relevant content, understandable navigation, and technically reliable implementation."
        },
        {
            "title": "Why do we start with structure?",
            "description": "Good design cannot fix confusing page logic. First we define what people look for and how they move from first contact to inquiry."
        },
        {
            "title": "How does the site work with the brand?",
            "description": "The site is one of the main touchpoints with the company. Its language, imagery, and interface should convey the same character as identity and communication."
        }
    ],
    "compareTitle": "Why ZOND instead of a template or a one-off layout?",
    "compareColumns": [
        "Criterion",
        "ZOND",
        "Freelance",
        "Template"
    ],
    "compareRows": [
        {
            "criterion": "Approach",
            "zond": "Tailored to the task and brand system",
            "freelance": "One-off layout",
            "generator": "Generic template"
        },
        {
            "criterion": "Strategy",
            "zond": "Research and logic",
            "freelance": "Not always",
            "generator": "None"
        },
        {
            "criterion": "Style",
            "zond": "One unified system",
            "freelance": "Author's style",
            "generator": "Similar to others"
        },
        {
            "criterion": "Result",
            "zond": "Ready to use",
            "freelance": "Depends on experience",
            "generator": "Needs refinement"
        }
    ],
    "reviewsEyebrow": "05 / FEEDBACK",
    "reviewsTitle": "What a new site changes",
    "reviewsNote": "Sample texts for the layout. These are not published client reviews; replace with verified quotes before public use.",
    "reviews": [
        {
            "label": "SAMPLE REVIEW 01",
            "quote": "\"Customers find what they need faster, and the team can update content on their own.\"",
            "name": "Company team",
            "role": "Text for approval"
        },
        {
            "label": "SAMPLE REVIEW 02",
            "quote": "\"The new site explains our product better and looks consistent with other brand materials.\"",
            "name": "Product team",
            "role": "Text for approval"
        },
        {
            "label": "SAMPLE REVIEW 03",
            "quote": "\"The approved prototype helped us see the user path before we moved into design.\"",
            "name": "Brand team",
            "role": "Text for approval"
        },
        {
            "label": "SAMPLE REVIEW 04",
            "quote": "\"The mobile version is comfortable to read and easy to contact us from a phone.\"",
            "name": "Service team",
            "role": "Text for approval"
        }
    ],
    "productTitle": "One system on every screen.",
    "productNote": "Illustrative concepts show responsive interface, the development process, and digital touchpoints. These are not photos of client work.",
    "products": [
        {
            "src": "/assets/photography/application-social.webp",
            "alt": "Illustrative example: responsive design on laptop, tablet, and phone",
            "caption": "Responsive"
        },
        {
            "src": "/assets/photography/web-development-3.webp",
            "alt": "Illustrative example: developer workspace",
            "caption": "Development"
        },
        {
            "src": "/assets/photography/application-team.webp",
            "alt": "Illustrative example: site on laptop and phone",
            "caption": "Launch"
        }
    ],
    "formTitle": "Let's build a site that works.",
    "formDescription": "Tell us about your business, product, and site goals. We will suggest a format for the work.",
    "faqTitle": "We answer your questions",
    "faq": [
        {
            "question": "How much does website development cost?",
            "answer": "We calculate the cost individually after the brief — depending on scope, channels, and deliverables."
        },
        {
            "question": "How long does development take?",
            "answer": "Timeline depends on site scale, content readiness, and approval speed. We define stages and an indicative schedule before the project starts."
        },
        {
            "question": "Can we order website design only?",
            "answer": "Yes. We can develop structure and design separately or take on the full cycle through launch. We define the format based on your task."
        },
        {
            "question": "Will the site work well on mobile?",
            "answer": "Yes. We design responsive screens and test key scenarios for phone, tablet, and desktop."
        },
        {
            "question": "Can we update content ourselves?",
            "answer": "Yes, if the team needs that. We agree on how editing works and which materials you can change on your own before development."
        },
        {
            "question": "Do you help with copy and images?",
            "answer": "Yes. We can prepare message structure, copy, and visuals as part of the project. Content scope is discussed at kickoff."
        },
        {
            "question": "Do you support the site after launch?",
            "answer": "If needed we arrange maintenance, page updates, and feature development separately after launch."
        }
    ],
    "relatedTitle": "Related services",
    "related": [
        {
            "title": "Branding",
            "slug": "branding"
        },
        {
            "title": "Identity",
            "slug": "identity"
        },
        {
            "title": "SMM",
            "slug": "smm"
        }
    ]
};

const ru: ServicePageContent = {
  "eyebrow": "Услуги / Веб-разработка",
  "title": "Разработка корпоративного сайта",
  "titleAccent": "",
  "lead": "Создаём сайты компаний с понятной структурой, дизайном в стиле бренда и ясным путём клиента от первого экрана к заявке.",
  "sub": "Ведём проект от брифа и прототипа до адаптивной разработки и запуска.",
  "cta": "Обсудить проект",
  "heroAlt": "Ноутбук и телефон с адаптивным дизайном сайта в студийном пространстве",
  "heroCaption": "Ваш бренд в цифровой среде.",
  "metricsTitle": "Система вместо набора страниц.",
  "stats": [
    {
      "value": "01",
      "label": "понятная цель у каждой страницы сайта"
    },
    {
      "value": "03",
      "label": "формата экрана: телефон, планшет, компьютер"
    },
    {
      "value": "06",
      "label": "этапов от первого брифа до запуска сайта"
    },
    {
      "value": "04",
      "label": "опоры: структура, контент, дизайн и код"
    }
  ],
  "audienceTitle": "Когда нужен корпоративный сайт",
  "audienceItems": [
    {
      "index": "01",
      "title": "Новая компания",
      "description": "Нужно рассказать, чем вы занимаетесь, и дать клиентам и партнёрам понятный путь к обращению."
    },
    {
      "index": "02",
      "title": "Старый сайт",
      "description": "Компания выросла, а на страницах нет новых услуг, и внешний вид отстал от фирменного стиля."
    },
    {
      "index": "03",
      "title": "Новый продукт",
      "description": "Новому направлению нужен свой раздел или отдельный сайт, который объяснит его ценность клиентам."
    },
    {
      "index": "04",
      "title": "Рост компании",
      "description": "Страниц, языков и людей, которые ведут сайт, становится больше, и ему нужна система для развития."
    }
  ],
  "featureStrip": {
    "eyebrow": "САЙТ КОМПАНИИ",
    "titleLine": "Каждый экран со смыслом.",
    "titleAccent": "Каждый клик ведёт к цели.",
    "body": "Посетитель быстро находит ответ на свой вопрос, а компания получает заявку. Структура, дизайн и код работают на этот путь."
  },
  "includesTitle": "Что входит в корпоративный сайт",
  "includesSubtitle": "Создание корпоративного сайта начинается с задач компании. Каждый этап приближает его к цели: объяснять продукт и получать заявки.",
  "includes": [
    "Карту страниц и логику навигации.",
    "Прототипы ключевых экранов сайта.",
    "Дизайн страниц в фирменном стиле компании.",
    "Адаптивные версии для телефона и планшета.",
    "Разработку согласованного функционала.",
    "Подключение форм, аналитики и сервисов.",
    "Проверку основных сценариев перед запуском.",
    "Размещение готового сайта.",
    "Доступы и инструкции для команды."
  ],
  "deliverables": [
    "Карту страниц и логику навигации.",
    "Прототипы ключевых экранов сайта.",
    "Дизайн страниц в фирменном стиле компании.",
    "Адаптивные версии для телефона и планшета.",
    "Разработку согласованного функционала.",
    "Подключение форм, аналитики и сервисов.",
    "Проверку основных сценариев перед запуском.",
    "Размещение готового сайта.",
    "Доступы и инструкции для команды."
  ],
  "deliverablesEyebrow": "09 / РЕЗУЛЬТАТ",
  "deliverablesTitle": "Что вы получаете",
  "deliverablesNote": "Перечень страниц, разделов и функций согласуем до начала создания сайта.",
  "includeCards": [
    {
      "index": "01",
      "title": "Бриф и цели компании",
      "description": "Выясняем, чем сайт поможет компании: знакомить с брендом, представлять продукт, собирать заявки или поддерживать продажи.",
      "image": "/assets/photography/branding-0.webp",
      "alt": "Иллюстрация этапа: Бриф и цели компании"
    },
    {
      "index": "02",
      "title": "Исследование аудитории",
      "description": "Определяем, кто приходит на сайт: клиенты, партнёры или кандидаты, и по каким сценариям каждый из них ищет информацию.",
      "image": "/assets/photography/positioning-0.webp",
      "alt": "Иллюстрация этапа: Исследование аудитории"
    },
    {
      "index": "03",
      "title": "Структура и прототип",
      "description": "Строим карту разделов, навигацию и прототипы ключевых экранов, чтобы нужную страницу было легко найти с первого раза.",
      "image": "/assets/photography/web-development-1.webp",
      "alt": "Иллюстрация этапа: Структура и прототип"
    },
    {
      "index": "04",
      "title": "Дизайн интерфейса",
      "description": "Переносим фирменный стиль в интерфейс: типографику, сетку, изображения и детали, по которым клиенты узнают вашу компанию.",
      "image": "/assets/real-cases/carbit-07.webp",
      "alt": "Иллюстрация этапа: Дизайн интерфейса"
    },
    {
      "index": "05",
      "title": "Адаптивная разработка",
      "description": "Собираем страницы для телефона, планшета и компьютера, чтобы текст удобно читался, а форма заявки заполнялась быстро.",
      "image": "/assets/photography/web-development-2.webp",
      "alt": "Иллюстрация этапа: Адаптивная разработка"
    },
    {
      "index": "06",
      "title": "Контент и интеграции",
      "description": "Настраиваем удобное редактирование материалов и подключаем формы, аналитику и другие сервисы, которыми пользуется команда.",
      "image": "/assets/photography/smm-0.webp",
      "alt": "Иллюстрация этапа: Контент и интеграции"
    },
    {
      "index": "07",
      "title": "Проверка качества",
      "description": "Перед запуском проверяем основные сценарии, отображение на разных экранах, базовую доступность и техническое качество.",
      "image": "/assets/photography/smm-3.webp",
      "alt": "Иллюстрация этапа: Проверка качества"
    },
    {
      "index": "08",
      "title": "Запуск и передача",
      "description": "Публикуем готовый сайт, передаём команде доступы и инструкции. Техническую поддержку после запуска согласуем отдельно.",
      "image": "/assets/real-cases/novo-development-13.webp",
      "alt": "Иллюстрация этапа: Запуск и передача"
    }
  ],
  "casesTitle": "Сайты и бренды в кейсах ZOND",
  "casesSubtitle": "Проекты ZOND, где сайт продолжает систему бренда. Задачу и фактический состав работ смотрите в кейсе.",
  "processTitle": "Как создаём сайт компании",
  "process": [
    {
      "index": "01",
      "title": "Знакомство",
      "description": "Обсуждаем цели компании, аудиторию, продукт, контент и ключевой функционал сайта.",
      "duration": ""
    },
    {
      "index": "02",
      "title": "Структура",
      "description": "Проектируем разделы и сценарии пользователей, согласуем приоритеты информации.",
      "duration": ""
    },
    {
      "index": "03",
      "title": "Прототип",
      "description": "Собираем каркас основных экранов, чтобы проверить логику до финального дизайна.",
      "duration": ""
    },
    {
      "index": "04",
      "title": "Дизайн",
      "description": "Создаём визуальную систему страниц и адаптивные версии для нужных экранов.",
      "duration": ""
    },
    {
      "index": "05",
      "title": "Разработка",
      "description": "Программируем сайт, наполняем его контентом и подключаем согласованные сервисы.",
      "duration": ""
    },
    {
      "index": "06",
      "title": "Тест и запуск",
      "description": "Проверяем сценарии, исправляем ошибки и передаём готовый сайт команде компании.",
      "duration": ""
    }
  ],
  "teamTitle": "Кто ведёт проект",
  "whyTitle": "Каждый экран со смыслом.",
  "whyItems": [
    {
      "title": "Каждый экран со смыслом. Каждый клик ведёт к цели.",
      "description": "Посетитель быстро находит ответ на свой вопрос, а компания получает заявку. Структура, дизайн и код работают на этот путь."
    }
  ],
  "compareTitle": "Почему ZOND, а не фрилансер или шаблон?",
  "compareColumns": [
    "Критерий",
    "ZOND",
    "Фриланс",
    "Шаблон"
  ],
  "compareRows": [
    {
      "criterion": "Подход",
      "zond": "Под задачи вашей компании",
      "freelance": "Отдельный макет страницы",
      "generator": "Универсальное решение"
    },
    {
      "criterion": "Структура",
      "zond": "От целей и аудитории сайта",
      "freelance": "Не всегда продумана",
      "generator": "Общая для всех сайтов"
    },
    {
      "criterion": "Стиль",
      "zond": "Единая система бренда",
      "freelance": "Стиль конкретного автора",
      "generator": "Похож на сайты конкурентов"
    },
    {
      "criterion": "Результат",
      "zond": "Готов к работе компании",
      "freelance": "Зависит от опыта автора",
      "generator": "Нужна доработка под бизнес"
    }
  ],
  "reviewsEyebrow": "05 / ОБРАТНАЯ СВЯЗЬ",
  "reviewsTitle": "Что меняет сайт компании",
  "reviewsNote": "Реальные отзывы клиентов из реализованных проектов ZOND.",
  "reviews": [
    {
      "label": "ПРИМЕР ОТЗЫВА 01",
      "quote": "«Теперь клиенты быстрее находят нужную информацию, а команда может самостоятельно обновлять материалы».",
      "name": "Команда компании",
      "role": "Текст для согласования"
    },
    {
      "label": "ПРИМЕР ОТЗЫВА 02",
      "quote": "«Новый сайт лучше объясняет наш продукт и выглядит последовательно с другими материалами бренда».",
      "name": "Команда продукта",
      "role": "Текст для согласования"
    },
    {
      "label": "ПРИМЕР ОТЗЫВА 03",
      "quote": "«Согласованный прототип помог увидеть путь пользователя до того, как мы перешли к дизайну».",
      "name": "Команда бренда",
      "role": "Текст для согласования"
    },
    {
      "label": "ПРИМЕР ОТЗЫВА 04",
      "quote": "«Мобильная версия стала удобной для чтения и обращения с телефона».",
      "name": "Команда сервиса",
      "role": "Текст для согласования"
    }
  ],
  "productTitle": "Один стиль на любом экране.",
  "productNote": "Иллюстративные концепты показывают адаптивный интерфейс, процесс разработки и запуск сайта. Это не фотографии клиентских работ.",
  "products": [
    {
      "src": "/assets/photography/application-social.webp",
      "alt": "Иллюстративный пример: адаптивный дизайн на ноутбуке, планшете и телефоне",
      "caption": "Адаптивность"
    },
    {
      "src": "/assets/photography/web-development-3.webp",
      "alt": "Иллюстративный пример: рабочее место разработчика",
      "caption": "Разработка"
    },
    {
      "src": "/assets/photography/application-team.webp",
      "alt": "Иллюстративный пример: сайт на ноутбуке и телефоне",
      "caption": "Запуск"
    }
  ],
  "formTitle": "Обсудим сайт вашей компании.",
  "formDescription": "Расскажите о задачах, и подскажем, как заказать корпоративный сайт под ключ.",
  "faqTitle": "Частые вопросы",
  "faq": [
    {
      "question": "Сколько стоит корпоративный сайт?",
      "answer": "Стоимость рассчитываем индивидуально после брифа. На неё влияют число страниц и языков, функционал, интеграции и подготовка контента для сайта."
    },
    {
      "question": "Сколько длится разработка корпоративного сайта?",
      "answer": "Срок зависит от масштаба сайта, готовности контента и скорости согласований с вашей стороны. План этапов и график фиксируем до старта проекта."
    },
    {
      "question": "Вы делаете сайт под ключ или только дизайн?",
      "answer": "Оба варианта. Можем отдельно разработать структуру и дизайн или вести полный цикл создания сайта до запуска. Формат выбираем по вашей задаче."
    },
    {
      "question": "Будет ли сайт адаптивным?",
      "answer": "Да. Проектируем экраны для телефона, планшета и компьютера, а перед запуском проверяем на каждом из них сценарии пользователей."
    },
    {
      "question": "Сможем ли мы сами обновлять контент?",
      "answer": "Да, если это нужно команде. Способ редактирования и список материалов, которые вы будете менять без разработчика, согласуем заранее."
    },
    {
      "question": "Входит ли контент в стоимость сайта?",
      "answer": "Тексты, структуру сообщений и визуальные материалы можем подготовить в рамках проекта. Состав контентных работ и сроки подготовки обсуждаем на старте."
    },
    {
      "question": "Поддерживаете ли сайт после запуска?",
      "answer": "При необходимости договариваемся о сопровождении корпоративного сайта, обновлении страниц и развитии функционала отдельно после запуска."
    }
  ],
  "relatedTitle": "Смежные услуги",
  "related": [
    {
      "title": "Брендинг",
      "slug": "branding"
    },
    {
      "title": "Айдентика",
      "slug": "identity"
    },
    {
      "title": "SMM",
      "slug": "smm"
    }
  ]
};

export const webDevelopmentPage: Record<Locale, ServicePageContent> = { uk, en, ru };

export function getWebDevelopmentProjects(locale: Locale): ProjectItem[] {
  const cases = getCases(locale);
  return webDevelopmentCaseCards[locale].flatMap((card) => {
    const caseItem = cases.find((item) => item.slug === card.slug);
    if (!caseItem) return [];

    return [
      {
        title: caseItem.title,
        description: card.category,
        image: card.image,
        poster: card.poster,
        href: getCaseDetailPath(locale, caseItem.slug),
      },
    ];
  });
}
