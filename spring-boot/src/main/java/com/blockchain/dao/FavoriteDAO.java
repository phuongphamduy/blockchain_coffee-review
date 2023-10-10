package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Favorite;

public interface FavoriteDAO extends JpaRepository<Favorite, Integer> {

}
