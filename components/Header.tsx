import Link from "next/link";

const navItems = [
  { href: "/#projects", label: "Проекты" },
  { href: "/#services", label: "Услуги" },
  { href: "/#about", label: "Обо мне" },
  { href: "/#contact", label: "Контакты" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link className="focus-ring text-sm text-paper" href="/" aria-label="На главную">
          Семен Бедункевич
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-paper/65 lg:flex" aria-label="Главная навигация">
          {navItems.map((item) => (
            <Link className="nav-link focus-ring" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="focus-ring text-sm text-paper underline-offset-4 hover:underline" href="/#contact">
          Написать
        </Link>
      </div>
    </header>
  );
}
