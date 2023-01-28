package com.moviehub.web.model;


public class pay {
		private String email;		
		private String subscription;
		
			
		public pay(String email, String subscription) {
			super();
			this.email = email;
			this.subscription = subscription;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getsubscription() {
			return subscription;
		}
		public void setsubscription(String subscription) {
			this.subscription = subscription;
		}

		
	}

