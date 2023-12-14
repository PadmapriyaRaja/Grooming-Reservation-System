package com.edu.grooming.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.grooming.dao.Address;
import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.User;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.repository.AddressRepository;
import com.edu.grooming.repository.AppointmentRepository;
import com.edu.grooming.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	

	@Override
	public User addUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public List<User> deleteUserById(Integer userid) {
		//appointmentRepository.deleteOrderByUserId(userid);
		//addressRepository.deleteAddressByUserId(userid);
		//userRepository.deleteUserById(userid);
		userRepository.updateUserisDeleted(userid);
		return userRepository.findAll();
	}

	@Override
	public User updateUserById(Integer userid, @Valid User user) throws NotFoundException {
		Optional<User> user1=userRepository.findById(userid);
		if(!user1.isPresent()) {
			throw new NotFoundException("user id"+userid+"not found");
		}else {
			
			User user2=userRepository.findById(userid).get();
			user2.setUserfirstname(user.getUserfirstname());
			user2.setUserlastname(user.getUserlastname());
			user2.setUseremail(user.getUseremail());
			user2.setUserphonenumber(user.getUserphonenumber());
			user2.setUserpassword(user.getUserpassword());
			userRepository.save(user2);
			return user2;
		}
		
		
	}

	@Override
	public User getUserByEmail(String useremail, String userpassword) {
		User user=userRepository.getUserByEmail(useremail,userpassword);
		return user;
	}

	@Override
	public User getUserById(Integer userid) throws NotFoundException {
		
		Optional<User> user=userRepository.findById(userid);
		if(!user.isPresent()) {
			throw new NotFoundException("user not found");
		}
		else {
			User user1=userRepository.findById(userid).get();
			return user1;
		}
		
	}

	@Override
	public User getUserByEmailid(String useremail)  {
		User user=userRepository.getUserByEmailid(useremail);
//		if(user==null) {
//			throw new NotFoundException("user email "+useremail+" not found");
//		}else {
//			return user;
//		}
		return user;
		
		
	}

	@Override
	public User enableUserById(Integer userid) {
		User user=userRepository.findById(userid).get();
		if(user != null) {
			user.setUserisDeleted(false);	
			return userRepository.save(user);
		}
		return user;
	}

	@Override
	public List<User> searchUserlike(String value) {
		return userRepository.searchUser(value);
	}

	@Override
	public List<User> searchUserByIsDeleted(String value) {
		if(value.equals("Enabled")) 
			return userRepository.searchUserByIsDeleted(false);			
		else
			return userRepository.searchUserByIsDeleted(true);
	}
	
}
