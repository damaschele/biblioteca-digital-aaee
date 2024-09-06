import CardMonografia from './CardMonografia/CardMonografia'
import ListaActividade from './ListaActividade/ListaActividade'
import TabelaMonografia from './TabelaMonografia/TabelaMonografia'
import './monografia.css'

function Monografia() {
  return (
    <section className="monografia section">
      <div className="row poit">
      <div className="col-lg-8">
        <CardMonografia />
        <div className="col-12">
          <TabelaMonografia />
        </div>
      </div>
      <div className="col-lg-4">
        <ListaActividade />
      </div>
      </div>
    </section>
  )
}

export default Monografia