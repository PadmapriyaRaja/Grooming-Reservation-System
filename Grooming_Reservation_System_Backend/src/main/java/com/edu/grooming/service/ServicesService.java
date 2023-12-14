package com.edu.grooming.service;

import java.util.List;

import com.edu.grooming.dao.Services;
import com.edu.grooming.error.NotFoundException;

public interface ServicesService {

	Services saveServices(Services service);

	Services updateServicesSalon(Integer serviceid, Integer salonid);

	List<Services> getAllServices();

	Services getServicesById(Integer servicesid) throws NotFoundException;

	List<Services> getServicesByGender(String servicesgendertype);
	
	List<Services> getAllServicesBySalonId(Integer salonid);

	Services updateServiceByServiceId(Integer servicesid, Services services) throws NotFoundException;

	List<Services> deleteServiceByServiceId(Integer servicesid) throws NotFoundException;

}
