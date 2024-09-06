package mz.co.api.backend.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mz.co.api.backend.modelo.RespostasUser;
import mz.co.api.backend.modelo.UsuarioModelo;
import mz.co.api.backend.servicos.UsuarioServices;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UsuarioServices us;

    @GetMapping("/listar")
    public Iterable<UsuarioModelo> listar(){
        return us.listar();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody UsuarioModelo um){
        System.out.println("Dados recebidos: " + um.getEmail());
        return us.cadastrar(um);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody UsuarioModelo um){
        System.out.println("Dados recebidos: " + um.getEmail()+ " "+ um.getRole());
        return us.Alterar(um);
    }

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostasUser> remover(@PathVariable long codigo){
        return us.remover(codigo);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsuarioModelo um) {
        System.out.println("Dados recebidos: " + um.getPassword());
        return us.login(um);
    }

    @GetMapping("/usuarios-ativos")
    public Iterable<UsuarioModelo> listarUsuariosAtivos(){
        return us.listarUsuariosAtivos();
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody UsuarioModelo um) {
        us.logout(um);
        return ResponseEntity.ok("Logout bem-sucedido");
    }
    
  
    @GetMapping("/")
    public String rotas(){
        return "API de Usuario esta Funcioando!";
    }

}
