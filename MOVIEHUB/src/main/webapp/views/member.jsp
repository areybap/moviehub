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

    <!-- ===== Iconscout CSS ===== -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="../styles/membership.css">
    

    <title>Login & Registration Form</title>
</head>

<body>
    <div class="logo-btn">
        <a href="../views/main.jsp">
            <img class="logo" src="../images/iconminicoomunity.png">
        </a>
    </div>
    <div class="body-container">
        <div class="container active">
            <div class="forms">
                <!-- Registration Form -->
                <div class="form signup">
                    <span class="title">Membership</span>
                    <div class="xmark">
                        <a href="../views/main.jsp"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACSUlEQVRIS8WVT4hPURTHZ8piFpKFwU5ZCTMRirIRC6KQP9ko5P+KFCHNiPInsfRnUqNGiSSRv4vZTJEUC2ShZEVSLBQLC5/PdO90ut7zxuKXW5/ue+fde7/nnnPufe1tLW7tLV6/rUlgDA6sgDWwECYkh77QD8FNuAu/6hz9m8BiJm2H9Q27vMX3C/CoalyVgF7vgWPQAW/hKryEp8k2l34OrIVp8BOOwJlSpEpgP4NOwQ84n3hXs4up2HfAThgHB+FkHFsK6M2L5OVG+oGahUvzUgx3wFzMTrseHhMFxvN+EYz5WdgXVjFUhiG20qbnB+A27IKPpcAqDCbMmM+D72m1c/TGfFmwjeX5PjyHvWmcgu7eKIzsPu6gjw9b4Sj0pknu6kmaZFkqYnNxy1ZnFsC3ZHdeD/TDZm1R4BXvM8AQ3UgT7CbDYBDRlhdfxPOnMHYdz9fBtbpKgc8YOpPImzDJx1nJM8NoewDu1LKNbTovr8G1JtUJzEyD4sTutGAWMES98KwQMAJ6XylQF6Kc0BwW1zSRxv+fQnSZCVuSZ27fZmU8hhhz7TknZZJNsDu7ApvKEHnsTa6TPCy57i1TD1L0NifeXFSVqRXUXwpMxOCltRpOg4cmN8s1l2Kd7TgfDsM92A0fSgHf41VhzevhaNoSBpl4rwrPhRfjcKu67PTcY/8VLoHXx/salSnYt4HXuiV+CE7Esf/lus4OmFiv4ZUNMTLmXuv+2f5oo/llbmDWcpgP8ZfpKX4I16C8aUeEmgQanG/+3HKB3zEGhBm3NOz6AAAAAElFTkSuQmCC">
                        </a>
                    </div>
                    <br>
                    <br>
                    <h2 style="font-weight: 500; padding-bottom: 5px;">Membership benefits</h2>
                    <li>Get access to full content.</li>
                    <li>AD-free experience.</li>
                    <li>Faster streaming.</li>
                    <li>24/7 Customer Service</li>

					<form action="member" method="post" onsubmit="return validation();">
                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="sigCheck" onlick()="checkfuction()">
                            <label for="sigCheck" class="text" id="textcolor">Accept <a href="#">terms and
                                    conditions</a></label>
                        </div>
                    </div>
 
	                    <div class="input-field button">
	                                        
	                    <%
	  						if (session.getAttribute("payexists")=="true")
							{	
	  							out.println("<a href='../views/main.jsp'>");
	  							out.println("<input type='button' value='Already a member'>");
	  							out.println("</a>");
							}
	  						else
	  						{
	  							out.println("<input type='submit' value='Buy now - Rs.999'>");
	  						}
	   				    %>
	                        
	                    </div>
					</form>
                    <div class="login-signup">
                        <span class="text">Already a member?
                            <a href="../views/login.jsp" class="text login-link">Login now</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <script src="../scripts/membership.js"></script>
    </div>
</body>

</html>