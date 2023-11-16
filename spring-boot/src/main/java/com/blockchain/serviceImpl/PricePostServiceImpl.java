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

	@Override
	public List<PricePost> getByPostId(Integer id) {
		return dao.getByPostId(id);
	}

	@Override
	public List<Object[]> getRequestPrice() {
		return dao.getRequestPrice();
	}

	@Override
	public void updateSend(JsonNode send) {
		PricePost pp = dao.findById(send.get("id").asInt()).get();
		pp.setIssend(send.get("issend").asBoolean());
		dao.save(pp);
	}

	@Override
	public void delete(Integer id) {
		dao.deleteById(id);
		
	}

}
