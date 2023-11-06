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

import com.blockchain.dao.FollowDAO;
import com.blockchain.model.Follow;
import com.blockchain.service.FollowService;
import com.fasterxml.jackson.databind.JsonNode;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/follow")
public class FollowRestController {
	
	@Autowired
	FollowService service;
	
	@GetMapping("/follower/{id}")
	public List<Follow> getFollowerById(@PathVariable("id") Integer id) {
		return service.getFollowerById(id);
	}
	
	@GetMapping("/following/{id}")
	public List<Follow> getFollowingById(@PathVariable("id") Integer id) {
		return service.getFollowingById(id);
	}
	
	@PostMapping
	public Follow followAction(@RequestBody Follow follow) {
		return service.followAction(follow);
	}
}
