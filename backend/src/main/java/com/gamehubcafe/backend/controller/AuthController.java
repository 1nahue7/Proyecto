package com.gamehubcafe.backend.controller;

import com.gamehubcafe.backend.dto.LoginRequest;
import com.gamehubcafe.backend.dto.LoginResponse;
import com.gamehubcafe.backend.dto.RegistroRequest;
import com.gamehubcafe.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    
    @Autowired
    private AuthService authService;
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        LoginResponse response = authService.login(request);
        
        if (response.getToken() != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PostMapping("/registro")
    public ResponseEntity<String> registro(@Valid @RequestBody RegistroRequest request) {
        String resultado = authService.registro(request);
        
        if (resultado.contains("exitosamente")) {
            return ResponseEntity.ok(resultado);
        } else {
            return ResponseEntity.badRequest().body(resultado);
        }
    }
    
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Backend funcionando correctamente!");
    }
}
