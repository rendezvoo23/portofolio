import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  const [fup, whyspent, trv] = projects;

  return (
    <section
      aria-label="Избранные проекты"
      className="mx-auto max-w-[1440px] px-6 pb-20 pt-2 md:px-10 md:pb-28 md:pt-4"
      id="projects"
    >
      <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2">
        <ProjectCard featured project={whyspent} />
        <ProjectCard project={fup} />
        <ProjectCard project={trv} />
      </div>
    </section>
  );
}
