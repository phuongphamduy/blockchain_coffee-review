package com.blockchain.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.Price;
import com.blockchain.service.PriceService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/price")
public class PriceRestController {
	
	@Autowired
	PriceService service;
	
	@GetMapping
	public List<Price> getAll() {
		return service.getAll();
	}
}
