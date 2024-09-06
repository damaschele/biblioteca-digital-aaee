import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import TabelaDocumentos from "./TabelaDocumentos";
import './artigos.css';




export default function Artigos() {

  return (
    <>
      <Nav />
      <div className="container">
          <TabelaDocumentos />
      </div>
      <Footer />
    </>
  )
}

