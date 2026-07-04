import type { MediaKind } from "@/data/projects";

type ProjectMediaProps = {
  kind: MediaKind;
  label: string;
  detail: string;
  aspect?: "wide" | "tall" | "square";
  videoSrc?: string;
  imageSrc?: string;
  poster?: string;
  fit?: "cover" | "contain";
  controls?: boolean;
  autoPlay?: boolean;
  className?: string;
};

const aspectClasses = {
  wide: "aspect-[16/9]",
  tall: "aspect-[4/5]",
  square: "aspect-square"
};

export function ProjectMedia({
  kind,
  label,
  detail,
  aspect = "wide",
  videoSrc,
  imageSrc,
  poster,
  fit = "cover",
  controls = false,
  autoPlay = false,
  className = ""
}: ProjectMediaProps) {
  if (imageSrc) {
    return (
      <ImageMedia
        src={imageSrc}
        alt={detail}
        fit={fit}
        className={`${aspectClasses[aspect]} ${className}`}
      />
    );
  }

  if (videoSrc) {
    return (
      <VideoPlaceholder
        src={videoSrc}
        poster={poster}
        label={label}
        detail={detail}
        fit={fit}
        controls={controls}
        autoPlay={autoPlay}
        className={`${aspectClasses[aspect]} ${className}`}
      />
    );
  }

  if (kind === "phone") {
    return (
      <PhoneMockup
        label={label}
        detail={detail}
        className={`${aspectClasses[aspect]} ${className}`}
      />
    );
  }

  if (kind === "dashboard") {
    return (
      <DashboardMockup
        label={label}
        detail={detail}
        className={`${aspectClasses[aspect]} ${className}`}
      />
    );
  }

  return (
    <BrowserMockup
      label={label}
      detail={detail}
      className={`${aspectClasses[aspect]} ${className}`}
    />
  );
}

export function VideoPlaceholder({
  src,
  poster,
  label,
  detail,
  fit = "cover",
  controls = false,
  autoPlay = false,
  className = ""
}: {
  src?: string;
  poster?: string;
  label: string;
  detail: string;
  fit?: "cover" | "contain";
  controls?: boolean;
  autoPlay?: boolean;
  className?: string;
}) {
  return (
    <div className={`media-frame relative overflow-hidden bg-black ${className}`}>
      {src ? (
        <video
          aria-label={detail}
          autoPlay={autoPlay}
          className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
          controls={controls}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} />
        </video>
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-bone p-5 text-ink md:p-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-black/45">
            <span>{label}</span>
            <span>00:00</span>
          </div>
          <div>
            <p className="text-2xl font-normal md:text-5xl">{detail}</p>
            <div className="mt-6 h-px w-full bg-black/20" />
          </div>
        </div>
      )}
    </div>
  );
}

function ImageMedia({
  src,
  alt,
  fit,
  className = ""
}: {
  src: string;
  alt: string;
  fit: "cover" | "contain";
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[24px] ${getImageCanvasClass(src)} ${className}`}>
      <img
        alt={alt}
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} ${getImageInsetClass(src)}`}
        loading="lazy"
        src={src}
      />
    </div>
  );
}

function getImageCanvasClass(src: string) {
  if (src.includes("whyspent_mockup_bento")) {
    return "bg-[#1c1c1e]";
  }

  if (src.includes("whyspent_mockup")) {
    return "bg-white";
  }

  if (src.includes("whyspent_cover")) {
    return "bg-[#1f1f1f]";
  }

  if (src.includes("trv_") || src.includes("fup_")) {
    return "bg-white";
  }

  return "bg-transparent";
}

function getImageInsetClass(src: string) {
  if (
    src.includes("fup_mockup_phone") ||
    src.includes("whyspent_mockup_phone")
  ) {
    return "p-4 md:p-6";
  }

  return "";
}

