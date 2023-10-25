package com.blockchain.service;

import java.util.List;

import com.blockchain.model.Account;
import com.fasterxml.jackson.databind.JsonNode;

public interface AccountService {
	public List<Account> getAll();

	public Account login(JsonNode data);

	public Account signUp(Account acc);

	public Account giveAdmin(JsonNode acc);

	public Account removeAdmin(JsonNode acc);

	public Account updateWallet(JsonNode wallet, Integer id);
}
