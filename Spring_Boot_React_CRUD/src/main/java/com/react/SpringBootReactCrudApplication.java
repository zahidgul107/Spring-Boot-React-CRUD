package com.react;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootReactCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootReactCrudApplication.class, args);
		System.err.println("Application Started");
	}

}
