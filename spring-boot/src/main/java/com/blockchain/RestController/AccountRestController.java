package com.blockchain.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("{id}")
	public Account getById(@PathVariable("id") Integer id) {
		return service.getById(id);
	}
	
	@PostMapping("login")
	public Account login(@RequestBody JsonNode data) {
		return service.login(data);
	}
	
	@PostMapping("signUp")
	public Account signUp(@RequestBody Account acc) {
		return service.signUp(acc);
	}
	
	@PutMapping("/updateProfile")
	public Account sua(@RequestBody JsonNode node) {
		return service.pudateProfile(node);
	}
	
	@PatchMapping("giveAdmin")
	public Account giveAdmin(@RequestBody JsonNode acc) {
		return service.giveAdmin(acc);
	}
	
	@PatchMapping("removeAdmin")
	public Account removeAdmin(@RequestBody JsonNode acc) {
		return service.removeAdmin(acc);
	}
	
	@PatchMapping("/wallet/{id}")
	public Account updateWallet(@RequestBody JsonNode wallet, @PathVariable("id") Integer id) {
		return service.updateWallet(wallet, id);
	}
}
