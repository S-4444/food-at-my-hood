package com.revature.ridesharingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.revature.foodatmyhoodrest.model.Customer;


@Repository
public interface RiderRepository  extends JpaRepository<Customer, Integer>  {
     
}
