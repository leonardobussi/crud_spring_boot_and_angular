package com.bussi.crudjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bussi.crudjava.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{
    
}
