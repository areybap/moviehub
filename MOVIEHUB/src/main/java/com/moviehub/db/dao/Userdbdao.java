package com.moviehub.db.dao;

import java.sql.*;

import com.moviehub.web.model.User;

public class Userdbdao {
	
	private String DBUSERNAME = "root";
	private String DBpassword = "123Admin@123";
	private String DBURL = "jdbc:mysql://localhost:3306/moviehub";
	private String DBDRIVER = "com.mysql.cj.jdbc.Driver";
	
	public Connection getConnection() throws ClassNotFoundException, SQLException {
		Class.forName(DBDRIVER);
		Connection con = DriverManager.getConnection(DBURL, DBUSERNAME, DBpassword);
		return con;
	}
	
		
	public User validate(String email, String password) throws ClassNotFoundException, SQLException {
		
		String query = "SELECT * FROM userdata WHERE email = ? AND password = ? ;";
	
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement(query);
		ps.setString(1, email);
		ps.setString(2, password);
		ResultSet rs = ps.executeQuery();
		if(rs.next()) {
			String dbemail = rs.getString(3);
			String dbpassword = rs.getString(4);
			String dbname = rs.getString(2);
			User validuser = new User(dbname, dbemail, dbpassword);
			return validuser;
		}
			
		return null;
	}
	
	public boolean alreadyAUser(String email) throws ClassNotFoundException, SQLException{
		String query = "SELECT * FROM userdata WHERE email = ?" ;
		
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement(query);
		ps.setString(1, email);
		ResultSet rs = ps.executeQuery();
		
		return rs.next();
	}
	
	
	public boolean registerUser(User user) throws ClassNotFoundException, SQLException {
		
		String query = "INSERT INTO USERDATA (email, password, name) VALUES (?, ?, ?) ;" ;
		
		String email = user.getEmail();
		String password = user.getpassword();
		String name = user.getname();

		
		if(alreadyAUser(email)) return false;
		else {
			Connection con = getConnection();
			PreparedStatement ps = con.prepareStatement(query);
			ps.setString(1, email);
			ps.setString(2, password);
			ps.setString(3, name);

			
			int ra = ps.executeUpdate();
			
			return ra>0 ;
		}
		
	}

	
}
