const contacts = [
  {
    label: "Telegram",
    value: "@rndzvoo",
    href: "https://t.me/rndzvoo"
  },
  {
    label: "Email",
    value: "ssbedunkevich@edu.hse.ru",
    href: "mailto:ssbedunkevich@edu.hse.ru"
  }
];

export function ContactForm() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36"
      id="contact"
    >
      <div className="border-t border-line pt-10">
        <div className="grid gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
          <p className="section-kicker">Контакты</p>
          <div>
            <h2 className="max-w-6xl text-5xl font-normal leading-[1.03] md:text-7xl lg:text-[88px]">
              Есть идея для продукта, бота или Mini App?
            </h2>
            <p className="mt-10 max-w-4xl text-2xl font-normal leading-snug text-paper/75 md:text-4xl">
              Напишите мне в Telegram. Расскажите задачу обычными словами, а я
              помогу разложить ее на первые шаги.
            </p>

            <div className="mt-12">
              <a className="button-primary focus-ring" href="https://t.me/rndzvoo">
                Написать в Telegram
              </a>
            </div>

            <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  className="flex min-h-40 flex-col justify-between bg-ink p-5 transition hover:bg-panel md:p-6"
                  href={contact.href}
                  key={contact.label}
                  rel="noreferrer"
                  target={contact.label === "Email" ? undefined : "_blank"}
                >
                  <span className="text-sm text-paper/40">{contact.label}</span>
                  <span className="break-words text-xl leading-tight text-paper md:text-2xl">
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
