package com.revature.foodatmyhoodrest.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.foodatmyhoodrest.model.Customer;
import com.revature.foodatmyhoodrest.service.CustomerService;

@RestController
@RequestMapping("/authenticate")
public class AuthenticationController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerController.class);

	@Autowired
	private CustomerService customerService;

	@PostMapping
	public ResponseEntity<Customer> create(@RequestBody Customer credentials) {
		LOGGER.debug("Customer: {}", credentials);
		Customer customer= customerService.CheckEmailAndPass(credentials.getEmail(), credentials.getPassword());
		if(customer == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		return ResponseEntity.status(HttpStatus.OK).body(customer);
		                     
	}
	
	
}
 
