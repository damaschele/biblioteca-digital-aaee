package mz.co.api.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import mz.co.api.backend.modelo.PublicacaoModelo;

public interface PublicacaoRepository extends JpaRepository<PublicacaoModelo, Long> {
    
}