export function PhoneMockup({
  label,
  detail,
  className = ""
}: {
  label: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={`media-frame flex items-center justify-center bg-clay p-6 ${className}`}>
      <div className="flex h-[88%] w-[58%] max-w-[280px] flex-col border border-black/25 bg-ink text-paper">
        <div className="flex items-center justify-between border-b border-paper/12 px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-paper/45">
          <span>Telegram</span>
          <span>Mini App</span>
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-3 h-2 w-20 bg-paper/70" />
            <div className="space-y-2">
              <div className="h-10 border border-paper/12 bg-paper/5" />
              <div className="h-10 border border-paper/12 bg-paper/5" />
              <div className="h-10 border border-paper/12 bg-paper/5" />
            </div>
          </div>
          <div>
            <p className="text-sm text-paper">{label}</p>
            <p className="mt-2 text-xs leading-relaxed text-paper/50">{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrowserMockup({
  label,
  detail,
  className = ""
}: {
  label: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={`media-frame bg-bone p-3 text-ink md:p-7 ${className}`}>
      <div className="flex h-full min-h-0 flex-col overflow-hidden border border-black/15 bg-[#F7F5EE]">
        <div className="flex shrink-0 items-center justify-between border-b border-black/15 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-black/45 md:px-4 md:py-3 md:text-[10px]">
          <span>{label}</span>
          <span>веб-приложение</span>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[0.8fr_1.2fr] gap-px overflow-hidden bg-black/10">
          <div className="overflow-hidden bg-[#F7F5EE] p-3 md:p-4">
            <div className="h-2 w-14 bg-black/70 md:h-3 md:w-16" />
            <div className="mt-5 space-y-2 md:mt-8 md:space-y-3">
              <div className="h-2 w-full bg-black/15" />
              <div className="h-2 w-3/4 bg-black/15" />
              <div className="h-2 w-5/6 bg-black/15" />
            </div>
          </div>
          <div className="flex min-h-0 flex-col justify-between overflow-hidden bg-[#F7F5EE] p-3 md:p-4">
            <div className="grid flex-1 grid-cols-2 grid-rows-[1fr_1.25fr] gap-2 md:gap-3">
              <div className="min-h-0 border border-black/15" />
              <div className="min-h-0 border border-black/15" />
              <div className="col-span-2 min-h-0 border border-black/15 bg-black/[0.03]" />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-tight md:text-3xl">{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({
  label,
  detail,
  className = ""
}: {
  label: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={`media-frame bg-bone p-3 text-ink md:p-8 ${className}`}>
      <div className="grid h-full min-h-0 grid-cols-[0.7fr_1.3fr] gap-px overflow-hidden bg-black/15">
        <div className="flex min-h-0 flex-col justify-between overflow-hidden bg-[#F7F5EE] p-3 md:p-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.16em] text-black/45 md:text-xs">{label}</p>
            <h3 className="mt-4 text-3xl font-normal leading-none md:mt-6 md:text-6xl">FUP</h3>
          </div>
          <p className="text-sm leading-relaxed text-black/55">{detail}</p>
        </div>
        <div className="grid min-h-0 grid-rows-[0.8fr_1fr] gap-px overflow-hidden">
          <div className="grid grid-cols-3 gap-px">
            <MetricBlock value="84%" label="активные гости" />
            <MetricBlock value="312" label="контакты" />
            <MetricBlock value="4.7" label="оценка качества" />
          </div>
          <div className="bg-[#F7F5EE] p-4 md:p-6">
            <div className="flex h-full items-end gap-2">
              {[42, 65, 38, 78, 55, 92, 70, 48, 84].map((height, index) => (
                <div
                  aria-hidden="true"
                  className="flex-1 bg-black/70"
                  key={index}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-col justify-between overflow-hidden bg-[#F7F5EE] p-2 md:p-4">
      <span className="text-xl md:text-4xl">{value}</span>
      <span className="truncate text-[8px] uppercase tracking-[0.08em] text-black/45 md:text-[10px] md:tracking-[0.16em]">
        {label}
      </span>
    </div>
  );
}
