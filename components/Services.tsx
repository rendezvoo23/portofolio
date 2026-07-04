import { AccordionList } from "@/components/AccordionList";

const services = [
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
];

export function Services() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-28"
      id="services"
    >
      <h2 className="portfolio-heading">что я могу сделать</h2>
      <div className="ml-auto mt-8 max-w-5xl md:mt-20">
        <AccordionList items={services} />
      </div>
    </section>
  );
}
