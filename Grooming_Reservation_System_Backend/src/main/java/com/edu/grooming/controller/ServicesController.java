package com.edu.grooming.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.Services;
import com.edu.grooming.service.ServicesService;
import com.edu.grooming.error.NotFoundException;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ServicesController {

	@Autowired
	private ServicesService servicesService;

	@PostMapping("/saveservices")	//http://localhost:8990/saveservices
	public Services saveServices(@RequestBody Services services){
		return servicesService.saveServices(services);
	}

	@PostMapping("/addServices/{salonid}") //http://localhost:8990/addServices
	public ResponseEntity<Services> saveServices(@Valid @RequestBody Services services , @PathVariable Integer salonid)  {
		
		
		Services service1 = servicesService.saveServices(services);
		Services service2 =servicesService.updateServicesSalon(service1.getServicesid(), salonid);
		return new ResponseEntity<Services>(service2,HttpStatus.CREATED);
	}

	@PutMapping("/updateservicesSalon/{servicesid}/{salonid}") // http://localhost:8990/updateservicesSalon/
	public Services updateServicesSalon(@PathVariable("servicesid") Integer servicesid, @PathVariable("salonid") Integer salonid) {
		return servicesService.updateServicesSalon(servicesid, salonid);
	}

	@GetMapping("/getAllservices") // http://localhost:8990/getAllservices
	public List<Services> getAllServices(){
		return servicesService.getAllServices();
	}

	@GetMapping("/getServicesById/{servicesid}")	// http://localhost:8990/getServicesById
	public Services getServicesById(@PathVariable("servicesid") Integer servicesid) throws NotFoundException {
		return servicesService.getServicesById(servicesid);
	}

	@GetMapping("/getServicesByGender/{servicesgendertype}")	// http://localhost:8990/getServicesByGender/
	public List<Services> getServicesByGender(@PathVariable("servicesgendertype") String servicesgendertype){
		return servicesService.getServicesByGender(servicesgendertype);
	}
	
	@GetMapping("/geAlltServicesBySalonId/{salonid}")
	public List<Services> getAllServicesBySalonId(@PathVariable("salonid") Integer salonid){
		
		return servicesService.getAllServicesBySalonId(salonid);
		
	}
	
	@PutMapping("/updateServiceByServiceId/{servicesid}")
	public Services updateServiceByServiceId(@PathVariable("servicesid") Integer servicesid,@RequestBody Services services) throws NotFoundException {
		return servicesService.updateServiceByServiceId(servicesid,services);
		
	}
	
	@DeleteMapping("/deleteServiceByServiceId/{servicesid}")
	public List<Services> deleteServiceByServiceId(@PathVariable("servicesid")Integer servicesid) throws NotFoundException{
		return servicesService.deleteServiceByServiceId(servicesid) ;
		
	}

	
}
