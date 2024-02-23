package com.edu.grooming.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.edu.grooming.dao.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{

	@Transactional
	@Modifying
	@Query(value="delete from appointment where userid=?1",nativeQuery=true)
	void deleteOrderByUserId(Integer userid);

	@Query(value="select * from appointment where userid=?1 order by appointment_id desc ",nativeQuery = true)
	List<Appointment> getAppointmentByUserId(Integer userid);

	@Query(value="select * from appointment where salonid=?1",nativeQuery=true)
	List<Appointment> findBySalonId(Integer salonid);

	@Query(value="select * from appointment where appointment_date=? and stylistid=? and appointment_status='Booked'",nativeQuery=true)
	List<Appointment> checkStylistAvailability(LocalDate appointmentDate, Integer stylistid);

	@Transactional
	@Modifying
	@Query(value="update appointment set appointment_status='Booked' where appointment_id=?",nativeQuery=true)
	Appointment updateBooking(Integer appointmentId);

	@Query(value="select * from appointment where userid=?1 and appointment_status='Booked'",nativeQuery = true)
	List<Appointment> getAllBookedAppointments(Integer userid);

}
