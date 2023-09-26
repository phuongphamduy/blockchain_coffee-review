package com.blockchain.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainControl {
	@RequestMapping("/")
	public String main() {
		return "introduce/index";
	}
	
	@RequestMapping("post")
	public String post() {
		return "post/index";
	}
}
