package com.revature.foodatmyhoodrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.revature.foodatmyhoodrest.model.ListMenuItems;


	@Repository
	public interface ListMenuItemsRepository extends JpaRepository<ListMenuItems, Integer> {

	}


