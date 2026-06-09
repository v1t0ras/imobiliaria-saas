export default function PropertyDetailPage() {
  return (
    <main className="shell">
      <div className="container">
        <section className="detail-hero">
          <div className="gallery" />
          <aside className="detail-side">
            <div className="side-box">
              <span className="kicker" style={{ color: "var(--accent-strong)", background: "rgba(15,108,93,0.08)", borderColor: "rgba(15,108,93,0.15)" }}>
                CÓDIGO 7519
              </span>
              <h1>Apartamento com 82m², 3 dormitórios no bairro Zona Nova</h1>
              <p>Bairro Zona Nova, Capão da Canoa · pronto para comprar.</p>
              <strong className="price" style={{ fontSize: "1.8rem" }}>
                R$ 1.490.000
              </strong>
            </div>
            <div className="side-box">
              <div className="kv">
                <div><strong>3 dorms</strong>1 suíte</div>
                <div><strong>82m²</strong>área privativa</div>
                <div><strong>1 vaga</strong>estacionamento</div>
                <div><strong>2 quadras</strong>da praia</div>
              </div>
            </div>
            <div className="side-box">
              <div className="chip-row">
                <button className="btn btn-dark">Agendar visita</button>
                <button className="btn btn-light" style={{ color: "var(--text)", borderColor: "var(--border)", background: "#fff" }}>
                  Simular financiamento
                </button>
              </div>
            </div>
          </aside>
        </section>

        <section className="section grid grid-3">
          <article className="panel">
            <h3>Características</h3>
            <p>Água quente, cozinha americana, churrasqueira, banheiro social, área de serviço e mobiliado decorado.</p>
          </article>
          <article className="panel">
            <h3>Infraestrutura</h3>
            <p>Elevador, gás central, hall de entrada, porteiro eletrônico, salão de festas, terraço coletivo e zelador.</p>
          </article>
          <article className="panel">
            <h3>Localização</h3>
            <p>Perto da Praça Flávio Boianovski, com leitura clara da região, do bairro e do acesso à praia.</p>
          </article>
        </section>

        <section className="section panel">
          <h3>Descrição</h3>
          <p>
            Apartamento de frente novo, finamente mobiliado e decorado, com infraestrutura de lazer e uma apresentação
            mais forte para conversão. Este bloco foi desenhado para substituir o conteúdo denso do site atual por uma
            leitura mais limpa e moderna.
          </p>
        </section>
      </div>
    </main>
  );
}
