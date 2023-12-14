package com.edu.grooming.service;

import java.util.List;

import javax.validation.Valid;

import com.edu.grooming.dao.Admin;
import com.edu.grooming.error.NotFoundException;

public interface AdminService {

	Admin saveAdmin(Admin admin);

	List<Admin> getAllAdmin();

	Admin updateAdminById(Integer adminid, @Valid Admin admin) throws NotFoundException;

	void deleteAdminById(Integer adminid) throws NotFoundException;

}
