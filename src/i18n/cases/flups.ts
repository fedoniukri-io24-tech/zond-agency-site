import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";
import { applyGalleryCaptionMap } from "./localize-gallery-captions";

const m = (file: string) => `/assets/cases/flups/${file}`;

const flupsMedia = [
  "media/flups/01.jpg",
  "media/flups/02.jpg",
  "media/flups/03.jpg",
  "media/flups/04.jpg",
  "media/flups/05.jpg",
  "media/flups/06.jpg",
  "media/flups/07.jpg",
  "media/flups/08.jpg",
  "media/flups/09.jpg",
  "media/flups/10.jpg",
  "media/flups/11.jpg",
  "media/flups/12.jpg",
  "media/flups/13.jpg",
  "media/flups/14.jpg",
  "media/flups/15.jpg",
  "media/flups/16.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Улюбленці.\nЗ власним характером.",
    paragraphs: [
      "FLUPS — бренд корму для домашніх тварин, у центрі якого — самі улюбленці. Вони допитливі, вибагливі й точно знають, хто вдома головний. Цю щоденну близькість із котами та собаками ми поклали в основу візуальної комунікації.",
      "Бренду потрібен виразний образ, що працює на пакованні та впізнається в рекламі. Ми поєднали контрастну графіку, живі образи тварин і короткі репліки з гумором — так, щоб у кожному носії відчувався характер FLUPS.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Бренд", value: "FLUPS", highlight: true },
      { label: "Ніша", value: "Petcare" },
      { label: "Продукт", value: "корми для тварин" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.jpg"), caption: "Логотип і фірмовий знак" },
      { src: m("03.jpg"), caption: "Типографіка / Codec Cold + Gilroy" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Привернути увагу.\nЗалишитися своїм.",
    paragraphs: [
      "Завдання ZOND — створити цілісну айдентику для бренду корму. Вона мала швидко привертати увагу, зберігати читабельність на невеликій етикетці та однаково впевнено працювати на білборді й у стрічці соцмереж.",
      "Важливо було передати турботу без зайвої сентиментальності. Тому головними героями стали тварини з упізнаваними звичками, а графіка й тон повідомлень підтримали їхню грайливість та незалежність.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Характер", description: "Живі герої та короткі репліки, близькі власникам тварин." },
      { title: "Упізнаваність", description: "Контрастний знак і патерн, які тримають увагу." },
      { title: "Єдність", description: "Одна візуальна мова для паковання, реклами та мерчу." },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("04.jpg"), caption: "Голос бренду / зовнішня реклама" }],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Жива форма.\nВиразний характер.",
    paragraphs: [
      "Пластичний фіолетовий знак поєднується з назвою Flups і розвивається у вільний органічний патерн. Його фрагменти змінюють масштаб і композицію: заповнюють етикетку, підкреслюють повідомлення або стають головним елементом носія.",
      "Electric Indigo на чорному й білому тлі створює основу палітри; зелений і кораловий додають акцентів. Codec Cold задає характер логотипа, а Gilroy підтримує чітку типографіку. Фотографії тварин і короткі іронічні репліки роблять систему живою.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ КОМУНІКАЦІЇ",
    text: "Для маленьких босів.\nЗ великим апетитом.",
    footer: "FLUPS / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.jpg"), caption: "Кольорова палітра" }],
  },
  {
    type: "section",
    index: "",
    kicker: "СКЛАД РОБОТИ",
    title: "Один бренд.\nБагато проявів.",
    paragraphs: [],
    rules: [
      "Логотип і фірмовий знак",
      "Палітра та типографіка",
      "Патерн і піктограми",
      "Дизайн паковання",
      "Реклама та соціальні мережі",
      "Поліграфія та мерч",
    ],
    variant: "book",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.jpg"), caption: "Паковання / корм для тварин" },
      { src: m("15.jpg"), caption: "Соціальні мережі / оформлення" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.jpg"), caption: "Поліграфія / блокнот" },
      { src: m("13.jpg"), caption: "Ділова поліграфія / бланк" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Мерч / шопер" },
      { src: m("09.jpg"), caption: "Предмети / лежак" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("11.jpg"), caption: "Мерч / кепка" },
      { src: m("14.jpg"), caption: "Мерч / голос бренду" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Реклама / міський формат" },
      { src: m("16.jpg"), caption: "Постер / характер комунікації" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("12.jpg"), caption: "Іконографіка / візуальна система" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Один характер.\nНа кожному носії.",
    paragraphs: [
      "FLUPS отримав візуальну систему з логотипом, патерном, палітрою, типографікою та піктограмами. Її застосування показано на пакованні корму, рекламних макетах, діловій поліграфії, мерчі та оформленні соціальних мереж.",
      "Спільні елементи повʼязують різні формати: бренд упізнається і на маленькій етикетці, і на великому постері. Система дає основу для нових носіїв та комунікацій, зберігаючи грайливий, упевнений голос FLUPS.",
    ],
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Любимцы.\nСо своим характером.",
      paragraphs: [
        "FLUPS — бренд корма для домашних животных, в центре которого — сами питомцы. Они любопытны, разборчивы и точно знают, кто дома главный. Эту ежедневную близость с кошками и собаками мы положили в основу визуальной коммуникации.",
        "Бренду нужен был выразительный образ, который работает на упаковке и узнаётся в рекламе. Мы соединили контрастную графику, живые образы животных и короткие реплики с юмором — так, чтобы в каждом носителе ощущался характер FLUPS.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Бренд", value: "FLUPS", highlight: true },
        { label: "Ниша", value: "Petcare" },
        { label: "Продукт", value: "корма для животных" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Привлечь внимание.\nОстаться своим.",
      paragraphs: [
        "Задача ZOND — создать целостную айдентику для бренда корма. Она должна была быстро привлекать внимание, сохранять читаемость на небольшой этикетке и одинаково уверенно работать на билборде и в ленте соцсетей.",
        "Важно было передать заботу без лишней сентиментальности. Поэтому главными героями стали животные с узнаваемыми привычками, а графика и тон сообщений поддержали их игривость и независимость.",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Характер", description: "Живые герои и короткие реплики, близкие владельцам животных." },
        { title: "Узнаваемость", description: "Контрастный знак и паттерн, которые держат внимание." },
        { title: "Единство", description: "Один визуальный язык для упаковки, рекламы и мерча." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Живая форма.\nВыразительный характер.",
      paragraphs: [
        "Пластичный фиолетовый знак сочетается с названием Flups и развивается в свободный органический паттерн. Его фрагменты меняют масштаб и композицию: заполняют этикетку, подчёркивают сообщение или становятся главным элементом носителя.",
        "Electric Indigo на чёрном и белом фоне создаёт основу палитры; зелёный и коралловый добавляют акцентов. Codec Cold задаёт характер логотипа, а Gilroy поддерживает чёткую типографику. Фотографии животных и короткие ироничные реплики делают систему живой.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ КОММУНИКАЦИИ",
      text: "Для маленьких боссов.\nС большим аппетитом.",
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Один бренд.\nМного проявлений.",
      rules: [
        "Логотип и фирменный знак",
        "Палитра и типографика",
        "Паттерн и пиктограммы",
        "Дизайн упаковки",
        "Реклама и социальные сети",
        "Полиграфия и мерч",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Один характер.\nНа каждом носителе.",
      paragraphs: [
        "FLUPS получил визуальную систему с логотипом, паттерном, палитрой, типографикой и пиктограммами. Её применение показано на упаковке корма, рекламных макетах, деловой полиграфии, мерче и оформлении социальных сетей.",
        "Общие элементы связывают разные форматы: бренд узнаётся и на маленькой этикетке, и на большом постере. Система даёт основу для новых носителей и коммуникаций, сохраняя игривый, уверенный голос FLUPS.",
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
      title: "Pets.\nWith a character of their own.",
      paragraphs: [
        "FLUPS is a pet-food brand centered on the pets themselves. They are curious, picky, and know exactly who runs the house. We built the visual communication around this everyday closeness with cats and dogs.",
        "The brand needed an expressive image that works on packaging and stays recognizable in advertising. We combined contrast graphics, vivid animal imagery, and short humorous lines — so every medium carries the FLUPS character.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Brand", value: "FLUPS", highlight: true },
        { label: "Niche", value: "Petcare" },
        { label: "Product", value: "pet food" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "BRIEF",
      title: "Catch attention.\nStay familiar.",
      paragraphs: [
        "ZOND’s task was to create a complete identity for a pet-food brand. It had to catch attention quickly, stay readable on a small label, and work with equal confidence on a billboard and in a social feed.",
        "It was important to convey care without excess sentimentality. So animals with recognizable habits became the main heroes, while graphics and tone supported their playfulness and independence.",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Character", description: "Lively heroes and short lines that feel close to pet owners." },
        { title: "Recognition", description: "A contrast mark and pattern that hold attention." },
        { title: "Unity", description: "One visual language for packaging, ads, and merch." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "A living form.\nA vivid character.",
      paragraphs: [
        "A plastic purple mark pairs with the Flups name and develops into a free organic pattern. Its fragments change scale and composition: filling a label, underscoring a message, or becoming the main element of a medium.",
        "Electric Indigo on black and white builds the palette base; green and coral add accents. Codec Cold shapes the logo character, while Gilroy supports clear typography. Animal photography and short ironic lines keep the system alive.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "COMMUNICATION IDEA",
      text: "For little bosses.\nWith a big appetite.",
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE",
      title: "One brand.\nMany expressions.",
      rules: [
        "Logo and brand mark",
        "Palette and typography",
        "Pattern and icons",
        "Packaging design",
        "Advertising and social",
        "Print and merch",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "One character.\nOn every medium.",
      paragraphs: [
        "FLUPS received a visual system with logo, pattern, palette, typography, and icons. Its application is shown on pet-food packaging, ad layouts, stationery, merch, and social media design.",
        "Shared elements connect different formats: the brand is recognizable on a small label and a large poster. The system gives a base for new media and communication while keeping FLUPS’s playful, confident voice.",
      ],
    };
  }
  return block;
});

const captionsRu: Record<string, string> = {
  [m("02.jpg")]: "Логотип и фирменный знак",
  [m("03.jpg")]: "Типографика / Codec Cold + Gilroy",
  [m("04.jpg")]: "Голос бренда / наружная реклама",
  [m("05.jpg")]: "Цветовая палитра",
  [m("06.jpg")]: "Упаковка / корм для животных",
  [m("15.jpg")]: "Социальные сети / оформление",
  [m("07.jpg")]: "Полиграфия / блокнот",
  [m("13.jpg")]: "Деловая полиграфия / бланк",
  [m("08.jpg")]: "Мерч / шопер",
  [m("09.jpg")]: "Предметы / лежанка",
  [m("11.jpg")]: "Мерч / кепка",
  [m("14.jpg")]: "Мерч / голос бренда",
  [m("10.jpg")]: "Реклама / городской формат",
  [m("16.jpg")]: "Постер / характер коммуникации",
  [m("12.jpg")]: "Иконографика / визуальная система",
};

const captionsEn: Record<string, string> = {
  [m("02.jpg")]: "Logo and brand mark",
  [m("03.jpg")]: "Typography / Codec Cold + Gilroy",
  [m("04.jpg")]: "Brand voice / outdoor advertising",
  [m("05.jpg")]: "Color palette",
  [m("06.jpg")]: "Packaging / pet food",
  [m("15.jpg")]: "Social media / styling",
  [m("07.jpg")]: "Print / notebook",
  [m("13.jpg")]: "Stationery / letterhead",
  [m("08.jpg")]: "Merch / tote",
  [m("09.jpg")]: "Objects / pet bed",
  [m("11.jpg")]: "Merch / cap",
  [m("14.jpg")]: "Merch / brand voice",
  [m("10.jpg")]: "Advertising / urban format",
  [m("16.jpg")]: "Poster / communication character",
  [m("12.jpg")]: "Iconography / visual system",
};

export function getFlupsBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return applyGalleryCaptionMap(blocksRu, captionsRu);
  if (locale === "en") return applyGalleryCaptionMap(blocksEn, captionsEn);
  return blocksUk;
}

export const flupsShared = {
  slug: "flups",
  cover: m("cover.jpg"),
  listCover: m("cover.mp4"),
  media: flupsMedia,
  theme: {
    accent: "#6401F9",
    accentInk: "#FFFFFF",
    manifestoBg: "#140028",
    manifestoFg: "#FFFFFF",
    manifestoEm: "#6401F9",
  },
  body: `[IMG: media/flups/01.jpg]`,
};

export const flupsCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "FLUPS",
    description:
      "Брендинг і паковання FLUPS — корм для тварин. Логотип, патерн, палітра, типографіка, реклама, мерч і SMM.",
    tagline: "Для маленьких босів.\nЗ великим апетитом.",
    serviceTag: "Брендинг + паковання",
  },
  ru: {
    title: "FLUPS",
    description:
      "Брендинг и упаковка FLUPS — корм для животных. Логотип, паттерн, палитра, типографика, реклама, мерч и SMM.",
    tagline: "Для маленьких боссов.\nС большим аппетитом.",
    serviceTag: "Брендинг + упаковка",
  },
  en: {
    title: "FLUPS",
    description:
      "FLUPS branding and packaging for pet food: logo, pattern, palette, typography, advertising, merch, and SMM.",
    tagline: "For little bosses.\nWith a big appetite.",
    serviceTag: "Branding + packaging",
  },
};
