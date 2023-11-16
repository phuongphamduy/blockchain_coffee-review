package com.blockchain.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.PricePost;
import com.blockchain.service.PricePostService;
import com.fasterxml.jackson.databind.JsonNode;

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
	
	@GetMapping("/byPost/{id}")
	public List<PricePost> getPricePostByPostId(@PathVariable("id") Integer id) {
		return service.getByPostId(id);
	}
	
	@PostMapping("/request")
	public PricePost request(@RequestBody JsonNode pp) {
		return service.request(pp);
	}
	
}
