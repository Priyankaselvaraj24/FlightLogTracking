package com.example.demo.service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Aircraft;
import com.example.demo.model.FlightLog;
import com.example.demo.repository.MiniProjectRepository;
import com.example.demo.repository.aircraftRepository;

import jakarta.transaction.Transactional;



@Service
public class MiniProjectService {
	@Autowired
	private MiniProjectRepository miniProjectRepository;
	@Autowired
	private  aircraftRepository aRepository;
	
	public List<FlightLog> getLogs(){
		return miniProjectRepository.findAll();
	}
	public Optional<FlightLog> getLogById(Long id){
		return miniProjectRepository.findById(id);
	}
	@Transactional
	public FlightLog createFlightLog(FlightLog flightLog) {
		
		return miniProjectRepository.save(flightLog);
	}
	public List<Aircraft> getAircrafts(){
		return aRepository.findAll();
	}
	public Optional<Aircraft> getAircraftById(Integer id) {
		// TODO Auto-generated method stub
		return aRepository.findById(id);
		
	}



}
