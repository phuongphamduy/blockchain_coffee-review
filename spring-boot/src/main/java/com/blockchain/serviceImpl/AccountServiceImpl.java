package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.AccountDAO;
import com.blockchain.model.Account;
import com.blockchain.service.AccountService;
import com.fasterxml.jackson.databind.JsonNode;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	AccountDAO dao;
	
	@Override
	public List<Account> getAll() {
		return dao.findAll();
	}

	@Override
	public Account login(JsonNode data) {
		Account account = dao.findByEmail(data.findValue("email").asText());
		if(account == null) {
			return null;
		}
		if(account.getPassword().equals(data.findValue("password").asText())) {
			System.out.println("đúng");
			return account;
		}
		return null;
		
	}

}
