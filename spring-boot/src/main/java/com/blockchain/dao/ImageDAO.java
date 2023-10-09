package com.blockchain.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockchain.model.Image;

public interface ImageDAO extends JpaRepository<Image, Integer> {

}
