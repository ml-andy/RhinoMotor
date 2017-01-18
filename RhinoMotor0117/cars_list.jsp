<%@page contentType="text/html; charset=UTF-8"%>
<%@page import="java.util.*" %>
<%@taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@taglib uri="/WEB-INF/struts-bean.tld" prefix="bean"%>
<%@taglib uri="/WEB-INF/struts-logic.tld" prefix="logic"%>
<%@taglib uri="/WEB-INF/struts-html.tld" prefix="html"%>
<html>
<head>
<title>騰富國際 RHINO MOTOR</title>
<meta charset="UTF-8">
<meta lang="tw">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=640,user-scalable=no">
<meta name="description" content="騰富國際RHINO MOTOR除了專營各廠牌超跑買賣交流以外還設置專業保修廠及烤漆廠，專精Lamborghini、Ferrari、Porsche、Bentley、Benz、BMW各廠牌全車系並有6大專業服務。"/>
<meta name="keywords" content="關鍵字"/>
<meta name="copyright" content="design : 王逸賢 @ 2016"/>
<meta property="fb:app_id" content="1417992648226716" />
<meta property="og:title" content="騰富國際 RHINO MOTOR"/>
<meta property="og:type" content="website"/>    
<meta property="og:image" content="images/fbsc.jpg"/>
<meta property="og:site_name" content="騰富國際 RHINO MOTOR"/>
<meta property="og:description" content="騰富國際RHINO MOTOR除了專營各廠牌超跑買賣交流以外還設置專業保修廠及烤漆廠，專精Lamborghini、Ferrari、Porsche、Bentley、Benz、BMW各廠牌全車系並有6大專業服務。"/>
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<!---->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/device.min.js"></script>
<script type="text/javascript" src="//connect.facebook.net/zh_TW/all.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<!--css-->
<link rel="stylesheet" href="css/jquery.mCustomScrollbar.css"/>
<link rel="stylesheet" href="css/common.css"/>
<!--js-->
<script src="js/ga.js"></script>
<script src="js/common.js"></script>
</head>
<body>
	<div class="loading">
		<div class="main">
			<div class="pic"></div>
			<span>Loading...</span>	
		</div>		
	</div>		
	<div class="menu_mobile">
		<div class="menuin">
			<div class="menua"><a href="cars_list.html">CARS</a></div>
			<div class="menua"><a href="service.html">SERVICE</a></div>
			<div class="menua"><a href="about.html">ABOUT</a></div>
			<div class="menua"><a href="press_list.html">PRESS</a></div>
			<div class="menua"><a href="javascript:;">CONTACT US</a></div>
		</div>
	</div>
	<div class="top">
		<div class="topin">
			<div class="logo"><a href="index.html"></a></div>
			<div class="menu">
				<div class="menuin">
					<div class="menua"><a href="cars_list.html">CARS</a></div>
					<div class="menua"><a href="service.html">SERVICE</a></div>
					<div class="menua"><a href="about.html">ABOUT</a></div>
					<div class="menua"><a href="press_list.html">PRESS</a></div>
					<div class="menua"><a href="javascript:;">CONTACT US</a></div>
				</div>
			</div>
			<div class="right">
				<div class="btn search">
					<div class="search_btn"></div>
					<input type="text" class="search_text" placeholder="SEARCH">
				</div>
				<div class="btn member_btn">BE SOCIAL</div>
				<div class="btn fb_btn"><a href="https://www.facebook.com/RHINO-MOTOR-1470554113202974/" target="blank"></a></div>
				<div class="btn yahoo_btn"><a href="https://goo.gl/UkMWHd" target="blank"></a></div>
			</div>
		</div>
	</div>	
	<div class="wrapper cars_list">
		<div class="fixed_icon_yahoo"><a href="https://goo.gl/UkMWHd" target="blank"></a></div>
		<div class="sec_menu">
			<div class="sec_menuin">
				<div class="title">CARS</div>
				<c:forEach items="${cas_kind}" var="list" varStatus="status">
				<div class="menua"><a href="${pageContext.request.contextPath}/index.do?method=carsList&id==${list.id}">${list.productkindname}</a></div>
				</c:forEach>
			</div>
		</div>
		<div class="content">
			<div class="cars_list">
				<div class="cars_listin">
					<logic:present name="cars_list" scope="session">
					<c:forEach items="${cars_list}" var="result" varStatus="status">
					<div class="n">
						<a href="cars_content.html">
							<div class="pic"><img src="images/cars_list_pic1.jpg"></div>
							<div class="word">
								<div class="t">2014年Porsche 911 GT3</div>
								<div class="price">電洽</div>
								<div class="date">2016/05/03</div>
							</div>								
						</a>
					</div>
					</c:forEach>
					</logic:present>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="contact">
			<div class="left"><div class="pic"></div></div>
			<div class="right">
				<div class="main">
					<div class="lt">
						<div class="fb_box">
							<div class="fb-page" data-href="https://www.facebook.com/RHINO-MOTOR-%E7%8A%80%E7%89%9B%E6%B1%BD%E8%BB%8A-1470554113202974/" data-tabs="timeline" data-width="340" data-height="206" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>							
						</div>
						<div class="user_data">
							<input class="user_name" placeholder="NAME"></input>
							<input class="user_phone" placeholder="PHONE"></input>
							<input class="user_mail" placeholder="E-MAIL"></input>
							<input class="user_addr" placeholder="ADDRESS"></input>
						</div>
					</div>
					<div class="rt">
						<textarea class="message" placeholder="message"></textarea>
						<div class="send_btn"><span>ENTER</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="footerin">© 2016 RHINO MOTOR     台北市內湖區瑞光路115號     客服專線：02 2793 5725</div>
	</div>
	<div id="fb-root"></div>	
</body>
</html>