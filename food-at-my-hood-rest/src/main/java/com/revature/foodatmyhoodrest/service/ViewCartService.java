package com.revature.foodatmyhoodrest.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.foodatmyhoodrest.model.ViewCart;
import com.revature.foodatmyhoodrest.repository.ViewCartRepository;

@Service
public class ViewCartService {
	private static final Logger LOGGER = LoggerFactory.getLogger(ViewCartService.class);

	@Autowired
	private ViewCartRepository viewcartRepository;

	public List<ViewCart> getByName(String menuitem) {
		LOGGER.debug("MenuItem: {}", menuitem);
		return viewcartRepository.findByMenuItem(menuitem);
	}

}


	

