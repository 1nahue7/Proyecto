package com.gamehubcafe.backend.dto;

public class LoginResponse {
    private String token;
    private String username;
    private String rol;
    private String mensaje;
    
    // Constructores
    public LoginResponse() {}
    
    public LoginResponse(String token, String username, String rol, String mensaje) {
        this.token = token;
        this.username = username;
        this.rol = rol;
        this.mensaje = mensaje;
    }
    
    // Getters y Setters
    public String getToken() {
        return token;
    }
    
    public void setToken(String token) {
        this.token = token;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getRol() {
        return rol;
    }
    
    public void setRol(String rol) {
        this.rol = rol;
    }
    
    public String getMensaje() {
        return mensaje;
    }
    
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
