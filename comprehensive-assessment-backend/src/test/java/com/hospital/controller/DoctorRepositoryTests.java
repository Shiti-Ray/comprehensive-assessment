package com.hospital.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.doReturn;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.hospital.entity.Doctor;
import com.hospital.repository.DoctorRepository;

@SpringBootTest
class DoctorRepositoryTests {

	@Autowired
	DoctorRepository doctorRepository;
	
	@MockBean
    DoctorRepository repository;
	
	@Test
	void findById_Test() {
        Doctor doctor = new Doctor(10011l, "Doctor 1", 99, "Gender 1", "Specialist 1");
        doReturn(Optional.of(doctor)).when(repository).findById(10011l);

        Optional<Doctor> returnedDoctor = doctorRepository.findById(10011l);

        assertTrue(returnedDoctor.isPresent());
    }
	
	@Test
	void getAllDoctors_test() {
        Doctor doctor1 = new Doctor(10011l, "Doctor 1", 99, "Gender 1", "Specialist 1");
        Doctor doctor2 = new Doctor(10012l, "Doctor 2", 99, "Gender 2", "Specialist 2");
        doReturn(Arrays.asList(doctor1, doctor2)).when(repository).findAll();

        List<Doctor> doctors = doctorRepository.findAll();

        assertEquals(2, doctors.size());
    }

}
