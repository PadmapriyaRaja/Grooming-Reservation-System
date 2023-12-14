package com.edu.grooming.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.edu.grooming.dao.Services;

@Repository
public interface ServicesRepository extends JpaRepository<Services, Integer>{

	@Query(value = "SELECT * FROM Services WHERE servicesgendertype = ?1", nativeQuery = true)
	List<Services> findByServicesgendertype(String servicesgendertype);
	
	@Query(value = "select * from services where salonid=?",nativeQuery = true)
	List<Services> getAllServicesBySalonId(Integer salonid);
	
}
