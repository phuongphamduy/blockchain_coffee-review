package com.blockchain.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.PricePost;

public interface PricePostDAO extends JpaRepository<PricePost, Integer> {
	@Query("select pp from PricePost pp where pp.post.id = ?1")
	List<PricePost> getByPostId(Integer id);

	@Query("select pp.id, a.fullname, p.name, pr.sols, a.wallet, p.id from PricePost pp join Post p on p.id = pp.post.id join Account a on a.id = p.account.id join Price pr on pr.id = pp.price.id where pp.issend = false")
	List<Object[]> getRequestPrice();
}
