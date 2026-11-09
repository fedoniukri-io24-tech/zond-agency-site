import type { BrandingSeoContent } from "@/i18n/branding-seo";
import type { Locale } from "@/i18n/config";

const uk: BrandingSeoContent = {
  spoilerLabel: "Детальніше",
  sections: [
    {
      title: "Що входить у брендбук і чим він відрізняється від логобука",
      blocks: [
        {
          kind: "p",
          text:
            "Досить часто поняття «брендбук» і «логобук» плутають. Насправді це два різні документи, які вирішують різні завдання.",
        },
        {
          kind: "term",
          label: "Логобук",
          text:
            "— це вузькоспеціалізована інструкція, присвячена логотипу компанії та правилам його використання. У ньому фіксуються всі версії логотипа, фірмові кольори, мінімальні розміри, захисне поле та приклади правильного застосування.",
        },
        {
          kind: "p",
          text: "Брендбук включає все, що є в логобуку, але цим не обмежується. До нього також входять:",
        },
        {
          kind: "ul",
          items: [
            "система шрифтів і типографіки;",
            "правила використання графічних елементів;",
            "правила оформлення ключових носіїв;",
            "готові шаблони або макети носіїв.",
          ],
        },
        {
          kind: "p",
          text:
            "Тобто брендбук — це повна система правил, яка допомагає компанії зберігати єдиний стиль і впізнаваність у кожній точці контакту з клієнтом.",
        },
      ],
    },
    {
      title: "Навіщо брендбук бізнесу",
      blocks: [
        {
          kind: "p",
          text:
            "Уявіть, що до запуску нового продукту залишилося кілька днів. Сайт майже готовий, реклама налаштована, упаковка в друці. І тут з'ясовується, що на коробці стоїть старий логотип, у рекламних креативах з'явився інший шрифт, а друкарня не потрапила у фірмовий колір. Кожен виконав свою частину роботи, але бренд так і не склався в єдине ціле.",
        },
        {
          kind: "p",
          text:
            "Саме такі проблеми вирішує брендбук. Він стає єдиним джерелом правил для всіх, хто працює з брендом. Команда більше не витрачає час на суперечки щодо кольорів, шрифтів чи оформлення реклами, а підрядники не ставлять десятки уточнювальних запитань перед початком роботи.",
        },
      ],
    },
    {
      title: "Від чого залежить вартість брендбуку",
      blocks: [
        {
          kind: "p",
          text:
            "Кожен бізнес має власні завдання, тому склад брендбуку може суттєво відрізнятися, а разом із цим і вартість його розробки. Саме тому в ZOND вона формується індивідуально. Під час розрахунку ми враховуємо:",
        },
        {
          kind: "ul",
          items: [
            "наскільки глибоко потрібно проаналізувати ринок, конкурентів, цільову аудиторію та позиціювання бренду;",
            "скільки концепцій необхідно підготувати на вибір;",
            "який обсяг айдентики та кількість носіїв потрібно опрацювати;",
            "скільки раундів правок буде передбачено в межах проєкту.",
          ],
        },
        {
          kind: "p",
          text:
            "Додатково ціна брендбуку залежить від того, наскільки терміново його потрібно підготувати та презентувати.",
        },
      ],
    },
    {
      title: "Як користуватися брендбуком всередині компанії",
      blocks: [
        {
          kind: "p",
          text:
            "Брендбук розробляється не для того, щоб один раз переглянути його й покласти в архів. Це робочий інструмент, до якого команда звертається щоразу, коли створює нову точку контакту з клієнтом.",
        },
        {
          kind: "p",
          text:
            "Маркетологи використовують його перед запуском рекламних кампаній, щоб зберігати єдиний стиль креативів. Дизайнери спираються на брендбук під час розробки банерів, презентацій чи поліграфії. SMM-фахівці беруть із документа правила оформлення дописів і сторіз, а друкарні — точні коди кольорів, відступи та векторні версії логотипа.",
        },
        {
          kind: "p",
          text:
            "Щоб брендбук справді працював, його актуальна версія має бути доступною всім працівникам і підрядникам, які працюють із брендом.",
        },
      ],
    },
    {
      title: "З якими послугами поєднують брендбук",
      blocks: [
        {
          kind: "p",
          text:
            "Брендбук не створює бренд із нуля. Він збирає вже ухвалені рішення в єдину систему та пояснює, як правильно ними користуватися. Тому перед початком роботи важливо зрозуміти, чи має бізнес готову основу.",
        },
        {
          kind: "p",
          text:
            "Якщо компанія вже визначила позиціювання та фірмовий стиль, але ще не має впізнаваного знака, створення брендбуку варто поєднати із розробкою логотипа. Спочатку створюється логотип, а вже потім правила його використання фіксуються в брендбуці.",
        },
        {
          kind: "p",
          text:
            "Якщо ж бізнес запускається з нуля, змінює напрям або ще не визначив, чим відрізняється від конкурентів, варто почати з розробки бренду. Брендбук є завершальним етапом цієї роботи — у ньому описуються правила роботи з брендом, що допомагає команді зберігати його цілісність після запуску.",
        },
      ],
    },
  ],
};

