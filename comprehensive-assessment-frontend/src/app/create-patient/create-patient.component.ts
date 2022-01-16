import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctors: any;

  constructor(private doctorService: DoctorService, private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  goToPatientAdded() {
    this.router.navigate(['/patient-list']);
  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();
    this.goToPatientAdded();
  }

  private getDoctors() {
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    });
  }
}
