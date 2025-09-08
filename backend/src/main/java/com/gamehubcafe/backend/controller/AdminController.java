package com.gamehubcafe.backend.controller;

import com.gamehubcafe.backend.dto.ErrorResponse;
import com.gamehubcafe.backend.model.Usuario;
import com.gamehubcafe.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    /**
     * Listar todos los usuarios (sin mostrar contraseñas)
     */
    @GetMapping("/users")
    public ResponseEntity<Object> listAllUsers() {
        try {
            var usuarios = usuarioRepository.findAll().stream()
                .map(user -> {
                    // Crear respuesta SIN la contraseña
                    return new UserInfo(
                        user.getId(),
                        user.getUsername(),
                        user.getEmail(),
                        user.getNombre(),
                        user.getApellido(),
                        user.getRol(),
                        user.isActivo(),
                        user.getFechaRegistro(),
                        "***ENCRIPTADA***" // Nunca mostrar la contraseña real
                    );
                }).toList();
            
            return ResponseEntity.ok(usuarios);
            
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                .body(new ErrorResponse("Error al obtener usuarios: " + e.getMessage()));
        }
    }
    
    // Clase interna para la respuesta de usuarios (sin contraseña)
    public static class UserInfo {
        private Long id;
        private String username;
        private String email;
        private String nombre;
        private String apellido;
        private String rol;
        private boolean activo;
        private java.time.LocalDateTime fechaRegistro;
        private String passwordStatus;
        
        public UserInfo(Long id, String username, String email, String nombre, 
                       String apellido, String rol, boolean activo, 
                       java.time.LocalDateTime fechaRegistro, String passwordStatus) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.nombre = nombre;
            this.apellido = apellido;
            this.rol = rol;
            this.activo = activo;
            this.fechaRegistro = fechaRegistro;
            this.passwordStatus = passwordStatus;
        }
        
        // Getters
        public Long getId() { return id; }
        public String getUsername() { return username; }
        public String getEmail() { return email; }
        public String getNombre() { return nombre; }
        public String getApellido() { return apellido; }
        public String getRol() { return rol; }
        public boolean isActivo() { return activo; }
        public java.time.LocalDateTime getFechaRegistro() { return fechaRegistro; }
        public String getPasswordStatus() { return passwordStatus; }
    }
}