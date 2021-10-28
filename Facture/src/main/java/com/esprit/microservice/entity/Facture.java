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
 * @author Haddad
 * @since 0.1.0
 */
@Entity

public class Facture implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3090249096008711398L;
	@Id
	@GeneratedValue
	private int id;
	
	private int quantite, totale;
	private float prixUnitaire, prixTotale;
	private String designation;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public int getTotale() {
		return totale;
	}
	public void setTotale(int totale) {
		this.totale = totale;
	}
	public float getPrixUnitaire() {
		return prixUnitaire;
	}
	public void setPrixUnitaire(float prixUnitaire) {
		this.prixUnitaire = prixUnitaire;
	}
	public float getPrixTotale() {
		return prixTotale;
	}
	public void setPrixTotale(float prixTotale) {
		this.prixTotale = prixTotale;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Facture(int id, int quantite, int totale, float prixUnitaire, float prixTotale, String designation) {
		super();
		this.id = id;
		this.quantite = quantite;
		this.totale = totale;
		this.prixUnitaire = prixUnitaire;
		this.prixTotale = prixTotale;
		this.designation = designation;
	}
	public Facture() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

}
