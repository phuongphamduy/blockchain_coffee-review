package com.blockchain.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.FavoriteDAO;
import com.blockchain.model.Favorite;
import com.blockchain.service.FavoriteService;
@Service
public class FavoriteServiceImpl implements FavoriteService{
	
	@Autowired
	FavoriteDAO dao;

	@Override
	public Favorite savePost(Favorite favorite) {
		Favorite f = dao.save(favorite);
		return f;
	}

	@Override
	public void removePost(Integer id) {
		dao.deleteById(id);
		
	}

}
