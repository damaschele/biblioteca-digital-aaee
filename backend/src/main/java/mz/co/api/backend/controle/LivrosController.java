package mz.co.api.backend.controle;

import java.io.IOException;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mz.co.api.backend.modelo.LivrosModelo;
import mz.co.api.backend.servicos.LivroServicos;
import mz.co.api.backend.storage.StorageService;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class LivrosController {

    @Autowired
    private LivroServicos ls;

    @Autowired
    private StorageService storageService;

    @GetMapping("/listar-livros")
    public Iterable<LivrosModelo> listar() {
        return ls.listar();
    }

    @PostMapping("/cadastrar-livros")
    public ResponseEntity<?> cadastrar(@RequestParam("titulo") String titulo,
                                       @RequestParam("descricao") String descricao,
                                       @RequestParam("foto") MultipartFile foto,
                                       @RequestParam("livro") MultipartFile livro,
                                       @RequestParam("categoriaId") Long categoriaId) {
        return ls.cadastrar(titulo, descricao, foto, livro, categoriaId);
    }

    @PutMapping("/livros/{id}")
    public ResponseEntity<?> alterar(@PathVariable Long id,
                                     @RequestParam("titulo") String titulo,
                                     @RequestParam("descricao") String descricao,
                                     @RequestParam(value = "foto", required = false) MultipartFile foto,
                                     @RequestParam(value = "livro", required = false) MultipartFile livro,
                                     @RequestParam("categoriaId") Long categoriaId) {
        return ls.alterar(id, titulo, descricao, foto, livro, categoriaId);
    }

    @DeleteMapping("/livros/{id}")
    public ResponseEntity<?> remover(@PathVariable Long id) {
        return ls.remover(id);
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        Resource file = storageService.loadAsResource(filename);
        String contentType = "application/octet-stream";
        try {
            contentType = Files.probeContentType(file.getFile().toPath());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + file.getFilename() + "\"")
                .header(HttpHeaders.CONTENT_TYPE, contentType)
                .body(file);
    }

    @GetMapping("/livros-detalhes/{codigo}")
    public ResponseEntity<LivrosModelo> getLivroDetalhes(@PathVariable Long codigo) {
        LivrosModelo livro = ls.findLivroByCodigo(codigo);
        return livro != null ? ResponseEntity.ok(livro) : ResponseEntity.notFound().build();
    }
}
