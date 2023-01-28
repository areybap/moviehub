<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.moviehub.web.model.User" %>    
<%@page import="com.moviehub.web.model.pay" %>
 <%
          if(session.getAttribute("gmail") == null){
	        	response.sendRedirect("../views/login.jsp");
           }
%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MOVIE HUB</title>

    <link rel="stylesheet" href="../styles/offers.css?v=111">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>

<body>
    <header class="navbar">
        <div class="logo">
            <a href="../views/main.jsp">
                 <%
  						if (session.getAttribute("payexists")=="true")
						{
							out.println("<img src='../images/iconminiPRMIUMIND.png'>");
						}
  						else
  						{
  							out.println("<img src='../images/iconmini.jpeg'>");
  						}
   				 %>
            </a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="../views/main.jsp">HOME</a></li>
                <li><a href="../views/searchmovies.jsp">GENRES</a></li>
                <li><a href="../views/offers.jsp">OFFERS</a></li>
                <li><a href="../views/member.jsp">MEMBERSHIP</a></li>
            </ul>
        </div>
        <div class="searchbox">
            <a href="./main.jsp" style="text-decoration: none;">
                <form id="search-form">
                    <input type="search" placeholder="redirect to main page for search" id="search" class="search">
                </form>
            </a>
        </div>
        <div class="searchicon">
            <button type="submit" form="search-form">
                <img src="https://publicsonar.com/wp-content/uploads/2021/11/Solutions-page-icon-1.png">
            </button>

        </div>
          <div class="user-name">
        	
        		<% if (session.getAttribute("authStatus")=="true")
        			{
        				User user = (User) session.getAttribute("user-data");
    	        		out.print(user.getname());
        			}
        	     %>
        </div>
        <div class="login">
         <form action=logout>
            <button type="submit" id ="textbutton"><p>logout</p></button>
            </form>
        </div>
    </header>

 	 <img class="meme" src="../images/brahmi.gif">
</body>

</html>