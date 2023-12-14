package com.edu.grooming.dao;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


@Entity
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer addressid;

	@Pattern(message = "Invalid House number", regexp = "^[1-9]\\d*(?:[ -]?(?:[a-zA-Z]+|[1-9]\\d*))?$")
	@NotBlank(message = "House Number Should not be null")
	@Column(name = "houseno", nullable = false)
	private String houseno;

	@NotBlank(message = "Street Should not be null")
	@Column(name = "street", length = 100, nullable = false)
	private String street;

	@NotBlank(message = "City Should not be null")
	@Column(name = "city", length = 30, nullable = false)
	private String city;

	@NotBlank(message = "State Should not be null")
	@Column(name = "state", length = 20, nullable = false)
	private String state;

	@NotBlank(message = "Salon zipcode Should not be null")
	@Pattern(message = "Invalid zipcode", regexp = "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$")
	private String zipcode;

	@NotBlank(message = "Country Should not be null")
	@Column(name = "country", length = 30, nullable = false)
	private String country;

	@ManyToOne
	@JoinColumn(name="userid")
	private User user;
	
//	@OneToMany(mappedBy="address")
//	private List<Appointment> appointment;

	

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address(String houseno, String street, String city, String state, String zipcode, String country) {
		super();
		this.houseno = houseno;
		this.street = street;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.country = country;
	}

	public Integer getAddressid() {
		return addressid;
	}

	public void setAddressid(Integer addressid) {
		this.addressid = addressid;
	}

	public String getHouseno() {
		return houseno;
	}

	public void setHouseno(String houseno) {
		this.houseno = houseno;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public void updateAddressUser(User user2) {
		this.user=user2;
		
	}
	
//	public List<Appointment> getAppointment() {
//		return appointment;
//	}
//
//	public void setAppointment(List<Appointment> appointment) {
//		this.appointment = appointment;
//	}

	@Override
	public String toString() {
		return "Address [addressid=" + addressid + ", houseno=" + houseno + ", street=" + street + ", city=" + city
				+ ", state=" + state + ", zipcode=" + zipcode + ", country=" + country + "]";
	}

}
