import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import type { Locale } from "@/data/site";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectCard({
  project,
  locale = "ru"
}: {
  project: Project;
  locale?: Locale;
}) {
  const projectHref = `${locale === "en" ? "/en" : ""}/projects/${project.slug}`;

  return (
    <Link className="project-list-item group focus-ring" href={projectHref}>
      <article>
        <div className="project-list-heading">
          <h3 className="portfolio-heading">
            {project.cardTitle}
          </h3>
          <span aria-hidden="true" className="project-arrow">
            <ArrowUpRight className="project-arrow-icon" strokeWidth={1.8} />
          </span>
        </div>

        <ProjectMedia
          autoPlay={Boolean(project.media.videoSrc)}
          aspect="wide"
          className="project-list-media"
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
