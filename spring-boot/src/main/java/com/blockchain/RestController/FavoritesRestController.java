package com.blockchain.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.Favorite;
import com.blockchain.service.FavoriteService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/favorites")
public class FavoritesRestController {
	
	@Autowired
	FavoriteService service;
	
	@PostMapping
	public Favorite savePost(@RequestBody Favorite favorite) {
		return service.savePost(favorite);
	}
	
	@DeleteMapping("/remove/{id}")
	public void removePost(@PathVariable("id") Integer id) {
		service.removePost(id);
	}
}
