package mz.co.api.backend.servicos;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import mz.co.api.backend.modelo.Categoria;
import mz.co.api.backend.modelo.LivroRespostas;
import mz.co.api.backend.modelo.LivrosModelo;
import mz.co.api.backend.repositorio.CategoriaRepositorio;
import mz.co.api.backend.repositorio.LivroRepositorio;
import mz.co.api.backend.storage.StorageService;

@Service
public class LivroServicos {

    @Autowired
    private LivroRepositorio lrep;

    @Autowired
    private CategoriaRepositorio crep;

    @Autowired
    private LivroRespostas lr;

    @Autowired
    private StorageService storageService;

    // Método para listar todos os Livros
    public Iterable<LivrosModelo> listar() {
        return lrep.findAll();
    }

    // Método para cadastrar livros
    public ResponseEntity<?> cadastrar(String titulo, String descricao, MultipartFile foto, MultipartFile livro, Long categoriaId) {
        if (titulo == null || titulo.isEmpty()) {
            lr.setMensagem("É obrigatório preencher o campo do Título!");
            return new ResponseEntity<>(lr, HttpStatus.BAD_REQUEST);
        } else if (descricao == null || descricao.isEmpty()) {
            lr.setMensagem("É obrigatório preencher o campo da Descrição!");
            return new ResponseEntity<>(lr, HttpStatus.BAD_REQUEST);
        } else if (foto == null || livro == null) {
            lr.setMensagem("É obrigatório preencher os campos do Livro e da Foto!");
            return new ResponseEntity<>(lr, HttpStatus.BAD_REQUEST);
        } else {
            Optional<Categoria> categoria = crep.findById(categoriaId);
            if (!categoria.isPresent()) {
                lr.setMensagem("Categoria não encontrada!");
                return new ResponseEntity<>(lr, HttpStatus.BAD_REQUEST);
            }

            try {
                // Armazenar os arquivos
                String fotoFilename = System.currentTimeMillis() + "-" + foto.getOriginalFilename();
                String livroFilename = System.currentTimeMillis() + "-" + livro.getOriginalFilename();

                storageService.store(foto, fotoFilename);
                storageService.store(livro, livroFilename);

                // Salvar metadados no banco de dados
                LivrosModelo lm = new LivrosModelo();
                lm.setTitulo(titulo);
                lm.setDescricao(descricao);
                lm.setFoto(fotoFilename);
                lm.setLivro(livroFilename);
                lm.setCategoria(categoria.get());

                return new ResponseEntity<>(lrep.save(lm), HttpStatus.CREATED);
            } catch (Exception e) {
                lr.setMensagem("Ocorreu um erro ao cadastrar o livro.");
                return new ResponseEntity<>(lr, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    // Método para alterar livros
    public ResponseEntity<?> alterar(Long id, String titulo, String descricao, MultipartFile foto, MultipartFile livro, Long categoriaId) {
        Optional<LivrosModelo> optionalLivro = lrep.findById(id);

        if (!optionalLivro.isPresent()) {
            lr.setMensagem("Livro não encontrado!");
            return new ResponseEntity<>(lr, HttpStatus.NOT_FOUND);
        }

        LivrosModelo lm = optionalLivro.get();
        lm.setTitulo(titulo);
        lm.setDescricao(descricao);

        Optional<Categoria> categoria = crep.findById(categoriaId);
        if (!categoria.isPresent()) {
            lr.setMensagem("Categoria não encontrada!");
            return new ResponseEntity<>(lr, HttpStatus.BAD_REQUEST);
        }
        lm.setCategoria(categoria.get());

        try {
            if (foto != null) {
                String fotoFilename = System.currentTimeMillis() + "-" + foto.getOriginalFilename();
                storageService.store(foto, fotoFilename);
                lm.setFoto(fotoFilename);
            }

            if (livro != null) {
                String livroFilename = System.currentTimeMillis() + "-" + livro.getOriginalFilename();
                storageService.store(livro, livroFilename);
                lm.setLivro(livroFilename);
            }

            return new ResponseEntity<>(lrep.save(lm), HttpStatus.OK);
        } catch (Exception e) {
            lr.setMensagem("Ocorreu um erro ao alterar o livro.");
            return new ResponseEntity<>(lr, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Método para remover livros
    public ResponseEntity<?> remover(Long id) {
        Optional<LivrosModelo> optionalLivro = lrep.findById(id);

        if (!optionalLivro.isPresent()) {
            lr.setMensagem("Livro não encontrado!");
            return new ResponseEntity<>(lr, HttpStatus.NOT_FOUND);
        }

        try {
            lrep.deleteById(id);
            return new ResponseEntity<>("Livro removido com sucesso!", HttpStatus.OK);
        } catch (Exception e) {
            lr.setMensagem("Ocorreu um erro ao remover o livro.");
            return new ResponseEntity<>(lr, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Método para buscar um livro por ID
    public LivrosModelo buscarPorId(Long id) {
        return lrep.findById(id).orElse(null);
    }

    // Método para buscar um livro por código
    public LivrosModelo findLivroByCodigo(Long codigo) {
        return lrep.findByCodigo(codigo);
    }
}
