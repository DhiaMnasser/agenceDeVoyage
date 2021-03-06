/*
 * Copyright (C) TALYS ™ - All Rights Reserved Unauthorized copying of this file, via any medium is
 * strictly prohibited Proprietary and confidential
 */
package com.esprit.microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservice.entity.Facture;

/**
 * {@link } class.
 *
 * @author Haddad
 * @since 0.1.0
 */
@Repository
public interface FactureRepository extends JpaRepository<Facture, Integer> {

}
