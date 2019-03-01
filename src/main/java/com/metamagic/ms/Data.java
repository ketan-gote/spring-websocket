package com.metamagic.ms;

public class Data {

	private String mobile;
	
	private String action;

	public Data() {
		
	}
	
	public Data(String mobile, String action) {
		super();
		this.mobile = mobile;
		this.action = action;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}
		
}
