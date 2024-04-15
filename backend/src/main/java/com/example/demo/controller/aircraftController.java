package com.example.demo.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Aircraft;
import com.example.demo.service.MiniProjectService;

@RestController
@RequestMapping("/aircrafts")
@CrossOrigin(origins = "*")

public class aircraftController {
	@Autowired
	private MiniProjectService miniProjectService;
	@GetMapping
	public List<Aircraft> getAircrafts(){
		return miniProjectService.getAircrafts();
	}
	
	@GetMapping("/{id}")
	public Optional<Aircraft> getAircraftById(@PathVariable Integer id) {
		System.out.println(id);
		return miniProjectService.getAircraftById(id);
	}
}
