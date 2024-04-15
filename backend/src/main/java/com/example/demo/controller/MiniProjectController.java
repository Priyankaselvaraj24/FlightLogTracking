package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.swing.plaf.synth.SynthOptionPaneUI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Aircraft;
import com.example.demo.model.FlightLog;
import com.example.demo.service.MiniProjectService;



@RestController
@RequestMapping("/flightlogs")
@CrossOrigin(origins = "*")

public class MiniProjectController {
	@Autowired
	private MiniProjectService miniProjectService;
	@GetMapping
	public List<FlightLog> getLogs(){
		return miniProjectService.getLogs();
	}
	@GetMapping("/{id}")
	public Optional<FlightLog> getLogById(@PathVariable Long id) {
		return miniProjectService.getLogById(id);
	}
	@PostMapping
	public FlightLog createFlightLog(@RequestBody FlightLog flightLog) {
		return miniProjectService.createFlightLog(flightLog);
	}



}
