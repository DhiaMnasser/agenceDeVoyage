package com.esprit.microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservice.entity.Client;

/**
 * {@link } class.
 *
 *
 * @since 0.1.0
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
