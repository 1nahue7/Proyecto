# GameHubCafe Backend

Backend para GameHubCafe desarrollado con Spring Boot, Maven y DataNucleus.

## Tecnologías Utilizadas

- **Java 17**
- **Spring Boot 3.2.0**
- **Maven**
- **DataNucleus 6.0.0** (ORM)
- **H2 Database** (base de datos en memoria para desarrollo)
- **Spring Security** con JWT
- **Lombok**

## Requisitos Previos

- Java 17 o superior
- Maven 3.6 o superior

## Instalación y Ejecución

1. **Clonar el proyecto** (si no lo tienes ya)
2. **Navegar al directorio backend**:
   ```bash
   cd backend
   ```

3. **Compilar el proyecto**:
   ```bash
   mvn clean compile
   ```

4. **Ejecutar la aplicación**:
   ```bash
   mvn spring-boot:run
   ```

La aplicación se ejecutará en `http://localhost:8080`

## Endpoints Disponibles

### Autenticación

- **POST** `/api/auth/login` - Iniciar sesión
- **POST** `/api/auth/registro` - Registrar nuevo usuario
- **GET** `/api/auth/test` - Probar que el backend funciona

### Base de Datos

- **H2 Console**: `http://localhost:8080/h2-console`
  - JDBC URL: `jdbc:h2:mem:gamehubcafe`
  - Username: `sa`
  - Password: `password`

## Usuarios de Prueba

Al iniciar la aplicación, se crean automáticamente dos usuarios:

### Administrador
- **Username**: `admin`
- **Password**: `admin123`
- **Rol**: `ADMIN`

### Usuario Normal
- **Username**: `usuario`
- **Password**: `user123`
- **Rol**: `USER`

## Estructura del Proyecto

```
backend/
├── src/main/java/com/gamehubcafe/backend/
│   ├── config/          # Configuraciones (Security, DataNucleus)
│   ├── controller/      # Controladores REST
│   ├── dto/            # Objetos de transferencia de datos
│   ├── model/          # Entidades de la base de datos
│   ├── repository/     # Repositorios de datos
│   ├── service/        # Lógica de negocio
│   └── util/           # Utilidades (JWT)
├── src/main/resources/
│   └── application.properties
└── pom.xml
```

## Características

- **Autenticación JWT**: Sistema de login seguro con tokens
- **Persistencia con DataNucleus**: ORM robusto para manejo de datos
- **Base de datos H2**: Base de datos en memoria para desarrollo
- **Validación de datos**: Validación automática de entradas
- **CORS habilitado**: Permite peticiones desde el frontend
- **Seguridad configurada**: Endpoints protegidos y públicos

## Desarrollo

### Agregar Nuevas Entidades

1. Crear la clase modelo en `model/`
2. Agregar anotaciones de DataNucleus
3. Crear el repositorio correspondiente
4. Crear el servicio de negocio
5. Crear el controlador REST

### Cambiar Base de Datos

Para cambiar de H2 a otra base de datos (MySQL, PostgreSQL, etc.):

1. Cambiar la dependencia en `pom.xml`
2. Actualizar `application.properties`
3. Ajustar la configuración de DataNucleus si es necesario

## Troubleshooting

### Error de Compilación
- Verificar que tienes Java 17 instalado
- Ejecutar `mvn clean` antes de compilar

### Error de Base de Datos
- Verificar que H2 esté en el classpath
- Revisar la configuración en `application.properties`

### Error de CORS
- Verificar la configuración en `SecurityConfig.java`
- Asegurar que el frontend esté en el origen permitido



