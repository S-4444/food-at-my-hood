package com.revature.foodatmyhoodrest.model;

import java.awt.MenuItem;

//public class ViewCart {

//}


import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class ViewCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
	private int id;
    
    @Column(name = "menu")
	private String name;
    
    @Column(name = "quantity")
	private int quantity;
    
    @Column(name = "price")
	private int price;
    
      
    @ManyToOne
    @JoinColumn(name="food_id")      
	private  MenuItem menuItem;
  
    @ManyToOne
    @JoinColumn(name="customer_id")      
	

	
    
 
	
	
	

	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public MenuItem getMenuItem() {
		return menuItem;
	}

	public void setMenuItem(MenuItem menuItem) {
		this.menuItem = menuItem;
	}

	@Override
	public String toString() {
		return "ViewCart [id=" + id + ", name=" + name + ", quantity=" + quantity + ", price=" + price + ", menuItem="
				+ menuItem + "]";
	}

	
	
	

}
