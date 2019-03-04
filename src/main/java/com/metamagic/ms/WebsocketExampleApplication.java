package com.metamagic.ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class WebsocketExampleApplication extends org.springframework.boot.web.servlet.support.SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(WebsocketExampleApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WebsocketExampleApplication.class);
	}
}
