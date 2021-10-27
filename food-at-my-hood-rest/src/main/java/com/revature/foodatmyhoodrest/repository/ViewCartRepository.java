package com.revature.foodatmyhoodrest.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.foodatmyhoodrest.model.ViewCart;

@Repository
public interface ViewCartRepository extends JpaRepository<ViewCart, Integer> {
	@Query("select v from ViewCart v inner join fetch v.menu left outer join fetch v. where e.name = :name")

	List<ViewCart> findByName(String name);

	List<com.revature.foodatmyhoodrest.model.ViewCart> findByMenuItem(String menuitem);
	
	
}



