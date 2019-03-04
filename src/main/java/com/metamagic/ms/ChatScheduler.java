package com.metamagic.ms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class ChatScheduler {

	@Autowired
    private SimpMessagingTemplate template;
    
    @Autowired
    ChatService service;

    @Scheduled(fixedRate = 60000)
    public void publishUpdates(){
    	
        template.convertAndSend("/topic/messages", service.getPickUpCall());
       
    }
}
