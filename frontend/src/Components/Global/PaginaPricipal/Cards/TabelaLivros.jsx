/* eslint-disable react/prop-types */
// TabelaLivros.js
import "../Cards/card.css";

function TabelaLivros({ livros, onEdit, onRemove }) {
  return (
    <div className="livros-tabela">
      {livros.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th>Foto</th>
              <th>Livro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <tr key={livro.codigo}>
                <td>{livro.titulo}</td>
                <td>{livro.descricao}</td>
                <td className="image">
                  <img src={`http://localhost:8080/files/${livro.foto}`} alt={livro.titulo} width="50" />
                </td>
                <td>
                  <a href={`http://localhost:8080/files/${livro.livro}`} target="_blank" rel="noopener noreferrer">Visualizar</a>
                </td>
                <td className="acao">
                  <button className="btn btn-warning" onClick={() => onEdit(livro)}><span>Editar</span></button>
                  <button className="btn btn-danger" onClick={() => onRemove(livro.codigo)}><span>Remover</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </div>
  );
}

export default TabelaLivros;
