package com.example.springbootangulartodocker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/test")
    public String get() {
        return "Welcome in SpringbootAngularToDockerApplication";
    }
}