const en: BrandingSeoContent = {
  spoilerLabel: "Learn more",
  sections: [
    {
      title: "What a brand book includes and how it differs from a logobook",
      blocks: [
        {
          kind: "p",
          text:
            "People often mix up the terms brand book and logobook. In fact, these are two different documents that solve different tasks.",
        },
        {
          kind: "term",
          label: "A logobook",
          text:
            "is a narrow guide devoted to the company logo and the rules for using it. It records all versions of the logo, the brand colors, minimum sizes, the clear space, and examples of correct use.",
        },
        {
          kind: "p",
          text: "A brand book includes everything a logobook has, but goes further. It also covers:",
        },
        {
          kind: "ul",
          items: [
            "the font and typography system;",
            "rules for using graphic elements;",
            "design rules for key media;",
            "ready-made templates or layouts for media.",
          ],
        },
        {
          kind: "p",
          text:
            "In other words, a brand book is a complete system of rules that helps a company keep one style and stay recognizable at every point of contact with customers.",
        },
      ],
    },
    {
      title: "Why a business needs a brand book",
      blocks: [
        {
          kind: "p",
          text:
            "Imagine there are only a few days left before a new product launch. The website is almost ready, the ads are set up, the packaging is at the printer. And then it turns out that the box carries the old logo, the ad creatives use a different font, and the printer missed the brand color. Everyone did their part of the work, but the brand never came together as a whole.",
        },
        {
          kind: "p",
          text:
            "These are exactly the problems a brand book solves. It becomes the single source of rules for everyone who works with the brand. The team no longer wastes time arguing about colors, fonts, or ad design, and contractors don't ask dozens of clarifying questions before they start.",
        },
      ],
    },
    {
      title: "What affects the cost of a brand book",
      blocks: [
        {
          kind: "p",
          text:
            "Every business has its own tasks, so the contents of a brand book can vary a lot, and so can the cost of developing it. That is why at ZOND the price is calculated for each project. When we estimate it, we take into account:",
        },
        {
          kind: "ul",
          items: [
            "how deeply we need to analyze the market, competitors, target audience, and brand positioning;",
            "how many concepts we need to prepare for you to choose from;",
            "how much identity work and how many media need to be covered;",
            "how many revision rounds the project includes.",
          ],
        },
        {
          kind: "p",
          text:
            "The price of a brand book also depends on how urgently it needs to be prepared and presented.",
        },
      ],
    },
    {
      title: "How to use a brand book inside the company",
      blocks: [
        {
          kind: "p",
          text:
            "A brand book is not made to be looked through once and filed away. It is a working tool the team turns to every time it creates a new point of contact with customers.",
        },
        {
          kind: "p",
          text:
            "Marketers use it before launching ad campaigns to keep the creatives in one style. Designers rely on the brand book when they make banners, presentations, or print materials. SMM specialists take the rules for posts and stories from it, and printers take the exact color codes, spacing, and vector versions of the logo.",
        },
        {
          kind: "p",
          text:
            "For a brand book to really work, its current version must be available to every employee and contractor who works with the brand.",
        },
      ],
    },
    {
      title: "Services often combined with a brand book",
      blocks: [
        {
          kind: "p",
          text:
            "A brand book does not create a brand from scratch. It gathers decisions that have already been made into one system and explains how to use them correctly. So before starting, it is important to understand whether the business already has a ready foundation.",
        },
        {
          kind: "p",
          text:
            "If the company has already defined its positioning and corporate identity but does not yet have a recognizable mark, it makes sense to combine the brand book with logo design. First the logo is created, and then the rules for using it are set down in the brand book.",
        },
        {
          kind: "p",
          text:
            "If the business is starting from scratch, changing direction, or has not yet defined how it differs from competitors, it is better to start with brand development. The brand book is the final stage of that work. It describes the rules for working with the brand, which helps the team keep it consistent after launch.",
        },
      ],
    },
  ],
};

