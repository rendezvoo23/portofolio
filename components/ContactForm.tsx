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
      <div className="rounded-[32px] bg-paper p-6 text-ink md:rounded-[44px] md:p-12 lg:p-16">
        <div className="ml-auto max-w-6xl">
          <h2 className="section-title">давайте обсудим ваш проект</h2>
          <p className="mt-10 max-w-4xl text-xl font-normal leading-relaxed text-black/60 md:text-3xl md:leading-snug">
            Можно без длинного технического задания. Напишите пару слов о
            задаче в Telegram или на почту — дальше разберемся вместе.
          </p>

          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {contacts.map((contact) => (
              <a
                className="contact-card flex min-h-40 flex-col justify-between rounded-[24px] bg-[#e7e7e2] p-5 md:p-6"
                href={contact.href}
                key={contact.label}
                rel="noreferrer"
                target={contact.label === "Email" ? undefined : "_blank"}
              >
                <span className="text-sm lowercase text-black/45">
                  {contact.label}
                </span>
                <span className="break-words text-xl leading-tight text-ink md:text-2xl">
                  {contact.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
