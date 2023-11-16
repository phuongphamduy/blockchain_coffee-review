package com.blockchain.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.PricePost;
import com.blockchain.service.PricePostService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/pricepost")
public class PricePostRestController {
	
	@Autowired
	PricePostService service;
	
	@GetMapping
	public List<PricePost> getAll() {
		return service.getAll();
	}
	
}
