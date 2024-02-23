package com.edu.grooming.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.edu.grooming.dao.Stylist;

@Repository
public interface StylistRepository extends JpaRepository<Stylist, Integer> {

	Stylist findByStylistemailOrStylistphonenum(String stylistemail, String stylistphonenum);

	@Query(value="select * from stylist where stylistrating=?1 ",nativeQuery = true)
	List<Stylist> findByStylistrating(Integer stylistrating);

	@Query(value="select * from stylist where stylistspecialization=?1",nativeQuery = true)
	List<Stylist> findByStylistspecialization(String stylistspecialization);

	@Query(value="select * from stylist where salonid=? and stylistis_deleted=false ",nativeQuery=true)
	List<Stylist> getAllStylistBySalonId(Integer salonid);

	@Transactional
	@Modifying
	@Query(value=" update stylist set stylistis_deleted=true where stylistid=?",nativeQuery=true)
	void updateStylistisDeleted(Integer stylistid);
	
}
