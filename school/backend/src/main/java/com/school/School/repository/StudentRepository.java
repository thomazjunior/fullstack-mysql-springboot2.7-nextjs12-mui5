package com.school.School.repository;

import org.springframework.data.repository.CrudRepository;

import com.school.School.entity.StudentEntity;



public interface StudentRepository extends CrudRepository<StudentEntity, Long> {
    
}
