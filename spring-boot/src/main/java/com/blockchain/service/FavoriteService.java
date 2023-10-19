package com.blockchain.service;

import com.blockchain.model.Favorite;

public interface FavoriteService {

	Favorite savePost(Favorite favorite);

	void removePost(Integer id);

}
