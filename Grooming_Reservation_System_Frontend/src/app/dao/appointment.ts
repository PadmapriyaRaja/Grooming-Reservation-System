export class Appointment {
  
        constructor(
            public appointmentId:number,
            public appointmentDate: Date,
            public appointmentTime: string,
            public appointmentStatus: string,
            public appointmentType: string,
            public salonid,
            public stylistid,
            public userid,
            public servicesid
    ){}
}
