package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Account;

public interface AccountDAO extends JpaRepository<Account, Integer> {

}
