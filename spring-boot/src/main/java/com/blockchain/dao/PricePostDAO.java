package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.PricePost;

public interface PricePostDAO extends JpaRepository<PricePost, Integer>{
	@Query("select pp from PricePost pp where pp.post.id = ?1")
	List<PricePost> getByPostId(Integer id);
}
