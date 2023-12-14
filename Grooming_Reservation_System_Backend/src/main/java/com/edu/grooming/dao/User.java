package com.edu.grooming.dao;



import java.util.Set;

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
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userid;
	

	@NotBlank(message="First name Should not be null")
	@Pattern(message = "Invalid First Name", regexp = "^[A-Za-z]+$")
	@Column(name="userfirstname", length=50, nullable=false)
	private String  userfirstname;
	
	
	@NotBlank(message="Last name Should not be null")
	@Pattern(message = "Invalid Last Name", regexp = "^[A-Za-z]+$")
	@Column(name="userlastname",length=50)
	private String  userlastname;
	
	@NotBlank(message="Emailid Should not be null")
	@Email(message = "Invalid Email", regexp="^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z.]{2,5}")
	@Column(name = "useremail", unique = true,nullable=false)
	private String  useremail;

	
	@NotBlank(message="phone Number Should not be empty")
	@Pattern(message = "Invalid Phone Number", regexp = "^[6-9]\\d{9}$")
	@Column(name = "userphonenumber", unique = true,nullable = false)
	private String  userphonenumber;
	
	@Pattern(message = "Invalid Password", regexp ="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,20}$" )
	@Column(name="userpassword", length=20, nullable=false)
	private String  userpassword;
	
	@Column(nullable=false)
	private boolean userisDeleted;
	
	@JsonIgnore
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	private Set<Address> address;

	@JsonIgnore
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	private Set<Appointment> appointment;
	

	public User() {
		super();
	}

	public User(String userfirstname, String userlastname, String useremail, String userphonenumber,
			String userpassword) {
		super();
		this.userfirstname = userfirstname;
		this.userlastname = userlastname;
		this.useremail = useremail;
		this.userphonenumber = userphonenumber;
		this.userpassword = userpassword;
		this.userisDeleted = false;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getUserfirstname() {
		return userfirstname;
	}

	public void setUserfirstname(String userfirstname) {
		this.userfirstname = userfirstname;
	}

	public String getUserlastname() {
		return userlastname;
	}

	public void setUserlastname(String userlastname) {
		this.userlastname = userlastname;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public String getUserphonenumber() {
		return userphonenumber;
	}

	public void setUserphonenumber(String userphonenumber) {
		this.userphonenumber = userphonenumber;
	}

	public String getUserpassword() {
		return userpassword;
	}

	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	
	public boolean isUserisDeleted() {
		return userisDeleted;
	}

	public void setUserisDeleted(boolean userisDeleted) {
		this.userisDeleted = userisDeleted;
	}

	public Set<Address> getAddress() {
		return address;
	}

	public void setAddress(Set<Address> address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", userfirstname=" + userfirstname + ", userlastname=" + userlastname
				+ ", useremail=" + useremail + ", userphonenumber=" + userphonenumber + ", userpassword=" + userpassword
				+ ", userisDeleted="  + ", address=" + address + ", appointment=" + appointment + "]";
	}
}
