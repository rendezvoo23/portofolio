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
      <div className="mb-10">
        <p className="section-kicker">Процесс</p>
        <h2 className="section-title mt-3">Как проходит работа</h2>
      </div>
      <div className="grid gap-px border border-line bg-line md:grid-cols-4">
        {steps.map((step, index) => (
          <article className="bg-ink p-5 md:min-h-[280px] md:p-7" key={step.title}>
            <p className="text-sm text-paper/35">0{index + 1}</p>
            <h3 className="mt-14 text-2xl font-normal leading-tight">
              {step.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-paper/60">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
