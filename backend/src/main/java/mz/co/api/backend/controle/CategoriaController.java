package mz.co.api.backend.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mz.co.api.backend.modelo.Categoria;
import mz.co.api.backend.servicos.CategoriaServicos;

@RestController
@CrossOrigin("*")
@RequestMapping("/categorias") // Caminho base para categorias
public class CategoriaController {

    @Autowired
    private CategoriaServicos categoriaServicos;

    @GetMapping
    public List<Categoria> listarCategorias() {
        return categoriaServicos.listarCategorias();
    }
}
