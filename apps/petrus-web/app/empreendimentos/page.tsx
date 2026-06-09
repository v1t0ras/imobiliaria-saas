const communities = ["Playa Vista", "Las Dunas", "Celebration", "Allure Beach", "Velas da Marina", "Amare Home Resort"];

export default function DevelopmentsPage() {
  return (
    <main className="shell">
      <div className="container">
        <section className="panel">
          <h1>Condomínios fechados</h1>
          <p>Uma vitrine para empreendimentos e condomínios que ajudam a organizar a navegação do usuário.</p>
        </section>
        <section className="section grid grid-3">
          {communities.map((community) => (
            <article className="card" key={community}>
              <div className="card-media" />
              <div className="card-body">
                <h3>{community}</h3>
                <p>Lista de imóveis, localização, diferenciais e acesso direto ao detalhe do empreendimento.</p>
                <a className="btn btn-dark" href="/contato">Falar com a Petrus</a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
