package com.edu.grooming.service;

import java.util.List;

import javax.validation.Valid;

import com.edu.grooming.dao.Stylist;
import com.edu.grooming.error.NotFoundException;

public interface StylistService {

	Stylist addStylist(Stylist stylist);

	Stylist updateStylistSalon(Integer stylistid, Integer salonid);

	List<Stylist> getAllStylist();

	List<Stylist> getStylistByRating(Integer stylistrating);

	List<Stylist> getStylistBySpecialization(String stylistspecialization);

	List<Stylist> deleteStylistById(Integer stylistid) throws NotFoundException;
	
	Stylist updateStylistById(Integer stylistid, @Valid Stylist stylist) throws NotFoundException;

	Stylist getStylistById(Integer stylistid) throws NotFoundException;

	List<Stylist> getAllStylistBySalonId(Integer salonid);

}
