package mz.co.api.backend.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Usuarios")
@Getter
@Setter
public class UsuarioModelo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String firstName;  // Novo campo para o primeiro nome
    private String lastName;   // Novo campo para o sobrenome
    private String email;
    private String username;
    private String password;
    private String role;
    private boolean ativo;  // Novo campo para indicar se o usuário está ativo

}
