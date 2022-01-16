import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-added',
  templateUrl: './patient-added.component.html',
  styleUrls: ['./patient-added.component.css']
})
export class PatientAddedComponent implements OnInit {

  patients: Patient[] | any;

  constructor(private patientSerivce: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients() {
    this.patientSerivce.getPatientList().subscribe(data => {
      this.patients = data;
    })
  }

}
