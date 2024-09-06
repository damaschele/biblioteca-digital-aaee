package mz.co.api.backend.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import mz.co.api.backend.modelo.UsuarioModelo;

@Repository
public interface UsuarioRepository  extends CrudRepository<UsuarioModelo, Long>{
    List<UsuarioModelo> findByAtivo(boolean ativo);
    Optional<UsuarioModelo> findByUsername(String username); 
    
} 