package com.moviehub.web.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/views/logout")

public class LogoutServlet extends HttpServlet {
       
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		session.setAttribute("logout", "success");
		session.removeAttribute("user-data");
		session.removeAttribute("authStatus");
		session.removeAttribute("email");
		session.removeAttribute("gmail");
		session.removeAttribute("payexists");
		response.sendRedirect("../snippets/main.html");
	}
}
