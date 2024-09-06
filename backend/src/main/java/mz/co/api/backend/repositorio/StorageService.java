package mz.co.api.backend.repositorio;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageService {

    private final Path rootLocation = Paths.get("uploads");

    public void store(MultipartFile file, String filename) throws IOException {
        if (file.isEmpty()) {
            throw new RuntimeException("Falha ao armazenar um arquivo vazio.");
        }
        Files.copy(file.getInputStream(), this.rootLocation.resolve(filename));
    }
}
