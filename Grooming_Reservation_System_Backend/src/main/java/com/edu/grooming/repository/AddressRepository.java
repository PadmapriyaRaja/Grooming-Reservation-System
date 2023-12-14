package com.edu.grooming.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.edu.grooming.dao.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{

	@Transactional
	@Modifying
	@Query(value="delete from address where userid=?1",nativeQuery=true)
	void deleteAddressByUserId(Integer userid);
	
	@Query(value="select * from address where userid=?1",nativeQuery=true)
	List<Address> getAddressbyUserid(Integer userid);
}
