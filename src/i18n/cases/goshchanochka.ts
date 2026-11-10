import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";
import { applyGalleryCaptionMap } from "./localize-gallery-captions";

const m = (file: string) => `/assets/cases/goshchanochka/${file}`;

const goshchanochkaMedia = [
  "media/goshchanochka/01.jpg",
  "media/goshchanochka/02.jpg",
  "media/goshchanochka/03.jpg",
  "media/goshchanochka/04.jpg",
  "media/goshchanochka/05.jpg",
  "media/goshchanochka/06.jpg",
  "media/goshchanochka/07.jpg",
  "media/goshchanochka/08.jpg",
  "media/goshchanochka/09.jpg",
  "media/goshchanochka/10.jpg",
  "media/goshchanochka/11.jpg",
  "media/goshchanochka/12.jpg",
  "media/goshchanochka/13.jpg",
  "media/goshchanochka/14.jpg",
  "media/goshchanochka/15.jpg",
  "media/goshchanochka/16.jpg",
  "media/goshchanochka/17.jpg",
  "media/goshchanochka/18.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Молочні продукти.\nБлизькі щодня.",
    paragraphs: [
      "«Гощаночка» — український виробник молочної продукції. Кефір до сніданку, сметана до домашніх страв, масло та йогурт — звичні продукти, які люди обирають щодня. Дизайн мав зробити цей асортимент зрозумілим і впізнаваним на полиці.",
      "У кейсі поєднано айдентику «Гощаночки», дизайн паковання та його застосування в рекламі. Поряд з основною лінійкою представлені питні йогурти Yougurtinni, сиркові десерти FRUGURTINNI та сметана «Бабусин Хутір» — кожна серія зі своїм настроєм.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "молочні продукти" },
      { label: "Продукт", value: "брендинг, паковання" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.jpg"), caption: "Логотип / фірмовий персонаж" },
      { src: m("03.jpg"), caption: "Типографіка / Kapelka New + Fixel Text" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Впізнати бренд.\nЗнайти свій продукт.",
    paragraphs: [
      "Завдання ZOND — вибудувати виразну подачу молочного асортименту. Логотип, назва продукту, смак і жирність мають читатися в зрозумілій послідовності. Важливо, щоб паковання привертало увагу й допомагало швидко розрізняти товари.",
      "Систему потрібно було адаптувати до різних форматів: мʼякого пакета, пляшки, стаканчика та обгортки масла. Водночас реклама, одяг персоналу й транспорт мали продовжувати образ бренду за межами продуктової полиці.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Упізнаваність", description: "Виразний логотип і персонаж, які легко помітити на пакованні." },
      { title: "Навігація", description: "Чіткі назви й кольорові акценти для різних продуктів та смаків." },
      { title: "Гнучкість", description: "Дизайн, що працює на пакеті, пляшці, стаканчику й у рекламі." },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("04.jpg"), caption: "Кефір / фруктова лінійка" }],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Знайомі образи.\nЗрозуміла подача.",
    paragraphs: [
      "У центрі основної айдентики — ілюстрована корівка та тепла золотиста стрічка з назвою «Гощаночка». Молочне біле тло, блакитне небо, зелені луки й персонажі створюють близький, доброзичливий образ. Kapelka New додає заголовкам мʼякого характеру, а Fixel Text підтримує читабельність основної інформації.",
      "У пакованні акценти залежать від продукту. Для повсякденної молочної лінійки працюють знайомі пейзажі й великі назви. У питних йогуртах головну роль отримують фрукти та кольори смаків, а в сиркових десертах — апетитна подача й контрастні кольорові блоки.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ КОМУНІКАЦІЇ",
    text: "Традиції смаку.\nСучасна подача.",
    footer: "ГОЩАНОЧКА / BRAND & PACKAGING DESIGN",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("12.jpg"), caption: "Гощаночка / фруктові йогурти" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("05.jpg"), caption: "Кефір / мʼяке паковання" },
      { src: m("06.jpg"), caption: "Сметана / основна лінійка" },
    ],
  },
  {
    type: "section",
    index: "",
    kicker: "СКЛАД РОБОТИ",
    title: "Різні продукти.\nПродумана система.",
    paragraphs: [],
    rules: [
      "Логотип і фірмовий образ",
      "Типографіка",
      "Дизайн паковання",
      "Продуктові серії",
      "Рекламні матеріали",
      "Транспорт та одяг",
    ],
    variant: "book",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.jpg"), caption: "Масло / обгортка" },
      { src: m("08.jpg"), caption: "Кефір / пляшка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("11.jpg"), caption: "FRUGURTINNI / шоколадний десерт" },
      { src: m("13.jpg"), caption: "FRUGURTINNI / серія десертів" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Yougurtinni / на полиці" },
      { src: m("16.jpg"), caption: "Yougurtinni / асортимент" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.jpg"), caption: "Yougurtinni / реклама в магазині" },
      { src: m("15.jpg"), caption: "Бабусин Хутір / сметана" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("09.jpg"), caption: "Фірмовий одяг / фартух" },
      { src: m("17.jpg"), caption: "FRUGURTINNI / вибір на полиці" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("18.jpg"), caption: "Yougurtinni / смакова навігація" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Від паковання\nдо щоденного вибору.",
    paragraphs: [
      "Кейс обʼєднує логотип і типографіку «Гощаночки», оформлення молочної продукції та продуктових серій, рекламні носії й брендований одяг. Дизайн показано в різних ситуаціях: на полиці, у кошику, на столі та в міському середовищі.",
      "Кожна серія має власні впізнавані ознаки, а назва, смак і формат продукту залишаються головними орієнтирами. Це дає основу для послідовного розвитку асортименту та наступних рекламних матеріалів.",
    ],
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Молочные продукты.\nБлизкие каждый день.",
      paragraphs: [
        "«Гощаночка» — украинский производитель молочной продукции. Кефир к завтраку, сметана к домашним блюдам, масло и йогурт — привычные продукты, которые люди выбирают каждый день. Дизайн должен был сделать этот ассортимент понятным и узнаваемым на полке.",
        "В кейсе соединены айдентика «Гощаночки», дизайн упаковки и его применение в рекламе. Рядом с основной линейкой представлены питьевые йогурты Yougurtinni, сырковые десерты FRUGURTINNI и сметана «Бабусин Хутір» — каждая серия со своим настроением.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Украина", accent: true, countryCode: "UA" },
        { label: "Ниша", value: "молочные продукты" },
        { label: "Продукт", value: "брендинг, упаковка" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Узнать бренд.\nНайти свой продукт.",
      paragraphs: [
        "Задача ZOND — выстроить выразительную подачу молочного ассортимента. Логотип, название продукта, вкус и жирность должны читаться в понятной последовательности. Важно, чтобы упаковка привлекала внимание и помогала быстро различать товары.",
        "Систему нужно было адаптировать к разным форматам: мягкого пакета, бутылки, стаканчика и обёртки масла. При этом реклама, одежда персонала и транспорт должны были продолжать образ бренда за пределами продуктовой полки.",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Узнаваемость", description: "Выразительный логотип и персонаж, которые легко заметить на упаковке." },
        { title: "Навигация", description: "Чёткие названия и цветовые акценты для разных продуктов и вкусов." },
        { title: "Гибкость", description: "Дизайн, который работает на пакете, бутылке, стаканчике и в рекламе." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Знакомые образы.\nПонятная подача.",
      paragraphs: [
        "В центре основной айдентики — иллюстрированная коровка и тёплая золотистая лента с названием «Гощаночка». Молочный белый фон, голубое небо, зелёные луга и персонажи создают близкий, доброжелательный образ. Kapelka New добавляет заголовкам мягкий характер, а Fixel Text поддерживает читаемость основной информации.",
        "В упаковке акценты зависят от продукта. Для повседневной молочной линейки работают знакомые пейзажи и крупные названия. В питьевых йогуртах главную роль получают фрукты и цвета вкусов, а в сырковых десертах — аппетитная подача и контрастные цветовые блоки.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ КОММУНИКАЦИИ",
      text: "Традиции вкуса.\nСовременная подача.",
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Разные продукты.\nПродуманная система.",
      rules: [
        "Логотип и фирменный образ",
        "Типографика",
        "Дизайн упаковки",
        "Продуктовые серии",
        "Рекламные материалы",
        "Транспорт и одежда",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "От упаковки\nк ежедневному выбору.",
      paragraphs: [
        "Кейс объединяет логотип и типографику «Гощаночки», оформление молочной продукции и продуктовых серий, рекламные носители и брендированную одежду. Дизайн показан в разных ситуациях: на полке, в корзине, на столе и в городской среде.",
        "Каждая серия имеет собственные узнаваемые признаки, а название, вкус и формат продукта остаются главными ориентирами. Это даёт основу для последовательного развития ассортимента и следующих рекламных материалов.",
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
      title: "Dairy products.\nClose every day.",
      paragraphs: [
        "Goshchanochka is a Ukrainian dairy producer. Kefir for breakfast, sour cream for home cooking, butter and yogurt — everyday products people choose again and again. Design had to make this range clear and recognizable on the shelf.",
        "The case combines Goshchanochka identity, packaging design, and its use in advertising. Alongside the core line are Yougurtinni drinking yogurts, FRUGURTINNI curd desserts, and Babusyn Khutir sour cream — each series with its own mood.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "dairy products" },
        { label: "Product", value: "branding, packaging" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "BRIEF",
      title: "Recognize the brand.\nFind your product.",
      paragraphs: [
        "ZOND’s task was to build a clear presentation of the dairy range. Logo, product name, flavor, and fat content had to read in a clear sequence. Packaging needed to attract attention and help shoppers tell products apart quickly.",
        "The system had to adapt to soft packs, bottles, cups, and butter wraps. Advertising, staff apparel, and transport also had to carry the brand beyond the shelf.",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Recognition", description: "An expressive logo and character that stand out on packaging." },
        { title: "Navigation", description: "Clear names and color accents for different products and flavors." },
        { title: "Flexibility", description: "Design that works on packs, bottles, cups, and in advertising." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Familiar images.\nClear presentation.",
      paragraphs: [
        "At the center of the core identity are an illustrated cow and a warm golden ribbon with the Goshchanochka name. A milky white background, blue sky, green meadows, and characters create a close, friendly image. Kapelka New softens headlines, while Fixel Text keeps key information readable.",
        "Packaging accents depend on the product. Everyday dairy uses familiar landscapes and large names. Drinking yogurts lead with fruit and flavor colors, while curd desserts rely on appetizing presentation and contrast color blocks.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "COMMUNICATION IDEA",
      text: "Taste traditions.\nA modern presentation.",
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE",
      title: "Different products.\nA considered system.",
      rules: [
        "Logo and brand character",
        "Typography",
        "Packaging design",
        "Product series",
        "Advertising materials",
        "Transport and apparel",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "From packaging\nto everyday choice.",
      paragraphs: [
        "The case unites Goshchanochka logo and typography, dairy packaging and product series, advertising media, and branded apparel. Design is shown on the shelf, in a basket, on the table, and in the city.",
        "Each series has its own recognizable cues, while name, flavor, and format stay the main guides. This gives a base for consistent assortment growth and future advertising materials.",
      ],
    };
  }
  return block;
});

const captionsRu: Record<string, string> = {
  [m("02.jpg")]: "Логотип / фирменный персонаж",
  [m("03.jpg")]: "Типографика / Kapelka New + Fixel Text",
  [m("04.jpg")]: "Кефир / фруктовая линейка",
  [m("12.jpg")]: "Гощаночка / фруктовые йогурты",
  [m("05.jpg")]: "Кефир / мягкая упаковка",
  [m("06.jpg")]: "Сметана / основная линейка",
  [m("07.jpg")]: "Масло / обёртка",
  [m("08.jpg")]: "Кефир / бутылка",
  [m("11.jpg")]: "FRUGURTINNI / шоколадный десерт",
  [m("13.jpg")]: "FRUGURTINNI / серия десертов",
  [m("10.jpg")]: "Yougurtinni / на полке",
  [m("16.jpg")]: "Yougurtinni / ассортимент",
  [m("14.jpg")]: "Yougurtinni / реклама в магазине",
  [m("15.jpg")]: "Бабусин Хутір / сметана",
  [m("09.jpg")]: "Фирменная одежда / фартук",
  [m("17.jpg")]: "FRUGURTINNI / выбор на полке",
  [m("18.jpg")]: "Yougurtinni / вкусовая навигация",
};

const captionsEn: Record<string, string> = {
  [m("02.jpg")]: "Logo / brand character",
  [m("03.jpg")]: "Typography / Kapelka New + Fixel Text",
  [m("04.jpg")]: "Kefir / fruit line",
  [m("12.jpg")]: "Goshchanochka / fruit yogurts",
  [m("05.jpg")]: "Kefir / soft pack",
  [m("06.jpg")]: "Sour cream / core line",
  [m("07.jpg")]: "Butter / wrap",
  [m("08.jpg")]: "Kefir / bottle",
  [m("11.jpg")]: "FRUGURTINNI / chocolate dessert",
  [m("13.jpg")]: "FRUGURTINNI / dessert series",
  [m("10.jpg")]: "Yougurtinni / on shelf",
  [m("16.jpg")]: "Yougurtinni / assortment",
  [m("14.jpg")]: "Yougurtinni / in-store advertising",
  [m("15.jpg")]: "Babusyn Khutir / sour cream",
  [m("09.jpg")]: "Branded apparel / apron",
  [m("17.jpg")]: "FRUGURTINNI / shelf choice",
  [m("18.jpg")]: "Yougurtinni / flavor navigation",
};

export function getGoshchanochkaBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return applyGalleryCaptionMap(blocksRu, captionsRu);
  if (locale === "en") return applyGalleryCaptionMap(blocksEn, captionsEn);
  return blocksUk;
}

export const goshchanochkaShared = {
  slug: "goshchanochka",
  cover: m("cover.jpg"),
  listCover: m("cover.mp4"),
  media: goshchanochkaMedia,
  theme: {
    accent: "#F0B749",
    accentInk: "#3E2815",
    manifestoBg: "#183C2C",
    manifestoFg: "#FFFFFF",
    manifestoEm: "#F3C569",
  },
  body: `[IMG: media/goshchanochka/01.jpg]`,
};

export const goshchanochkaCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Гощаночка",
    description:
      "Брендинг і паковання «Гощаночка»: логотип, типографіка, молочна лінійка, продуктові серії, реклама та одяг.",
    tagline: "Знайомий смак.\nВиразний характер.",
    serviceTag: "Брендинг + паковання",
  },
  ru: {
    title: "Гощаночка",
    description:
      "Брендинг и упаковка «Гощаночка»: логотип, типографика, молочная линейка, продуктовые серии, реклама и одежда.",
    tagline: "Знакомый вкус.\nВыразительный характер.",
    serviceTag: "Брендинг + упаковка",
  },
  en: {
    title: "Goshchanochka",
    description:
      "Goshchanochka branding and packaging: logo, typography, dairy line, product series, advertising, and apparel.",
    tagline: "Familiar taste.\nExpressive character.",
    serviceTag: "Branding + packaging",
  },
};
