import { AccordionList } from "@/components/AccordionList";
import { siteCopy, type Locale } from "@/data/site";

export function Process({ locale = "ru" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-28">
      <h2 className="portfolio-heading">{copy.processTitle}</h2>
      <div className="ml-auto mt-8 max-w-5xl md:mt-20">
        <AccordionList items={copy.process} />
      </div>
    </section>
  );
}
