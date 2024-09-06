package mz.co.api.backend.controle;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mz.co.api.backend.servicos.FileService;
import mz.co.api.backend.servicos.SolicitacaoServicos;


@RestController
@CrossOrigin("*")
public class SolicitacaoController {

    @Autowired
    private SolicitacaoServicos solicitacaoServicos;

   @Autowired
    private FileService fileService;

    @PostMapping("/criar-solicitacao")
    public ResponseEntity<?> criarSolicitacao(@RequestParam("autor") String autor,
                                              @RequestParam("titulo") String titulo,
                                              @RequestParam("categoria") String categoria,
                                              @RequestParam("conteudo") MultipartFile conteudo) throws Exception {
        return solicitacaoServicos.cadastrar(autor, titulo, categoria, conteudo);
    }

    @GetMapping("/listar-solicitacao")
    public ResponseEntity<?> listarSolicitacoes() {
        return ResponseEntity.ok(solicitacaoServicos.listar());
    }

    @PostMapping("/{id}/alterar-solicitacao")
    public ResponseEntity<?> alterarSolicitacao(@PathVariable Long id,
                                                @RequestParam("autor") String autor,
                                                @RequestParam("titulo") String titulo,
                                                @RequestParam("categoria") String categoria,
                                                @RequestParam(value = "conteudo", required = false) MultipartFile conteudo) {
        return solicitacaoServicos.alterar(id, autor, titulo, categoria, conteudo);
    }

    @PostMapping("/{id}/remover-solicitacao")
    public ResponseEntity<?> removerSolicitacao(@PathVariable Long id) {
        return solicitacaoServicos.remover(id);
    }

    @GetMapping("/solicitacoes/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        return fileService.serveFile(filename);
    }
}
