export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Технологии и теги">
      {tags.map((tag) => (
        <li
          className="border border-line px-3 py-2 text-xs uppercase tracking-[0.14em] text-paper/65"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
