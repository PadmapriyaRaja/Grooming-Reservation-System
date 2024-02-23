package com.edu.grooming.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.edu.grooming.dao.Salon;

@Repository
public interface SalonRepository extends JpaRepository<Salon, Integer> {

	@Query(value = "select * from salon where salonname=?",nativeQuery = true)
	Salon findbySalonname(String salonname);

	Salon findBySalonemailidOrSalonphone(String salonemailid, String salonphone);

	@Query(value="select * from salon where salonemailid=?1 and salonpassword=?2",nativeQuery = true)
	Salon getSalonByEmail(String salonemailid, String salonpassword);

	@Query(value="select * from salon where salonid=?1",nativeQuery = true)
	Salon getSalonById(Integer salonId);


	@Query(value="select * from salon where salonname like ?%",nativeQuery = true)
	List<Salon> searchSalon(String value);	
	
	@Query(value="select * from salon where salonstatus=?",nativeQuery = true)
	List<Salon> searchSalonByStatus(String value);
	
	@Query(value="select * from salon where salonstatus='Enabled'",nativeQuery=true)
	List<Salon> findAllEnabled();	
	
	@Query(value="select distinct saloncategory from salon where salonstatus='Enabled'",nativeQuery = true)
	List<String> getAllSalonCategories();	

	@Query(value="select * from salon where salonstatus='Enabled' order by salonrating desc",nativeQuery=true)
	List<Salon> getAllEnabledSalonByRatingDesc();
	
	@Query(value="select * from salon where saloncategory=?",nativeQuery=true)
	List<Salon> getSalonByCategory(String salonCategory);

	@Query(value="select * from salon where saloncategory=? and salonstatus='Enabled'",nativeQuery=true)
	List<Salon> getEnabledSalonByCategory(String value);

	@Query(value="select * from salon where salonemailid=?",nativeQuery=true)
	Salon getSalonByEmailID(String salonemailid);

	@Query(value="select * from salon where salonstatus='Applied'",nativeQuery=true)
	List<Salon> getAllAppliedSalon();

}
