package com.blockchain.service;

import com.blockchain.model.Interaction;
import com.fasterxml.jackson.databind.JsonNode;

public interface InteractionService {

	Interaction likedislike(Interaction interaction);

	void removeLike(Integer id);

}
