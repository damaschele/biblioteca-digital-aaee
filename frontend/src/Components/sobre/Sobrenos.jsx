import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./sobrenos.css";

const Sobrenos = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="container-principal">
                    <h1>Sobre nós</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet repellendus est odit iusto.<br></br>
                        Veniam laudantium quo suscipit dolores voluptatem quas? Veniam, est nostrum.</p>
                    <div className="container-sobre">
                        <div className="card-misao">
                            <i className="bi bi-book"></i>
                            <span>Missão</span>
                            <div className="card-inf">
                                <p>Formar os membros do Serviço de Informações e Segurança do Estado,
                                    com qualidade, mediante adequada preparação científica, técnica,
                                    profissional e deontológica, bem como capacitar entidades autorizadas</p>
                            </div>
                        </div>
                        <div className="card-misao">
                            <i className="bi bi-compass"></i>
                            <span>Visão</span>
                            <div className="card-inf">
                                <p>Ser uma referência nacional,
                                    regional e internacional na produção de
                                    conhecimento técnico científico em inteligência,
                                    destacando a investigação científica como alicerce
                                    dos processos de ensino e aprendizagem.</p>
                            </div>
                        </div>

                        <div className="card-misao">
                            <i className="bi bi-pen"></i>
                            <span>Princípios</span>
                            <div className="card-inf">
                                <p>Fidelidade a constituição e a Nação;
                                    Defesa da soberania e dos interesses do Estado, unidade nacional;
                                    Obediência ao comandante chefe;
                                    Apartidarismo;
                                    Lealdade;
                                    Sigilo profissional e
                                    Patriotismo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Sobrenos;
