package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FlightLog;
import java.util.List;
import java.util.Optional;


@Repository
public interface MiniProjectRepository extends JpaRepository<FlightLog, Long>{
	public Optional<FlightLog> findById(Long id);
}
