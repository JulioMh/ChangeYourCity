package com.cyc.cyc;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
  User findByDNI(String DNI);
}