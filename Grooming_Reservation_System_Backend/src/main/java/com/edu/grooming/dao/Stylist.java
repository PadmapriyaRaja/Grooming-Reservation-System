package com.edu.grooming.dao;

import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Stylist {
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private Integer stylistid;
	
	@NotBlank(message="Stylist name Should not be null")
	@Pattern(message = "Invalid First Name", regexp = "^[A-Za-z]+$")
	@Column(name="firstname",length=30)
	private String firstname;
	
	@NotBlank(message="Stylist name Should not be null")
	@Pattern(message = "Invalid Last Name", regexp = "^[A-Za-z]+$")
	@Column(name="lastname",length=30,nullable=false)
	private String lastname;
	
	@NotBlank(message="Stylist phone Number Should not be null")
	@Pattern(message = "Invalid Phone Number", regexp = "^[6-9]\\d{9}$")
	@Column(unique = true,name="stylistphonenum",length=10)
	private String stylistphonenum;
	
	@NotBlank(message="Stylist Email Should not be null")
	@Email(message = "Invalid Email", regexp="^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z.]{2,5}")
	@Column(unique = true,name="stylistemail",length=30)
	private String stylistemail;
	
	@NotBlank(message="Stylist specialization Should not be null")
	@Column(name="stylistspecialization", nullable=false)
	private String stylistspecialization;
	
	@NotNull(message="Stylist Rating Should not be null")
	@Min(1)
	@Max(5)
	@Column(name="stylistrating", nullable=false)
	private Integer stylistrating;
	
	@ManyToOne
	@JoinColumn(name="salonid")
	private Salon salon; 
	
	@JsonIgnore
	@OneToMany(mappedBy = "stylist",cascade = CascadeType.ALL)
	private List<Appointment> appointment;
	
	public Stylist() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Stylist(String firstname, String lastname, String stylistphonenum,
			String stylistemail, String stylistspecialization, Integer stylistrating) {
		super();
		
		this.firstname = firstname;
		this.lastname = lastname;
		this.stylistphonenum = stylistphonenum;
		this.stylistemail = stylistemail;
		this.stylistspecialization = stylistspecialization;
		this.stylistrating = stylistrating;
	}

	public Integer getStylistid() {
		return stylistid;
	}

	public void setStylistid(Integer stylistid) {
		this.stylistid = stylistid;
	}


	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getStylistphonenum() {
		return stylistphonenum;
	}

	public void setStylistphonenum(String stylistphonenum) {
		this.stylistphonenum = stylistphonenum;
	}

	public String getStylistemail() {
		return stylistemail;
	}

	public void setStylistemail(String stylistemail) {
		this.stylistemail = stylistemail;
	}

	public String getStylistspecialization() {
		return stylistspecialization;
	}

	public void setStylistspecialization(String stylistspecialization) {
		this.stylistspecialization = stylistspecialization;
	}

	public Integer getStylistrating() {
		return stylistrating;
	}

	public void setStylistrating(Integer stylistrating) {
		this.stylistrating = stylistrating;
	}

	@Override
	public String toString() {
		return "Stylist [stylistid=" + stylistid  + ", firstname=" + firstname + ", lastname="
				+ lastname + ", stylistphonenum=" + stylistphonenum + ", stylistemail=" + stylistemail
				+ ", stylistspecialization=" + stylistspecialization + ", stylistrating=" + stylistrating + "]";
	}

	public Salon getSalon() {
		return salon;
	}


	public void setSalon(Salon salon) {
		this.salon = salon;
	}


	public void updateStylistSalon(Salon salon2) {
		this.salon = salon2;
	}


}
