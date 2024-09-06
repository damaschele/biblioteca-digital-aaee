package mz.co.api.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import mz.co.api.backend.modelo.Categoria;

public interface CategoriaRepositorio extends JpaRepository<Categoria, Long> {
}
