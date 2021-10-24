package com.revature.foodatmyhoodrest.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.foodatmyhoodrest.model.Customer;
import com.revature.foodatmyhoodrest.repository.CustomerRepository;

@Service
public class CustomerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerService.class);

	@Autowired
	private CustomerRepository customerRepository;

	public void save(Customer customer) {
		customerRepository.save(customer);
	}
}
