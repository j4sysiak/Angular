package com.example.springbootangulartodocker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @GetMapping("/test")
    public String get() {
        return "Welcome in SpringbootAngularToDockerApplication";
    }
}
