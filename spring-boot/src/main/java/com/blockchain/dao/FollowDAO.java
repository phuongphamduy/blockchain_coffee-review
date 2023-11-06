package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.Follow;

public interface FollowDAO extends JpaRepository<Follow, Integer> {
	@Query("select f from Follow f where f.follower.id = ?1")
	List<Follow> getFollowerById(Integer id);
	@Query("select f from Follow f where f.following.id = ?1")
	List<Follow> getFollowingById(Integer id);
}
