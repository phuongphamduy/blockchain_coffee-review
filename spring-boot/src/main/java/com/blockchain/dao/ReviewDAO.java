package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.Review;

public interface ReviewDAO extends JpaRepository<Review, Integer> {
	@Query("select r from Review r where r.post.id = ?1")
	List<Review> findByPostId(Integer id);
}
