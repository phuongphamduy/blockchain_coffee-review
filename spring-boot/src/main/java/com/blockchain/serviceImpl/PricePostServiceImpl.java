package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.PricePostDAO;
import com.blockchain.model.PricePost;
import com.blockchain.service.PricePostService;

@Service
public class PricePostServiceImpl implements PricePostService {
	
	@Autowired
	PricePostDAO dao;

	@Override
	public List<PricePost> getAll() {
		return dao.findAll();
	}

}
