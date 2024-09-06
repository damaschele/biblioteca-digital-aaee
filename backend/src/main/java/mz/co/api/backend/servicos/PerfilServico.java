package mz.co.api.backend.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import mz.co.api.backend.modelo.PerfilModelo;
import mz.co.api.backend.modelo.RespostasUser;
import mz.co.api.backend.repositorio.PerfilRepositorio;

@Service
public class PerfilServico {

    @Autowired
    private PerfilRepositorio pr;

    @Autowired
    private RespostasUser ru;

    // Metodo para cadastrar o perfil
    public ResponseEntity<?> cadastrar(@RequestBody PerfilModelo pm) {
        if (pm.getNome() == null || pm.getNome().isEmpty()) {
            ru.setMensagem("O perfil não pode estar vazio!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(pr.save(pm), HttpStatus.CREATED);
        }

    }

    // Metodo para listar os perfis
     public Iterable<PerfilModelo> listar() {
        return pr.findAll();
    }
}
