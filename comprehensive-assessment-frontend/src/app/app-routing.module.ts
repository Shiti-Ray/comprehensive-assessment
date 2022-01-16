import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PatientAddedComponent } from './patient-added/patient-added.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';

const routes: Routes = [
  {path: 'hospital', component: HospitalComponent},
  {path: 'doctors', component: DoctorListComponent},
  {path: 'patients', component: PatientListComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: 'patient-list', component: PatientAddedComponent},
  {path: 'patient-login', component: PatientLoginComponent},
  {path: '', redirectTo: 'hospital', pathMatch: 'full'},
  {path: 'doctor-details/:id', component: DoctorDetailsComponent},
  {path: 'patient-details/:id', component: PatientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
