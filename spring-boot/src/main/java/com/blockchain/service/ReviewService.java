package com.blockchain.service;

import java.util.List;

import com.blockchain.model.Review;
import com.fasterxml.jackson.databind.JsonNode;

public interface ReviewService {

	Review postComment(JsonNode review);

	List<Object[]> getReviewByPostId(Integer id);

	void deleteComment(Integer id);

}
