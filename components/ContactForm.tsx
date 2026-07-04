const contacts = [
  {
    label: "Telegram",
    value: "@rndzvoo",
    href: "https://t.me/rndzvoo"
  },
  {
    label: "Email",
    value: "simon@bedunkevich.com",
    href: "mailto:simon@bedunkevich.com"
  }
];

export function ContactForm() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-36"
      id="contact"
    >
      <h2 className="portfolio-heading">давайте обсудим ваш проект</h2>
      <div className="ml-auto mt-8 max-w-6xl rounded-[28px] bg-paper p-3 text-ink md:mt-14 md:rounded-[44px] md:p-5">
        <div className="grid gap-3 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              className="contact-card flex min-h-24 flex-col justify-between rounded-[22px] bg-[#e7e7e2] p-5 md:min-h-36 md:rounded-[28px] md:p-6"
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
    </section>
  );
}
