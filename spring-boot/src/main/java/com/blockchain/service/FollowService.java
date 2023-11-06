package com.blockchain.service;

import java.util.List;

import com.blockchain.model.Follow;

public interface FollowService {

	Follow followAction(Follow follow);

	List<Follow> getFollowerById(Integer id);

	List<Follow> getFollowingById(Integer id);

}
