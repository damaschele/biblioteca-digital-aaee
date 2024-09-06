import SolicitacoesLista from '../Submissao/SolicitacoesLista';
import CardPublicacoes from './CardPublicacoes/CardPublicacoes';
import './publicacoes.css';

function Publicacoes() {
  return (
    <section className="publicacoes section">
      <div className="row poit">
        <div className="col-lg-8">
          <CardPublicacoes />
          <div className="col-12">
            Lista de publicações
          </div>
        </div>
        <div className="col-lg-4">
        <SolicitacoesLista />
        </div>
      </div>
    </section>
  )
}

export default Publicacoes