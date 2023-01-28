<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ===== Iconscout CSS ===== -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="../styles/style.css">

    <title>Signupform</title>
</head>
<body>
    <% if(session.getAttribute("authStatus")=="true" ){ response.sendRedirect("main.jsp"); } %>
    <div class="logo-btn">
        <a href="../snippets/main.html">
            <img class="logo" src="../images/loginlogo.jpeg">
        </a>
    </div>
    <div class="body-container">
        <div class="container">
            <div class="forms">

                <!-- Registration Form -->
                <div class="form signup">
                    <span class="title">Registration</span>
                    <div class="xmark">
                        <a href="../snippets/main.html"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACSUlEQVRIS8WVT4hPURTHZ8piFpKFwU5ZCTMRirIRC6KQP9ko5P+KFCHNiPInsfRnUqNGiSSRv4vZTJEUC2ShZEVSLBQLC5/PdO90ut7zxuKXW5/ue+fde7/nnnPufe1tLW7tLV6/rUlgDA6sgDWwECYkh77QD8FNuAu/6hz9m8BiJm2H9Q27vMX3C/CoalyVgF7vgWPQAW/hKryEp8k2l34OrIVp8BOOwJlSpEpgP4NOwQ84n3hXs4up2HfAThgHB+FkHFsK6M2L5OVG+oGahUvzUgx3wFzMTrseHhMFxvN+EYz5WdgXVjFUhiG20qbnB+A27IKPpcAqDCbMmM+D72m1c/TGfFmwjeX5PjyHvWmcgu7eKIzsPu6gjw9b4Sj0pknu6kmaZFkqYnNxy1ZnFsC3ZHdeD/TDZm1R4BXvM8AQ3UgT7CbDYBDRlhdfxPOnMHYdz9fBtbpKgc8YOpPImzDJx1nJM8NoewDu1LKNbTovr8G1JtUJzEyD4sTutGAWMES98KwQMAJ6XylQF6Kc0BwW1zSRxv+fQnSZCVuSZ27fZmU8hhhz7TknZZJNsDu7ApvKEHnsTa6TPCy57i1TD1L0NifeXFSVqRXUXwpMxOCltRpOg4cmN8s1l2Kd7TgfDsM92A0fSgHf41VhzevhaNoSBpl4rwrPhRfjcKu67PTcY/8VLoHXx/salSnYt4HXuiV+CE7Esf/lus4OmFiv4ZUNMTLmXuv+2f5oo/llbmDWcpgP8ZfpKX4I16C8aUeEmgQanG/+3HKB3zEGhBm3NOz6AAAAAElFTkSuQmCC">
                        </a>
                    </div>
                    <form id="signupform" action="register" method="post" onsubmit="return validation();" >
                        <div class="input-field">
                            <input type="text" placeholder="Enter your name" required id="uname" name="uname">
                            <i class="uil uil-user"></i>
                        </div>
                        <div class="input-field" id="eemail">
                            <input type="email" placeholder="Enter your email" required id="semail" name="uemail">
                            <i class="uil uil-envelope icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Create a password" required id="spword"
                                name="upassword">
                            <i class="uil uil-lock icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Confirm a password" required
                                id="cpword" name="upass" autocomplete="new-password">
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>

                        <div class="checkbox-text">
                            <div class="checkbox-content">
                                <input type="checkbox" id="sigCheck" onlick()="checkfuction()">
                                <label for="sigCheck" class="text" id="textcolor">Accept terms and conditions</label>
                            </div>
                        </div>
                        <div class="input-field button">
                            <input type="submit" value="Signup Now" />
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

        <script src="../scripts/signup.js"></script>
    </div>
           <% 
        	if(session.getAttribute("user-exists") !=null){ 	
        	session.removeAttribute("user-exists"); 
			session.setAttribute("authStatus", "null");
			out.println("<script>" );
		    out.println("setTimeout(function(){ alert('email already exists'); }, 1000);");
		    out.println("var lform = document.getElementById('loginform');");
		   	out.println("var il = document.getElementById('eemail');");
			out.println("il.classList.add('error');");
		    out.println("</script>");  
          }
      %>
  </body>

  </html>