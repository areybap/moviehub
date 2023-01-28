package com.moviehub.web.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.SQLException;

import com.moviehub.db.dao.paydbao;
import com.moviehub.web.model.pay;
@WebServlet("/views/payment")

public class paymentservlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String email = (String) session.getAttribute("email");
		String subscription = request.getParameter("subscription");
		
		
		paydbao payment  = new paydbao();
		pay Pay = new pay(email, subscription);
		
		
		try 
		{
				if(payment.registerpay(Pay)) {
					session.setAttribute("payexists", "true");
					response.sendRedirect("../views/payment_success.jsp");
				}
				else {
					
					response.sendRedirect("../views/membership.jsp");
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


