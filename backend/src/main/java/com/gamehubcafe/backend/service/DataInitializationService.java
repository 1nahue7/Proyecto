package com.gamehubcafe.backend.service;

import com.gamehubcafe.backend.model.Usuario;
import com.gamehubcafe.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class DataInitializationService implements CommandLineRunner {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) throws Exception {
        // Solo inicializar si no hay usuarios
        if (usuarioRepository.findAll().isEmpty()) {
            initializeUsers();
        }
    }
    
    private void initializeUsers() {
        // Usuario administrador
        Usuario admin = new Usuario();
        admin.setUsername("admin");
        admin.setEmail("admin@gamehubcafe.com");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setNombre("Administrador");
        admin.setApellido("Sistema");
        admin.setRol("ADMIN");
        admin.setActivo(true);
        admin.setFechaRegistro(LocalDateTime.now());
        admin.setUltimoAcceso(LocalDateTime.now());
        
        // Usuario de prueba
        Usuario user = new Usuario();
        user.setUsername("usuario");
        user.setEmail("usuario@gamehubcafe.com");
        user.setPassword(passwordEncoder.encode("user123"));
        user.setNombre("Usuario");
        user.setApellido("Prueba");
        user.setRol("USER");
        user.setActivo(true);
        user.setFechaRegistro(LocalDateTime.now());
        user.setUltimoAcceso(LocalDateTime.now());
        
        // Guardar usuarios
        usuarioRepository.save(admin);
        usuarioRepository.save(user);
        
        System.out.println("Usuarios de prueba inicializados:");
        System.out.println("Admin - username: admin, password: admin123");
        System.out.println("Usuario - username: usuario, password: user123");
    }
}



