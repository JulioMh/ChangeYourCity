/*
 * Copyright 2002-2013 the original author o
 */
package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//signed up users are saved in this entity
@Entity
public class User {
	@Id

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private String lastName1;
	private String lastName2;

	@Column(unique = true, nullable = false)
	private String email;

	private String password;
	private String municipality;

	public User() {
	}

	public User(User user) {
		this.id = user.id;
		this.name = user.name;
		this.lastName1 = user.lastName1;
		this.lastName2 = user.lastName2;
		this.email = user.email;
		this.password = user.password;
		this.municipality = user.municipality;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName1() {
		return lastName1;
	}

	public void setLastName1(String lastName1) {
		this.lastName1 = lastName1;
	}

	public String getLastName2() {
		return lastName2;
	}

	public void setLastName2(String lastName2) {
		this.lastName2 = lastName2;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMunicipality() {
		return municipality;
	}

	public void setMunicipality(String municipality) {
		this.municipality = municipality;
	}
}