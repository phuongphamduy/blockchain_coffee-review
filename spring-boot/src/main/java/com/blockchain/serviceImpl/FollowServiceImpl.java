package com.blockchain.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockchain.dao.FollowDAO;
import com.blockchain.model.Follow;
import com.blockchain.service.FollowService;

@Service
public class FollowServiceImpl implements FollowService {
	@Autowired
	FollowDAO dao;

	@Override
	public Follow followAction(Follow follow) {
		return dao.save(follow);
	}

	@Override
	public List<Follow> getFollowerById(Integer id) {
		return dao.getFollowerById(id);
	}

	@Override
	public List<Follow> getFollowingById(Integer id) {
		return dao.getFollowingById(id);
	}
}
