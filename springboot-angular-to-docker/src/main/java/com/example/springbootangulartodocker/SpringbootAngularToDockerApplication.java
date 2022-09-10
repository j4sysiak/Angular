package com.example.springbootangulartodocker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class SpringbootAngularToDockerApplication {

	@GetMapping("/test")
	public String get() {
		return "Welcome in SpringbootAngularToDockerApplication";
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngularToDockerApplication.class, args);
	}

}
