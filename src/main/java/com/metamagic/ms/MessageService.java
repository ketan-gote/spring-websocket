package com.metamagic.ms;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class MessageService {

	public Call getPickUpCall(){
		return new Call("incomingcall", new Data(new  Date().getTime()+"", "incomingcall"));
	}
	
	
	
	
}
