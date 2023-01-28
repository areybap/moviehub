package com.moviehub.db.dao;



import java.sql.*;

import com.moviehub.web.model.pay;

public class paydbao {
	
	private String DBUSERNAME = "root";
	private String DBpassword = "123Admin@123";
	private String DBURL = "jdbc:mysql://localhost:3306/moviehub";
	private String DBDRIVER = "com.mysql.cj.jdbc.Driver";
	
	public Connection getConnection() throws ClassNotFoundException, SQLException {
		Class.forName(DBDRIVER);
		Connection con = DriverManager.getConnection(DBURL, DBUSERNAME, DBpassword);
		return con;
	}
	
		
//	public pay validate(String email, String subscription) throws ClassNotFoundException, SQLException {
		
//		String query = "SELECT * FROM userdata WHERE email = ? AND subscription = '?';";
	
//		Connection con = getConnection();
//		PreparedStatement ps = con.prepareStatement(query);
//		ps.setString(1, email);
//		ResultSet rs = ps.executeQuery();
//		if(rs.next()) {
//			String dbemail = rs.getString(3);
//			String dbsubscription = rs.getString(5);
//			String dbname = rs.getString(2);
//			pay validpayment = new pay(dbname, dbemail, dbsubscription);
//			return validpayment;
//		}
			
//		return null;
//	}
	
	public boolean alreadyAmember(String email) throws ClassNotFoundException, SQLException{ 
		String query = "SELECT * FROM userdata WHERE email = ? and subscription = 'true'" ;
		
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement(query);
		ps.setString(1, email);
		ResultSet rs = ps.executeQuery();
		return rs.next();
	}
	
	
	public boolean registerpay(pay user) throws ClassNotFoundException, SQLException {
		
		String query = "UPDATE USERDATA SET subscription='true' WHERE email = ? ;" ;
		
		String email = user.getEmail();

		
		if(alreadyAmember(email)) return false;
		else {
			Connection con = getConnection();
			PreparedStatement ps = con.prepareStatement(query);
			ps.setString(1, email);
			int ra = ps.executeUpdate();
			return ra>0 ;
		}
		
	}

	
}
