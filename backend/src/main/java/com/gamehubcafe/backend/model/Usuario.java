package com.gamehubcafe.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "username", length = 50, unique = true, nullable = false)
    private String username;
    
    @Column(name = "email", length = 100, unique = true, nullable = false)
    private String email;
    
    @Column(name = "password", length = 255, nullable = false)
    private String password;
    
    @Column(name = "nombre", length = 100, nullable = false)
    private String nombre;
    
    @Column(name = "apellido", length = 100, nullable = false)
    private String apellido;
    
    @Column(name = "rol", length = 20, nullable = false)
    private String rol;
    
    @Column(name = "activo", nullable = false)
    private boolean activo = true;
    
    @Column(name = "fecha_registro", nullable = false)
    private java.time.LocalDateTime fechaRegistro;
    
    @Column(name = "ultimo_acceso")
    private java.time.LocalDateTime ultimoAcceso;
    
    // Constructores
    public Usuario() {}
    
    public Usuario(String username, String email, String password, String nombre, String apellido, String rol) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.activo = true;
        this.fechaRegistro = java.time.LocalDateTime.now();
        this.ultimoAcceso = java.time.LocalDateTime.now();
    }
    
    // Getters y Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getApellido() {
        return apellido;
    }
    
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    
    public String getRol() {
        return rol;
    }
    
    public void setRol(String rol) {
        this.rol = rol;
    }
    
    public boolean isActivo() {
        return activo;
    }
    
    public void setActivo(boolean activo) {
        this.activo = activo;
    }
    
    public java.time.LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }
    
    public void setFechaRegistro(java.time.LocalDateTime fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
    
    public java.time.LocalDateTime getUltimoAcceso() {
        return ultimoAcceso;
    }
    
    public void setUltimoAcceso(java.time.LocalDateTime ultimoAcceso) {
        this.ultimoAcceso = ultimoAcceso;
    }
}
