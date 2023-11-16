package com.blockchain.service;

import java.util.List;

import com.blockchain.model.PricePost;
import com.fasterxml.jackson.databind.JsonNode;

public interface PricePostService {

	List<PricePost> getAll();

	PricePost request(JsonNode pp);

	List<PricePost> getByPostId(Integer id);

}
