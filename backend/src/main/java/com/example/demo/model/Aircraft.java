package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Aircraft {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "aircraft_id")
	private Integer id;
	
	private String name;
	
	private Long serial_number;
	public Aircraft() {}

	public Aircraft(Integer id, String name, Long serial_number) {
		super();
		this.id = id;
		this.name = name;
		this.serial_number = serial_number;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getSerial_number() {
		return serial_number;
	}

	public void setSerial_number(Long serial_number) {
		this.serial_number = serial_number;
	}

	@Override
	public String toString() {
		return "Aircraft [id=" + id + ", name=" + name + ", serial_number=" + serial_number + "]";
	}
	
	

}
