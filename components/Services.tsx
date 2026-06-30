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
        <div>
          <p className="section-kicker">Услуги</p>
          <h2 className="section-title mt-3">Что я могу сделать</h2>
        </div>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {services.map((service) => (
            <article className="flex min-h-[220px] flex-col bg-ink p-5 md:p-7" key={service.title}>
              <h3 className="min-h-[72px] text-2xl font-normal leading-tight">
                {service.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-paper/60">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
