package com.moviehub.web.controller;

import java.io.IOException;
import java.sql.SQLException;

import com.moviehub.db.dao.Userdbdao;
import com.moviehub.web.model.User;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/views/register")

public class RegisterServlet extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String uname = request.getParameter("uname");
		String uemail = request.getParameter("uemail");
		String upassword = request.getParameter("upassword");

		
		
		User user = new User(uname, uemail, upassword);
		
		Userdbdao dao = new Userdbdao();
		
		try {
			if(dao.registerUser(user)) {
				response.sendRedirect("../views/register_success.jsp");
			}else {
				HttpSession session = request.getSession();
				session.setAttribute("user-exists", true);
				response.sendRedirect("../views/signup.jsp");
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
}
