export default function ContactPage() {
  return (
    <main className="shell">
      <div className="container">
        <section className="detail-hero">
          <div className="panel">
            <h1>Contato</h1>
            <p>Telefone, WhatsApp, endereço e formulário de interesse em um lugar só.</p>
            <form className="form">
              <input placeholder="Seu nome" />
              <input placeholder="Seu e-mail" />
              <textarea placeholder="Conte o que procura" />
              <button className="btn btn-dark" type="button">Enviar mensagem</button>
            </form>
          </div>
          <aside className="panel">
            <h3>Petrus Imóveis</h3>
            <p>Rua Sepé, 2790 - Navegantes - Capão da Canoa/RS</p>
            <p>WhatsApp e telefone em destaque para atendimento rápido.</p>
          </aside>
        </section>
      </div>
    </main>
  );
}
