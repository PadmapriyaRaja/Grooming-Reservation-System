package com.edu.grooming.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.Appointment;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.service.AppointmentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@PostMapping("/saveAppointment/{userid}/{salonid}/{stylistid}/{addressid}/{servicesidstr}") //http://localhost:8990/saveAppointment
	public Appointment saveAppointment(@RequestBody Appointment appointment,@PathVariable("userid") Integer userid,
			@PathVariable("salonid") Integer salonid,
			@PathVariable("stylistid") Integer stylistid,@PathVariable("addressid") Integer addressid,@PathVariable("servicesidstr") String servicesidstr) {
		System.out.println(appointment.getAppointmentGrandTotal());
		System.out.println(servicesidstr);
		//Appointment appointment1=appointmentService.saveAppointment(appointment,servicesid);
		Appointment appointment1=appointmentService.saveAppointment(appointment,servicesidstr);
		Appointment appointment2=appointmentService.updateAppointmentUser(userid,appointment1.getAppointmentId());
		appointment2=appointmentService.updateAppointmentAddress(addressid, appointment1.getAppointmentId());
		appointment2=appointmentService.updateAppointmentSalon(salonid,appointment1.getAppointmentId());
		//appointment2=appointmentService.updateAppointmentService(serviceid,appointment1.getAppointmentId());
		appointment2=appointmentService.updateAppointmentStylist(stylistid,appointment1.getAppointmentId());
	
		return appointment2 ;
	}
	
	@GetMapping("/checkStylistAvailability/{appointmentdate}/{stylistid}")
	public List<Appointment> checkStylistAvailability(@PathVariable("appointmentdate") String appointmentdate ,@PathVariable("stylistid") Integer stylistid){
		return appointmentService.checkStylistAvailability(appointmentdate,stylistid);
	}
	
	@GetMapping("/getAppointmentByAppointmentId/{appointmentid}")
	public Appointment getAppointmentByAppointmentId(@PathVariable("appointmentid") Integer appointmentId) {
		return appointmentService.getAppointmentByAppointmentId(appointmentId);
	}
	
	@GetMapping("/getAppointmentByUserId/{userid}")
	public List<Appointment> getAppointmentByUserId(@PathVariable("userid") Integer userid){
		return appointmentService.getAppointmentByUserId(userid);
	}
	
	@DeleteMapping("/deleteAppointmentByAppointmentId/{appointmentid}")
	public List<Appointment> deleteAppointmentByAppointmentId(@PathVariable("appointmentid") Integer appointmentId) throws NotFoundException{
		return appointmentService.deleteAppointmentByAppointmentId(appointmentId);
		
	}
	
	@GetMapping("/getAllAppointments") //http://localhost:8990/getAllAppointments
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
	
	@GetMapping("/getAllBookedAppointments/{userid}")
	public List<Appointment> getAllBookedAppointments(@PathVariable("userid")Integer userid) {
		return appointmentService.getAllBookedAppointments(userid);
	}
	
	@GetMapping("/getAllAppointmentsBySalonId/{salonid}")
	public List<Appointment> getAllAppointmentsBySalonId(@PathVariable("salonid") Integer salonid){
		return appointmentService.getAllAppointmentsBySalonId(salonid);
	}
	
	@PutMapping("/updateAppointmentUser/{userid}/{appointmentid}")//http://localhost:8990/updateAppointmentUser/{userid}/{appointmentid}
	public Appointment updateAppointmentUser(@PathVariable("userid") Integer userid,@PathVariable("appointmentid") Integer appointmentId) {
		return appointmentService.updateAppointmentUser(userid,appointmentId);	
	}
	
	@PutMapping("/updateAppointmentSalon/{salonid}/{appointmentid}")//http://localhost:8990/updateAppointmentSalon/{salonid}/{appointmentid}
	public Appointment updateAppointmentSalon(@PathVariable("salonid") Integer salonid,@PathVariable("appointmentid") Integer appointmentId) {
		return appointmentService.updateAppointmentSalon(salonid,appointmentId);
	}
	
	@PutMapping("/updateAppointmentStylist/{stylistid}/{appointmentid}")//http://localhost:8990/updateAppointmentStylist/{stylistid}/{appointmentid}
	public Appointment updateAppointmentStylist(@PathVariable("stylistid") Integer stylistid,@PathVariable("appointmentid") Integer appointmentId) {
		return appointmentService.updateAppointmentStylist(stylistid,appointmentId);
	}
	
	@PutMapping("/updateAppointmentAddress/{addressid}/{appointmentid}")//http://localhost:8990/updateAppointmentAddress/{addressid}/{appointmentid}
	public Appointment updateAppointmentAddress(@PathVariable("addressid") Integer addressid,@PathVariable("appointmentid") Integer appointmentId) {
		return appointmentService.updateAppointmentAddress(addressid,appointmentId);
	}
	
	@PutMapping("/addServiceAppointment/{serviceid}/{appointmentid}")//http://localhost:8990/updateAppointmentService/{serviceid}/{appointmentid}
	public Appointment addServiceAppointment(@PathVariable("serviceid") Integer serviceid,@PathVariable("appointmentid") Integer appointmentId) throws NotFoundException {
		System.out.println("addservice");
		return appointmentService.addServiceAppointment(serviceid,appointmentId);
	}
	
	@PutMapping("/updateBookingByAppointmentId/{appointmentid}")
	public Appointment updateBooking(@PathVariable("appointmentid") Integer appointmentId,@RequestBody Appointment appointment) throws NotFoundException {
		System.out.println("update booking sts");
		return appointmentService.updateBooking(appointmentId,appointment);
	}
	
	@PutMapping("/updateCancelByAppointmentId/{appointmentid}")
	public Appointment updateCancelByAppointmentId(@PathVariable("appointmentid") Integer appointmentId,@RequestBody Appointment appointment) throws NotFoundException {
		System.out.println("update booking sts");
		return appointmentService.updateCancelByAppointmentId(appointmentId,appointment);
	}
}