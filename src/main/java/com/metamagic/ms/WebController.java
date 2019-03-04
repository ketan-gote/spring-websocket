package com.metamagic.ms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin()
public class WebController {

	@Autowired
	private MessageService chatService;
	
	
	@MessageMapping("/connect")
    @SendTo("/topic/messages")
    public Call connect() throws Exception {

        return chatService.getPickUpCall();
    }
	
	
//	
//	@RequestMapping(value = "/api/pickupcall", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public Response pickupCall(@RequestParam(value = "command") String command,@RequestParam(value = "data") String data) 
//	{
//		System.out.println(command +"  "+data);
//		return new Response(command, data, true);
//	}
//	
//	@RequestMapping(value = "connectcall", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public String connectcall(@RequestParam(value = "command") String command,@RequestParam(value = "data") String data) throws JSONException
//	{
//		JSONObject json = new JSONObject();
//		json.put("command", command);
//		json.put("data", data);
//		json.put("Success", "true");
//		return json.toString();
//	}
//	
//	@RequestMapping(value = "pausecall", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public String pausecall(@RequestParam(value = "command") String command,@RequestParam(value = "data") String data) throws JSONException
//	{
//		JSONObject json = new JSONObject();
//		json.put("command", command);
//		json.put("data", data);
//		json.put("Success", "true");
//		return json.toString();
//	}
//	
//	
//	@RequestMapping(value = "disconnectcall", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public String disconnectcall(@RequestParam(value = "command") String command,@RequestParam(value = "data") String data) throws JSONException
//	{
//		JSONObject json = new JSONObject();
//		json.put("command", command);
//		json.put("data", data);
//		json.put("Success", "true");
//		return json.toString();
//	}
//	
//	@RequestMapping(value = "ignorecall", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public String ignorecall(@RequestParam(value = "command") String command,@RequestParam(value = "data") String data) throws JSONException
//	{
//		JSONObject json = new JSONObject();
//		json.put("command", command);
//		json.put("data", data);
//		json.put("Success", "true");
//		return json.toString();
//	}
//	
//	@RequestMapping(value = "makecall", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public String makecall(@RequestParam(value = "command") String command,@RequestParam(value = "data") String data) throws JSONException
//	{
//		JSONObject json = new JSONObject();
//		json.put("command", command);
//		json.put("data", data);
//		json.put("Success", "true");
//		return json.toString();
//	}
}
