import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";
import { applyGalleryCaptionMap } from "./localize-gallery-captions";

const media = (name: string) => `/assets/cases/home-hub/${name}`;

const homeHubMedia = [
  "media/home-hub/01.jpg",
  "media/home-hub/02.jpg",
  "media/home-hub/03.jpg",
  "media/home-hub/04.jpg",
  "media/home-hub/05.jpg",
  "media/home-hub/06.jpg",
  "media/home-hub/07.jpg",
  "media/home-hub/08.jpg",
  "media/home-hub/09.jpg",
  "media/home-hub/10.jpg",
  "media/home-hub/11.jpg",
  "media/home-hub/12.jpg",
  "media/home-hub/13.jpg",
  "media/home-hub/14.jpg",
  "media/home-hub/15.jpg",
  "media/home-hub/16.jpg",
  "media/home-hub/17.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Деталі, з яких\nпочинається дім.",
    paragraphs: [
      "HOME HUB — шведський бренд дверей, вікон і фурнітури. Це деталі, які щодня формують відчуття дому: від першого дотику до ручки до того, як світло проходить крізь простір.",
      "Айдентика мала передати цю увагу до матеріалів і пропорцій. Ми створили стриманий візуальний образ із теплими природними відтінками, чітким знаком і впізнаваною мовою комунікації.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Швеція", accent: true, countryCode: "SE" },
      { label: "Напрям", value: "Двері, вікна, фурнітура" },
      { label: "Послуги", value: "Брендинг, SMM,\nвеброзробка,\nграфічний дизайн" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("01.jpg"), caption: "Шоурум HOME HUB" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("02.jpg"), caption: "Логотип і знак" },
      { src: media("03.jpg"), caption: "Типографіка" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Передати тепло.\nЗберегти точність.",
    paragraphs: [
      "Завдання ZOND — обʼєднати архітектурний характер продукту та відчуття домашнього затишку. Стиль мав бути сучасним, спокійним і доречним у просторі салону та в цифрових каналах.",
      "Потрібна була цілісна система: від логотипа й типографіки до вивіски, поліграфії, одягу та сайту. Важливо, щоб кожен носій впізнавався як HOME HUB і підтримував увагу до продукту.",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("04.jpg"), caption: "Instagram / профіль" },
      { src: media("05.jpg"), caption: "Футболка / логотип" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Архітектура форми.\nПриродність кольору.",
    paragraphs: [
      "В основі логотипа — чотири вертикальні елементи, що зростають за висотою та шириною й нагадують двері в перспективі. Знак поєднаний із дворядковим написом HOME HUB. Арка розвиває цю тему як окремий графічний елемент для композицій і носіїв.",
      "Палітра спирається на відтінки льону, оливи та горіхового дерева: #E9D3BB, #31351E, #3C2515 і #C7C5A7. Arial Nova Regular забезпечує ясність основних текстів, а Georgia Pro Cond Italic додає виразності коротким акцентам.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ КОМУНІКАЦІЇ",
    text: "Деталі формують дім.",
    footer: "HOME HUB / DETAILS SHAPE THE HOME",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("06.jpg"), caption: "Кольорова палітра" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("07.jpg"), caption: "Кепка / вишивка" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна мова.\nУ кожному дотику.",
    paragraphs: [
      "Вивіска знайомить із брендом, поліграфія підтримує діалог, а одяг і предмети переносять його у повсякденність. На всіх носіях зберігаються впізнавані кольори, знак і стримана композиція.",
      "У цифрових матеріалах головну роль відіграють продукт, фактура та світло. Фірмові елементи допомагають обʼєднати фотографії, короткі повідомлення й навігацію.",
    ],
    deliverables: [
      { title: "Логотип і фірмовий знак" },
      { title: "Кольори та типографіка" },
      { title: "Графічні елементи" },
      { title: "Вивіска та поліграфія" },
      { title: "Одяг і предмети" },
      { title: "Digital та соціальні мережі" },
    ],
    variant: "book",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("08.jpg"), caption: "Вивіска" },
      { src: media("09.jpg"), caption: "Аксесуари / чохол" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("10.jpg"), caption: "Ділова поліграфія / бланк" },
      { src: media("11.jpg"), caption: "Одяг / комунікація" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("12.jpg"), caption: "Предмети / чашка" },
      { src: media("13.jpg"), caption: "Digital / мобільний формат" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("14.jpg"), caption: "Поліграфія / блокнот" },
      { src: media("15.jpg"), caption: "Текстиль / шопер" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("16.jpg"), caption: "Digital / сайт" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("17.jpg"), caption: "Візитки" }],
  },
  {
    type: "section",
    index: "05",
    kicker: "РЕЗУЛЬТАТ",
    title: "Цілісний образ.\nВід простору до деталі.",
    paragraphs: [
      "Для HOME HUB виконали брендинг, SMM, веброзробку та графічний дизайн. В основі візуальної системи — логотип, палітра, типографіка й арочний графічний елемент. Її застосування показано на вивісці, бланку, візитках, блокноті, одязі, аксесуарах і цифрових матеріалах.",
      "Спільні кольори, пропорції та принципи композиції повʼязують усі носії. Бренд отримав послідовну візуальну мову, яку можна розвивати разом з асортиментом і новими точками контакту.",
    ],
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Детали, с которых\nначинается дом.",
      paragraphs: [
        "HOME HUB — шведский бренд дверей, окон и фурнитуры. Это детали, которые каждый день формируют ощущение дома: от первого прикосновения к ручке до того, как свет проходит сквозь пространство.",
        "Айдентика должна была передать это внимание к материалам и пропорциям. Мы создали сдержанный визуальный образ с тёплыми природными оттенками, чётким знаком и узнаваемым языком коммуникации.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Швеция", accent: true, countryCode: "SE" },
        { label: "Направление", value: "Двери, окна, фурнитура" },
        { label: "Услуги", value: "Брендинг, SMM,\nвеб-разработка,\nграфический дизайн" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Передать тепло.\nСохранить точность.",
      paragraphs: [
        "Задача ZOND — объединить архитектурный характер продукта и ощущение домашнего уюта. Стиль должен был быть современным, спокойным и уместным в пространстве салона и в цифровых каналах.",
        "Нужна была целостная система: от логотипа и типографики до вывески, полиграфии, одежды и сайта. Важно, чтобы каждый носитель узнавался как HOME HUB и поддерживал внимание к продукту.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Архитектура формы.\nЕстественность цвета.",
      paragraphs: [
        "В основе логотипа — четыре вертикальных элемента, которые растут по высоте и ширине и напоминают двери в перспективе. Знак соединён с двухстрочным написанием HOME HUB. Арка развивает эту тему как отдельный графический элемент для композиций и носителей.",
        "Палитра опирается на оттенки льна, оливы и орехового дерева: #E9D3BB, #31351E, #3C2515 и #C7C5A7. Arial Nova Regular обеспечивает ясность основных текстов, а Georgia Pro Cond Italic добавляет выразительности коротким акцентам.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ КОММУНИКАЦИИ",
      text: "Детали формируют дом.",
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Один язык.\nВ каждом прикосновении.",
      paragraphs: [
        "Вывеска знакомит с брендом, полиграфия поддерживает диалог, а одежда и предметы переносят его в повседневность. На всех носителях сохраняются узнаваемые цвета, знак и сдержанная композиция.",
        "В цифровых материалах главную роль играют продукт, фактура и свет. Фирменные элементы помогают объединить фотографии, короткие сообщения и навигацию.",
      ],
      deliverables: [
        { title: "Логотип и фирменный знак" },
        { title: "Цвета и типографика" },
        { title: "Графические элементы" },
        { title: "Вывеска и полиграфия" },
        { title: "Одежда и предметы" },
        { title: "Digital и социальные сети" },
      ],
    };
  }
  if (block.type === "section" && block.index === "05") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Целостный образ.\nОт пространства к детали.",
      paragraphs: [
        "Для HOME HUB выполнили брендинг, SMM, веб-разработку и графический дизайн. В основе визуальной системы — логотип, палитра, типографика и арочный графический элемент. Её применение показано на вывеске, бланке, визитках, блокноте, одежде, аксессуарах и цифровых материалах.",
        "Общие цвета, пропорции и принципы композиции связывают все носители. Бренд получил последовательный визуальный язык, который можно развивать вместе с ассортиментом и новыми точками контакта.",
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
      title: "Details that\nmake a home.",
      paragraphs: [
        "HOME HUB is a Swedish brand of doors, windows, and hardware. These are the details that shape the feeling of home every day — from the first touch of a handle to the way light moves through a room.",
        "The identity had to express this attention to materials and proportions. We built a restrained visual system with warm natural tones, a clear mark, and a recognizable communication language.",
      ],
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Sweden", accent: true, countryCode: "SE" },
        { label: "Field", value: "Doors, windows, hardware" },
        { label: "Services", value: "Branding, SMM,\nweb development,\ngraphic design" },
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "BRIEF",
      title: "Keep the warmth.\nKeep the precision.",
      paragraphs: [
        "ZOND’s task was to unite the architectural character of the product with a sense of home comfort. The style had to feel modern, calm, and right for both the showroom and digital channels.",
        "We needed a complete system: from logo and typography to signage, print, apparel, and the website. Every medium had to read as HOME HUB and keep the focus on the product.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Architecture of form.\nNature of color.",
      paragraphs: [
        "The logo is built from four vertical elements that grow in height and width, recalling doors in perspective. The mark pairs with a two-line HOME HUB wordmark. An arch develops the theme as a separate graphic element for compositions and media.",
        "The palette draws on linen, olive, and walnut tones: #E9D3BB, #31351E, #3C2515, and #C7C5A7. Arial Nova Regular keeps body text clear, while Georgia Pro Cond Italic adds expression to short accents.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "COMMUNICATION IDEA",
      text: "Details shape the home.",
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "SCOPE",
      title: "One language.\nIn every touchpoint.",
      paragraphs: [
        "Signage introduces the brand, print carries the dialogue, and apparel and objects bring it into everyday life. Recognizable colors, the mark, and restrained composition stay consistent across media.",
        "In digital materials the product, texture, and light lead. Brand elements help unite photography, short messages, and navigation.",
      ],
      deliverables: [
        { title: "Logo and brand mark" },
        { title: "Colors and typography" },
        { title: "Graphic elements" },
        { title: "Signage and print" },
        { title: "Apparel and objects" },
        { title: "Digital and social" },
      ],
    };
  }
  if (block.type === "section" && block.index === "05") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A coherent image.\nFrom space to detail.",
      paragraphs: [
        "For HOME HUB we delivered branding, SMM, web development, and graphic design. The visual system is built on the logo, palette, typography, and an arch graphic — shown on signage, letterheads, cards, notebooks, apparel, accessories, and digital materials.",
        "Shared colors, proportions, and composition principles connect every medium. The brand now has a consistent visual language that can grow with the assortment and new touchpoints.",
      ],
    };
  }
  return block;
});

