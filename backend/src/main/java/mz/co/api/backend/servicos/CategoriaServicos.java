// CategoriaServicos.java
package mz.co.api.backend.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mz.co.api.backend.modelo.Categoria;
import mz.co.api.backend.repositorio.CategoriaRepositorio;

@Service
public class CategoriaServicos {

    @Autowired
    private CategoriaRepositorio categoriaRepositorio;

    public List<Categoria> listarCategorias() {
        return categoriaRepositorio.findAll();
    }
}
