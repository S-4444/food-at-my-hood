package com.revature.foodatmyhoodrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.revature.foodatmyhoodrest.model.ListMenuItems;

public interface ListMenuItemsRepository {

	@Repository
	public interface ListmenuItemsRepositroy extends JpaRepository<ListMenuItems, Integer> {

	}

}
