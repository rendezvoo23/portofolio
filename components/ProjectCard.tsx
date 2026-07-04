import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-list-item group focus-ring" href={`/projects/${project.slug}`}>
      <article>
        <div className="project-list-heading">
          <h3 className="portfolio-heading">
            {project.cardTitle}
          </h3>
          <span aria-hidden="true" className="project-arrow">↗</span>
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
