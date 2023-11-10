package com.blockchain.service;

import java.util.List;

import com.blockchain.model.Post;
import com.fasterxml.jackson.databind.JsonNode;

public interface PostService {

	Post create(JsonNode postdata);

	List<Post> getPostConfirm(boolean b);

	Post getById(Integer id);

	List<Post> getByName(String name);

	Post accept(Integer id);

	void deletePost(Integer id);

	List<Post> getOrderBy(String order);

	List<Object[]> getPostReport();

}
