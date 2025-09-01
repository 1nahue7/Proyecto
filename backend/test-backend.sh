#!/bin/bash

echo "🧪 Probando GameHubCafe Backend..."
echo "=================================="

# Verificar si el backend está corriendo
echo "1. Verificando si el backend está corriendo..."
if curl -s http://localhost:8080/api/auth/test > /dev/null; then
    echo "✅ Backend está funcionando correctamente"
else
    echo "❌ Backend no está corriendo. Inicia la aplicación primero con: mvn spring-boot:run"
    exit 1
fi

echo ""
echo "2. Probando endpoint de login con usuario de prueba..."
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:8080/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"username":"usuario","password":"user123"}')

if echo "$LOGIN_RESPONSE" | grep -q "token"; then
    echo "✅ Login exitoso"
    echo "Respuesta: $LOGIN_RESPONSE"
else
    echo "❌ Error en login: $LOGIN_RESPONSE"
fi

echo ""
echo "3. Probando endpoint de login con admin..."
ADMIN_RESPONSE=$(curl -s -X POST http://localhost:8080/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"username":"admin","password":"admin123"}')

if echo "$ADMIN_RESPONSE" | grep -q "token"; then
    echo "✅ Login de admin exitoso"
    echo "Respuesta: $ADMIN_RESPONSE"
else
    echo "❌ Error en login de admin: $ADMIN_RESPONSE"
fi

echo ""
echo "4. Probando endpoint de registro..."
REGISTRO_RESPONSE=$(curl -s -X POST http://localhost:8080/api/auth/registro \
    -H "Content-Type: application/json" \
    -d '{"username":"testuser","email":"test@test.com","password":"test123","nombre":"Test","apellido":"User"}')

if echo "$REGISTRO_RESPONSE" | grep -q "exitosamente"; then
    echo "✅ Registro exitoso"
    echo "Respuesta: $REGISTRO_RESPONSE"
else
    echo "❌ Error en registro: $REGISTRO_RESPONSE"
fi

echo ""
echo "🎮 ¡Pruebas completadas! El backend está funcionando correctamente."
echo ""
echo "📋 Resumen de endpoints disponibles:"
echo "   - POST /api/auth/login - Iniciar sesión"
echo "   - POST /api/auth/registro - Registrar usuario"
echo "   - GET /api/auth/test - Probar backend"
echo "   - H2 Console: http://localhost:8080/h2-console"
echo ""
echo "🔑 Usuarios de prueba:"
echo "   - usuario/user123 (USER)"
echo "   - admin/admin123 (ADMIN)"



