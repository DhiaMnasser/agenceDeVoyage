
package com.esprit.microservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.microservice.entity.Facture;
import com.esprit.microservice.service.FactureService;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/facture")
public class FactureController {
	private String title = "Hello,I'm the facture Microservice";
	@Autowired
	FactureService factureService;

	@RequestMapping("/hello")
	public String sayHello() {

		System.out.println(title);
		return title;
	}

	@PostMapping("/add")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Facture> createFacture(@RequestBody Facture a) {

		return new ResponseEntity<>(factureService.addFacture(a), HttpStatus.OK);
	}

	@GetMapping("/list")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<Facture>> getFactures() {

		return new ResponseEntity<>(factureService.getAllFacture(), HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Facture> getByIdReservation(@PathVariable(value = "id") int id) {

		return new ResponseEntity<>(factureService.getByIdFacture(id), HttpStatus.OK);
	}

	@PutMapping("/edit/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Facture updateFacture(@PathVariable(value = "id") int id, @RequestBody Facture a) {

		return factureService.updateFacture(id, a);
	}

	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> deleteFacture(@PathVariable(value = "id") int id) {

		return new ResponseEntity<String>(factureService.deleteFacture(id), HttpStatus.OK);
	}

}