const captionsRu: Record<string, string> = {
  [media("01.jpg")]: "Шоурум HOME HUB",
  [media("02.jpg")]: "Логотип и знак",
  [media("03.jpg")]: "Типографика",
  [media("04.jpg")]: "Instagram / профиль",
  [media("05.jpg")]: "Футболка / логотип",
  [media("06.jpg")]: "Цветовая палитра",
  [media("07.jpg")]: "Кепка / вышивка",
  [media("08.jpg")]: "Вывеска",
  [media("09.jpg")]: "Аксессуары / чехол",
  [media("10.jpg")]: "Деловая полиграфия / бланк",
  [media("11.jpg")]: "Одежда / коммуникация",
  [media("12.jpg")]: "Предметы / чашка",
  [media("13.jpg")]: "Digital / мобильный формат",
  [media("14.jpg")]: "Полиграфия / блокнот",
  [media("15.jpg")]: "Текстиль / шопер",
  [media("16.jpg")]: "Digital / сайт",
  [media("17.jpg")]: "Визитки",
};

const captionsEn: Record<string, string> = {
  [media("01.jpg")]: "HOME HUB showroom",
  [media("02.jpg")]: "Logo and mark",
  [media("03.jpg")]: "Typography",
  [media("04.jpg")]: "Instagram / profile",
  [media("05.jpg")]: "T-shirt / logo",
  [media("06.jpg")]: "Color palette",
  [media("07.jpg")]: "Cap / embroidery",
  [media("08.jpg")]: "Signage",
  [media("09.jpg")]: "Accessories / case",
  [media("10.jpg")]: "Stationery / letterhead",
  [media("11.jpg")]: "Apparel / communication",
  [media("12.jpg")]: "Objects / mug",
  [media("13.jpg")]: "Digital / mobile",
  [media("14.jpg")]: "Print / notebook",
  [media("15.jpg")]: "Textile / tote",
  [media("16.jpg")]: "Digital / website",
  [media("17.jpg")]: "Business cards",
};

