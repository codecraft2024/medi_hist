package com.code.craft.medihistapi.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") // Allow frontend dev server
public class AuthController {


    @PostMapping("/auth")
    public ResponseEntity<String> authenticate(@RequestBody AuthRequest request) throws InterruptedException {
        Thread.sleep(500); // Simulate a delay for demonstration purposes
        if ("admin@admin.com".equals(request.getUsername()) && "P@ssw0rd".equals(request.getPassword())) {
            // Return a dummy token instead of a plain message
            String dummyToken = "dummy-token-" + System.currentTimeMillis();
            return ResponseEntity.ok(dummyToken);
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}