const skillGroups = [
  {
    title: "Telegram",
    items: ["Telegram Bot API", "Telegram Mini Apps", "Telegram-боты"]
  },
  {
    title: "Development",
    items: ["Backend", "Web coding", "API", "Databases", "Integrations"]
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Prototypes", "Landing pages"]
  },
  {
    title: "Product",
    items: ["MVP", "User flows", "Product logic", "Client communication"]
  },
  {
    title: "Additional",
    items: ["Machine Learning basics", "Sales", "Marketing"]
  },
  {
    title: "Languages",
    items: ["Русский — native", "Английский — B2"]
  }
];

export function Skills() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
      <div className="section-grid">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title mt-3">Навыки</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-line pb-4 text-sm uppercase tracking-[0.14em] text-paper/45">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li className="text-xl text-paper/75" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
