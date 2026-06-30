import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectDetailPage({ project }: { project: Project }) {
  const heroVideoSrc =
    project.slug === "whyspent" ? project.demoVideoSrc : project.media.videoSrc;

  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <Link className="nav-link focus-ring text-sm text-paper/60" href="/#projects">
          ← Назад к проектам
        </Link>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="section-kicker">{project.category}</p>
            <h1 className="mt-5 text-7xl font-normal leading-none md:text-9xl">
              {project.title}
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-snug text-paper/75 md:text-4xl">
              {project.subtitle}
            </p>
          </div>

          <div className="grid content-end gap-5 text-sm text-paper/60 md:pt-20">
            <Meta label="Роль" value={project.role} />
            {project.status ? <Meta label="Статус" value={project.status} /> : null}
            <Meta label="Категория" value={project.category} />
            <Meta label="Период" value={project.year} />
          </div>
        </div>

        <div className="mt-14">
          {heroVideoSrc ? (
            <ProjectMedia
              autoPlay
              aspect="wide"
              detail={`Демо продукта ${project.title}`}
              fit={project.slug === "whyspent" ? "contain" : project.media.fit}
              kind="video"
              label={`Демо ${project.title}`}
              poster={project.media.poster}
              videoSrc={heroVideoSrc}
            />
          ) : (
            <ProjectMedia
              aspect="wide"
              detail={project.media.detail}
              fit={project.media.fit}
              imageSrc={project.media.imageSrc}
              kind={project.media.kind}
              label={project.media.label}
              poster={project.media.poster}
              videoSrc={project.media.videoSrc}
            />
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="ml-auto grid max-w-5xl gap-12">
          <TextBlock title="Обзор" text={project.overview} />
          <TextBlock title="Задача" text={project.task} />
          <div>
            <h2 className="detail-title">Что сделано</h2>
            <ul className="mt-5 grid gap-3 text-xl leading-relaxed text-paper/70">
              {project.whatWasDone.map((item) => (
                <li className="border-b border-line pb-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <TextBlock title="Результат" text={project.result} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {project.gallery.map((media, index) => (
            <ProjectMedia
              autoPlay={media.kind === "video"}
              aspect={media.aspect}
              className={media.aspect === "wide" ? "md:col-span-2" : ""}
              detail={media.detail}
              fit={media.fit}
              imageSrc={media.imageSrc}
              key={`${project.slug}-media-${index}`}
              kind={media.kind}
              label={media.label}
              poster={media.poster}
              videoSrc={media.videoSrc}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="border border-line p-6 md:p-10">
          <p className="section-kicker">Новый проект</p>
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-normal leading-tight md:text-7xl">
              Хотите похожий продукт?
            </h2>
            <Link className="button-primary focus-ring" href="/#contact">
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-line pb-3">
      <span className="text-paper/35">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="detail-title">{title}</h2>
      <p className="mt-5 max-w-4xl text-xl leading-relaxed text-paper/70">
        {text}
      </p>
    </div>
  );
}
