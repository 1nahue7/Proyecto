package com.gamehubcafe.backend.service;

import com.gamehubcafe.backend.dto.LoginRequest;
import com.gamehubcafe.backend.dto.LoginResponse;
import com.gamehubcafe.backend.dto.RegistroRequest;
import com.gamehubcafe.backend.model.Usuario;
import com.gamehubcafe.backend.repository.UsuarioRepository;
import com.gamehubcafe.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class AuthService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    public LoginResponse login(LoginRequest request) {
        try {
            // Buscar usuario por username
            var usuarioOpt = usuarioRepository.findByUsername(request.getUsername());
            
            if (usuarioOpt.isEmpty()) {
                return new LoginResponse(null, null, null, "Usuario no encontrado");
            }
            
            Usuario usuario = usuarioOpt.get();
            
            // Verificar contraseña
            if (!passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
                return new LoginResponse(null, null, null, "Contraseña incorrecta");
            }
            
            // Verificar si el usuario está activo
            if (!usuario.isActivo()) {
                return new LoginResponse(null, null, null, "Usuario inactivo");
            }
            
            // Actualizar último acceso
            usuario.setUltimoAcceso(LocalDateTime.now());
            usuarioRepository.save(usuario);
            
            // Generar token JWT
            String token = jwtUtil.generateToken(usuario.getUsername());
            
            return new LoginResponse(token, usuario.getUsername(), usuario.getRol(), "Login exitoso");
            
        } catch (Exception e) {
            return new LoginResponse(null, null, null, "Error en el login: " + e.getMessage());
        }
    }
    
    public String registro(RegistroRequest request) {
        try {
            // Verificar si el username ya existe
            if (usuarioRepository.existsByUsername(request.getUsername())) {
                return "El username ya está en uso";
            }
            
            // Verificar si el email ya existe
            if (usuarioRepository.existsByEmail(request.getEmail())) {
                return "El email ya está registrado";
            }
            
            // Crear nuevo usuario
            Usuario nuevoUsuario = new Usuario();
            nuevoUsuario.setUsername(request.getUsername());
            nuevoUsuario.setEmail(request.getEmail());
            nuevoUsuario.setPassword(passwordEncoder.encode(request.getPassword()));
            nuevoUsuario.setNombre(request.getNombre());
            nuevoUsuario.setApellido(request.getApellido());
            nuevoUsuario.setRol("USER");
            nuevoUsuario.setActivo(true);
            nuevoUsuario.setFechaRegistro(LocalDateTime.now());
            nuevoUsuario.setUltimoAcceso(LocalDateTime.now());
            
            // Guardar usuario
            usuarioRepository.save(nuevoUsuario);
            
            return "Usuario registrado exitosamente";
            
        } catch (Exception e) {
            return "Error en el registro: " + e.getMessage();
        }
    }
}