export function getHomeHubBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return applyGalleryCaptionMap(blocksRu, captionsRu);
  if (locale === "en") return applyGalleryCaptionMap(blocksEn, captionsEn);
  return blocksUk;
}

export const homeHubShared = {
  slug: "home-hub",
  cover: media("cover.jpg"),
  listCover: media("cover.mp4"),
  media: homeHubMedia,
  theme: {
    accent: "#31351E",
    accentInk: "#FFFFFF",
    manifestoBg: "#31351E",
    manifestoFg: "#E9D3BB",
    manifestoEm: "#C7C5A7",
  },
  body: `[IMG: media/home-hub/01.jpg]`,
};

export const homeHubCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Home Hub",
    description:
      "Брендинг HOME HUB: двері, вікна, фурнітура. Логотип, айдентика, вивіска, поліграфія, мерч, SMM і сайт.",
    tagline: "Архітектура деталей.\nВідчуття дому.",
    serviceTag: "Брендинг + айдентика",
  },
  ru: {
    title: "Home Hub",
    description:
      "Брендинг HOME HUB: двери, окна, фурнитура. Логотип, айдентика, вывеска, полиграфия, мерч, SMM и сайт.",
    tagline: "Архитектура деталей.\nОщущение дома.",
    serviceTag: "Брендинг + айдентика",
  },
  en: {
    title: "Home Hub",
    description:
      "HOME HUB branding for doors, windows, and hardware: logo, identity, signage, print, merch, SMM, and website.",
    tagline: "Architecture of details.\nA sense of home.",
    serviceTag: "Branding + identity",
  },
};
