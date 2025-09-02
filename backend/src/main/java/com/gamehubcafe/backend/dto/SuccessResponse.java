package com.gamehubcafe.backend.dto;

public class SuccessResponse {
    private String mensaje;
    private String tipo;
    
    // Constructores
    public SuccessResponse() {}
    
    public SuccessResponse(String mensaje) {
        this.mensaje = mensaje;
        this.tipo = "success";
    }
    
    public SuccessResponse(String mensaje, String tipo) {
        this.mensaje = mensaje;
        this.tipo = tipo;
    }
    
    // Getters y Setters
    public String getMensaje() {
        return mensaje;
    }
    
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
    public String getTipo() {
        return tipo;
    }
    
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
