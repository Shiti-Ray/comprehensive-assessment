package com.hospital.controller;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.doReturn;

import java.util.Date;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.hospital.entity.Patient;
import com.hospital.repository.PatientRepository;

@SpringBootTest
class PatientRepositoryTests {

	@Autowired
	PatientRepository patientRepository;
	
	@MockBean
    PatientRepository repository;
	
	@Test
	void findById_Test() {
		Date date = new Date();
        Patient patient = new Patient(20011l, "Patient 1", "Doctor 1", date);
        doReturn(Optional.of(patient)).when(repository).findById(10011l);

        Optional<Patient> returnedPatient = patientRepository.findById(10011l);

        assertTrue(returnedPatient.isPresent());
    }
	
}
