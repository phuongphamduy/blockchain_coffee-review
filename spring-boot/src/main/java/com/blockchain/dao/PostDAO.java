package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Post;

public interface PostDAO extends JpaRepository<Post, Integer> {

}
