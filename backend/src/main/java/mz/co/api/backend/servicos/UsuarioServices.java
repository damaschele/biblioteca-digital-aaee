package mz.co.api.backend.servicos;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import mz.co.api.backend.modelo.RespostasUser;
import mz.co.api.backend.modelo.UsuarioModelo;
import mz.co.api.backend.repositorio.UsuarioRepository;

@Service
public class UsuarioServices {

    @Autowired
    private UsuarioRepository ur;

    @Autowired
    private RespostasUser ru;

    private final String SECRET = "mysecret";

    // Metodo para listar todos os Usuarios
    public Iterable<UsuarioModelo> listar() {
        return ur.findAll();
    }

    // Metodo para cadastrar Usuarios
    public ResponseEntity<?> cadastrar(@RequestBody UsuarioModelo um) {

        if (um.getEmail() == null || um.getEmail().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo de Email!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getUsername() == null || um.getUsername().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo de nome do usuario!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getPassword() == null || um.getPassword().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo da Senha!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getFirstName() == null || um.getFirstName().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo do Primeiro Nome!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getLastName() == null || um.getLastName().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo do Sobrenome!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(ur.save(um), HttpStatus.CREATED);
        }
    }

    // Metodo para Alterar Usuarios
    public ResponseEntity<?> Alterar(@RequestBody UsuarioModelo um) {

        if (um.getEmail() == null || um.getEmail().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo de Email!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getUsername() == null || um.getUsername().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo de nome do usuario!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getPassword() == null || um.getPassword().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo da Senha!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getFirstName() == null || um.getFirstName().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo do Primeiro Nome!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else if (um.getLastName() == null || um.getLastName().isEmpty()) {
            ru.setMensagem("É obrigatório preencher o campo do Sobrenome!");
            return new ResponseEntity<>(ru, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(ur.save(um), HttpStatus.OK);
        }
    }

    // Método para fazer login jwt
    public ResponseEntity<?> login(@RequestBody UsuarioModelo usuario) {
        Iterable<UsuarioModelo> usuarios = ur.findAll();

        for (UsuarioModelo u : usuarios) {
            if (u.getUsername().equals(usuario.getUsername()) && u.getPassword().equals(usuario.getPassword())) {
                u.setAtivo(true); // Define o usuário como ativo
                ur.save(u); // Salva a alteração no banco de dados
                String role = u.getRole();
                String token = JWT.create()
                        .withSubject(usuario.getUsername())
                        .withClaim("role", role)
                        .withExpiresAt(new Date(System.currentTimeMillis() + 600000)) // Token expira em 10 minutos
                        .sign(Algorithm.HMAC256(SECRET));

                // Inclui os dados do usuário na resposta
                Map<String, Object> response = new HashMap<>();
                response.put("token", token);
                response.put("role", role);
                response.put("user", u);

                return ResponseEntity.ok(response);
            }
        }

        return ResponseEntity.status(401).body("Credenciais inválidas.");
    }

    // Metodo Para remover Usuario
    public ResponseEntity<RespostasUser> remover(long codigo) {
        ur.deleteById(codigo);
        ru.setMensagem("O Usuario foi removido com sucesso..!");
        return new ResponseEntity<>(ru, HttpStatus.OK);
    }

    // Metodo para listar Usuarios activos
    public Iterable<UsuarioModelo> listarUsuariosAtivos() {
        return ur.findByAtivo(true);
    }

    // Método para fazer logout
    public ResponseEntity<?> logout(@RequestBody UsuarioModelo usuario) {
        Optional<UsuarioModelo> optionalUsuario = ur.findByUsername(usuario.getUsername());
        if (optionalUsuario.isPresent()) {
            UsuarioModelo u = optionalUsuario.get();
            if (u.isAtivo()) {
                u.setAtivo(false); // Define o usuário como inativo
                ur.save(u); // Salva a alteração no banco de dados
                return ResponseEntity.ok("Logout realizado com sucesso.");
            } else {
                return ResponseEntity.status(400).body("Usuário já está desativado.");
            }
        }
        return ResponseEntity.status(404).body("Usuário não encontrado.");
    }

}
