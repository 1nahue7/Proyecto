package com.gamehubcafe.backend.controller;

import com.gamehubcafe.backend.dto.LoginRequest;
import com.gamehubcafe.backend.dto.LoginResponse;
import com.gamehubcafe.backend.dto.RegistroRequest;
import com.gamehubcafe.backend.dto.SuccessResponse;
import com.gamehubcafe.backend.dto.ErrorResponse;
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
    public ResponseEntity<Object> registro(@Valid @RequestBody RegistroRequest request) {
        Object resultado = authService.registro(request);
        
        if (resultado instanceof SuccessResponse) {
            return ResponseEntity.ok(resultado);
        } else if (resultado instanceof ErrorResponse) {
            return ResponseEntity.badRequest().body(resultado);
        } else {
            return ResponseEntity.internalServerError().body(new ErrorResponse("Error interno del servidor"));
        }
    }
    
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Backend funcionando correctamente!");
    }
    
    @PostMapping("/test-login")
    public ResponseEntity<String> testLogin(@RequestBody String body) {
        return ResponseEntity.ok("Test login endpoint funcionando! Body: " + body);
    }
}
