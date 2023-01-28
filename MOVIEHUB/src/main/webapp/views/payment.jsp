<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.moviehub.web.model.User" %>    
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

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="../styles/style.css">

    <title>Payment</title>
</head>

<body>
    <div class="logo-btn">
        <a href="../snippets/main.html">
       	 <img class="logo" src="../images/loginlogo.jpeg">
        </a>
    </div>
    <div class="body-container">
        <div class="container">
            <div class="payform">
                <div class="form login">
                    <span class="title">Payment</span>
                    <div class="xmark">
                        <a href="../snippets/main.html"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACSUlEQVRIS8WVT4hPURTHZ8piFpKFwU5ZCTMRirIRC6KQP9ko5P+KFCHNiPInsfRnUqNGiSSRv4vZTJEUC2ShZEVSLBQLC5/PdO90ut7zxuKXW5/ue+fde7/nnnPufe1tLW7tLV6/rUlgDA6sgDWwECYkh77QD8FNuAu/6hz9m8BiJm2H9Q27vMX3C/CoalyVgF7vgWPQAW/hKryEp8k2l34OrIVp8BOOwJlSpEpgP4NOwQ84n3hXs4up2HfAThgHB+FkHFsK6M2L5OVG+oGahUvzUgx3wFzMTrseHhMFxvN+EYz5WdgXVjFUhiG20qbnB+A27IKPpcAqDCbMmM+D72m1c/TGfFmwjeX5PjyHvWmcgu7eKIzsPu6gjw9b4Sj0pknu6kmaZFkqYnNxy1ZnFsC3ZHdeD/TDZm1R4BXvM8AQ3UgT7CbDYBDRlhdfxPOnMHYdz9fBtbpKgc8YOpPImzDJx1nJM8NoewDu1LKNbTovr8G1JtUJzEyD4sTutGAWMES98KwQMAJ6XylQF6Kc0BwW1zSRxv+fQnSZCVuSZ27fZmU8hhhz7TknZZJNsDu7ApvKEHnsTa6TPCy57i1TD1L0NifeXFSVqRXUXwpMxOCltRpOg4cmN8s1l2Kd7TgfDsM92A0fSgHf41VhzevhaNoSBpl4rwrPhRfjcKu67PTcY/8VLoHXx/salSnYt4HXuiV+CE7Esf/lus4OmFiv4ZUNMTLmXuv+2f5oo/llbmDWcpgP8ZfpKX4I16C8aUeEmgQanG/+3HKB3zEGhBm3NOz6AAAAAElFTkSuQmCC" /></a>
                    </div>
                    <form id="form" action="payment" method="post" onsubmit="return validation();">
                        <div class="input-field">
                            <input type="text" placeholder="Enter your card number" required id="cardno">
                            <i class="fa fa-credit-card" autocomplete="off" style="font-size:24px"></i>
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="MM/YY" inputmode="numeric" required id="expiry"
                                maxlength="5" onkeypress="return isNumber(event)">
                            <i class="uil uil-calender"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="CVV" required id="cvv" maxlength="3"
                                onkeypress="return isNumber(event)">
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Enter card holder name" required id="cardname"
                                style="text-transform: uppercase;">
                            <i class="uil uil-user-circle"></i>
                        </div>
                        <div class="input-field button">
                            <input type="submit" value="Pay Now">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src="../scripts/payment.js"></script>
    <script>
        $('#cardno').on('input propertychange paste', function () {
            var value = $('#cardno').val();
            var formattedValue = formatCardNumber(value);
            $('#cardno').val(formattedValue);
        });

        function formatCardNumber(value) {
            var value = value.replace(/\D/g, '');
            var formattedValue;
            var maxLength;
            // american express, 15 digits
            if ((/^3[47]\d{0,13}$/).test(value)) {
                formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
                maxLength = 17;
            } else if ((/^3(?:0[0-5]|[68]\d)\d{0,11}$/).test(value)) { // diner's club, 14 digits
                formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
                maxLength = 16;
            } else if ((/^\d{0,16}$/).test(value)) { // regular cc number, 16 digits
                formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
                maxLength = 19;
            }

            $('#cardno').attr('maxlength', maxLength);
            return formattedValue;
        }
        var characterCount
        $('#expiry').on('input', function (e) {
            if ($(this).val().length == 2 && characterCount < $(this).val().length) {
                $(this).val($(this).val() + '/');
            }
            characterCount = $(this).val().length
        });
    </script>

</body>

</html>