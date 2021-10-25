package com.revature.foodatmyhoodrest.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.foodatmyhoodrest.model.ListMenuItems;
import com.revature.foodatmyhoodrest.repository.MenuItemsRepository;


@Service
public class MenuItemsService {
	  private static final Logger LOGGER = LoggerFactory.getLogger(MenuItemsService.class);
	  
	  @Autowired
	   private MenuItemsRepository listMenuItemsRepository;
	  
	  public List<ListMenuItems> list() {
	        LOGGER.info("Start");
	        return listMenuItemsRepository.findAll();
	    }

}
