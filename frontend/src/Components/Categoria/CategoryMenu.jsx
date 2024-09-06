import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './categoria.css';

function CategoryMenu() {
  const [categorias, setCategorias] = useState([]);
  const [livros, setLivros] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("All");
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasResponse = await axios.get('http://localhost:8080/categorias');
        setCategorias(categoriasResponse.data);

        const livrosResponse = await axios.get('http://localhost:8080/listar-livros');
        setLivros(livrosResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const selecionarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    setSubcategoriaSelecionada("");
  };

  const selecionarSubcategoria = (subcategoria) => {
    setSubcategoriaSelecionada(subcategoria);
  };

  const livrosParaExibir = livros.filter(livro => {
    const categoriaConfere = categoriaSelecionada === "All" || (livro.categoria && livro.categoria.nome === categoriaSelecionada);
    const subcategoriaConfere = subcategoriaSelecionada === "" || livro.subcategoria === subcategoriaSelecionada;
    return categoriaConfere && subcategoriaConfere;
  });

  return (
    <>
      <Nav />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className="mb-4">Categorias</h3>
            <ul className="list-group">
              <li
                className={`list-group-item ${categoriaSelecionada === "All" ? "active" : ""}`}
                style={{ cursor: 'pointer' }}
                onClick={() => selecionarCategoria("All")}
              >
                <h5>All</h5>
              </li>
              {categorias.map((categoria, index) => (
                <li
                  key={index}
                  className={`list-group-item ${categoriaSelecionada === categoria.nome ? "active" : ""}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => selecionarCategoria(categoria.nome)}
                >
                  <h5>{categoria.nome}</h5>
                  {categoriaSelecionada === categoria.nome && (
                    <ul className="list-group mt-2">
                      {(categoria.subcategorias || []).map((subcategoria, subIndex) => (
                        <li
                          key={subIndex}
                          className={`list-group-item list-group-item-action ${subcategoria === subcategoriaSelecionada ? "active" : ""}`}
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            selecionarSubcategoria(subcategoria);
                          }}
                        >
                          {subcategoria}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-9">
            <h3 className="mb-4 text-capitalize">{subcategoriaSelecionada || categoriaSelecionada}</h3>
            <div className="row g-2"> {/* Aplicado espaçamento reduzido entre colunas */}
              {livrosParaExibir.length > 0 ? (
                livrosParaExibir.map((livro, index) => {
                  const imagemUrl = `http://localhost:8080/files/${livro.foto}`;
                  return (
                    <div className="col-lg-3 col-md-6 mb-2" key={index}> {/* Reduzido o margin-bottom */}
                      <div className="card h-100">
                        <img className="card-img-top" src={imagemUrl} alt={livro.titulo} />
                        <div className="card-body">
                          <h5 className="card-title">{livro.titulo}</h5>
                          <p className="card-text">Autor: {livro.autor}</p>
                          <button onClick={() => navigate(`/DetalhesLivros/${livro.codigo}`)} className="btn btn-primary btn-cat">
                            Ver mais
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-muted">Nenhum livro encontrado para esta categoria e subcategoria.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryMenu;
