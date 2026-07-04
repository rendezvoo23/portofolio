import { AccordionList } from "@/components/AccordionList";

const steps = [
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
];

export function Process() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-28">
      <h2 className="portfolio-heading">как проходит работа</h2>
      <div className="ml-auto mt-8 max-w-5xl md:mt-20">
        <AccordionList items={steps} />
      </div>
    </section>
  );
}
