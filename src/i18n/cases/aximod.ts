import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";
import { applyGalleryCaptionMap } from "./localize-gallery-captions";

const m = (file: string) => `/assets/cases/aximod/${file}`;

const aximodMedia = [
  "media/aximod/01.jpg",
  "media/aximod/02.jpg",
  "media/aximod/03.jpg",
  "media/aximod/04.jpg",
  "media/aximod/05.jpg",
  "media/aximod/06.jpg",
  "media/aximod/07.jpg",
  "media/aximod/08.jpg",
  "media/aximod/09.jpg",
  "media/aximod/10.jpg",
  "media/aximod/11.jpg",
  "media/aximod/12.jpg",
  "media/aximod/13.jpg",
  "media/aximod/14.jpg",
  "media/aximod/15.jpg",
  "media/aximod/16.jpg",
  "media/aximod/17.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Інженерна точність.\nВпевненість за кермом.",
    paragraphs: [
      "AXIMOD — бренд автомобільних гальмівних систем. Його продукт поєднує диски, супорти та інші компоненти в єдиний механізм. В основі характеру бренду — інженерний підхід, точність і контроль.",
      "Візуальний образ мав відповідати самому продукту: бути зібраним, технічним і виразним. Ми побудували айдентику, яка працює як на деталі гальмівної системи, так і в пакованні, рекламі та повсякденному контакті з брендом.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Клієнт", value: "AXIMOD", accent: true },
      { label: "Напрям", value: "Автокомпоненти" },
      { label: "Продукт", value: "Гальмівні системи" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("01.jpg"), caption: "Гальмівна система AXIMOD" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.jpg"), caption: "Логотип і знак AXIMOD" },
      { src: m("03.jpg"), caption: "Типографіка — IBM Plex Sans" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Показати інженерію.\nСтворити впізнаваність.",
    paragraphs: [
      "Завдання ZOND — сформувати цілісний образ AXIMOD і передати в ньому силу технічного продукту. Бренд мав вирізнятися в автомобільній категорії, залишаючись стриманим і зрозумілим.",
      "Потрібна була система для різних матеріалів і масштабів: нанесення на супорт, невеликого брелока, візитки, коробки, одягу й рекламного постера. Тому ключовими стали чітка геометрія, контраст і послідовне використання фірмових елементів.",
    ],
    deliverables: [
      { title: "Точність", description: "Геометрія й типографіка, що передають інженерний характер." },
      { title: "Упізнаваність", description: "Виразний знак і помаранчевий акцент, повʼязані з продуктом." },
      { title: "Системність", description: "Єдині принципи для металу, паперу, тканини та екрана." },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("04.jpg"), caption: "Паковання" }],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Від інженерної форми\nдо мови бренду.",
    paragraphs: [
      "Знак AXIMOD побудований на зустрічних геометричних формах. Він працює разом із характерним написанням назви та окремо — як компактний маркер бренду. Його геометрія продовжується у двох фірмових графічних елементах із градієнтами, що передають динаміку.",
      "Електричний помаранчевий #FF3900 задає акцент, а графітовий #141419, сталевий синій #394960 і металевий сірий #C7C7C7 формують технічне оточення. IBM Plex Sans обʼєднує систему: Regular — для основних текстів, Medium — для заголовків і акцентів.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ КОМУНІКАЦІЇ",
    text: "Швидкість — це вибір.\nКонтроль — необхідність.",
    footer: "AXIMOD / ENGINEERED FOR CONTROL",
  },
  {
    type: "palette",
    colors: [
      { name: "Electric Orange", hex: "#FF3900", bg: "#FF3900", fg: "#FFFFFF" },
      { name: "Graphite", hex: "#141419", bg: "#141419", fg: "#FFFFFF" },
      { name: "Steel Blue", hex: "#394960", bg: "#394960", fg: "#FFFFFF" },
      { name: "Metallic Grey", hex: "#C7C7C7", bg: "#C7C7C7", fg: "#141419" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.jpg"), caption: "Кольорова система" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.jpg"), caption: "Футболка — передня сторона" },
      { src: m("07.jpg"), caption: "Футболка — задня сторона" },
    ],
  },
  {
    type: "section",
    index: "04",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна система.\nУ кожній деталі.",
    paragraphs: [
      "Логотип і фірмові елементи поєднують паковання, поліграфію та мерч. На кожному носії зберігаються характерні пропорції, контраст і ритм бренду.",
      "Для цифрових і рекламних матеріалів у центрі композиції — продукт. Короткі повідомлення та графіка AXIMOD підтримують його інженерний характер.",
    ],
    deliverables: [
      { title: "Логотип і знак" },
      { title: "Фірмовий стиль і брендбук" },
      { title: "Паковання" },
      { title: "Ділова поліграфія" },
      { title: "Одяг та аксесуари" },
      { title: "Digital і реклама" },
    ],
    variant: "book",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Instagram / профіль" },
      { src: m("09.jpg"), caption: "Фірмовий бланк" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("10.jpg"), caption: "Поліграфія / візитки" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("11.jpg"), caption: "Конверт і картка" },
      { src: m("12.jpg"), caption: "Кепка / деталь" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("13.jpg"), caption: "Худі / в середовищі" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.jpg"), caption: "Digital / рекламні макети" },
      { src: m("15.jpg"), caption: "Аксесуар / брелок" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.jpg"), caption: "Візитка поруч із продуктом" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("17.jpg"), caption: "Зовнішня комунікація" }],
  },
  {
    type: "section",
    index: "05",
    kicker: "РЕЗУЛЬТАТ",
    title: "Єдиний характер.\nВід продукту до комунікації.",
    paragraphs: [
      "Для AXIMOD створено логотип, фірмовий стиль і брендбук. Візуальну систему розгорнуто на пакованні, діловій поліграфії, одязі, аксесуарах, у соціальних мережах і рекламних матеріалах.",
      "Знак, палітра, типографіка та градієнтна графіка повʼязують усі носії. Це дає бренду впізнаваний образ і зрозумілу основу для подальших комунікацій — від невеликої деталі до великого формату.",
    ],
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Инженерная точность.\nУверенность за рулём.",
      paragraphs: [
        "AXIMOD — бренд автомобильных тормозных систем. Его продукт объединяет диски, суппорты и другие компоненты в единый механизм. В основе характера бренда — инженерный подход, точность и контроль.",
        "Визуальный образ должен был соответствовать самому продукту: быть собранным, техническим и выразительным. Мы построили айдентику, которая работает и на детали тормозной системы, и в упаковке, рекламе и повседневном контакте с брендом.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Клиент", value: "AXIMOD", accent: true },
        { label: "Направление", value: "Автокомпоненты" },
        { label: "Продукт", value: "Тормозные системы" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Показать инженерию.\nСоздать узнаваемость.",
      paragraphs: [
        "Задача ZOND — сформировать целостный образ AXIMOD и передать в нём силу технического продукта. Бренд должен был выделяться в автомобильной категории, оставаясь сдержанным и понятным.",
        "Нужна была система для разных материалов и масштабов: нанесение на суппорт, небольшой брелок, визитка, коробка, одежда и рекламный постер. Поэтому ключевыми стали чёткая геометрия, контраст и последовательное использование фирменных элементов.",
      ],
      deliverables: [
        { title: "Точность", description: "Геометрия и типографика, которые передают инженерный характер." },
        { title: "Узнаваемость", description: "Выразительный знак и оранжевый акцент, связанные с продуктом." },
        { title: "Системность", description: "Единые принципы для металла, бумаги, ткани и экрана." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "От инженерной формы\nк языку бренда.",
      paragraphs: [
        "Знак AXIMOD построен на встречных геометрических формах. Он работает вместе с характерным написанием названия и отдельно — как компактный маркер бренда. Его геометрия продолжается в двух фирменных графических элементах с градиентами, передающими динамику.",
        "Электрический оранжевый #FF3900 задаёт акцент, а графитовый #141419, стальной синий #394960 и металлический серый #C7C7C7 формируют техническое окружение. IBM Plex Sans объединяет систему: Regular — для основных текстов, Medium — для заголовков и акцентов.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ КОММУНИКАЦИИ",
      text: "Скорость — это выбор.\nКонтроль — необходимость.",
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Одна система.\nВ каждой детали.",
      paragraphs: [
        "Логотип и фирменные элементы объединяют упаковку, полиграфию и мерч. На каждом носителе сохраняются характерные пропорции, контраст и ритм бренда.",
        "Для цифровых и рекламных материалов в центре композиции — продукт. Короткие сообщения и графика AXIMOD поддерживают его инженерный характер.",
      ],
      deliverables: [
        { title: "Логотип и знак" },
        { title: "Фирменный стиль и брендбук" },
        { title: "Упаковка" },
        { title: "Деловая полиграфия" },
        { title: "Одежда и аксессуары" },
        { title: "Digital и реклама" },
      ],
    };
  }
  if (block.type === "section" && block.index === "05") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Единый характер.\nОт продукта к коммуникации.",
      paragraphs: [
        "Для AXIMOD созданы логотип, фирменный стиль и брендбук. Визуальная система развернута на упаковке, деловой полиграфии, одежде, аксессуарах, в социальных сетях и рекламных материалах.",
        "Знак, палитра, типографика и градиентная графика связывают все носители. Это даёт бренду узнаваемый образ и понятную основу для дальнейших коммуникаций — от небольшой детали до большого формата.",
      ],
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT THE CLIENT",
      title: "Engineering precision.\nConfidence behind the wheel.",
      paragraphs: [
        "AXIMOD is a brand of automotive braking systems. Its product brings discs, calipers, and other components into one mechanism. The brand character is built on an engineering mindset, precision, and control.",
        "The visual image had to match the product itself: composed, technical, and expressive. We built an identity that works on brake-system details as well as in packaging, advertising, and everyday brand contact.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Client", value: "AXIMOD", accent: true },
        { label: "Field", value: "Auto components" },
        { label: "Product", value: "Braking systems" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "BRIEF",
      title: "Show the engineering.\nBuild recognition.",
      paragraphs: [
        "ZOND’s task was to shape a coherent AXIMOD image and express the strength of a technical product. The brand had to stand out in the automotive category while staying restrained and clear.",
        "We needed a system for different materials and scales: a caliper mark, a small keychain, a business card, a box, apparel, and a poster. Clear geometry, contrast, and consistent brand elements became the core.",
      ],
      deliverables: [
        { title: "Precision", description: "Geometry and type that convey an engineering character." },
        { title: "Recognition", description: "A distinctive mark and orange accent linked to the product." },
        { title: "Consistency", description: "Shared principles for metal, paper, fabric, and screen." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "From engineering form\nto brand language.",
      paragraphs: [
        "The AXIMOD mark is built on opposing geometric forms. It works with the distinctive wordmark and alone as a compact brand marker. Its geometry continues in two gradient graphic elements that express dynamics.",
        "Electric orange #FF3900 sets the accent, while graphite #141419, steel blue #394960, and metallic grey #C7C7C7 form the technical surround. IBM Plex Sans unites the system: Regular for body text, Medium for headlines and accents.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "COMMUNICATION IDEA",
      text: "Speed is a choice.\nControl is a necessity.",
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "SCOPE",
      title: "One system.\nIn every detail.",
      paragraphs: [
        "The logo and brand elements unite packaging, print, and merch. Characteristic proportions, contrast, and rhythm stay consistent across every medium.",
        "In digital and advertising layouts the product stays in the center. Short messages and AXIMOD graphics support its engineering character.",
      ],
      deliverables: [
        { title: "Logo and mark" },
        { title: "Identity and brand book" },
        { title: "Packaging" },
        { title: "Business stationery" },
        { title: "Apparel and accessories" },
        { title: "Digital and advertising" },
      ],
    };
  }
  if (block.type === "section" && block.index === "05") {
    return {
      ...block,
      kicker: "RESULT",
      title: "One character.\nFrom product to communication.",
      paragraphs: [
        "For AXIMOD we created a logo, corporate style, and brand book. The visual system was applied across packaging, stationery, apparel, accessories, social media, and advertising.",
        "The mark, palette, typography, and gradient graphics connect every medium — giving the brand a recognizable image and a clear base for future communication, from a small detail to a large format.",
      ],
    };
  }
  return block;
});

const captionsRu: Record<string, string> = {
  [m("01.jpg")]: "Тормозная система AXIMOD",
  [m("02.jpg")]: "Логотип и знак AXIMOD",
  [m("03.jpg")]: "Типографика — IBM Plex Sans",
  [m("04.jpg")]: "Упаковка",
  [m("05.jpg")]: "Цветовая система",
  [m("06.jpg")]: "Футболка — лицевая сторона",
  [m("07.jpg")]: "Футболка — оборотная сторона",
  [m("08.jpg")]: "Instagram / профиль",
  [m("09.jpg")]: "Фирменный бланк",
  [m("10.jpg")]: "Полиграфия / визитки",
  [m("11.jpg")]: "Конверт и карточка",
  [m("12.jpg")]: "Кепка / деталь",
  [m("13.jpg")]: "Худи / в среде",
  [m("14.jpg")]: "Digital / рекламные макеты",
  [m("15.jpg")]: "Аксессуар / брелок",
  [m("16.jpg")]: "Визитка рядом с продуктом",
  [m("17.jpg")]: "Наружная коммуникация",
};

const captionsEn: Record<string, string> = {
  [m("01.jpg")]: "AXIMOD braking system",
  [m("02.jpg")]: "AXIMOD logo and mark",
  [m("03.jpg")]: "Typography — IBM Plex Sans",
  [m("04.jpg")]: "Packaging",
  [m("05.jpg")]: "Color system",
  [m("06.jpg")]: "T-shirt — front",
  [m("07.jpg")]: "T-shirt — back",
  [m("08.jpg")]: "Instagram / profile",
  [m("09.jpg")]: "Letterhead",
  [m("10.jpg")]: "Print / business cards",
  [m("11.jpg")]: "Envelope and card",
  [m("12.jpg")]: "Cap / detail",
  [m("13.jpg")]: "Hoodie / in context",
  [m("14.jpg")]: "Digital / ad layouts",
  [m("15.jpg")]: "Accessory / keychain",
  [m("16.jpg")]: "Business card with the product",
  [m("17.jpg")]: "Outdoor communication",
};

export function getAximodBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return applyGalleryCaptionMap(blocksRu, captionsRu);
  if (locale === "en") return applyGalleryCaptionMap(blocksEn, captionsEn);
  return blocksUk;
}

export const aximodShared = {
  slug: "aximod",
  cover: m("cover.jpg"),
  listCover: m("cover.mp4"),
  media: aximodMedia,
  theme: {
    accent: "#FF3900",
    accentInk: "#FFFFFF",
    manifestoBg: "#141419",
    manifestoFg: "#FFFFFF",
    manifestoEm: "#FF3900",
  },
  body: `[IMG: media/aximod/01.jpg]`,
};

export const aximodCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "AXIMOD",
    description:
      "Брендинг і айдентика AXIMOD — гальмівні системи. Логотип, фірмовий стиль, паковання, поліграфія, мерч і digital.",
    tagline: "Інженерія гальмування.\nВпевненість у русі.",
    serviceTag: "Брендинг + айдентика",
  },
  ru: {
    title: "AXIMOD",
    description:
      "Брендинг и айдентика AXIMOD — тормозные системы. Логотип, фирменный стиль, упаковка, полиграфия, мерч и digital.",
    tagline: "Инженерия торможения.\nУверенность в движении.",
    serviceTag: "Брендинг + айдентика",
  },
  en: {
    title: "AXIMOD",
    description:
      "AXIMOD branding and identity for braking systems: logo, corporate style, packaging, print, merch, and digital.",
    tagline: "Braking engineered.\nConfidence in motion.",
    serviceTag: "Branding + identity",
  },
};
