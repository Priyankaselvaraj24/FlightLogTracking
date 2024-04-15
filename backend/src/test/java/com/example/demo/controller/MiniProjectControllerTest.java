package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;

import com.example.demo.model.Aircraft;
import com.example.demo.model.FlightLog;
import com.example.demo.service.MiniProjectService;

public class MiniProjectControllerTest {
	    @Test
	    public void testCreateFlightLog() {
	        Aircraft aircraft = new Aircraft();
	        Date date = new Date();
	        String departure = "chennai";
	        String destination = "madurai";

	        FlightLog flightLog = new FlightLog(null, aircraft, date, departure, destination);

	        assertNotNull(flightLog);
	        assertEquals(aircraft, flightLog.getAircraft());
	        assertEquals(date, flightLog.getDate());
	        assertEquals(departure, flightLog.getDeparture());
	        assertEquals(destination, flightLog.getDestination());
	    }

	    @Test
	    public void testRetrieveAircraftFromFlightLog() {
	        Aircraft aircraft = new Aircraft();
	        FlightLog flightLog = new FlightLog(null, aircraft, new Date(), "Airport A", "Airport B");

	        assertEquals(aircraft, flightLog.getAircraft());
	    }

	    @Test
	    public void testSetDeparture() {
	        String departure = "London";
	        FlightLog flightLog = new FlightLog();
	        flightLog.setDeparture(departure);

	        assertEquals(departure, flightLog.getDeparture());
	    }

	    @Test
	    public void testSetDestination() {
	        String destination = "Airport B";
	        String destination1 = "Airport B";

	        FlightLog flightLog = new FlightLog();
	        flightLog.setDestination(destination1);

	        assertEquals(destination, flightLog.getDestination());
	    }

	    @Test
	    public void testSetDate() {
	        Date date = new Date();
	        FlightLog flightLog = new FlightLog();
	        flightLog.setDate(date);

	        assertEquals(date, flightLog.getDate());
	    }

	    
	    
	    @Test
	    public void testFlightLogToString() {
	        Aircraft aircraft = new Aircraft();
	        Date date = new Date();
	        String departure = "Airport A";
	        String destination = "Airport B";

	        FlightLog flightLog = new FlightLog(null, aircraft, date, departure, destination);

	        String expectedToString = "FlightLog [id=null, aircraft=" + aircraft.toString() + ", date=" + date.toString()
	                + ", departure=" + departure + ", destination=" + destination + "]";

	        assertEquals(expectedToString, flightLog.toString());
	    }

	    @Test
	    public void testNullAircraftHandling() {
	        FlightLog flightLog = new FlightLog();
	        assertNull(flightLog.getAircraft());
	    }
	}


