package com.blockchain.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.model.Account;
import com.blockchain.service.AccountService;
import com.fasterxml.jackson.databind.JsonNode;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/account")
public class AccountRestController {
	@Autowired
	AccountService service;
	
	@GetMapping
	public List<Account> getAll() {
		return service.getAll();
	}
	
	@PostMapping("login")
	public Account login(@RequestBody JsonNode data) {
		return service.login(data);
	}
	
	@PostMapping("signUp")
	public Account signUp(@RequestBody Account acc) {
		return service.signUp(acc);
	}
}
