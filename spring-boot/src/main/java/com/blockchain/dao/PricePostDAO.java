package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.PricePost;

public interface PricePostDAO extends JpaRepository<PricePost, Integer>{

}
