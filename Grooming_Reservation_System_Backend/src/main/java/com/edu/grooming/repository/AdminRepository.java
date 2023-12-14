package com.edu.grooming.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.grooming.dao.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

}
