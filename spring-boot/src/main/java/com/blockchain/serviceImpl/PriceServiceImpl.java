package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.PriceDAO;
import com.blockchain.model.Price;
import com.blockchain.service.PriceService;

@Service
public class PriceServiceImpl implements PriceService {
	@Autowired
	PriceDAO pdao;

	@Override
	public List<Price> getAll() {
		return pdao.findAll();
	}
	
	
}
