package mz.co.api.backend.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Mensagem")
@Getter
@Setter
public class MensagemModelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String autor;
    private String conteudo;
    private String timestamp; // Pode ser um LocalDateTime
    private Long destinatarioId; // ID do destinatário

    // Getters e setters
}
