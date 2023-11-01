package com.blockchain.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.InteractionDAO;
import com.blockchain.model.Interaction;
import com.blockchain.service.InteractionService;
import com.fasterxml.jackson.databind.JsonNode;
@Service
public class InteractionServiceImpl implements InteractionService {

	@Autowired
	InteractionDAO dao;
	
	@Override
	public Interaction likedislike(Interaction interaction) {
		Interaction i = dao.findByPostAndAccount(interaction.getPost().getId(), interaction.getAccount().getId());
		if(i != null) {
			i.setIslike(interaction.getIslike());
			dao.save(i);
			return i;
		}
		i = interaction;
		dao.save(i);
		return i;
	}

	@Override
	public void removeLike(Integer id) {
		dao.deleteById(id);
		
	}

	@Override
	public Interaction getInteractionByPostAndUser(Integer postid, Integer userid) {
		Interaction i = dao.findByPostAndAccount(postid, userid);
		return i;
	}

}
