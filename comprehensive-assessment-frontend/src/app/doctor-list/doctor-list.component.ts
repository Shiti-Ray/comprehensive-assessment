import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: any;

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors() {
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    });
  }

  doctorDetails(id: number | any) {
    this.router.navigate(['doctor-details', id]);
  }

}
