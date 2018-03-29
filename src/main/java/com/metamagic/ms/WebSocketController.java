package com.metamagic.ms;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

	@Autowired
	private ChatService chatService;
	
	@MessageMapping("/chat")
    @SendTo("/topic/messages")
    public List<String> send(final Message message) throws Exception {

        return chatService.getData();
    }
	
}
