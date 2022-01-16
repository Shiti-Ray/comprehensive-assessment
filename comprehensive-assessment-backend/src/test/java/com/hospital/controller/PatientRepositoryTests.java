package com.hospital.controller;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hospital.entity.Patient;
import com.hospital.repository.PatientRepository;

@SpringBootTest
class PatientRepositoryTests {

	@Autowired
	PatientRepository patientRepository;
	
	@Test
	void findById_Test() {
		Optional<Patient> patient = patientRepository.findById(10001L);
		assertTrue(patient.isPresent(), "John Doe");
	}
	
}
