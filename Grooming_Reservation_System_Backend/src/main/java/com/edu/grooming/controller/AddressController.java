package com.edu.grooming.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.Address;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.service.AddressService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AddressController {

	@Autowired
	private AddressService addressService;
	
//	@PostMapping("/addAddress") //http://localhost:8990/addAddress
//	public Address addAddress(@RequestBody Address address) {
//		return addressService.addAddress(address);
//	}
	
	@PostMapping("/addAddress/{userid}") //http://localhost:8990/addAddress
	public Address addAddress(@RequestBody Address address, @PathVariable("userid") Integer userid) {
		Address address1= addressService.addAddress(address,userid);
		Address address2=addressService.updateAddressUser(userid, address1.getAddressid());
		return address2;
	}
	
	@PutMapping("/updateAddressUser/{userid}/{addressid}")
	public Address updateAddressUser(@PathVariable("userid") Integer userid,@PathVariable("addressid") Integer addressid) {
		return addressService.updateAddressUser(userid,addressid);
	}

	@GetMapping("/getAllAddress") //http://localhost:8990/getAllAddress
	public List<Address> getAllAddress(){
		return addressService.getAllAddress();
	}
	
	@DeleteMapping("/deleteAddressById/{addressid}") //  http://localhost:8990/deleteAddressById/{addressid}
	public List<Address> deleteAddressById(@PathVariable("addressid") Integer addressid) throws NotFoundException{
		return addressService.deleteAddressById(addressid);
	}
	
	@GetMapping("/getAddressById/{addressid}") //  http://localhost:8990/getAddressById/{addressid}
	public Address getAddressById(@PathVariable("addressid") Integer addressid ) throws NotFoundException {
		return addressService.getAddressById(addressid);
	}
	
	@PutMapping("/updateAddressById/{addressid}") // http://localhost:8990/updateAddressById/{addressid}
	public Address updateAddressById(@PathVariable("addressid")Integer addressid,@Valid @RequestBody Address address) throws NotFoundException {
		return addressService.updateAddressById(addressid,address);
	}
	
	@GetMapping("/getAddressbyUserid/{userid}") // http://localhost:8990/getAddressbyUserid/{userid}
	public List<Address> getAddressbyUserid(@PathVariable("userid") Integer userid) {
		return addressService.getAddressbyUserid(userid);
	}

}
