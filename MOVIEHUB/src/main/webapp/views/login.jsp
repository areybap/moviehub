<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ===== Iconscout CSS ===== -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="../styles/style.css">

    <title>Loginn Form</title>
    <%
   
    	if(session.getAttribute("authStatus") == "true"){
    		response.sendRedirect("main.jsp");
    	}else if(session.getAttribute("authStatus") != "false"){
    		session.setAttribute("authStatus", "null");
    	}
     %>

</head>

<body>  
    <div class="logo-btn">
        <a href="../snippets/main.html">
            <img class="logo" src="../images/loginlogo.jpeg">
        </a>
    </div>
    <div class="body-container">
        <div class="container">
            <div class="forms">
                <div class="form login">
                    <span class="title">Login</span>
                    <div class="xmark">
                        <a href="../snippets/main.html"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACSUlEQVRIS8WVT4hPURTHZ8piFpKFwU5ZCTMRirIRC6KQP9ko5P+KFCHNiPInsfRnUqNGiSSRv4vZTJEUC2ShZEVSLBQLC5/PdO90ut7zxuKXW5/ue+fde7/nnnPufe1tLW7tLV6/rUlgDA6sgDWwECYkh77QD8FNuAu/6hz9m8BiJm2H9Q27vMX3C/CoalyVgF7vgWPQAW/hKryEp8k2l34OrIVp8BOOwJlSpEpgP4NOwQ84n3hXs4up2HfAThgHB+FkHFsK6M2L5OVG+oGahUvzUgx3wFzMTrseHhMFxvN+EYz5WdgXVjFUhiG20qbnB+A27IKPpcAqDCbMmM+D72m1c/TGfFmwjeX5PjyHvWmcgu7eKIzsPu6gjw9b4Sj0pknu6kmaZFkqYnNxy1ZnFsC3ZHdeD/TDZm1R4BXvM8AQ3UgT7CbDYBDRlhdfxPOnMHYdz9fBtbpKgc8YOpPImzDJx1nJM8NoewDu1LKNbTovr8G1JtUJzEyD4sTutGAWMES98KwQMAJ6XylQF6Kc0BwW1zSRxv+fQnSZCVuSZ27fZmU8hhhz7TknZZJNsDu7ApvKEHnsTa6TPCy57i1TD1L0NifeXFSVqRXUXwpMxOCltRpOg4cmN8s1l2Kd7TgfDsM92A0fSgHf41VhzevhaNoSBpl4rwrPhRfjcKu67PTcY/8VLoHXx/salSnYt4HXuiV+CE7Esf/lus4OmFiv4ZUNMTLmXuv+2f5oo/llbmDWcpgP8ZfpKX4I16C8aUeEmgQanG/+3HKB3zEGhBm3NOz6AAAAAElFTkSuQmCC" /></a>
                    </div>

                    <form action="login" method="post" id="loginform" autocomplete="off">
                        <div class="input-field" id="input-field">
                            <input type="email" placeholder="Enter your email" name="email" required id="iemail">
                            <i class="uil uil-envelope icon"></i>
                        </div>
                        <div class="input-field" id="input-field2">
                            <input type="password" class="password" placeholder="Enter your password" name="pwd" required id="ipword" autocomplete="new-password">
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>

                        <div class="checkbox-text">
                            <div class="checkbox-content">
                                <input type="checkbox" id="logCheck">
                                <label for="logCheck" class="text">Remember me</label>
                            </div>

                            <a href="#" class="text">Forgot password?</a>
                        </div>

                        <div class="input-field button">
                            <input type="submit" value="Login Now">
                        </div>
                    </form>

                    <div class="login-signup">
                        <span class="text">Not a member?
                            <a href="../views/signup.jsp" class="text signup-link">Signup now</a>
                        </span>
                    </div>
                </div>  
            </div>
        </div>

<script src="../scripts/script.js?v=99"></script>
 	<%
    	if(session.getAttribute("authStatus").equals("false")){
    			session.setAttribute("authStatus", "null");
    			out.println("<script>" );
 			    out.println("setTimeout(function(){ alert('wrong credentials'); }, 20);");
 			    out.println("var lform = document.getElementById('loginform');");
 			   	out.println("var il = document.getElementById('input-field');");
 			  	out.println("var ip = document.getElementById('input-field2');");
 				out.println("il.classList.add('error');");
 				out.println("ip.classList.add('error');");
 			    out.println("</script>");  
    	}
    %>

    </div>
</body>
</html>