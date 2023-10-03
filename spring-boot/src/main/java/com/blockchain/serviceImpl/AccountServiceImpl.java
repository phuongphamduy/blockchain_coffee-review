package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.AccountDAO;
import com.blockchain.model.Account;
import com.blockchain.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	AccountDAO dao;
	
	@Override
	public List<Account> getAll() {
		return dao.findAll();
	}

}
