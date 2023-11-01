package com.blockchain.RestController;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.dao.ReviewDAO;
import com.blockchain.model.Review;
import com.blockchain.service.ReviewService;
import com.fasterxml.jackson.databind.JsonNode;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/review")
public class ReviewRestController {
	
	@Autowired
	ReviewService service;
	
	@Autowired
	ReviewDAO rdao;
	
	@GetMapping("/{id}")
	@ResponseBody
	public List<Object[]> getListReview(@PathVariable("id") Integer id) {
		return service.getReviewByPostId(id);
	}
	
	@PostMapping
	public Review postComment(@RequestBody JsonNode review) {
		return service.postComment(review);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteComment(@PathVariable("id") Integer id) {
		service.deleteComment(id);
	}
}
