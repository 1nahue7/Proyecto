package com.gamehubcafe.backend.controller;

import com.gamehubcafe.backend.model.Usuario;
import com.gamehubcafe.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> listUsers() {
        try {
            List<Usuario> usuarios = usuarioRepository.findAll();
            
            Map<String, Object> response = new HashMap<>();
            response.put("total", usuarios.size());
            response.put("usuarios", usuarios.stream().map(user -> {
                Map<String, Object> userInfo = new HashMap<>();
                userInfo.put("id", user.getId());
                userInfo.put("username", user.getUsername());
                userInfo.put("email", user.getEmail());
                userInfo.put("nombre", user.getNombre());
                userInfo.put("apellido", user.getApellido());
                userInfo.put("rol", user.getRol());
                userInfo.put("activo", user.isActivo());
                userInfo.put("fechaRegistro", user.getFechaRegistro());
                userInfo.put("ultimoAcceso", user.getUltimoAcceso());
                // NO incluimos la contraseña por seguridad
                return userInfo;
            }).toList());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Error al obtener usuarios: " + e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }
    
    @GetMapping("/count")
    public ResponseEntity<Map<String, Object>> countUsers() {
        try {
            long total = usuarioRepository.count();
            Map<String, Object> response = new HashMap<>();
            response.put("totalUsuarios", total);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Error al contar usuarios: " + e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }
}
