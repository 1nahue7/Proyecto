package com.gamehubcafe.backend.exception;

import com.gamehubcafe.backend.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {
        StringBuilder errorMessage = new StringBuilder();
        
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errorMessage.append(error.getDefaultMessage()).append(". ");
        });
        
        // Eliminar el último punto y espacio
        String finalMessage = errorMessage.toString().trim();
        if (finalMessage.endsWith(".")) {
            finalMessage = finalMessage.substring(0, finalMessage.length() - 1);
        }
        
        ErrorResponse errorResponse = new ErrorResponse(finalMessage, "validation_error");
        return ResponseEntity.badRequest().body(errorResponse);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse errorResponse = new ErrorResponse(
            "Error interno del servidor: " + ex.getMessage(), 
            "internal_error"
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }
}
