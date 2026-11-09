import type { Locale } from "@/i18n/config";
import type { ServicePageContent } from "@/i18n/logo";
import { withServiceProductImages } from "@/i18n/service-products";

const uk: ServicePageContent = {
  eyebrow: "Послуги / Ілюстрація",
  title: "Ілюстрація",
  titleAccent: "Комерційна ілюстрація на замовлення",
  lead:
    "Корпоративні герої, комікси й графіка, за якими ваш продукт упізнають на полиці та в соцмережах.",
  sub: "",
  cta: "Обговорити проєкт",
  heroAlt: "Комерційна ілюстрація на замовлення",
  heroCaption: "Персонажі та графіка, які працюють на бренд.",
  metricsTitle: "Цифри студії",
  stats: [
    { value: "6", label: "років\nна ринку" },
    { value: "1", label: "ілюстратор" },
    { value: "50+", label: "малюнків" },
    { value: "55", label: "проєктів" },
    { value: "30+", label: "ніш\nу роботі" },
  ],
  audienceTitle: "Кому потрібна ілюстрація",
  audienceItems: [
    { index: "01", title: "Виробникам товарів" },
    { index: "02", title: "Онлайн-сервісам" },
    { index: "03", title: "Видавництвам і медіа" },
    { index: "04", title: "Молодим брендам" },
  ],
  includesTitle: "Що ви отримаєте",
  includes: [
    "Кілька ескізів на вибір",
    "Корпоративного героя для бренду",
    "Чистову ілюстрацію у векторі",
    "Вихідний макет із шарами",
    "Файли у форматах AI, EPS, PDF, SVG і PNG",
    "Окремі версії під друк і під екран",
    "Кольорову та монохромну графіку",
    "Права на комерційне використання",
  ],
  includeCards: [
    {
      index: "01",
      title: "Ескізи на вибір",
      description: "Кілька варіантів образу, з яких обираєте напрям для фіналу.",
      image: "/services/character.jpg",
      alt: "Ескізи ілюстрації",
    },
    {
      index: "02",
      title: "Корпоративний герой",
      description: "Персонаж бренду, який підсилює впізнаваність і емоційний зв’язок.",
      image: "/branding/include-character.jpg",
      alt: "Корпоративний герой бренду",
    },
    {
      index: "03",
      title: "Чистова ілюстрація",
      description: "Фінальна графіка у векторі, готова до масштабування.",
      image: "/services/graphic.jpg",
      alt: "Чистова ілюстрація у векторі",
    },
    {
      index: "04",
      title: "Вихідний макет",
      description: "Файл із шарами для подальших правок і адаптацій.",
      image: "/services/identity.jpg",
      alt: "Вихідний макет із шарами",
    },
    {
      index: "05",
      title: "Пакет форматів",
      description: "AI, EPS, PDF, SVG і PNG — для друку, екрана та вебу.",
      image: "/services/web.jpg",
      alt: "Файли ілюстрації в різних форматах",
    },
    {
      index: "06",
      title: "Версії під друк і екран",
      description: "Окремі адаптації під поліграфію та digital-носії.",
      image: "/services/packaging.jpg",
      alt: "Версії ілюстрації під друк і екран",
    },
    {
      index: "07",
      title: "Колір і монохром",
      description: "Кольорова та монохромна графіка для різних контекстів.",
      image: "/services/communication.jpg",
      alt: "Кольорова та монохромна графіка",
    },
    {
      index: "08",
      title: "Комерційні права",
      description: "Права на використання фіксуємо в договорі до старту робіт.",
      image: "/services/strategy.jpg",
      alt: "Права на комерційне використання",
    },
  ],
  casesTitle: "Кейси комерційної ілюстрації",
  processTitle: "Як ми малюємо",
  process: [
    {
      index: "01",
      title: "Консультація і бриф",
      description: "Ви описуєте задачу, ми уточнюємо.",
      duration: "1 день",
    },
    {
      index: "02",
      title: "Мозковий штурм",
      description: "Команда ZOND придумує образ.",
      duration: "1 день",
    },
    {
      index: "03",
      title: "Створення ескізу",
      description: "Показуємо кілька варіантів.",
      duration: "1 день",
    },
    {
      index: "04",
      title: "Затвердження образу",
      description: "Обираємо ескіз і опрацьовуємо його.",
      duration: "1 день",
    },
    {
      index: "05",
      title: "Фінальні макети",
      description: "Збираємо файли й передаємо вам.",
      duration: "1 день",
    },
  ],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Чому ZOND",
  whyItems: [
    {
      title: "Малюємо під айдентику бренду",
      description: "Спираємось на вашу палітру та фірмові шрифти.",
    },
    {
      title: "Добираємо ілюстратора",
      description: "Корпоративні герої, комікси, графіка для реклами.",
    },
    {
      title: "Файли готові до друку",
      description: "Вектор і растр, окремі версії під екран і поліграфію.",
    },
    {
      title: "Права переходять вам",
      description: "Умови фіксуємо в договорі до початку роботи.",
    },
  ],
  compareTitle: "Чому ZOND, а не фриланс чи генератор?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    {
      criterion: "Стиль",
      zond: "Під ваш бренд",
      freelance: "Стиль автора",
      generator: "Схожий на інші",
    },
    {
      criterion: "Права",
      zond: "Пишемо в договір",
      freelance: "Не завжди",
      generator: "За ліцензією",
    },
    {
      criterion: "Правки",
      zond: "Є в кошторисі",
      freelance: "За домовленістю",
      generator: "Новий запит",
    },
    {
      criterion: "Після здачі",
      zond: "Той самий стиль",
      freelance: "Якщо вільний",
      generator: "Інший результат",
    },
  ],
  reviewsTitle: "Відгуки",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    {
      label: "Приклад відгуку 01",
      quote:
        "Потрібен був корпоративний герой для упаковки та соцмереж. Отримали кілька ескізів, обрали образ і швидко вийшли на фінальні файли.",
      name: "Ім'я клієнта · Компанія",
      role: "Корпоративний герой",
    },
    {
      label: "Приклад відгуку 02",
      quote:
        "Важливо було намалювати серію в одному стилі під наш брендбук. Усі роботи виглядають цілісно на сайті й у рекламі.",
      name: "Ім'я клієнта · Компанія",
      role: "Серія ілюстрацій",
    },
    {
      label: "Приклад відгуку 03",
      quote:
        "Передали вектор і растр під друк та екран, плюс вихідник із шарами. Зручно правити дрібниці без повторного замовлення.",
      name: "Ім'я клієнта · Компанія",
      role: "Файли та права",
    },
  ],
  productTitle: "Ілюстрація в житті бренду.",
  productNote: "Персонажі та графіка на продуктах і в комунікації.",
  products: withServiceProductImages([
    { alt: "Ілюстрація на брендованій кружці", caption: "Брендовані носії" },
    { alt: "Стікери з персонажем бренду", caption: "Мерч" },
    { alt: "Ілюстрації в соцмережах", caption: "Соцмережі" },
    { alt: "Принт із героєм на одязі", caption: "Одяг" },
    { alt: "Ілюстрація на упаковці", caption: "Упаковка" },
    { alt: "Ілюстрація на зовнішній рекламі", caption: "Outdoor" },
  ]),
  formTitle: "Розкажіть про своє завдання",
  formDescription:
    "Заповніть форму. Консультація безкоштовна, ціну назвемо після брифу.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Які є різновиди комерційної ілюстрації та де вони застосовуються?",
      answer:
        "Комерційна ілюстрація буває чотирьох типів. Це намальований герой, окремий товар, ціла сцена і схема з цифрами. Героя беруть на упаковку й у рекламу, товар малюють для карток у каталозі, сцену для банерів і соцмереж, схему для сайту та презентацій.",
    },
    {
      question: "Скільки коштує комерційна ілюстрація та як формується ціна?",
      answer:
        "Скільки коштує ілюстрація, залежить від складності сюжету, кількості робіт у серії та дрібних деталей у малюнку. Важливо й те, де він працюватиме, від картки товару до зовнішньої реклами. Ілюстратор називає ціну після брифу, і вона стоїть у кошторисі до початку роботи.",
    },
    {
      question: "Скільки часу займає створення ілюстрації?",
      answer:
        "Термін залежить від обсягу серії, складності сюжету та кількості правок, тому ми ставимо його в кошторис після брифу. Називати строк навмання сенсу немає. Створити ілюстрацію вдається швидше, коли ви одразу показуєте референси. Орієнтовний термін на одну роботу 1–2 робочі дні, на серію 4–5 днів.",
    },
    {
      question: "Кому належать права на ілюстрацію після оплати?",
      answer:
        "Майнові права на готову роботу переходять вам. Ви можете ставити зображення на упаковку, у рекламу, на сайт і в сам продукт. Обсяг переданих прав, термін і територію використання фіксує договір, який підписуємо до початку роботи.",
    },
    {
      question: "У яких форматах ви передаєте готові ілюстрації?",
      answer:
        "Ми передаємо векторні й растрові версії, окремо під екран і під друк, разом із вихідним макетом із шарами. Точний перелік форматів: AI, EPS, PDF, SVG, PNG.",
    },
    {
      question: "Скільки правок входить у вартість роботи?",
      answer:
        "Кількість правок ми записуємо в кошторис до початку роботи. У вартість входять два кола правок. Дрібні уточнення на кшталт відтінку чи товщини лінії входять у ці кола й окремо не рахуються. Роботу понад два кола рахуємо погодинно, година коштує 2 000 грн.",
    },
    {
      question: "Чи можна замовити ілюстрацію в стилі нашого бренду?",
      answer:
        "Так. Перед роботою ми переглядаємо ваш брендбук і беремо звідти кольори, шрифти та манеру графіки. Якщо гайдлайну немає, ілюстратор показує кілька стильових напрямів на вибір і коротко описує затверджений.",
    },
    {
      question: "У чому різниця між комерційним ілюстратором та вільним художником?",
      answer:
        "Художник малює для себе і продає готову роботу такою, як вона є, а комерційний ілюстратор працює за брифом. Він спирається на фірмовий стиль замовника, показує ескіз на погодження, віддає файли в потрібних форматах і передає права на використання.",
    },
  ],
  relatedTitle: "Суміжні послуги",
  related: [
    { title: "Упаковка", slug: "packaging" },
    { title: "Брендинг", slug: "branding" },
    { title: "Брендбук", slug: "brandbook" },
  ],
};

