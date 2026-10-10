const foundations = [
  "Runtime environment is schema-validated",
  "Quality gates run locally and in CI",
  "Panta integration remains behind a server-side adapter boundary",
];

export default function Home() {
  return (
    <main>
      <article className="phase-card" aria-labelledby="page-title">
        <p className="eyebrow">Proofline · Phase 0</p>
        <h1 id="page-title">The forecast layer for the internet.</h1>
        <p className="lede">
          Foundation work is in place. Product flows remain deliberately gated
          until Panta&apos;s external contracts are verified.
        </p>
        <ul>
          {foundations.map((foundation) => (
            <li key={foundation}>{foundation}</li>
          ))}
        </ul>
        <p className="status">
          <span aria-hidden="true" /> No live markets or credentials are
          configured
        </p>
      </article>
    </main>
  );
}
