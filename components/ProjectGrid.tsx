import { getProjects } from "@/data/projects";
import { siteCopy, type Locale } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid({ locale = "ru" }: { locale?: Locale }) {
  const [fup, whyspent, trv] = getProjects(locale);
  const orderedProjects = [whyspent, fup, trv];

  return (
    <section
      aria-label={siteCopy[locale].selectedProjectsLabel}
      className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 md:px-10 md:pb-36 md:pt-40"
      id="projects"
    >
      <div className="grid gap-14 md:gap-28">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.slug} locale={locale} project={project} />
        ))}
      </div>
    </section>
  );
}