const en: ServicePageContent = {
  ...uk,
  eyebrow: "Services / Illustration",
  title: "Illustration",
  titleAccent: "Custom commercial illustration",
  lead:
    "Brand characters, comics and graphics that make your product recognizable on the shelf and on social media.",
  sub: "",
  cta: "Discuss the project",
  heroAlt: "Custom commercial illustration",
  heroCaption: "Characters and graphics that work for the brand.",
  metricsTitle: "The studio in numbers",
  stats: [
    { value: "6", label: "years\non the market" },
    { value: "1", label: "illustrator" },
    { value: "50+", label: "illustrations" },
    { value: "55", label: "projects" },
    { value: "30+", label: "niches\nworked in" },
  ],
  audienceTitle: "Who needs illustration",
  audienceItems: [
    { index: "01", title: "Product manufacturers" },
    { index: "02", title: "Online services" },
    { index: "03", title: "Publishers and media" },
    { index: "04", title: "Young brands" },
  ],
  includesTitle: "What you get",
  includes: [
    "Several sketches to choose from",
    "A brand character",
    "A final vector illustration",
    "A layered source file",
    "Files in AI, EPS, PDF, SVG and PNG",
    "Separate versions for print and screen",
    "Color and monochrome graphics",
    "Commercial usage rights",
  ],
  includeCards: [
    {
      index: "01",
      title: "Sketches to choose from",
      description: "Several takes on the image, so you can pick the direction for the final version.",
      image: "/services/character.jpg",
      alt: "Illustration sketches",
    },
    {
      index: "02",
      title: "Brand character",
      description: "A character that makes the brand easier to recognize and builds an emotional bond.",
      image: "/branding/include-character.jpg",
      alt: "Brand character",
    },
    {
      index: "03",
      title: "Final illustration",
      description: "Finished vector artwork that scales to any size.",
      image: "/services/graphic.jpg",
      alt: "Final vector illustration",
    },
    {
      index: "04",
      title: "Source file",
      description: "A layered file for later edits and adaptations.",
      image: "/services/identity.jpg",
      alt: "Layered source file",
    },
    {
      index: "05",
      title: "Set of formats",
      description: "AI, EPS, PDF, SVG and PNG for print, screen and the web.",
      image: "/services/web.jpg",
      alt: "Illustration files in different formats",
    },
    {
      index: "06",
      title: "Print and screen versions",
      description: "Separate adaptations for printed materials and digital media.",
      image: "/services/packaging.jpg",
      alt: "Illustration versions for print and screen",
    },
    {
      index: "07",
      title: "Color and monochrome",
      description: "Color and monochrome graphics for different contexts.",
      image: "/services/communication.jpg",
      alt: "Color and monochrome graphics",
    },
    {
      index: "08",
      title: "Commercial rights",
      description: "Usage rights are set out in the contract before work begins.",
      image: "/services/strategy.jpg",
      alt: "Commercial usage rights",
    },
  ],
  casesTitle: "Commercial illustration cases",
  processTitle: "How we draw",
  process: [
    {
      index: "01",
      title: "Consultation and brief",
      description: "You describe the task, we ask follow-up questions.",
      duration: "1 day",
    },
    {
      index: "02",
      title: "Brainstorm",
      description: "The ZOND team comes up with the image.",
      duration: "1 day",
    },
    {
      index: "03",
      title: "Sketching",
      description: "We show several options.",
      duration: "1 day",
    },
    {
      index: "04",
      title: "Image approval",
      description: "We pick a sketch and work it out in detail.",
      duration: "1 day",
    },
    {
      index: "05",
      title: "Final files",
      description: "We put the files together and hand them over.",
      duration: "1 day",
    },
  ],
  teamTitle: "Who leads the project",
  whyTitle: "Why ZOND",
  whyItems: [
    {
      title: "We draw to your brand identity",
      description: "We work from your palette and brand fonts.",
    },
    {
      title: "We pick the right illustrator",
      description: "Brand characters, comics, graphics for advertising.",
    },
    {
      title: "Files are print-ready",
      description: "Vector and raster, with separate versions for screen and print.",
    },
    {
      title: "The rights pass to you",
      description: "We set out the terms in the contract before work begins.",
    },
  ],
  compareTitle: "Why ZOND and not a freelancer or a generator?",
  compareColumns: ["Criterion", "ZOND", "Freelancer", "Generator (AI)"],
  compareRows: [
    {
      criterion: "Style",
      zond: "Made for your brand",
      freelance: "The artist's own style",
      generator: "Looks like everything else",
    },
    {
      criterion: "Rights",
      zond: "Written into the contract",
      freelance: "Not always",
      generator: "Under the license",
    },
    {
      criterion: "Revisions",
      zond: "Included in the estimate",
      freelance: "By agreement",
      generator: "A new prompt",
    },
    {
      criterion: "After delivery",
      zond: "The same style",
      freelance: "If they are free",
      generator: "A different result",
    },
  ],
  reviewsTitle: "Reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    {
      label: "Sample review 01",
      quote:
        "We needed a brand character for our packaging and social media. We got several sketches, chose the image and quickly reached the final files.",
      name: "Client name · Company",
      role: "Brand character",
    },
    {
      label: "Sample review 02",
      quote:
        "It was important to draw a series in one style that follows our brand book. All the pieces look consistent on the website and in ads.",
      name: "Client name · Company",
      role: "Illustration series",
    },
    {
      label: "Sample review 03",
      quote:
        "They handed over vector and raster files for print and screen, plus a layered source file. It is easy to fix small details without placing a new order.",
      name: "Client name · Company",
      role: "Files and rights",
    },
  ],
  productTitle: "Illustration in the life of a brand.",
  productNote: "Characters and graphics on products and in communication.",
  products: withServiceProductImages([
    { alt: "Illustration on a branded mug", caption: "Branded media" },
    { alt: "Stickers with the brand character", caption: "Merch" },
    { alt: "Illustrations on social media", caption: "Social media" },
    { alt: "Character print on clothing", caption: "Clothing" },
    { alt: "Illustration on packaging", caption: "Packaging" },
    { alt: "Illustration in outdoor advertising", caption: "Outdoor" },
  ]),
  formTitle: "Tell us about your task",
  formDescription:
    "Fill in the form. The consultation is free, and we name the price after the brief.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "What types of commercial illustration are there and where are they used?",
      answer:
        "Commercial illustration comes in four types: a drawn character, a single product, a full scene and a diagram with figures. A character goes on packaging and into advertising, products are drawn for catalog cards, scenes are used for banners and social media, and diagrams for websites and presentations.",
    },
    {
      question: "How much does commercial illustration cost and how is the price set?",
      answer:
        "The cost of an illustration depends on how complex the story is, how many pieces are in the series and how much fine detail the drawing has. It also matters where it will be used, from a product card to outdoor advertising. The illustrator names the price after the brief, and it is in the estimate before work begins.",
    },
    {
      question: "How long does it take to create an illustration?",
      answer:
        "The timeline depends on the size of the series, the complexity of the story and the number of revisions, so we put it in the estimate after the brief. There is no point naming a deadline at random. An illustration gets done faster when you show references right away. A rough timeline is 1-2 working days for one piece and 4-5 days for a series.",
    },
    {
      question: "Who owns the rights to the illustration after payment?",
      answer:
        "The property rights to the finished work pass to you. You can use the image on packaging, in advertising, on your website and in the product itself. The scope of the rights transferred, the term and the territory of use are set out in the contract we sign before work begins.",
    },
    {
      question: "In what formats do you deliver finished illustrations?",
      answer:
        "We hand over vector and raster versions, separately for screen and for print, together with a layered source file. The exact list of formats: AI, EPS, PDF, SVG, PNG.",
    },
    {
      question: "How many revisions are included in the price?",
      answer:
        "We write the number of revisions into the estimate before work begins. The price includes two rounds of revisions. Small tweaks such as a shade or a line weight are part of those rounds and are not charged separately. Work beyond two rounds is billed by the hour at UAH 2,000 per hour.",
    },
    {
      question: "Can we order an illustration in our brand style?",
      answer:
        "Yes. Before we start, we go through your brand book and take the colors, fonts and graphic manner from it. If there are no guidelines, the illustrator shows several style directions to choose from and briefly describes the approved one.",
    },
    {
      question: "What is the difference between a commercial illustrator and a fine artist?",
      answer:
        "An artist draws for themselves and sells the finished work as it is, while a commercial illustrator works from a brief. They rely on the client's brand style, show a sketch for approval, deliver files in the required formats and transfer the usage rights.",
    },
  ],
  relatedTitle: "Related services",
  related: [
    { title: "Packaging", slug: "packaging" },
    { title: "Branding", slug: "branding" },
    { title: "Brand book", slug: "brandbook" },
  ],
};

