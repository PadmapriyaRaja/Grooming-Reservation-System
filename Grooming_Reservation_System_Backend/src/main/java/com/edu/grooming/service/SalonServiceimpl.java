package com.edu.grooming.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.Services;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.repository.SalonRepository;
import com.edu.grooming.repository.ServicesRepository;


@Service
public class SalonServiceimpl implements SalonService {

	@Autowired
	private SalonRepository salonRepository;

	@Autowired
	private ServicesRepository servicesRepository;

	@Override
	public Salon saveSalon(Salon salon) {
		// TODO Auto-generated method stub
		return salonRepository.save(salon);
	}

	@Override
	public List<Salon> getAllSalon() {
		// TODO Auto-generated method stub
		return salonRepository.findAll();
	}
	
	@Override
	public List<Salon> getAllEnabledSalon() {
		// TODO Auto-generated method stub
		return salonRepository.findAllEnabled();
	}

	@Override
	public Salon getSalonByName(String salonname) {

		Salon salon = salonRepository.findbySalonname(salonname);

		return salon;
	}

	@Override
	public Salon deleteSalonByid(Integer salonid) throws NotFoundException {
		Salon salon1 = salonRepository.findById(salonid).get();
		if (salon1!=null) {
			salon1.setSalonstatus("Deleted");
			System.out.println(salon1);
			return salonRepository.save(salon1);
		} else {
			throw new NotFoundException("Salon is not found");
		}
	}

	@Override
	public Salon updateSalonById(Integer salonid, Salon salon) throws NotFoundException {

		Salon salon2 = null;

		Optional<Salon> salon1 = salonRepository.findById(salonid);

		if (!salon1.isPresent()) {
			throw new NotFoundException("Salon does not exist");
		} else {
			salon2 = salonRepository.findById(salonid).get();
			salon2.setSalonaddress(salon.getSalonaddress());
			salon2.setSaloncity(salon.getSaloncity());
			salon2.setSalondescription(salon.getSalondescription());
			salon2.setSalonemailid(salon.getSalonemailid());
			salon2.setSalonname(salon.getSalonname());
			salon2.setSalonopeninghours(salon.getSalonopeninghours());
			salon2.setSalonpassword(salon.getSalonpassword());
			salon2.setSalonphone(salon.getSalonphone());
			salon2.setSalonpincode(salon.getSalonpincode());
			salon2.setSalonrating(salon.getSalonrating());
			salon2.setSalonstate(salon.getSalonstate());
			salon2.setSalonstatus(salon.getSalonstatus());
			salon2.setSaloncategory(salon.getSaloncategory());
			salon2.setSalonpicurl(salon.getSalonpicurl());

		}
		return salonRepository.save(salon2);
	}

	@Override
	public Salon saveServicesBySalonId(@Valid Services services, Integer salonid)
			throws NotFoundException {
		// TODO Auto-generated method stub
		Optional<Salon> salon = salonRepository.findById(salonid);

		if (!salon.isPresent()) {
			throw new NotFoundException("Saloon is not Present");
		} else {
			Salon salon1 = salonRepository.findById(salonid).get();
			List<Services> services1 = salon1.getServices();
			if (services1.isEmpty()) {
				List<Services> services2 = new ArrayList<>();
				services2.add(servicesRepository.save(services));
				int id = services.getServicesid();
				Services services3 = servicesRepository.findById(id).get();
				Salon salon2 = salonRepository.findById(salonid).get();
				services3.servicesAssignSalon(salon2);
				servicesRepository.save(services3);
				return salon1;
			}
			else {
				services1.add(servicesRepository.save(services));
				System.out.println(services);
				
				int id=services.getServicesid();
				
				Services servicess4=servicesRepository.findById(id).get();
				Salon salon3=salonRepository.findById(salonid).get();
				servicess4.servicesAssignSalon(salon3);
				
				servicesRepository.save(servicess4);
				return salon1;

			}
		}
		
	}

	@Override
	public Salon getSalonById(Integer salonId) {
		Salon salon = salonRepository.getSalonById(salonId);
		return salon;
	}

	@Override
	public List<Salon> searchSalon(String value) {
		return salonRepository.searchSalon(value);
	}

	@Override
	public List<Salon> searchSalonByStatus(String value) {
		return salonRepository.searchSalonByStatus(value);
	}

	@Override
	public List<String> getAllSalonCategories() {
		return salonRepository.getAllSalonCategories();
	}
	
	@Override
	public List<Salon> getAllEnabledSalonByRatingDesc() {
		return salonRepository.getAllEnabledSalonByRatingDesc();
	}

	@Override
	public List<Salon> getSalonByCategory(String salonCategory) {
		return salonRepository.getSalonByCategory(salonCategory);
	}
	

}
