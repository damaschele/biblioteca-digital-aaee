package mz.co.api.backend.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mz.co.api.backend.modelo.MensagemModelo;
import mz.co.api.backend.servicos.MensagemService;

@RestController
@CrossOrigin(origins = "*")
public class MensagemController {

    @Autowired
    private MensagemService mensagemService;

    @GetMapping("/mensagens")
    public Iterable<MensagemModelo> listarMensagens() {
        return mensagemService.listarMensagens();
    }

    @GetMapping("/mensagens/{destinatarioId}")
    public Iterable<MensagemModelo> listarMensagensPorDestinatario(@PathVariable Long destinatarioId) {
        return mensagemService.listarMensagensPorDestinatario(destinatarioId);
    }

    @PostMapping("/mensagens")
    public ResponseEntity<MensagemModelo> enviarMensagem(@RequestBody MensagemModelo mensagem) {
        return ResponseEntity.ok(mensagemService.enviarMensagem(mensagem));
    }
}
