package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.Post;

public interface PostDAO extends JpaRepository<Post, Integer> {
	List<Post> findTop3ByNameLike(String name);
	List<Post> findAllByOrderByCreatedateAsc();
	List<Post> findAllByOrderByCreatedateDesc();
	@Query("select p from Post p where p.isconfirm = ?1")
	List<Post> findByIsConfirm(Boolean isConfirm);
}
