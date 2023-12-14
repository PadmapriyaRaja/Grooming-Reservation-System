package com.edu.grooming.dao;

import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Salon {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer salonid;

	@NotBlank(message="Salon Name Should not be null")
	@Column(name="salonname", length=50, nullable=false)
	private String salonname;
	
	@NotBlank(message="Salon Address Should not be null")
	@Column(name="salonaddress", length=200, nullable=false)
	private String salonaddress;
	
	@NotBlank(message="Salon City Should not be null")
	@Column(name="saloncity", length=20, nullable=false)
	private String saloncity;
	
	@NotBlank(message="Salon Pincode Should not be null")
	@Pattern(message = "Invalid Pincode",regexp = "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$")
	@Column(name="salonpincode",length=8)
	private String salonpincode;
	
	@NotBlank(message="Salon State Should not be null")
	@Column(name="salonstate", length=50, nullable=false)
	private String salonstate;
	
	@NotBlank(message="Salon phone Number Should not be null")
	@Pattern(message = "Invalid Phone Number", regexp = "^[6-9]\\d{9}$")
	@Column(unique = true,name="salonphone",length=10)
	private String salonphone;
	
	@NotBlank(message="Salon Email Should not be null")
	@Email(message = "Invalid Email", regexp="^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z.]{2,5}")
	@Column(unique = true,name="salonemailid",length=30)
	private String salonemailid;
	
	@NotBlank(message="Salon Opening Time Should not be null")
	//@Pattern(message="Invalid Time",regexp="^(mon|tue|wed|thu|fri)\\-(mon|tue|wed|thu|fri)\\s+\\d{1,2}:\\d{2}-\\d{1,2}:\\d{2}$")
	@Column(name = "salonopeninghours")
	private String salonopeninghours;
	
	@NotBlank(message="Salon description Should not be null")
	@Column(name="salondescription", length=500, nullable=false)
	private String salondescription;
	
	@NotBlank(message="Salon Rating Should not be null")
	@Column(name="salonrating", length=5, nullable=false)
	private String salonrating;
	
	@Pattern(message = "Invalid Salon Password", regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$")
	@Column(name="salonpassword",nullable=false)
	private String salonpassword;

	@Column(name="salonstatus",length=20,nullable=false)
	private String salonstatus;
	 	
	@JsonIgnore
	@OneToMany(mappedBy = "salon", cascade = CascadeType.ALL)
	private List<Stylist> stylist;

	@JsonIgnore
	@OneToMany(mappedBy = "salon", cascade = CascadeType.ALL)
	private List<Services> services;
	
	@JsonIgnore
	@OneToMany(mappedBy = "salon", cascade = CascadeType.ALL)
	private List<Appointment> appointment;

	@NotBlank(message="Salon category should not be null")
	@Column(name="saloncategory")
	private String saloncategory;
	
	
	@Column(name="salonpicurl")
	private String salonpicurl;

	public Salon() {
			super();
			// TODO Auto-generated constructor stub
		}

	public Salon(String salonname, String salonaddress, String saloncity, String salonpincode, String salonstate,
			String salonphone, String salonemailid, String salonopeninghours, String salondescription,
			String salonrating, String salonpassword,String salonstatus,String saloncategory,String salonpicurl) {
		super();
		this.salonname = salonname;
		this.salonaddress = salonaddress;
		this.saloncity = saloncity;
		this.salonpincode = salonpincode;
		this.salonstate = salonstate;
		this.salonphone = salonphone;
		this.salonemailid = salonemailid;
		this.salonopeninghours = salonopeninghours;
		this.salondescription = salondescription;
		this.salonrating = salonrating;
		this.salonpassword = salonpassword;
		this.salonstatus = salonstatus;
	}

	public Integer getSalonid() {
		return salonid;
	}

	public void setSalonid(Integer salonid) {
		this.salonid = salonid;
	}

	public String getSalonname() {
		return salonname;
	}

	public void setSalonname(String salonname) {
		this.salonname = salonname;
	}

	public String getSalonaddress() {
		return salonaddress;
	}

	public void setSalonaddress(String salonaddress) {
		this.salonaddress = salonaddress;
	}

	public String getSaloncity() {
		return saloncity;
	}

	public void setSaloncity(String saloncity) {
		this.saloncity = saloncity;
	}

	public String getSalonpincode() {
		return salonpincode;
	}

	public void setSalonpincode(String salonpincode) {
		this.salonpincode = salonpincode;
	}

	public String getSalonstate() {
		return salonstate;
	}

	public void setSalonstate(String salonstate) {
		this.salonstate = salonstate;
	}

	public String getSalonphone() {
		return salonphone;
	}

	public void setSalonphone(String salonPhone) {
		this.salonphone = salonPhone;
	}

	public String getSalonemailid() {
		return salonemailid;
	}

	public void setSalonemailid(String salonemailid) {
		this.salonemailid = salonemailid;
	}

	public String getSalonopeninghours() {
		return salonopeninghours;
	}

	public void setSalonopeninghours(String salonopeninghours) {
		this.salonopeninghours = salonopeninghours;
	}

	public String getSalondescription() {
		return salondescription;
	}

	public void setSalondescription(String salondescription) {
		this.salondescription = salondescription;
	}

	public String getSalonrating() {
		return salonrating;
	}

	public void setSalonrating(String salonrating) {
		this.salonrating = salonrating;
	}

	public String getSalonpassword() {
		return salonpassword;
	}

	public void setSalonpassword(String salonpassword) {
		this.salonpassword = salonpassword;
	}
	
	public String getSalonstatus() {
		return salonstatus;
	}

	public void setSalonstatus(String salonstatus) {
		this.salonstatus = salonstatus;
	}

	public List<Stylist> getStylist() {
		return stylist;
	}

	public String getSaloncategory() {
		return saloncategory;
	}

	public void setSaloncategory(String saloncategory) {
		this.saloncategory = saloncategory;
	}

	public String getSalonpicurl() {
		return salonpicurl;
	}

	public void setSalonpicurl(String salonpicurl) {
		this.salonpicurl = salonpicurl;
	}

	public void setStylist(List<Stylist> stylist) {
		this.stylist = stylist;
	}

	public List<Services> getServices() {
		return services;
	}

	public void setServices(List<Services> services) {
		this.services = services;
	}

	public List<Appointment> getAppointment() {
		return appointment;
	}

	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}

	@Override
	public String toString() {
		return "Salon [salonid=" + salonid + ", salonname=" + salonname + ", salonaddress=" + salonaddress
				+ ", saloncity=" + saloncity + ", salonpincode=" + salonpincode + ", salonstate=" + salonstate
				+ ", salonphone=" + salonphone + ", salonemailid=" + salonemailid + ", salonopeninghours="
				+ salonopeninghours + ", salondescription=" + salondescription + ", salonrating=" + salonrating
				+ ", salonpassword=" + salonpassword +  ", salonstatus=" + salonstatus + ", saloncategory=" + saloncategory + ", salonpicurl=" + salonpicurl +"]";
	}

	
	


}
