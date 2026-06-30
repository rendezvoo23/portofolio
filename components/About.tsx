export function About() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28"
      id="about"
    >
      <div className="section-grid">
        <div>
          <p className="section-kicker">Обо мне</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-5xl">
            Обо мне
          </h2>
        </div>
        <div>
          <p className="max-w-5xl text-2xl font-normal leading-snug text-paper md:text-4xl">
            Я занимаюсь веб-разработкой и делаю Telegram Mini Apps, ботов и
            небольшие сервисы для бизнеса.
          </p>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-paper/65">
            Учусь в НИУ ВШЭ на программе «Управление бизнесом». В проектах
            работаю с frontend, backend, Telegram API, базами данных,
            интеграциями и интерфейсами. Мне нравится быстро собирать первую
            рабочую версию продукта, проверять идею и доводить ее до понятного
            запуска.
          </p>
        </div>
      </div>
    </section>
  );
}
