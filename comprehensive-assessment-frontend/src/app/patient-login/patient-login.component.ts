import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor(private router: Router) { }

  patient: Patient = new Patient();

  ngOnInit(): void {
  }

  patientDetails(id: number | any) {
    this.router.navigate(['patient-details', id]);
  }

}
