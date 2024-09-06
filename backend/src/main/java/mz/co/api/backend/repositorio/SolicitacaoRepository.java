package mz.co.api.backend.repositorio;

import org.springframework.data.repository.CrudRepository;

import mz.co.api.backend.modelo.SolicitacaoModelo;

public interface SolicitacaoRepository extends CrudRepository<SolicitacaoModelo, Long> {
    // Você pode adicionar métodos adicionais de consulta personalizados, se necessário
}