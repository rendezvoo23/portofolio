import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectCard({
  project,
  featured = false
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      className={`group block focus-ring ${featured ? "lg:col-span-2" : ""}`}
      href={`/projects/${project.slug}`}
    >
      <article className="grid h-full grid-rows-[auto_1fr] gap-4">
        <h3
          className={`font-normal leading-tight md:whitespace-nowrap ${
            featured ? "text-3xl md:text-5xl" : "text-2xl md:text-[34px] xl:text-4xl"
          }`}
        >
          {project.cardTitle}
        </h3>

        <ProjectMedia
          autoPlay={Boolean(project.media.videoSrc)}
          aspect={featured ? "wide" : project.media.aspect}
          className="transition duration-500 group-hover:scale-[1.01] group-hover:opacity-90"
          detail={project.media.detail}
          fit={project.media.fit}
          imageSrc={project.media.imageSrc}
          kind={project.media.kind}
          label={project.media.label}
          poster={project.media.poster}
          videoSrc={project.media.videoSrc}
        />
      </article>
    </Link>
  );
}
