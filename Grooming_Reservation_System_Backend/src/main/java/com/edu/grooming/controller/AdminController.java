package com.edu.grooming.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.Admin;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.service.AdminService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("/saveAdmin") //  http://localhost:8990/saveAdmin
	public Admin saveAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}
	
	@GetMapping("/getAllAdmin") //  http://localhost:8990/getAllAdmin
	public List<Admin> getAllAdmin(){
		return adminService.getAllAdmin();
	}
	
	@GetMapping("/updateAdminById/{adminid}") // http://localhost:8990/updateAdminById/{adminid}
	public Admin updateAdminById(@PathVariable("adminid") Integer adminid,@Valid @RequestBody Admin admin) throws NotFoundException {
		return adminService.updateAdminById(adminid,admin);
	}
	
	@DeleteMapping("/deleteAdminById/{adminid}") // http://localhost:8990/deleteAdminById/{adminid}
	public String deleteAdminById(@PathVariable("adminid") Integer adminid ) throws NotFoundException {
		adminService.deleteAdminById(adminid);
		return "Record Deleted";
	}
	
}