const ru: ServicePageContent = {
  ...uk,
  eyebrow: "Услуги / Иллюстрация",
  title: "Иллюстрация",
  titleAccent: "Студия иллюстрации для бизнеса",
  lead:
    "Рисуем корпоративных героев, комиксы и графику для упаковки, сайта и рекламы, цену называем после брифа.",
  cta: "Обсудить проект",
  heroAlt: "Коммерческая иллюстрация на заказ",
  heroCaption: "Персонажи и графика, которые работают на бренд.",
  metricsTitle: "Цифры студии",
  stats: [
    { value: "6", label: "лет\nна рынке" },
    { value: "1", label: "иллюстратор" },
    { value: "50+", label: "рисунков" },
    { value: "55", label: "проектов" },
    { value: "30+", label: "ниш\nв работе" },
  ],
  audienceTitle: "Кому нужна иллюстрация",
  audienceItems: [
    { index: "01", title: "Производителям товаров" },
    { index: "02", title: "Онлайн-сервисам" },
    { index: "03", title: "Издательствам и медиа" },
    { index: "04", title: "Молодым брендам" },
  ],
  includesTitle: "Что вы получите",
  includes: [
    "Несколько эскизов на выбор",
    "Корпоративного героя бренда",
    "Чистовую работу в векторе",
    "Исходный макет со слоями",
    "Файлы в форматах AI, EPS, PDF, SVG и PNG",
    "Версии под печать и под экран",
    "Цветную и монохромную графику",
    "Права на коммерческое использование",
  ],
  includeCards: [
    {
      index: "01",
      title: "Эскизы на выбор",
      description: "Несколько вариантов образа, из которых выбираете направление для финала.",
      image: "/services/character.jpg",
      alt: "Эскизы иллюстрации",
    },
    {
      index: "02",
      title: "Корпоративный герой",
      description: "Персонаж бренда, который усиливает узнаваемость и эмоциональную связь.",
      image: "/branding/include-character.jpg",
      alt: "Корпоративный герой бренда",
    },
    {
      index: "03",
      title: "Чистовая иллюстрация",
      description: "Финальная графика в векторе, готовая к масштабированию.",
      image: "/services/graphic.jpg",
      alt: "Чистовая иллюстрация в векторе",
    },
    {
      index: "04",
      title: "Исходный макет",
      description: "Файл со слоями для дальнейших правок и адаптаций.",
      image: "/services/identity.jpg",
      alt: "Исходный макет со слоями",
    },
    {
      index: "05",
      title: "Пакет форматов",
      description: "AI, EPS, PDF, SVG и PNG — для печати, экрана и веба.",
      image: "/services/web.jpg",
      alt: "Файлы иллюстрации в разных форматах",
    },
    {
      index: "06",
      title: "Версии под печать и экран",
      description: "Отдельные адаптации под полиграфию и digital-носители.",
      image: "/services/packaging.jpg",
      alt: "Версии иллюстрации под печать и экран",
    },
    {
      index: "07",
      title: "Цвет и монохром",
      description: "Цветная и монохромная графика для разных контекстов.",
      image: "/services/communication.jpg",
      alt: "Цветная и монохромная графика",
    },
    {
      index: "08",
      title: "Коммерческие права",
      description: "Права на использование фиксируем в договоре до старта работ.",
      image: "/services/strategy.jpg",
      alt: "Права на коммерческое использование",
    },
  ],
  casesTitle: "Кейсы иллюстрации",
  processTitle: "Как мы рисуем",
  process: [
    { index: "01", title: "Консультация и бриф", description: "Вы описываете задачу, мы уточняем.", duration: "1 день" },
    { index: "02", title: "Мозговой штурм", description: "Команда ZOND придумывает образ.", duration: "1 день" },
    { index: "03", title: "Создание эскиза", description: "Показываем несколько вариантов.", duration: "1 день" },
    { index: "04", title: "Утверждение образа", description: "Выбираем эскиз и прорабатываем его.", duration: "1 день" },
    { index: "05", title: "Финальные макеты", description: "Собираем файлы и передаем вам.", duration: "1 день" },
  ],
  teamTitle: "Кто ведет проект",
  whyTitle: "Студия иллюстрации ZOND",
  whyItems: [
    { title: "Рисуем под айдентику бренда", description: "Опираемся на вашу палитру и фирменные шрифты." },
    { title: "Иллюстратор под ваш жанр", description: "Корпоративные герои, комиксы, графика для рекламы." },
    { title: "Ведем проект после сдачи", description: "Новые сюжеты рисуем в том же стиле." },
    { title: "Права переходят вам", description: "Условия фиксируем в договоре до начала работы." },
  ],
  compareTitle: "Почему ZOND, а не фриланс или генератор?",
  compareColumns: ["Критерий", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    { criterion: "Стиль", zond: "Под ваш бренд", freelance: "Стиль автора", generator: "Похож на другие" },
    { criterion: "Права", zond: "Пишем в договор", freelance: "Не всегда", generator: "По лицензии" },
    { criterion: "Правки", zond: "В смете заранее", freelance: "По договору", generator: "Новый запрос" },
    { criterion: "После сдачи", zond: "Тот же стиль", freelance: "Если свободен", generator: "Другой результат" },
  ],
  reviewsTitle: "Отзывы",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    { label: "Пример отзыва 01", quote: "Нужен был корпоративный герой для упаковки и соцсетей. Получили несколько эскизов, выбрали образ и быстро вышли на финальные файлы.", name: "Имя клиента · Компания", role: "Корпоративный герой" },
    { label: "Пример отзыва 02", quote: "Важно было нарисовать серию в одном стиле под наш брендбук. Все работы выглядят целостно на сайте и в рекламе.", name: "Имя клиента · Компания", role: "Серия иллюстраций" },
    { label: "Пример отзыва 03", quote: "Передали вектор и растр под печать и экран, плюс исходник со слоями. Удобно править мелочи без повторного заказа.", name: "Имя клиента · Компания", role: "Файлы и права" },
  ],
  productTitle: "Иллюстрация в жизни бренда.",
  productNote: "Персонажи и графика на продуктах и в коммуникации.",
  products: withServiceProductImages([
    { alt: "Иллюстрация на брендированной кружке", caption: "Брендированные носители" },
    { alt: "Стикеры с персонажем бренда", caption: "Мерч" },
    { alt: "Иллюстрации в соцсетях", caption: "Соцсети" },
    { alt: "Принт с героем на одежде", caption: "Одежда" },
    { alt: "Иллюстрация на упаковке", caption: "Упаковка" },
    { alt: "Иллюстрация на наружной рекламе", caption: "Outdoor" },
  ]),
  formTitle: "Расскажите о своей задаче",
  formDescription:
    "Заполните форму. Бесплатная консультация, цену назовем после брифа.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Сколько стоит иллюстрация и из чего складывается цена?",
      answer:
        "Сумму определяют сложность сюжета, количество персонажей и число работ в серии. Добавьте сюда технику, срок и права, которые вы забираете. Точный расчет мы ставим в смету после брифа.",
    },
    {
      question: "Сколько стоит нарисовать иллюстрацию персонажа?",
      answer:
        "Корпоративный герой стоит дороже одиночного рисунка, потому что вместе с ним мы рисуем несколько поз и ракурсов. Такой набор нужен, чтобы персонаж одинаково смотрелся на упаковке, на сайте и в рекламе.",
    },
    {
      question: "Какая стоимость иллюстрации для сайта и для упаковки?",
      answer:
        "Рисунок для сайта мы готовим в нескольких размерах под экран, для упаковки в печатном качестве и с запасом под обрез. Работа для упаковки выходит дороже, к ней добавляются требования типографии.",
    },
    {
      question: "Сколько стоит иллюстрация в Украине, если заказчик не из Киева?",
      answer:
        "Город на расчет не влияет, мы работаем со всей Украиной. Бриф заполняется онлайн, эскизы и правки согласуем в переписке, готовые файлы вы получаете ссылкой. Приезжать в офис для этого не нужно.",
    },
    {
      question: "Сколько времени занимает создание иллюстрации?",
      answer:
        "Срок зависит от объема серии, сложности сюжета и количества правок, поэтому мы ставим его в смету после брифа. Одиночная работа занимает 1–2 рабочих дня, серия из нескольких рисунков 4–5 дней, а называть срок наугад смысла нет.",
    },
    {
      question: "Кому принадлежат права на иллюстрацию после оплаты?",
      answer:
        "Имущественные права на готовую работу переходят вам. Вы можете ставить изображение на упаковку, в рекламу, на сайт и на мерч. Объем, срок и территорию использования фиксирует договор, который подписываем до начала работы.",
    },
    {
      question: "В каких форматах вы передаете готовые иллюстрации?",
      answer:
        "Мы передаем векторные и растровые версии, отдельно под экран и под печать, вместе с исходным макетом со слоями. Точный перечень форматов: AI, EPS, PDF, SVG, PNG.",
    },
    {
      question: "Сколько правок входит в стоимость работы?",
      answer:
        "Количество правок мы записываем в смету до начала работы. В стоимость входят два круга правок. Мелкие уточнения вроде оттенка или толщины линии входят в них и отдельно не считаются. Работу сверх двух кругов считаем по часам, час стоит 2 000 грн.",
    },
  ],
  relatedTitle: "Смежные услуги",
  related: [
    { title: "Упаковка", slug: "packaging" },
    { title: "Брендинг", slug: "branding" },
    { title: "Брендбук", slug: "brandbook" },
  ],
};

export const illustrationPage: Record<Locale, ServicePageContent> = {
  uk,
  en,
  ru,
};
