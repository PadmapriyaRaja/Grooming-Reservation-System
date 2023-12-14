package com.edu.grooming.dao;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer servicesid;

	@NotBlank(message = "Services Name Should not be null")
	@Column(name = "servicesname", length = 100, nullable = false)
	private String servicesname;

	@Column(name = "servicesdescription", length = 255)
	private String servicesdescription;

	@Min(500)
	@Max(200000)
	@Column(nullable = false, name = "servicesprice")
	private double servicesprice;
	
	@NotBlank(message = "Service gender type cannot be blank")
	@Column(nullable = false, name = "servicesgendertype", length = 6)
	private String servicesgendertype;
	
	
	

	@ManyToOne
	@JoinColumn(name = "salonid")
	private Salon salon;


	
	@JsonIgnore
	@ManyToMany(mappedBy = "services")
	private List<Appointment> appointment;

	public Services() {
		super();
	}

	public Services(String servicesname, String servicesdescription, double servicesprice, String servicesgendertype) {
		super();
		this.servicesname = servicesname;
		this.servicesdescription = servicesdescription;
		this.servicesprice = servicesprice;
		this.servicesgendertype = servicesgendertype;
	}
	
	
	public Integer getServicesid() {
		return servicesid;
	}

	public void setServicesid(Integer servicesid) {
		this.servicesid = servicesid;
	}

	public String getServicesname() {
		return servicesname;
	}

	public void setServicesname(String servicesname) {
		this.servicesname = servicesname;
	}

	public String getServicesdescription() {
		return servicesdescription;
	}

	public void setServicesdescription(String servicesdescription) {
		this.servicesdescription = servicesdescription;
	}

	public double getServicesprice() {
		return servicesprice;
	}

	public void setServicesprice(double servicesprice) {
		this.servicesprice = servicesprice;
	}

	public String getServicesgendertype() {
		return servicesgendertype;
	}

	public void setServicesgendertype(String servicesgendertype) {
		this.servicesgendertype = servicesgendertype;
	}

	public List<Appointment> getAppointment() {
		return appointment;
	}

	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}

	
	@Override
	public String toString() {
		return "Services [servicesid=" + servicesid + ", servicesname=" + servicesname + ", servicesdescription="
				+ servicesdescription + ", servicesprice=" + servicesprice + ", servicesgendertype="
				+ servicesgendertype + "]";
	}

	
	public Salon getSalon() {
		return salon;
	}

	public void setSalon(Salon salon) {
		this.salon = salon;
	}

	public void updateservicesSalon(Salon salon2) {
		this.salon = salon2;
	}

	public void servicesAssignSalon(Salon salon2) {
		this.salon = salon2;
	}

}
