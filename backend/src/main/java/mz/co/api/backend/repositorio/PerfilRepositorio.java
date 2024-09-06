package mz.co.api.backend.repositorio;
import org.springframework.data.jpa.repository.JpaRepository;

import mz.co.api.backend.modelo.PerfilModelo;

public interface PerfilRepositorio extends JpaRepository<PerfilModelo, Long> {
    
}
