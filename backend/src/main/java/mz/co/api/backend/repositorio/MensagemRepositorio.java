package mz.co.api.backend.repositorio;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import mz.co.api.backend.modelo.MensagemModelo;

@Repository
public interface MensagemRepositorio extends CrudRepository<MensagemModelo, Long> {
    List<MensagemModelo> findByDestinatarioId(Long destinatarioId);
}
