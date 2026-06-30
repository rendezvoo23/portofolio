const services = [
  {
    title: "Telegram-боты",
    text: "Боты для заявок, уведомлений, простых процессов и общения с пользователями."
  },
  {
    title: "Telegram Mini Apps",
    text: "Небольшие приложения внутри Telegram: кабинеты, каталоги, формы и панели."
  },
  {
    title: "Запуск первой версии продукта",
    text: "Собираю первую рабочую версию, чтобы проверить идею или показать продукт клиентам."
  },
  {
    title: "Внутренние инструменты",
    text: "Панели, рабочие сервисы и небольшая автоматизация для команды."
  },
  {
    title: "Лендинги и продуктовые страницы",
    text: "Простые страницы для продукта, проекта или личного бренда."
  },
  {
    title: "Дизайн интерфейсов",
    text: "Макеты, прототипы и понятная структура экранов в Figma."
  }
];

export function Services() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28"
      id="services"
    >
      <div className="section-grid">
        <h2 className="section-title">что я могу сделать</h2>
        <div className="info-list">
          {services.map((service, index) => (
            <article className="info-row" key={service.title}>
              <span className="info-row-number">0{index + 1}</span>
              <div className="info-row-copy">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
