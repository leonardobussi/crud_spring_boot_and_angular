package com.bussi.crudjava;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.bussi.crudjava.model.Course;
import com.bussi.crudjava.repository.CourseRepository;

@SpringBootApplication
public class CrudJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudJavaApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return  arg -> {
			courseRepository.deleteAll();

			Course c = new Course();

			c.setName("teste do bussi");
			c.setCategory("Front-End");

			courseRepository.save(c);
		};
	}
}
