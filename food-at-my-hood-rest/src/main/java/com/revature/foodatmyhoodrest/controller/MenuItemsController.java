package com.revature.foodatmyhoodrest.controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.foodatmyhoodrest.model.ListMenuItems;
import com.revature.foodatmyhoodrest.service.MenuItemsService;


@RestController
@RequestMapping("/menu-items")
public class MenuItemsController {
	 private static final Logger LOGGER = LoggerFactory.getLogger(MenuItemsController.class);
	 
	  @Autowired
	    private MenuItemsService listMenuItemsService;
	  
	  
	  public MenuItemsController() {
		LOGGER.info("menu controller");
	}


	@GetMapping
	    public List<ListMenuItems> getList() {
	        return listMenuItemsService.list();
	    }
	  
	    

}
