const steps = [
  {
    title: "Разбор задачи",
    text: "Обсуждаем, что нужно сделать, для кого и к какому результату прийти."
  },
  {
    title: "Структура и прототип",
    text: "Собираю логику, основные экраны и понятный пользовательский путь."
  },
  {
    title: "Разработка",
    text: "Делаю интерфейс, backend, интеграции и все, что нужно для первой версии."
  },
  {
    title: "Запуск и доработка",
    text: "Тестируем, правим детали и готовим продукт к реальному использованию."
  }
];

export function Process() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
      <div className="section-grid">
        <h2 className="section-title">как проходит работа</h2>
        <div className="info-list">
          {steps.map((step, index) => (
            <article className="info-row" key={step.title}>
              <span className="info-row-number">0{index + 1}</span>
              <div className="info-row-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
