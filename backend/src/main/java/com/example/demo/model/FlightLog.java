package com.example.demo.model;


import java.util.Date;
import java.util.Optional;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;



@Entity
@Table(name="Flight_Log")
public class FlightLog {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private Long id;
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name = "aircraft_id")
	private Aircraft aircraft;
	@Column(name="arrival_date")
	private Date date;
	@Column(name="departure")
	private String departure;
	@Column(name="destination")
	private String destination;
	
	
	
	public FlightLog() {
		super();
	}



	public FlightLog(Long id, Aircraft aircraft, Date date, String departure, String destination) {
		super();
		this.id = id;
		this.aircraft = aircraft;
		this.date = date;
		this.departure = departure;
		this.destination = destination;
	}






	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public Aircraft getAircraft() {
		return aircraft;
	}



	public void setAircraft(Aircraft aircraft) {
		this.aircraft = aircraft;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public String getDeparture() {
		return departure;
	}



	public void setDeparture(String departure) {
		this.departure = departure;
	}



	public String getDestination() {
		return destination;
	}



	public void setDestination(String destination) {
		this.destination = destination;
	}



	@Override
	public String toString() {
		return "FlightLog [id=" + id + ", aircraft=" + aircraft + ", date=" + date + ", departure=" + departure
				+ ", destination=" + destination + "]";
	}



	
	
	
}
