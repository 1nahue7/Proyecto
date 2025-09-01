# 🔐 Sistema de Login - GameHubCafe

## 📋 Descripción

Se ha implementado un sistema completo de autenticación en el frontend de GameHubCafe, conectado con el backend Java/Spring Boot que creamos anteriormente.

## ✨ Características Implementadas

### **Frontend (React)**
- ✅ **Modal de Login/Registro** con estética pixelada
- ✅ **Formulario dual** que permite login y registro
- ✅ **Validación de campos** con mensajes de error
- ✅ **Estado de carga** durante las peticiones
- ✅ **Manejo de errores** del backend
- ✅ **Persistencia local** con localStorage
- ✅ **Contexto de autenticación** para toda la app

### **Backend (Java/Spring Boot)**
- ✅ **Endpoints REST** para login y registro
- ✅ **Autenticación JWT** con tokens seguros
- ✅ **Base de datos H2** con DataNucleus
- ✅ **Encriptación de contraseñas** con BCrypt
- ✅ **Validación de datos** con Spring Validation

## 🚀 Cómo Usar

### **1. Iniciar el Backend**
```bash
cd backend
mvn spring-boot:run
```

El backend estará disponible en `http://localhost:8080`

### **2. Iniciar el Frontend**
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### **3. Probar el Login**
- Haz clic en "Iniciar Sesión" en el header
- Usa las cuentas de demo:
  - **Admin**: `admin` / `admin123`
  - **Usuario**: `usuario` / `user123`

## 🎯 Funcionalidades del Sistema

### **Login**
- Formulario de usuario y contraseña
- Validación en tiempo real
- Manejo de errores del backend
- Redirección automática al cerrar

### **Registro**
- Formulario completo con todos los campos
- Validación de email y contraseña
- Verificación de usuario existente
- Mensaje de éxito/error

### **Estado del Usuario**
- **No autenticado**: Muestra botón "Iniciar Sesión"
- **Autenticado**: Muestra nombre, rol y botón "Cerrar Sesión"
- **Persistencia**: Mantiene sesión al recargar la página

### **Seguridad**
- Tokens JWT almacenados en localStorage
- Validación de campos en frontend y backend
- Encriptación de contraseñas
- Manejo seguro de sesiones

## 🔧 Estructura de Archivos

```
src/
├── componentes/
│   ├── Login.jsx          # Modal de login/registro
│   ├── Login.css          # Estilos pixelados del modal
│   ├── Header.jsx         # Header con botón de login
│   └── Header.css         # Estilos del header
├── context/
│   └── AuthContext.jsx    # Contexto de autenticación
├── config/
│   └── config.js          # Configuración de URLs
└── App.jsx                # App principal con AuthProvider
```

## 🌐 Endpoints del Backend

- **POST** `/api/auth/login` - Iniciar sesión
- **POST** `/api/auth/registro` - Registrar usuario
- **GET** `/api/auth/test` - Probar conexión

## 🎨 Estética Pixelada

El sistema de login mantiene la estética pixelada del proyecto:
- **Fuente monospace** (Courier New)
- **Bordes rectos** (0px border-radius)
- **Patrones de líneas** sutiles
- **Colores gaming** (cyan, magenta)
- **Efectos hover** con transformaciones
- **Sombras de texto** 3D

## 📱 Responsive Design

- **Desktop**: Layout horizontal completo
- **Tablet**: Adaptación automática
- **Móvil**: Layout vertical con botones optimizados

## 🔍 Debugging

### **Verificar Backend**
```bash
curl http://localhost:8080/api/auth/test
```

### **Verificar Login**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### **Verificar Registro**
```bash
curl -X POST http://localhost:8080/api/auth/registro \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@test.com","password":"test123","nombre":"Test","apellido":"User"}'
```

## 🚨 Solución de Problemas

### **Error de Conexión**
- Verificar que el backend esté corriendo
- Verificar puerto 8080 disponible
- Revisar logs del backend

### **Error de CORS**
- El backend ya tiene CORS configurado
- Verificar que las URLs coincidan

### **Error de Validación**
- Revisar que todos los campos estén completos
- Verificar formato de email
- Contraseña mínimo 6 caracteres

## 🔮 Próximos Pasos

- [ ] **Protección de rutas** basada en roles
- [ ] **Perfil de usuario** editable
- [ ] **Recuperación de contraseña**
- [ ] **Verificación de email**
- [ ] **Historial de sesiones**
- [ ] **Logout automático** por inactividad

## 📞 Soporte

Para problemas técnicos:
1. Verificar logs del backend
2. Revisar consola del navegador
3. Verificar conexión a la base de datos
4. Comprobar configuración de CORS

---

**¡El sistema de login está completamente funcional y listo para usar!** 🎉



