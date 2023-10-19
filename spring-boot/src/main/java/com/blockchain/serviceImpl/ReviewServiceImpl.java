package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.ImageDAO;
import com.blockchain.dao.PostDAO;
import com.blockchain.dao.ReviewDAO;
import com.blockchain.model.Image;
import com.blockchain.model.Post;
import com.blockchain.model.Review;
import com.blockchain.service.ReviewService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
@Service
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	ReviewDAO rdao;
	
	@Autowired
	PostDAO pdao;
	
	@Autowired
	ImageDAO idao;

	@Override
	public Review postComment(JsonNode review) {
		ObjectMapper mapper = new ObjectMapper();
		Review re = mapper.convertValue(review, Review.class);
		Review r = rdao.save(re);
//		if(review.get("image") != null) {
//			Image im = mapper.convertValue(review.get("image"), Image.class);
//			Image i = idao.save(im);
//		}
		return r;
		
		
	}

	@Override
	public List<Review> getReviewByPostId(Integer id) {
		List<Review> list = rdao.findByPostId(id);
		if(list.isEmpty()) {
			return null;
		}
		return list;
	}

	@Override
	public void deleteComment(Integer id) {
		rdao.deleteById(id);
	}

}
