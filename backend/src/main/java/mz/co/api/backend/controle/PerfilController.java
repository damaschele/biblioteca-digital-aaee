package mz.co.api.backend.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mz.co.api.backend.modelo.PerfilModelo;
import mz.co.api.backend.servicos.PerfilServico;

@RestController
@CrossOrigin(origins = "*")
public class PerfilController {
    

    @Autowired
    private PerfilServico ps;

     @GetMapping("/listar-perfil")
    public Iterable<PerfilModelo> listar(){
        return ps.listar();
    }

    @PostMapping("/cadastrar-perfil")
    public ResponseEntity<?> cadastrar(@RequestBody PerfilModelo pm){
        System.out.println("Dados recebidos: " + pm.getNome());
        return ps.cadastrar(pm);
    }

}
