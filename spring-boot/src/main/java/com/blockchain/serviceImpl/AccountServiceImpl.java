package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.AccountDAO;
import com.blockchain.model.Account;
import com.blockchain.service.AccountService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

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
			return account;
		}
		return null;
		
	}

	@Override
	public Account signUp(Account acc) {
		System.out.println(acc.getFullname());
		Account account = dao.save(acc);
		return account;
	}

	@Override
	public Account giveAdmin(JsonNode acc) {
		Account account = dao.findById(acc.get("id").asInt()).get();
		account.setIsadmin(true);
		account = dao.save(account);
		return account;
	}

	@Override
	public Account removeAdmin(JsonNode acc) {
		Account account = dao.findById(acc.get("id").asInt()).get();
		account.setIsadmin(false);
		account = dao.save(account);
		return account;
	}

	@Override
	public Account updateWallet(JsonNode wallet, Integer id) {
		Account a = dao.findById(id).get();
		a.setWallet(wallet.get("wallet").asText());
		dao.save(a);
		return a;
	}

}
