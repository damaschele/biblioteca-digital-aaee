package mz.co.api.backend.servicos;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import mz.co.api.backend.modelo.LivroRespostas;
import mz.co.api.backend.modelo.SolicitacaoModelo;
import mz.co.api.backend.repositorio.SolicitacaoRepository;
import mz.co.api.backend.storage.StorageService;

@Service
public class SolicitacaoServicos {

    // private static final String UPLOAD_DIR = "uploads/";

    @Autowired
    private SolicitacaoRepository sr;

    @Autowired
    private LivroRespostas srs;

    @Autowired
    private StorageService storageService;

    // Método para listar todas as solicitações
    public Iterable<SolicitacaoModelo> listar() {
        return sr.findAll();
    }

    // Método para cadastrar solicitações
    public ResponseEntity<?> cadastrar(String autor, String titulo, String categoria, MultipartFile conteudo) {
        if (autor == null || autor.isEmpty()) {
            srs.setMensagem("É obrigatório preencher o campo do Autor!");
            return new ResponseEntity<>(sr, HttpStatus.BAD_REQUEST);
        } else if (titulo == null || titulo.isEmpty()) {
            srs.setMensagem("É obrigatório preencher o campo do Título!");
            return new ResponseEntity<>(sr, HttpStatus.BAD_REQUEST);
        }else if(categoria == null || categoria.isEmpty()) {
            srs.setMensagem("É obrigatório preencher o campo da Categoria!");
            return new ResponseEntity<>(sr, HttpStatus.BAD_REQUEST);
        } else if (conteudo == null || conteudo.isEmpty()) {
            srs.setMensagem("É obrigatório preencher o campo do Conteúdo!");
            return new ResponseEntity<>(sr, HttpStatus.BAD_REQUEST);
        } else {
            try {
                // Armazenar o arquivo
                String conteudoFilename = System.currentTimeMillis() + "-" + conteudo.getOriginalFilename();
                storageService.store(conteudo, conteudoFilename);

                // Salvar metadados no banco de dados
                SolicitacaoModelo solicitacao = new SolicitacaoModelo();
                solicitacao.setAutor(autor);
                solicitacao.setTitulo(titulo);
                solicitacao.setCategoria(categoria);
                solicitacao.setConteudo(conteudoFilename);
                solicitacao.setStatus("PENDENTE");

                return new ResponseEntity<>(sr.save(solicitacao), HttpStatus.CREATED);
            } catch (Exception e) {
                srs.setMensagem("Ocorreu um erro ao cadastrar a solicitação.");
                return new ResponseEntity<>(sr, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    // Método para alterar solicitações
    public ResponseEntity<?> alterar(Long id, String autor, String titulo, String categoria, MultipartFile conteudo) {
        Optional<SolicitacaoModelo> optionalSolicitacao = sr.findById(id);

        if (!optionalSolicitacao.isPresent()) {
            srs.setMensagem("Solicitação não encontrada!");
            return new ResponseEntity<>(sr, HttpStatus.NOT_FOUND);
        }

        SolicitacaoModelo solicitacao = optionalSolicitacao.get();
        solicitacao.setAutor(autor);
        solicitacao.setTitulo(titulo);

        try {
            if (conteudo != null && !conteudo.isEmpty()) {
                String conteudoFilename = System.currentTimeMillis() + "-" + conteudo.getOriginalFilename();
                storageService.store(conteudo, conteudoFilename);
                solicitacao.setConteudo(conteudoFilename);
            }

            return new ResponseEntity<>(sr.save(solicitacao), HttpStatus.OK);
        } catch (Exception e) {
            srs.setMensagem("Ocorreu um erro ao alterar a solicitação.");
            return new ResponseEntity<>(sr, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Método para remover solicitações
    public ResponseEntity<?> remover(Long id) {
        Optional<SolicitacaoModelo> optionalSolicitacao = sr.findById(id);

        if (!optionalSolicitacao.isPresent()) {
            srs.setMensagem("Solicitação não encontrada!");
            return new ResponseEntity<>(sr, HttpStatus.NOT_FOUND);
        }

        try {
            sr.deleteById(id);
            return new ResponseEntity<>("Solicitação removida com sucesso!", HttpStatus.OK);
        } catch (Exception e) {
            srs.setMensagem("Ocorreu um erro ao remover a solicitação.");
            return new ResponseEntity<>(sr, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
