package com.blockchain.service;

import java.util.List;

import com.blockchain.model.Post;
import com.fasterxml.jackson.databind.JsonNode;

public interface PostService {

	Post create(JsonNode postdata);

	List<Post> getAll();

	Post getById(Integer id);

}
