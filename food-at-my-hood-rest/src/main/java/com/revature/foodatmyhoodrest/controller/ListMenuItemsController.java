package com.revature.foodatmyhoodrest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.foodatmyhoodrest.model.ListMenuItems;
import com.revature.foodatmyhoodrest.service.ListMenuItemsService;


@RestController
@RequestMapping("/listMenuItems")
public class ListMenuItemsController {
	 private static final Logger LOGGER = LoggerFactory.getLogger(ListMenuItemsController.class);
	 
	  @Autowired
	    private ListMenuItemsService listMenuItemsService;
	  
	  @GetMapping
	    public List<ListMenuItems> getDepartmentList() {
	        return listMenuItemsService.list();
	    }
	    

}
