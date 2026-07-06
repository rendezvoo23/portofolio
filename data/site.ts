export type Locale = "ru" | "en";

type AccordionItem = {
  title: string;
  text: string;
};

type SiteCopy = {
  menu: {
    projects: string;
    about: string;
    contacts: string;
    menu: string;
    close: string;
    openLabel: string;
    closeLabel: string;
    homeLabel: string;
    languageLabel: string;
  };
  selectedProjectsLabel: string;
  servicesTitle: string;
  services: AccordionItem[];
  aboutTitle: string;
  aboutText: string;
  processTitle: string;
  process: AccordionItem[];
  contactTitle: string;
  detail: {
    backLabel: string;
    about: string;
    task: string;
    work: string;
    result: string;
    similarProduct: string;
    discuss: string;
    demo: string;
  };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  ru: {
    menu: {
      projects: "проекты",
      about: "обо мне",
      contacts: "контакты",
      menu: "меню",
      close: "закрыть",
      openLabel: "Открыть меню",
      closeLabel: "Закрыть меню",
      homeLabel: "На главную",
      languageLabel: "Выбор языка"
    },
    selectedProjectsLabel: "Избранные проекты",
    servicesTitle: "что я могу сделать",
    services: [
      {
        title: "Telegram-боты",
        text: "боты для заявок, уведомлений, автоматизации бизнес-процессов и общения с пользователями."
      },
      {
        title: "Telegram Mini Apps",
        text: "приложения внутри Telegram для личных кабинетов, каталогов, форм и рабочих панелей."
      },
      {
        title: "Запуск первой версии продукта",
        text: "собираю первую рабочую версию, чтобы проверить идею или показать продукт клиентам."
      },
      {
        title: "Внутренние инструменты",
        text: "панели, рабочие сервисы и автоматизация процессов для команды."
      },
      {
        title: "Лендинги и продуктовые страницы",
        text: "лендинги и продуктовые страницы с продуманной структурой, дизайном и адаптивной версткой."
      },
      {
        title: "Дизайн интерфейсов",
        text: "макеты, прототипы и понятная структура экранов в Figma."
      }
    ],
    aboutTitle: "обо мне",
    aboutText:
      "Учусь в НИУ ВШЭ на программе «Управление бизнесом». Работаю над приложениями и сайтами целиком. Продумываю структуру, интерфейс и визуальный стиль, собираю frontend и backend, подключаю API и базы данных. Больше всего мне нравится совмещать full-stack разработку с дизайном и айдентикой. Так продукт получается не только рабочим, но и цельным.",
    processTitle: "как проходит работа",
    process: [
      {
        title: "Разбор задачи",
        text: "обсуждаем, что нужно сделать, для кого и к какому результату прийти."
      },
      {
        title: "Структура и прототип",
        text: "собираю логику, основные экраны и понятный пользовательский путь."
      },
      {
        title: "Разработка",
        text: "делаю интерфейс, backend, интеграции и все, что нужно для первой версии."
      },
      {
        title: "Запуск и доработка",
        text: "тестируем, правим детали и готовим продукт к реальному использованию."
      }
    ],
    contactTitle: "давайте обсудим ваш проект",
    detail: {
      backLabel: "Назад к проектам",
      about: "о проекте",
      task: "задача",
      work: "что сделано",
      result: "результат",
      similarProduct: "хотите похожий продукт?",
      discuss: "обсудить проект",
      demo: "Демо"
    }
  },
  en: {
    menu: {
      projects: "work",
      about: "about",
      contacts: "contact",
      menu: "menu",
      close: "close",
      openLabel: "Open menu",
      closeLabel: "Close menu",
      homeLabel: "Back to home",
      languageLabel: "Choose language"
    },
    selectedProjectsLabel: "Selected work",
    servicesTitle: "what I can build",
    services: [
      {
        title: "Telegram bots",
        text: "bots for lead capture, notifications, business process automation, and user communication."
      },
      {
        title: "Telegram Mini Apps",
        text: "apps inside Telegram for customer accounts, catalogs, forms, and operational dashboards."
      },
      {
        title: "First product release",
        text: "I build the first working release to validate an idea or present the product to clients."
      },
      {
        title: "Internal tools",
        text: "dashboards, team services, and workflow automation."
      },
      {
        title: "Landing and product pages",
        text: "landing and product pages with a clear structure, considered design, and responsive development."
      },
      {
        title: "Interface design",
        text: "layouts, prototypes, and clear interface structures in Figma."
      }
    ],
    aboutTitle: "about me",
    aboutText:
      "I study Business Management at HSE University and work on apps and websites from end to end. I shape the product structure, interface, and visual style, build the frontend and backend, and connect APIs and databases. I especially enjoy combining full-stack development with design and identity so the final product works well and feels cohesive.",
    processTitle: "how I work",
    process: [
      {
        title: "Understanding the task",
        text: "we define what needs to be built, who it is for, and what outcome the product should deliver."
      },
      {
        title: "Structure and prototype",
        text: "I shape the product logic, key screens, and a clear user journey."
      },
      {
        title: "Development",
        text: "I build the interface, backend, integrations, and everything required for the first release."
      },
      {
        title: "Launch and refinement",
        text: "we test the product, refine the details, and prepare it for real use."
      }
    ],
    contactTitle: "let’s discuss your project",
    detail: {
      backLabel: "Back to projects",
      about: "about the project",
      task: "the task",
      work: "what I built",
      result: "the result",
      similarProduct: "need a similar product?",
      discuss: "discuss a project",
      demo: "Demo"
    }
  }
};
