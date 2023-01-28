<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Insert title here</title>
	<link rel="stylesheet" href="../styles/auth.css?v=1990" />
	
</head>
<body>

	<p class="main"> Registered Successfully.. </p>
	<p class="sub"> Redirecting to login in <span>4</span> seconds. </p>
	
	<script>
		var count = document.getElementsByTagName("span")[0];
		var num = parseInt(count.innerText);
		
		const timer = setInterval(() => {
		    num-=1;
		    if(num == 0){
		    	window.location.href="http://localhost:8080/MOVIEHUB/views/login.jsp";
		    	clearInterval(timer);
		    }
		    count.innerText = num.toString();
		}, 1000);

		console.log(count.innerText);
	</script>
</body>
</html>