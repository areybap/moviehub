<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="com.moviehub.web.model.User" %>
<%@page import="com.moviehub.web.model.pay" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MOVIE HUB</title>
    <link rel="stylesheet" href="../styles/main.css">
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
            <form id="search-form">
                <input type="search" placeholder="Search" id="search" class="search">
            </form>
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
    <main>
        <div class="container" id="swiper-container">
            <div class="swiper-button-prev" style="color: #ffcc00;"></div>
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper" id="slider">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <img src="https://thumbs.dreamstime.com/b/trollface-spectacled-internet-troll-d-illustration-laughing-isolated-53719314.jpg"
                            alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://thumbs.dreamstime.com/b/trollface-spectacled-internet-troll-d-illustration-laughing-isolated-53719314.jpg"
                            alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://thumbs.dreamstime.com/b/trollface-spectacled-internet-troll-d-illustration-laughing-isolated-53719314.jpg"
                            alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://thumbs.dreamstime.com/b/trollface-spectacled-internet-troll-d-illustration-laughing-isolated-53719314.jpg"
                            alt="">
                    </div>

                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-next" style="color: #ffcc00;"></div>
        </div>
        <h1 class="division-box" id="division-box">IN THEATERS NOW!!!</h1>
        <div class="movie-grid">
        </div>
        <div class="main" id="main">
            <div class="movie">
                <img src=https://t3.ftcdn.net/jpg/00/66/80/68/360_F_66806807_gmBKIxKa2zgSr1r3878ko0NrurGeOtqu.jpg>
                <div class="movie-info">
                    <h3>movie title</h3>
                    <span class="green">9.8</span>
                </div>
                <div class="overview">
                    <div class="moviestatus">
                        <h3>Overview</h3>
                        <div class="circle"></div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit qui dolorem provident saepe
                    voluptatibus repellendus nam, animi deserunt maxime?
                </div>
            </div>
            <div class="movie">
                <img src=https://c.tenor.com/AqqcJZppkdoAAAAC/troll-troll-face.gif>
                <div class="movie-info">
                    <h3>movie title</h3>
                    <span class="green">9.8</span>
                </div>
                <div class="overview">
                    <div class="moviestatus">
                        <h3>Overview</h3>
                        <div class="circle"></div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit qui dolorem provident saepe
                    voluptatibus repellendus nam, animi deserunt maxime?
                </div>
            </div>
            <div class="movie">
                <img src=https://c.tenor.com/AqqcJZppkdoAAAAC/troll-troll-face.gif>
                <div class="movie-info">
                    <h3>movie title</h3>
                    <span class="green">9.8</span>
                </div>
                <div class="overview">
                    <div class="moviestatus">
                        <h3>Overview</h3>
                        <div class="circle"></div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit qui dolorem provident saepe
                    voluptatibus repellendus nam, animi deserunt maxime?
                </div>
            </div>
        </div>
        <div class="pagination">
            <div class="page disabled" id="prev">Previous Page</div>
            <div class="current" id="current">1</div>
            <div class="page" id="next">Next Page</div>
        </div>
    </main>
    <footer>
        <section class="footer">
            <div class="social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-discord"></i></a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="https://pastebin.com/B0UWXCkq">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
            <p class="copyright">© Movie HUB @ 2022</p>
        </section>
    </footer>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script>
        const swiper = new Swiper('.swiper', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
            observeParents: true,

        });
    </script>
    <script src="../scripts/main.js"></script>

</body>

</html>