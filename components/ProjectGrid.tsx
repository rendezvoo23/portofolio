import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  const [fup, whyspent, trv] = projects;
  const orderedProjects = [whyspent, fup, trv];

  return (
    <section
      aria-label="Избранные проекты"
      className="mx-auto max-w-[1440px] px-6 pb-24 pt-32 md:px-10 md:pb-36 md:pt-40"
      id="projects"
    >
      <div className="grid gap-20 md:gap-28">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
