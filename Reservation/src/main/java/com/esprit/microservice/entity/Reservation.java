/*
 * Copyright (C) TALYS ™ - All Rights Reserved Unauthorized copying of this file, via any medium is
 * strictly prohibited Proprietary and confidential
 */
package com.esprit.microservice.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * {@link } class.
 *
 * @author hp
 * @since 0.1.0
 */
@Entity

public class Reservation implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3090249096008711398L;
	@Id
	@GeneratedValue
	private int id;
	private int duree;
	private String dateReservation, dateArrive;
	
	
	
	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public int getDuree() {
		return duree;
	}



	public void setDuree(int duree) {
		this.duree = duree;
	}



	public String getDateReservation() {
		return dateReservation;
	}



	public void setDateReservation(String dateReservation) {
		this.dateReservation = dateReservation;
	}



	public String getDateArrive() {
		return dateArrive;
	}



	public void setDateArrive(String dateArrive) {
		this.dateArrive = dateArrive;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public Reservation(int id, int duree, String dateReservation, String dateArrive) {
		super();
		this.id = id;
		this.duree = duree;
		this.dateReservation = dateReservation;
		this.dateArrive = dateArrive;
	}



	public Reservation() {

		super();
	}

}
