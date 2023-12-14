package com.edu.grooming.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.Stylist;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.repository.AppointmentRepository;
import com.edu.grooming.repository.SalonRepository;
import com.edu.grooming.repository.StylistRepository;

@Service
public class StylistServiceImpl implements StylistService{
	@Autowired
	private StylistRepository stylistRepository;
	
	@Autowired
	private SalonRepository salonRepository;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Override
	public Stylist addStylist(Stylist stylist) {
		return stylistRepository.save(stylist);
	}

	@Override
	public Stylist updateStylistSalon(Integer stylistid, Integer salonid) {
		Stylist stylist = stylistRepository.findById(stylistid).get();
		Salon salon = salonRepository.findById(salonid).get();
		
		stylist.updateStylistSalon(salon);
		return stylistRepository.save(stylist);
	}

	@Override
	public List<Stylist> getAllStylist() {
		// TODO Auto-generated method stub
		return stylistRepository.findAll();
	}

	@Override
	public List<Stylist> getStylistByRating(Integer stylistrating) {
		
		return stylistRepository.findByStylistrating(stylistrating); 
	}

	@Override
	public List<Stylist> getStylistBySpecialization(String stylistspecialization) {
		// TODO Auto-generated method stub
		return stylistRepository.findByStylistspecialization(stylistspecialization);
	}

	@Override
	public List<Stylist> deleteStylistById(Integer stylistid) throws NotFoundException {
		// TODO Auto-generated method stub
		Optional<Stylist> stylist=stylistRepository.findById(stylistid);
		if(!stylist.isPresent()) {
			throw new NotFoundException("stylist not found");
		}
		else {
			stylistRepository.deleteById(stylistid);
		}
		
		return stylistRepository.findAll();
	}
	
	@Override
	public Stylist updateStylistById(Integer stylistid, @Valid Stylist stylist) throws NotFoundException {
		Stylist stylist2 = null;

		Optional<Stylist> stylist1 = stylistRepository.findById(stylistid);

		if (!stylist1.isPresent()) {
			throw new NotFoundException("Stylist does not exist");
		} else {
			stylist2 = stylistRepository.findById(stylistid).get();
			stylist2.setFirstname(stylist.getFirstname());
			stylist2.setLastname(stylist.getLastname());
			stylist2.setStylistphonenum(stylist.getStylistphonenum());
			stylist2.setStylistspecialization(stylist.getStylistspecialization());
			stylist2.setStylistrating(stylist.getStylistrating());
		}

		return stylistRepository.save(stylist2);

		
	}

	@Override
	public Stylist getStylistById(Integer stylistid) throws NotFoundException {
		Optional<Stylist> stylist=stylistRepository.findById(stylistid);
		if(!stylist.isPresent()) {
			throw new NotFoundException("user not found");
		}
		else {
			Stylist stylist1 = stylistRepository.findById(stylistid).get();
			return stylist1;
		}
		
	}

	@Override
	public List<Stylist> getAllStylistBySalonId(Integer salonid) {
		
		return stylistRepository.getAllStylistBySalonId(salonid);
	}

}
