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


import com.edu.grooming.error.ConflictException;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.User;
import com.edu.grooming.repository.UserRepository;
import com.edu.grooming.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/addUser") //http://localhost:8990/addUser
	public ResponseEntity<String> addUser(@Valid @RequestBody User user) throws ConflictException {
		
		User user1 = userRepository.findByUseremailOrUserphonenumber(user.getUseremail(),user.getUserphonenumber());
		if(user1 != null) {
			
			throw new ConflictException("The provided email address is already registered. Please use a different email.");
	 
		}
		
		userService.addUser(user);		
		return new ResponseEntity<String>(HttpStatus.CREATED);

	}
	
	@GetMapping("/getAllUser")  //http://localhost:8990/getAllUser
	public List<User> getAllUser(){
		return userService.getAllUser();
	}
	
	@DeleteMapping("/deleteUserById/{userid}") // http://localhost:8990/deleteUserById/{userid}
	public List<User> deleteUserById(@PathVariable("userid") Integer userid){
		return userService.deleteUserById(userid);
	}
	
	@PutMapping("/updateUserById/{userid}") //http://localhost:8990/updateUserById/{userid}
	public User updateUserById(@PathVariable("userid") Integer userid ,@Valid @RequestBody User user) throws NotFoundException {
		return userService.updateUserById(userid,user);
	}
	
	@GetMapping("/getUserByEmailPassword/{email}/{password}") //http://localhost:8990/getUserByEmail/{email}/{password}
	public ResponseEntity<User> getUserByEmailPassword(@PathVariable("email") String useremail,@PathVariable("password") String userpassword) {
		
		User user = userRepository.getUserByEmail(useremail, userpassword);
		if(user==null) {
			return ResponseEntity.badRequest().body(null);
		}
		else if(user.isUserisDeleted()){
			return ResponseEntity.badRequest().body(null);
		}
		else {
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(user); 
		}
		
	}
	
	@GetMapping("/enableUserById/{userid}") //http://localhost:8990/enableUserById/{userid}
	public User enableUserById(@PathVariable("userid") Integer userid ) throws NotFoundException {
		return userService.enableUserById(userid);
	}
	
	@GetMapping("/getUserById/{userid}") //http://localhost:8990/getUserById/{userid}
	public User getUserById(@PathVariable("userid") Integer userid) throws NotFoundException {
		return userService.getUserById(userid);
		
	}
	
	@GetMapping("/getUserByEmailid/{emailid}") //http://localhost:8990/getUserByEmailid/{emailid}
	public ResponseEntity<User> getUserByEmailid(@PathVariable("emailid") String useremail)  {
		User user1 = userRepository.getUserByEmailid(useremail);
		if(user1==null) {
			return ResponseEntity.badRequest().body(null);
			//return (ResponseEntity<User>) ResponseEntity.status(HttpStatus.NOT_FOUND);
		}else {
			//userService.getUserByEmailid(useremail);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(user1); 
		}
	}
	
	@GetMapping("/searchUserlike/{value}")//http://localhost:8990/searchUserlike/{value}
	public List<User> searchSalonlike(@PathVariable("value") String value){
		return userService.searchUserlike(value);
	}
	
	@GetMapping("/searchUserByIsDeleted/{value}")//http://localhost:8990/searchUserByIsDeleted/{value}
	public List<User> searchUserByIsDeleted(@PathVariable("value") String value){
		return userService.searchUserByIsDeleted(value);
	}

}
