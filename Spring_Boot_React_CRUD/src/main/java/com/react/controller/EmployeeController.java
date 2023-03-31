package com.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.react.exception.ResourceNotFoundException;
import com.react.model.Employee;
import com.react.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	// get all employees
	@GetMapping("getAllEmployees")
	public List<Employee> getAllEmployees() {
		return empRepo.findAll();
	}
	
	
	// create employee rest api
	@PostMapping("/addEmployee")
	public Employee createEmployee(@RequestBody Employee employee) {
		return empRepo.save(employee);
	}
	
//	find employee by id
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	
	// update employee rest api
	@GetMapping("/updateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails) {
		Employee employee = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		Employee updatedEmployee = empRepo.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

}
