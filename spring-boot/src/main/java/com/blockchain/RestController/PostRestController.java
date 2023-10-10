package com.blockchain.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.Post;
import com.blockchain.service.PostService;
import com.fasterxml.jackson.databind.JsonNode;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/post")
public class PostRestController {

	@Autowired
	PostService service;

	@PostMapping()
	public Post create(@RequestBody JsonNode postdata) {
		return service.create(postdata);
	}

}
