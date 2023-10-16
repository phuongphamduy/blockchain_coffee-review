package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Post;

public interface PostDAO extends JpaRepository<Post, Integer> {
	List<Post> findTop3ByNameLike(String name);
}
