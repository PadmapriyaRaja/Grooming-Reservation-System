package com.edu.grooming.service;

import java.util.List;

import javax.validation.Valid;

import com.edu.grooming.dao.Address;
import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.User;
import com.edu.grooming.error.NotFoundException;

public interface UserService {

	User addUser(User user);

	List<User> getAllUser();

	List<User> deleteUserById(Integer userid);

	User updateUserById(Integer userid, @Valid User user) throws NotFoundException;

	User getUserById(Integer userid) throws NotFoundException;

	User getUserByEmailid(String useremail) ;

	User getUserByEmail(String useremail, String userpassword);

	User enableUserById(Integer userid);

	List<User> searchUserByIsDeleted(String value);

	List<User> searchUserlike(String value);

}
