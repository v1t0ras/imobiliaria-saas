const results = [
  {
    title: "Apartamento com 159m², 3 dormitórios no Navegantes",
    price: "R$ 1.790.000",
    details: ["3 dorms", "1 suíte", "159m²", "2 vagas"]
  },
  {
    title: "Casa em condomínio com 210m² no Capão Ilhas Resort",
    price: "R$ 2.690.000",
    details: ["4 dorms", "4 suítes", "210m²", "1 vaga"]
  },
  {
    title: "Apartamento com 72m², 2 dormitórios no Navegantes",
    price: "R$ 560.000",
    details: ["2 dorms", "1 suíte", "72m²", "1 vaga"]
  }
];

export default function ImoveisPage() {
  return (
    <main className="shell">
      <div className="container">
        <section className="panel">
          <h1>Buscar imóveis</h1>
          <p>Filtros rápidos, ordenação e paginação para navegar pelo catálogo da Petrus.</p>
          <div className="chip-row" style={{ marginTop: 20 }}>
            <span className="chip">Mais recentes</span>
            <span className="chip">Menor valor</span>
            <span className="chip">Maior valor</span>
            <span className="chip">Capão da Canoa</span>
          </div>
        </section>

        <section className="section grid grid-3">
          {results.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-media" />
              <div className="card-body">
                <h3>{item.title}</h3>
                <div className="meta">
                  {item.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <strong className="price">{item.price}</strong>
                  <a className="btn btn-dark" href="/imovel/apartamento-zona-nova-7519">
                    Detalhes
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
