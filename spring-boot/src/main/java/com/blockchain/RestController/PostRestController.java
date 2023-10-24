package com.blockchain.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.Post;
import com.blockchain.service.PostService;
import com.fasterxml.jackson.databind.JsonNode;

import jakarta.websocket.server.PathParam;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/post")
public class PostRestController {

	@Autowired
	PostService service;
	
	@GetMapping
	public List<Post> getAll() {
		return service.getPostConfirm(true);
	}
	
	@GetMapping("/notConfirm")
	public List<Post> getPostNotConfirm() {
		return service.getPostConfirm(false);
	}
	
	@GetMapping("/{id}")
	public Post getById(@PathVariable Integer id) {
		return service.getById(id);
	}
	
	@GetMapping("get/places")
	public List<Post> getPostByName(@RequestParam("name") String name) {
		return service.getByName(name);
	}

	@PostMapping()
	public Post create(@RequestBody JsonNode postdata) {
		return service.create(postdata);
	}

}
