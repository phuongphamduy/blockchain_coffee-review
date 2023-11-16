package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.PricePostDAO;
import com.blockchain.model.PricePost;
import com.blockchain.service.PricePostService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PricePostServiceImpl implements PricePostService {
	
	@Autowired
	PricePostDAO dao;

	@Override
	public List<PricePost> getAll() {
		return dao.findAll();
	}

	@Override
	public PricePost request(JsonNode pp) {
		ObjectMapper mapper = new ObjectMapper();
		PricePost pricepost = mapper.convertValue(pp, PricePost.class);
		return dao.save(pricepost);
	}

}
