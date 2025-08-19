package com.code.craft.medihistapi.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") // Allow frontend dev server
public class AuthController {


    @PostMapping("/auth")
    public ResponseEntity<String> authenticate(@RequestBody AuthRequest request) {
        if ("admin@admin.com".equals(request.getUsername()) && "admin".equals(request.getPassword())) {
            return ResponseEntity.ok("Authentication successful");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}