package com.metamagic.ms;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class MessageScheduler {

	@Value("${file.path}")
	 private String tmpFilePath;
	
	@Autowired
    private SimpMessagingTemplate template;
    
    @Autowired
    MessageService service;

    
    @Scheduled(fixedRate = 60000)
    public void pushData() throws InterruptedException{
    	
		try {
			FileReader fr = new FileReader(new File(tmpFilePath));
			BufferedReader br = new BufferedReader(fr);
			String line = null;
			while((line = br.readLine())!=null){
				System.out.println("Sending data  "+line);
				Call pc = new Call("incomingcall", new Data(line, "incomingcall"));
				template.convertAndSend("/topic/messages", pc);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
    	
    }
}
