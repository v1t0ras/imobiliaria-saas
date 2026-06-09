const featuredProperties = [
  {
    title: "Apartamento com 82m², 3 dormitórios no bairro Zona Nova vitor testeste",
    location: "Capão da Canoa",
    bedrooms: "3 dorms",
    suites: "1 suíte",
    area: "82m²",
    parking: "1 vaga",
    price: "R$ 1.490.000"
  },
  {
    title: "Apartamento com 117m², 3 dormitórios no bairro Navegantes",
    location: "Capão da Canoa",
    bedrooms: "3 dorms",
    suites: "3 suítes",
    area: "117m²",
    parking: "2 vagas",
    price: "R$ 2.490.000"
  },
  {
    title: "Casa em Condomínio com 242m² no Velas da Marina",
    location: "Capão da Canoa",
    bedrooms: "4 dorms",
    suites: "4 suítes",
    area: "242m²",
    parking: "2 vagas",
    price: "R$ 4.200.000"
  }
];

const communities = ["Playa Vista", "Las Dunas", "Celebration", "Velas da Marina"];

export default function HomePage() {
  return (
    <main className="shell">
      <div className="container">
        <section className="hero">
          <div className="hero-inner">
            <div className="nav">
              <div className="brand">
                <span className="brand-mark" aria-hidden="true" />
                Petrus Imóveis
              </div>
              <nav className="nav-links" aria-label="Navegação principal">
                <a href="/imoveis">Imóveis</a>
                <a href="/empreendimentos">Empreendimentos</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
              </nav>
            </div>

            <div className="hero-grid">
              <div>
                <span className="kicker">Capão da Canoa e região · catálogo premium · atendimento direto</span>
                <h1>Imóveis que vendem melhor e encantam antes do primeiro contato.</h1>
                <p>
                  O novo portal da Petrus é uma evolução do site atual: mais moderno, mais funcional e com uma
                  apresentação visual mais forte para destacar os melhores imóveis da região.
                </p>
                <div className="chip-row" style={{ marginTop: 24 }}>
                  <span className="chip">Busca rápida</span>
                  <span className="chip">Destaques</span>
                  <span className="chip">Condomínios fechados</span>
                  <span className="chip">Contato imediato</span>
                </div>
              </div>

              <aside className="search-panel" aria-label="Busca principal">
                <div className="search-grid">
                  <label>
                    Tipo
                    <input placeholder="Apartamento, casa..." />
                  </label>
                  <label>
                    Localização
                    <input placeholder="Capão da Canoa" />
                  </label>
                  <label>
                    Valor
                    <input placeholder="Faixa de preço" />
                  </label>
                  <label>
                    Dormitórios
                    <input placeholder="2, 3, 4..." />
                  </label>
                </div>
                <div className="search-actions">
                  <button className="btn btn-primary">Buscar imóveis</button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2>Imóveis em destaque</h2>
              <p>
                Cards com a informação essencial: localização, dormitórios, suítes, área, vagas e preço, priorizando
                decisão rápida e leitura limpa.
              </p>
            </div>
          </div>
          <div className="grid grid-3">
            {featuredProperties.map((property) => (
              <article className="card" key={property.title}>
                <div className="card-media" />
                <div className="card-body">
                  <div className="meta">
                    <span>{property.location}</span>
                    <span>{property.bedrooms}</span>
                    <span>{property.suites}</span>
                  </div>
                  <h3>{property.title}</h3>
                  <div className="meta">
                    <span>{property.area}</span>
                    <span>{property.parking}</span>
                  </div>
                  <div className="card-actions">
                    <strong className="price">{property.price}</strong>
                    <a className="btn btn-dark" href="/imovel/apartamento-zona-nova-7519">
                      Detalhes
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2>Condomínios fechados</h2>
              <p>
                Uma vitrine separada para empreendimentos e condomínios relevantes, como no site atual, mas com mais
                espaço visual e uma leitura mais contemporânea.
              </p>
            </div>
          </div>
          <div className="grid grid-4">
            {communities.map((community) => (
              <article className="panel" key={community}>
                <h3>{community}</h3>
                <p>Seleção de imóveis, imagens, diferenciais e acesso rápido aos detalhes do empreendimento.</p>
                <a className="btn btn-dark" href="/empreendimentos">
                  Ver comunidade
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="feature-band">
            <div className="feature">
              <strong>1.058</strong>
              imóveis disponíveis para busca e destaque.
            </div>
            <div className="feature">
              <strong>3</strong>
              caminhos de conversão: visita, financiamento e WhatsApp.
            </div>
            <div className="feature">
              <strong>24h</strong>
              revalidação sugerida para páginas de imóvel.
            </div>
            <div className="feature">
              <strong>100%</strong>
              foco em site público separado por cliente.
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div className="panel">
              <h3>Petrus Imóveis</h3>
              <p>
                Rua Sepé, 2790 Navegantes - Capão da Canoa/RS. Atendimento por WhatsApp, telefone e formulário.
              </p>
            </div>
            <div className="panel">
              <h3>Próximas páginas</h3>
              <div className="list">
                <div className="list-item">
                  <span>Busca e listagem</span>
                  <a href="/imoveis">Abrir</a>
                </div>
                <div className="list-item">
                  <span>Sobre a Petrus</span>
                  <a href="/sobre">Abrir</a>
                </div>
                <div className="list-item">
                  <span>Contato</span>
                  <a href="/contato">Abrir</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
