package com.cyc.cyc;

import javax.persistence.*;

@Entity
public class User {

  @Id
  private String DNI;

  private String name;
  private String lastName1;
  private String lastName2;

  @Column(unique=true, nullable=true)
  private String email;

  private String password;

  public User(String DNI, String name, String lastName1, String lastName2, String email, String password) {
    this.DNI = DNI;
    this.name = name;
    this.lastName1 = lastName1;
    this.lastName2 = lastName2;
    this.email = email;
    this.password = password;
  }

  String getDNI() {
	  return this.DNI;
  }
  
	public User(User user) {
		this.DNI = user.DNI;
	}

	public String getPassword() {
		return this.password;
	}

}
