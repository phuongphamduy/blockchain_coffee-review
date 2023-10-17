package com.blockchain.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.ImageDAO;
import com.blockchain.dao.PostDAO;
import com.blockchain.model.Image;
import com.blockchain.model.Post;
import com.blockchain.service.PostService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class PostServiceImpl implements PostService {

	@Autowired
	PostDAO pdao;

	@Autowired
	ImageDAO idao;

	@Override
	public Post create(JsonNode postdata) {
		ObjectMapper mapper = new ObjectMapper();
		Post post = mapper.convertValue(postdata, Post.class);
		pdao.save(post);

		TypeReference<List<Image>> type = new TypeReference<List<Image>>() {
		};
		List<Image> images = mapper.convertValue(postdata.get("images"), type).stream()
				.peek(i -> i.setPost(post)).collect(Collectors.toList());

		idao.saveAll(images);
		return post;
	}

	@Override
	public List<Post> getAll() {
		return pdao.findAll();
	}

	@Override
	public Post getById(Integer id) {
		return pdao.findById(id).get();
	}

	@Override
	public List<Post> getByName(String name) {
		List<Post> list = pdao.findTop3ByNameLike("%"+name+"%");
		if(list.isEmpty()) {
			System.out.println("sai");
			return null;	
		}
		return list;
	}

}
