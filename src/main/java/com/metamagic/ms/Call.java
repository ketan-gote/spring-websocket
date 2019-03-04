package com.metamagic.ms;

public class Call {
	
	private String command;
	
	private Data data;

	private boolean Success;
	
	public Call(String command, Data data) {
		super();
		this.command = command;
		this.data = data;
	}
	
	public Call(String command, Data data, boolean Success) {
		super();
		this.command = command;
		this.data = data;
		this.Success = Success;
	}

	public String getCommand() {
		return command;
	}

	public void setCommand(String command) {
		this.command = command;
	}

	public Data getData() {
		return data;
	}

	public void setData(Data data) {
		this.data = data;
	}

	public boolean Success(){
		return this.Success;
	}
	
	public void setSuccess(boolean flag){
		this.Success = flag;
	}
	  
	
	

}
