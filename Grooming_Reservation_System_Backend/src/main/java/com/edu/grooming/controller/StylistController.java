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

import com.edu.grooming.dao.Stylist;
import com.edu.grooming.error.BadRequestException;
import com.edu.grooming.error.ConflictException;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.repository.StylistRepository;
import com.edu.grooming.service.StylistService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StylistController {

	@Autowired
	private StylistService stylistService;
	
	@Autowired
	private StylistRepository stylistRepository;
	
//	@PostMapping("/addStylist") //http://localhost:8990/addStylist
//	public ResponseEntity<Stylist> addStylist(@Valid @RequestBody Stylist stylist) throws BadRequestException {
//		Stylist stylist1 = stylistRepository.findByStylistemailOrStylistphonenum(stylist.getStylistemail(),stylist.getStylistphonenum());
//		if(stylist1 != null) {
//			System.out.println("Email and phonenumber already exist!");
//			throw new BadRequestException("Stylist already exist!");
//		}
//		
//		Stylist stylist2 = stylistService.addStylist(stylist);
//		return new ResponseEntity<Stylist>(stylist2,HttpStatus.CREATED);
//	}
	
	@PostMapping("/addStylist/{salonid}") //http://localhost:8990/addStylist
	public ResponseEntity<Stylist> addStylist(@Valid @RequestBody Stylist stylist , @PathVariable Integer salonid) throws ConflictException {
		Stylist stylist1 = stylistRepository.findByStylistemailOrStylistphonenum(stylist.getStylistemail(),stylist.getStylistphonenum());
		if(stylist1 != null) {
			System.out.println("Email and phonenumber already exist!");
			throw new ConflictException("Stylist already exist!Please register");
		}
		
		Stylist stylist2 = stylistService.addStylist(stylist);
		Stylist stylist3 = stylistService.updateStylistSalon(stylist2.getStylistid(), salonid);
		return new ResponseEntity<Stylist>(stylist3,HttpStatus.CREATED);
	}


	@PutMapping("/updateStylistSalon/{stylistid}/{salonid}")	// http://localhost:8990/updateStylistSalon
	public Stylist updateStylistSalon(@PathVariable("stylistid") Integer stylistid, @PathVariable("salonid") Integer salonid) {
		return stylistService.updateStylistSalon(stylistid, salonid);
	}
	
	@GetMapping("/getAllStylist")  // http://localhost:8990/getAllStylist
	public List<Stylist> getAllStylist() {
		return stylistService.getAllStylist();
	}
	
	@GetMapping("/getStylistByRating/{rating}") //  http://localhost:8990/getStylistByRating/{rating}
	public List<Stylist> getStylistByRating(@PathVariable("rating") Integer stylistrating){
		return stylistService.getStylistByRating(stylistrating);
		
	}
	
	@GetMapping("/getStylistById/{stylistid}")
	public Stylist getStylistById(@PathVariable("stylistid") Integer stylistid) throws NotFoundException {
		return stylistService.getStylistById(stylistid);
		
	}
	
	@GetMapping("/getStylistBySpecialization/{specialization}") // http://localhost:8990/getStylistBySpecialization/{specialization}
	public List<Stylist> getStylistBySpecialization(@PathVariable("specialization") String stylistspecialization){
		return stylistService.getStylistBySpecialization(stylistspecialization);
		
	}
	
//	@DeleteMapping("/deleteStylistById/{id}")
//	public List<Stylist> deleteStylistById(@PathVariable("id") Integer stylistid) throws NotFoundException {
//		return stylistService.deleteStylistById(stylistid) ;
//		
//	}
	
	@GetMapping("/geAlltStylistBySalonId/{salonid}")
	public List<Stylist> getAllStylistBySalonId(@PathVariable("salonid") Integer salonid){
		
		return stylistService.getAllStylistBySalonId(salonid);
		
	}
	
	@PutMapping("/updateStylistById/{stylistid}")
	public Stylist updateStylistById(@PathVariable("stylistid") Integer stylistid,@Valid @RequestBody Stylist stylist) throws NotFoundException{
		return stylistService.updateStylistById(stylistid,stylist);
		
	}
	
	@DeleteMapping("/deleteStylistById/{stylistid}") // http://localhost:8990/deleteStylistById/1
	public List<Stylist> deleteStylistById(@PathVariable("stylistid") Integer stylistid) throws NotFoundException {
		return stylistService.deleteStylistById(stylistid) ;
		
	}
	
}