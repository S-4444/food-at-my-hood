package com.revature.foodatmyhoodrest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.foodatmyhoodrest.model.ViewCart;
import com.revature.foodatmyhoodrest.service.ViewCartService;

@RestController
@RequestMapping("/viewcart")
public class ViewCartController {
	
    private static final Logger LOGGER = LoggerFactory.getLogger(ViewCartController.class);
    
    @Autowired
    private ViewCartService viewcartService;
    
    @GetMapping
    public List<ViewCart> findByName(@RequestParam("name") String name) {
    	LOGGER.debug("Name: {}", name);
    	return viewcartService.getByName(name);
    }
}