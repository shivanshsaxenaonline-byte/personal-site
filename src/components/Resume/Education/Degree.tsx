import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h3 className="degree">{data.degree}</h3>
        {/* Not every school has a useful URL. An empty `link` used to render
            `<a href="">`, which resolves to the current page — a link that
            looks real and goes nowhere. Those schools render as plain text. */}
        <p className="school">
          {data.link ? <a href={data.link}>{data.school}</a> : data.school},{' '}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
    </article>
  );
}
