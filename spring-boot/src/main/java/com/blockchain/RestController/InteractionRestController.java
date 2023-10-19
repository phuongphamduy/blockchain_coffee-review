package com.blockchain.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.Interaction;
import com.blockchain.service.InteractionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/interact")
public class InteractionRestController {
	
	@Autowired
	InteractionService service;
	
	@PostMapping
	public Interaction likeAndDislike(@RequestBody Interaction interaction) {
		return service.likedislike(interaction);
	}
	
	@DeleteMapping("/removeLike/{id}")
	public void removeLike(@PathVariable("id") Integer id) {
		service.removeLike(id);
	}
}
