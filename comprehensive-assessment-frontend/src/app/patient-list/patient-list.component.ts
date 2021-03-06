import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

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
