export type MediaKind = "browser" | "phone" | "video" | "dashboard" | "image";

export type ProjectMediaItem = {
  kind: MediaKind;
  label: string;
  detail: string;
  aspect: "wide" | "tall" | "square";
  videoSrc?: string;
  imageSrc?: string;
  poster?: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: "fup" | "whyspent" | "trv";
  title: string;
  cardTitle: string;
  subtitle: string;
  role: string;
  status?: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  task: string;
  whatWasDone: string[];
  result: string;
  tags: string[];
  demoVideoSrc?: string;
  media: ProjectMediaItem;
  gallery: ProjectMediaItem[];
};

export const projects: Project[] = [
  {
    slug: "fup",
    title: "FUP",
    cardTitle: "FUP — нетворкинг на событиях",
    subtitle: "Приложение для мероприятий и анализа нетворкинга",
    role: "Сооснователь и CTO",
    status: "Финалист акселератора ВШЭ",
    category: "Мероприятия / Telegram-приложение / MVP",
    year: "2026",
    description:
      "Продукт для организаторов мероприятий: помогает видеть активность гостей и понимать, как проходит нетворкинг.",
    overview:
      "FUP помогает организаторам мероприятий смотреть, насколько активно гости знакомятся и общаются. Идея простая: после события у команды остаются не только ощущения, но и понятные данные.",
    task:
      "Собрать MVP, который показывает активность участников и помогает оценить качество нетворкинга.",
    whatWasDone: [
      "Спроектирована основная логика MVP",
      "Разработаны сценарии для участников и организаторов",
      "Продумана структура данных для метрик нетворкинга",
      "Подготовлены ключевые экраны и пользовательские потоки",
      "Подготовлена техническая часть проекта для презентации"
    ],
    result:
      "Команда прошла в финал акселератора ВШЭ. У проекта появилась рабочая структура MVP и основа для следующих пилотов.",
    tags: ["Telegram Mini Apps", "Backend", "Product Design", "MVP", "Event-tech"],
    demoVideoSrc: "/media/fup_demo.mp4",
    media: {
      kind: "video",
      label: "Демо FUP",
      detail: "Демо продукта FUP",
      aspect: "wide",
      videoSrc: "/media/fup_demo.mp4",
      fit: "cover"
    },
    gallery: [
      {
        kind: "image",
        label: "Экран FUP",
        detail: "Экран приложения FUP",
        aspect: "wide",
        imageSrc: "/media/fup_mockup_phone.png",
        fit: "contain"
      },
      {
        kind: "image",
        label: "Интерфейс FUP",
        detail: "Интерфейс продукта FUP",
        aspect: "tall",
        imageSrc: "/media/fup_screen.png",
        fit: "contain"
      },
      {
        kind: "image",
        label: "Материал FUP",
        detail: "Визуальный материал FUP",
        aspect: "tall",
        imageSrc: "/media/fup_logo_example.png",
        fit: "cover"
      }
    ]
  },
  {
    slug: "whyspent",
    title: "WhySpent",
    cardTitle: "WhySpent — расходы в Telegram",
    subtitle: "Учет расходов и анализ финансовых привычек внутри Telegram",
    role: "Автор проекта / разработчик",
    category: "Финансы / Telegram-приложение / личные финансы",
    year: "2025 — 2026",
    description:
      "Приложение в Telegram для быстрого учета трат и просмотра расходов по категориям.",
    overview:
      "WhySpent помогает быстро записывать расходы прямо в Telegram. Пользователь добавляет трату, выбирает категорию и видит, куда уходят деньги.",
    task:
      "Сделать учет расходов быстрым и привычным: без отдельного приложения и длинных форм.",
    whatWasDone: [
      "Разработана логика учета расходов и категорий",
      "Собран сценарий быстрого добавления трат",
      "Реализовано хранение данных и обработка действий пользователя",
      "Подготовлен интерфейс для статистики",
      "Проработана визуальная подача продукта"
    ],
    result:
      "Получилась рабочая первая версия с понятным сценарием и базой для будущей финансовой аналитики.",
    tags: ["Telegram", "Finance Tracker", "UX", "Figma", "MVP"],
    demoVideoSrc: "/media/whyspent_demo.mp4",
    media: {
      kind: "image",
      label: "Обложка WhySpent",
      detail: "Обложка приложения WhySpent",
      aspect: "wide",
      imageSrc: "/media/whyspent_cover.png",
      poster: "/media/whyspent_cover.png",
      fit: "cover"
    },
    gallery: [
      {
        kind: "image",
        label: "Мокап WhySpent",
        detail: "Мокап интерфейса WhySpent",
        aspect: "wide",
        imageSrc: "/media/whyspent_mockup_bento_v2.png",
        fit: "contain"
      },
      {
        kind: "image",
        label: "Экран WhySpent",
        detail: "Экран приложения WhySpent",
        aspect: "tall",
        imageSrc: "/media/whyspent_mockup_phone_v2.png",
        fit: "contain"
      },
      {
        kind: "image",
        label: "Обложка WhySpent",
        detail: "Обложка приложения WhySpent",
        aspect: "tall",
        imageSrc: "/media/whyspent_cover.png",
        fit: "cover"
      }
    ]
  },
  {
    slug: "trv",
    title: "TRV",
    cardTitle: "TRV — витрина музыкального лейбла",
    subtitle: "Витрина релизов, артистов и мероприятий музыкального лейбла",
    role: "Разработчик",
    status: "В разработке",
    category: "Музыкальный лейбл / Telegram-приложение",
    year: "2025 — 2026",
    description:
      "Приложение для музыкального лейбла: релизы, артисты, участники команды и мероприятия в одном месте.",
    overview:
      "TRV — витрина музыкального лейбла. В приложении можно смотреть релизы, артистов, участников команды и мероприятия. Проект развивается, поэтому новые разделы можно добавлять дальше.",
    task:
      "Собрать первую версию приложения для аудитории лейбла и сделать удобную основу для новых функций.",
    whatWasDone: [
      "Спроектирована структура пользовательского приложения",
      "Собраны разделы с релизами, артистами, участниками и мероприятиями",
      "Продуманы карточки, детальные страницы и переходы внутри продукта",
      "Разработана админ-панель для управления контентом",
      "Подготовлена рабочая версия для дальнейшего развития"
    ],
    result:
      "У проекта есть рабочая пользовательская часть и админ-панель. Сейчас приложение находится в разработке.",
    tags: ["Telegram Mini App", "Music-tech", "Admin Panel", "Web App"],
    media: {
      kind: "image",
      label: "Мокап TRV",
      detail: "Мокап приложения TRV",
      aspect: "wide",
      imageSrc: "/media/trv_mockup_wide.png",
      fit: "contain"
    },
    gallery: [
      {
        kind: "image",
        label: "Мокап TRV",
        detail: "Мокап приложения TRV",
        aspect: "wide",
        imageSrc: "/media/trv_mockup_wide.png",
        fit: "contain"
      },
      {
        kind: "image",
        label: "Детальный экран TRV",
        detail: "Страница артиста в TRV",
        aspect: "tall",
        imageSrc: "/media/trv_mockup_phone.png",
        fit: "contain"
      },
      {
        kind: "image",
        label: "Материал TRV",
        detail: "Визуальный материал TRV",
        aspect: "tall",
        imageSrc: "/media/trv_logos.png",
        fit: "cover"
      }
    ]
  }
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
