package com.esprit.microservice.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * {@link } class.
 *
 * @author hajer
 * @since 0.1.0
 */
@Entity

public class Client implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3090249096008711398L;
	@Id
	@GeneratedValue
	private int id ;
	private String nom, prenom, tel, numpasseport;

	/**
	 * @return the id
	 */
	public int getId() {

		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {

		this.id = id;
	}

	/**
	 * @return the nom
	 */
	public String getNom() {

		return nom;
	}

	/**
	 * @param nom the nom to set
	 */
	public void setNom(String nom) {

		this.nom = nom;
	}

	/**
	 * @return the pays
	 */
	public String getPrenom() {

		return prenom;
	}

	/**
	 * @param pays the pays to set
	 */
	public void setPrenom(String prenom) {

		this.prenom = prenom;
	}

	/**
	 * @return the ville
	 */
	public String getTel() {

		return tel;
	}

	/**
	 * @param ville the ville to set
	 */
	public void setTel(String tel) {

		this.tel = tel;
	}
	public String getNumpasseport() {

		return numpasseport;
	}

	/**
	 * @param ville the ville to set
	 */
	public void setNumpasseport(String numpasseport) {

		this.numpasseport = numpasseport;
	}

	/**
	 * @param id
	 * @param nom
	 * @param prenom
	 * @param tel
	 * @param numpasseport
	 */
	public Client(int id, String nom, String prenom, String tel , String numpasseport) {

		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.tel = tel;
		this.numpasseport = numpasseport;
	}

	public Client() {

		super();
	}

}
