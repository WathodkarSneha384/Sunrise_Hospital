import type { BlogBlock, BlogSection } from "@/lib/blog-types";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{block.text}</p>;
    case "subheading":
      return <h3 className="text-base sm:text-lg font-bold text-[var(--navy)] mt-2">{block.text}</h3>;
    case "list":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
              <span className="text-[var(--primary)] font-bold mt-0.5 shrink-0">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          className={`rounded-xl border px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base leading-relaxed ${
            block.variant === "warning"
              ? "bg-amber-50 border-amber-200 text-amber-900"
              : "bg-[var(--primary-light)] border-[var(--border)] text-[var(--navy)]"
          }`}
        >
          {block.text}
        </div>
      );
    case "grades":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {block.items.map((g, i) => (
            <div
              key={g.grade}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="font-bold text-[var(--navy)]">{g.grade}</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-slate-200 -mx-1 sm:mx-0">
          <table className="w-full text-xs sm:text-sm min-w-[520px]">
            <thead>
              <tr className="bg-[var(--navy)] text-white">
                {block.headers.map((h) => (
                  <th key={h} className="px-3 sm:px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-3 sm:px-4 py-3 align-top ${
                        j === 0 ? "font-medium text-slate-700" : "text-slate-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "steps":
      return (
        <ol className="space-y-4">
          {block.items.map((step, i) => (
            <li key={step.title} className="flex gap-3 sm:gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-[var(--navy)] text-sm sm:text-base">{step.title}</p>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export default function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-8 sm:space-y-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--navy)] mb-4 pb-2 border-b border-slate-200">
            {section.heading}
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {section.blocks.map((block, i) => (
              <Block key={`${section.id}-${i}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
