package com.revature.ridesharingapp.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.foodatmyhoodrest.model.Customer;
import com.revature.foodatmyhoodrest.repository.CustomerRepository;

@Service
public class RiderRegService {

	private static final Logger LOGGER = LoggerFactory.getLogger(RiderRegService.class);

	@Autowired
	private CustomerRepository customerRepository;

	public void save(Customer customer) {
		customerRepository.save(customer);
	}

	public Customer CheckEmailAndPass(String email, String password) {
		return customerRepository.findByEmailAndPassword(email, password);

	}
}
