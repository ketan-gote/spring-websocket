package com.metamagic.ms;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class ChatService {

	public List<PickupCall> getPickUpCall(){
		List<PickupCall> data = new ArrayList<PickupCall>();
		
		data.add(new PickupCall("incomingcall", new Data(new  Date().getTime()+"", "incomingcall")));
		return data;
	}
	
	
	public List<Message> getData(){
		List<Message> data = new ArrayList<Message>();
		Message msg = new Message();
		msg.setFrom("Ketan Gote");
		msg.setText("New Message : "+new Date());
		data.add(msg);
		return data;
	}
	
	public List<String> getData1(){
		List<String> data = new ArrayList<String>();
		Message msg = new Message();
		data.add("new data - "+new Date());
		return data;
	}
	
	
}
