package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Aircraft;
@Repository
public interface aircraftRepository extends JpaRepository<Aircraft, Integer> {

}
