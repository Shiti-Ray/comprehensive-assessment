import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { PatientAddedComponent } from './patient-added/patient-added.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    PatientListComponent,
    CreatePatientComponent,
    PatientAddedComponent,
    PatientLoginComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
