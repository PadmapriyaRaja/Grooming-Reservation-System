package com.edu.grooming.service;

import java.util.List;


import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.Services;
import com.edu.grooming.error.NotFoundException;

public interface SalonService  {

	Salon saveSalon(Salon salon);

	List<Salon> getAllSalon();

	Salon getSalonByName(String salonname);

	Salon deleteSalonByid(Integer salonid) throws NotFoundException;

	Salon updateSalonById(Integer salonid,Salon salon) throws NotFoundException;

	Salon saveServicesBySalonId(Services services, Integer salonid) throws NotFoundException;

	Salon getSalonById(Integer salonId);

	List<Salon> searchSalon(String value);

	List<Salon> searchSalonByStatus(String value);

	List<Salon> getAllEnabledSalon();

	List<String> getAllSalonCategories();

	List<Salon> getAllEnabledSalonByRatingDesc();

	List<Salon> getSalonByCategory(String salonCategory);

	

}
