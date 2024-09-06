package mz.co.api.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mz.co.api.backend.modelo.LivrosModelo;

@Repository
public interface LivroRepositorio extends JpaRepository<LivrosModelo, Long> {
    
    // Método para buscar livro pelo código
    LivrosModelo findByCodigo(Long codigo);
}
