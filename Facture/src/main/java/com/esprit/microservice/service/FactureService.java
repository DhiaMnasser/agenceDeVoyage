/*
 * Copyright (C) TALYS ™ - All Rights Reserved Unauthorized copying of this file, via any medium is
 * strictly prohibited Proprietary and confidential
 */
package com.esprit.microservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esprit.microservice.entity.Facture;
import com.esprit.microservice.repository.FactureRepository;

/**
 * {@link } class.
 *
 * @author Haddad
 * @since 0.1.0
 */
@Service
public class FactureService {
	@Autowired
	private FactureRepository factureRepository;

	public Facture addFacture(Facture a) {

		return factureRepository.save(a);

	}

	public List<Facture> getAllFacture() {

		return factureRepository.findAll();
	}
	
	public Facture getByIdFacture(int id) {
		Facture f = factureRepository.findById(id).get();

		return f;
	}


	public String deleteFacture(int id) {

		if (factureRepository.findById(id).isPresent()) {
			factureRepository.deleteById(id);
			return "facture supprimé";
		}
		else
			return " facture non supprimé";
	}

	public Facture updateFacture(int id, Facture a) {

		if (factureRepository.findById(id).isPresent()) {
			Facture existingFacture = factureRepository.findById(id).get();
			existingFacture.setDesignation(a.getDesignation());
			existingFacture.setPrixTotale(a.getPrixTotale());
			existingFacture.setPrixUnitaire(a.getPrixUnitaire());
			existingFacture.setQuantite(a.getQuantite());
			existingFacture.setTotale(a.getTotale());
			return factureRepository.save(existingFacture);
		}
		else
			return null;

	}

}
