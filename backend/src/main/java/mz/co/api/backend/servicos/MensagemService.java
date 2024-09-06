package mz.co.api.backend.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mz.co.api.backend.modelo.MensagemModelo;
import mz.co.api.backend.repositorio.MensagemRepositorio;

@Service
public class MensagemService {

    @Autowired
    private MensagemRepositorio mensagemRepositorio;

    public Iterable<MensagemModelo> listarMensagens() {
        return mensagemRepositorio.findAll();
    }

    public List<MensagemModelo> listarMensagensPorDestinatario(Long destinatarioId) {
        return mensagemRepositorio.findByDestinatarioId(destinatarioId);
    }

    public MensagemModelo enviarMensagem(MensagemModelo mensagem) {
        return mensagemRepositorio.save(mensagem);
    }
}
