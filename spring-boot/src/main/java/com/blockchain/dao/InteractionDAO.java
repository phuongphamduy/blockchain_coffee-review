package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.blockchain.model.Interaction;

public interface InteractionDAO extends JpaRepository<Interaction, Integer> {
	@Query("select i from Interaction i where i.post.id = ?1 and i.account.id = ?2")
	Interaction findByPostAndAccount(Integer postid, Integer accountid);
	@Query("select i, p from Interaction i join i.post p where i.account.id = ?1")
	Object[] getInteractionWithAccount(Integer id);
}
