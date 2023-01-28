package com.moviehub.web.controller;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.*;

import java.io.IOException;
import java.sql.SQLException;

import com.moviehub.db.dao.Userdbdao;
import com.moviehub.db.dao.paydbao;
import com.moviehub.web.model.User;
import com.moviehub.web.model.pay;

@WebServlet("/views/login")

public class loginservlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("email");
		String pwd = request.getParameter("pwd");
		HttpSession session = request.getSession();
		session.setAttribute("authStatus", "false");
		
		Userdbdao dao = new Userdbdao();
		User validuser = null;
		
		
		String subscription = request.getParameter("subscription");
		
		try {
			validuser = dao.validate(email, pwd); 
		
			if(validuser != null) {
				session.setAttribute("authStatus", "true");
				session.setAttribute("user-data", validuser);
				session.setAttribute("email", validuser.getEmail());
				session.setAttribute("gmail",email);
				
				
				paydbao payment  = new paydbao();
				pay Pay = new pay(email, subscription);
				boolean hasPaid = payment.alreadyAmember(email);
				if(hasPaid) {
					session.setAttribute("payexists", "true");
					
				}
				
				
				response.sendRedirect("../views/main.jsp");
			} else {
				response.sendRedirect("../views/login.jsp");
			}
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
