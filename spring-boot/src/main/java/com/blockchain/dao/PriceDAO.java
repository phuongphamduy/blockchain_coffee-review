package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Price;

public interface PriceDAO extends JpaRepository<Price, Integer> {

}
