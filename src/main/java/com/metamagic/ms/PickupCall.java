package com.metamagic.ms;

public class PickupCall {
	
	private String Commnad;
	
	private Data data;

	
	
	public PickupCall(String commnad, Data data) {
		super();
		Commnad = commnad;
		this.data = data;
	}

	public String getCommnad() {
		return Commnad;
	}

	public void setCommnad(String commnad) {
		Commnad = commnad;
	}

	public Data getData() {
		return data;
	}

	public void setData(Data data) {
		this.data = data;
	}
	
	

}
