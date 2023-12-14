package com.edu.grooming.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.grooming.dao.Admin;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	@Override
	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}

	@Override
	public Admin updateAdminById(Integer adminid, @Valid Admin admin) throws NotFoundException {
		Optional<Admin> admin1=adminRepository.findById(adminid);
		
		if(!admin1.isPresent()) {
			throw new NotFoundException("admin not found");
		}
		else {
			Admin admin2=adminRepository.findById(adminid).get();
			admin2.setAdminName(admin.getAdminName());
			admin2.setAdminEmail(admin.getAdminEmail());
			admin2.setAdminPassword(admin.getAdminPassword());
			return adminRepository.save(admin2);
		}
		
	}

	@Override
	public void deleteAdminById(Integer adminid) throws NotFoundException {
		Optional<Admin> admin=adminRepository.findById(adminid);
		if(!admin.isPresent()){
			throw new NotFoundException("Admin id="+adminid+"not found");
		}
		adminRepository.deleteById(adminid);
	}
	
}
