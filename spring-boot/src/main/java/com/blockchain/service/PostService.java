package com.blockchain.service;

import com.blockchain.model.Post;
import com.fasterxml.jackson.databind.JsonNode;

public interface PostService {

	Post create(JsonNode postdata);

}
