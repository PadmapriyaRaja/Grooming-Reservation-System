package com.edu.grooming.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import com.edu.grooming.dao.Appointment;
import com.edu.grooming.error.NotFoundException;


public interface AppointmentService {

	Appointment saveAppointment(Appointment appointment,String servicesid);

	List<Appointment> getAllAppointments();

	Appointment updateAppointmentUser(Integer userid, Integer appointmentId);

	Appointment updateAppointmentSalon(Integer salonid, Integer appointmentId);

	Appointment updateAppointmentStylist(Integer stylistid, Integer appointmentId);

	Appointment addServiceAppointment(Integer serviceid, Integer appointmentId) throws NotFoundException;

	Appointment getAppointmentByAppointmentId(Integer appointmentId);

	List<Appointment> getAppointmentByUserId(Integer userid);

	List<Appointment> deleteAppointmentByAppointmentId(Integer appointmentId) throws NotFoundException;

	List<Appointment> getAllAppointmentsBySalonId(Integer salonid);

	List<Appointment> checkStylistAvailability(String appointmentdate, Integer stylistid);

	Appointment updateBooking(Integer appointmentId, Appointment appointment);

	List<Appointment> getAllBookedAppointments(Integer userid);

	

}
