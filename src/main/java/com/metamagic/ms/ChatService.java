package com.metamagic.ms;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class ChatService {

	
	
	public List<String> getData(){
		List<String> data = new ArrayList<String>();
		data.add("new data - "+new Date());
		return data;
	}
}
