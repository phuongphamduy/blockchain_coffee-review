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
	@Query("SELECT p.name, p.address, COUNT(DISTINCT r.Id) AS comment, " +
	           "COUNT(DISTINCT CASE WHEN i.account.id IS NOT NULL AND i.islike = true THEN i.account.id ELSE NULL END) AS liked, " +
	           "COUNT(DISTINCT CASE WHEN i.account.id IS NOT NULL AND i.islike = false THEN i.account.id ELSE NULL END) AS dislike " +
	           "FROM Post p " +
	           "LEFT JOIN Review r ON p.Id = r.post.id " +
	           "LEFT JOIN Interaction i ON i.post.id = p.Id " +
	           "WHERE p.isconfirm = true " +
	           "GROUP BY p.name, p.address")
	    List<Object[]> getPostDetails();
}
