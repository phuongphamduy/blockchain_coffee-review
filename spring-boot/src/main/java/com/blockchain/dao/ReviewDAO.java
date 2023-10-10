package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Review;

public interface ReviewDAO extends JpaRepository<Review, Integer> {

}