const ru: BrandingSeoContent = {
  spoilerLabel: "Подробнее",
  sections: [
    {
      title: "Что входит в брендбук и чем он отличается от логобука",
      blocks: [
        {
          kind: "p",
          text:
            "Довольно часто понятия «брендбук» и «логобук» путают. На самом деле это два разных документа, которые решают разные задачи.",
        },
        {
          kind: "term",
          label: "Логобук",
          text:
            "— это узкоспециализированная инструкция, посвященная логотипу компании и правилам его использования. В нем фиксируются все версии логотипа, фирменные цвета, минимальные размеры, охранное поле и примеры правильного применения.",
        },
        {
          kind: "p",
          text: "Брендбук включает все, что есть в логобуке, но этим не ограничивается. В него также входят:",
        },
        {
          kind: "ul",
          items: [
            "система шрифтов и типографики;",
            "правила использования графических элементов;",
            "правила оформления ключевых носителей;",
            "готовые шаблоны или макеты носителей.",
          ],
        },
        {
          kind: "p",
          text:
            "То есть брендбук — это полная система правил, которая помогает компании сохранять единый стиль и узнаваемость в каждой точке контакта с клиентом.",
        },
      ],
    },
    {
      title: "Зачем брендбук бизнесу",
      blocks: [
        {
          kind: "p",
          text:
            "Представьте, что до запуска нового продукта осталось несколько дней. Сайт почти готов, реклама настроена, упаковка в печати. И тут выясняется, что на коробке стоит старый логотип, в рекламных креативах появился другой шрифт, а типография не попала в фирменный цвет. Каждый выполнил свою часть работы, но бренд так и не сложился в единое целое.",
        },
        {
          kind: "p",
          text:
            "Именно такие проблемы решает брендбук. Он становится единым источником правил для всех, кто работает с брендом. Команда больше не тратит время на споры о цветах, шрифтах или оформлении рекламы, а подрядчики не задают десятки уточняющих вопросов перед началом работы.",
        },
      ],
    },
    {
      title: "От чего зависит стоимость брендбука",
      blocks: [
        {
          kind: "p",
          text:
            "У каждого бизнеса свои задачи, поэтому состав брендбука может существенно отличаться, а вместе с этим и стоимость его разработки. Именно поэтому в ZOND она формируется индивидуально. При расчете мы учитываем:",
        },
        {
          kind: "ul",
          items: [
            "насколько глубоко нужно проанализировать рынок, конкурентов, целевую аудиторию и позиционирование бренда;",
            "сколько концепций необходимо подготовить на выбор;",
            "какой объем айдентики и количество носителей нужно проработать;",
            "сколько раундов правок будет предусмотрено в рамках проекта.",
          ],
        },
        {
          kind: "p",
          text:
            "Дополнительно цена брендбука зависит от того, насколько срочно его нужно подготовить и презентовать.",
        },
      ],
    },
    {
      title: "Как пользоваться брендбуком внутри компании",
      blocks: [
        {
          kind: "p",
          text:
            "Брендбук разрабатывается не для того, чтобы один раз просмотреть его и положить в архив. Это рабочий инструмент, к которому команда обращается каждый раз, когда создает новую точку контакта с клиентом.",
        },
        {
          kind: "p",
          text:
            "Маркетологи используют его перед запуском рекламных кампаний, чтобы сохранять единый стиль креативов. Дизайнеры опираются на брендбук при разработке баннеров, презентаций или полиграфии. SMM-специалисты берут из документа правила оформления постов и сторис, а типографии — точные коды цветов, отступы и векторные версии логотипа.",
        },
        {
          kind: "p",
          text:
            "Чтобы брендбук действительно работал, его актуальная версия должна быть доступна всем сотрудникам и подрядчикам, которые работают с брендом.",
        },
      ],
    },
    {
      title: "С какими услугами сочетают брендбук",
      blocks: [
        {
          kind: "p",
          text:
            "Брендбук не создает бренд с нуля. Он собирает уже принятые решения в единую систему и объясняет, как правильно ими пользоваться. Поэтому перед началом работы важно понять, есть ли у бизнеса готовая основа.",
        },
        {
          kind: "p",
          text:
            "Если компания уже определила позиционирование и фирменный стиль, но еще не имеет узнаваемого знака, создание брендбука стоит совместить с разработкой логотипа. Сначала создается логотип, а уже потом правила его использования фиксируются в брендбуке.",
        },
        {
          kind: "p",
          text:
            "Если же бизнес запускается с нуля, меняет направление или еще не определил, чем отличается от конкурентов, стоит начать с разработки бренда. Брендбук является завершающим этапом этой работы — в нем описываются правила работы с брендом, что помогает команде сохранять его целостность после запуска.",
        },
      ],
    },
  ],
};

export const brandbookSeo: Record<Locale, BrandingSeoContent> = { uk, en, ru };

export function getBrandbookSeo(locale: Locale): BrandingSeoContent {
  return brandbookSeo[locale];
}
