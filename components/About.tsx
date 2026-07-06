import { siteCopy, type Locale } from "@/data/site";

export function About({ locale = "ru" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <section
      className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-28"
      id="about"
    >
      <div>
        <h2 className="portfolio-heading">{copy.aboutTitle}</h2>
        <div className="ml-auto mt-8 max-w-5xl md:mt-20">
          <p className="max-w-5xl text-lg font-normal leading-relaxed text-paper md:text-3xl">
            {copy.aboutText}
          </p>
        </div>
      </div>
    </section>
  );
}
