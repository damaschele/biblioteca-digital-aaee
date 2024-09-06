/* eslint-disable no-undef */

const Artigos = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Buscar no Repositório..." />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Buscar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10"> 
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="form-group">
                <select className="form-control">
                  <option>Autoria</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="form-group">
                <select className="form-control">
                  <option>Assunto</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="form-group">
                <select className="form-control">
                  <option>Áreas de Conhecimento</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="form-group">
                <select className="form-control">
                  <option>Tipo de Documento</option>
                  <option>Trabalho de Conclusao de Curso</option>
                  <option>Artigos das Jornadas Cientificas</option>
                  <option>Projectos de Pesquisa</option>
                  <option>Artigos Cientificos Multidisciplinares</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="form-group">
                <select className="form-control">
                  <option>Data de Publicação</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="form-group">
                <select className="form-control">
                  <option>Autor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-end align-items-center">
              <span >Sistema Integrado de Repositórios da AAEE</span>
              <img src={require('./rodape.jpg')} alt="Logo"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Artigos;

