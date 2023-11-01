package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.Review;

public interface ReviewDAO extends JpaRepository<Review, Integer> {
	@Query("select r, a from Review r join r.account a where r.post.id = ?1")
	List<Object[]> findByPostId(Integer id);
	
	
}
