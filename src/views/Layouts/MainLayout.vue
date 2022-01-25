<template>
    <div id="wrapper">
		<header id="header" class="site-header ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-6 col-5">
                        <div class="site">
                            <div class="site__menu">
                                <a title="Menu Icon" href="#" class="site__menu__icon">
                                    <i class="las la-bars la-24-black"></i>
                                </a>
                                <div class="popup-background"></div>
                                <div class="popup popup--left">
                                    <a title="Close" href="#" class="popup__close">
                                        <i class="las la-times la-24-black"></i>
                                    </a><!-- .popup__close -->
                                    <div class="popup__content">
                                        <div class="popup__user popup__box open-form d-none">
                                            <a title="Login" href="#" class="open-login">Login</a>
                                            <a title="Sign Up" href="#" class="open-signup">Sign Up</a>
                                        </div><!-- .popup__user -->
                                      <div class="p-5"></div>
                                        <div class="popup__menu popup__box">
                                            <ul class="menu-arrow">
                                                <li>
                                                    <router-link to="/" title="Demos">Home</router-link>
                                                   
                                                </li>
                                                <li>
                                                    <router-link to="/about" title="Demos">About</router-link>
                                                   
                                                </li>

                                                <li>
                                                    <router-link to="/contact" title="Demos">Contact</router-link>
                                                   
                                                </li>
                                                <li>
                                                    <router-link to="/market-place" title="Listings">Market Place</router-link>
                                                  
                                                </li>
                                               
                                                
                                            </ul>
                                        </div><!-- .popup__menu -->
                                    </div><!-- .popup__content -->
                                    <div class="popup__button popup__box d-none">
                                        <a title="Add place" href="add-place.html" class="btn">
                                            <i class="la la-plus"></i>
                                            <span>Login</span>
                                        </a>
                                    </div><!-- .popup__button -->
                                </div><!-- .popup -->
                            </div><!-- .site__menu -->
                            <div class="site__brand">
                                <a title="Logo" href="home-restaurant.html" class="site__brand__logo"><img src="images/assets/logo.png" alt="Golo"></a>
                            </div><!-- .site__brand -->

                            
                            
                        </div><!-- .site -->
                    </div><!-- .col-md-6 -->
                    <div class="col-xl-6 col-7">
                        <div class="right-header align-right">
                            <nav class="main-menu ">
                                <ul>
                                    <li>
                                        <router-link to="/" title="Demos">Home</router-link>
                                     
                                    </li>
                                    <li>
                                        <router-link to="/about" title="Listings">About us</router-link>
                                      
                                    </li>
                                    <li>
                                        <router-link  to="/contact">Contact us</router-link>
                                      
                                    </li>

                                    <li>
                                        <router-link title="Page" to="/market-place">Market Place</router-link>
                                      
                                    </li>
                                </ul>
                            </nav>
                            <div class="right-header__login d-none">
                                <a title="Login" class="open-login" href="#">Login..</a>
                            </div><!-- .right-header__login -->
                            <div class="popup popup-form">
                                <a title="Close" href="#" class="popup__close">
                                    <i class="las la-times la-24-black"></i>
                                </a><!-- .popup__close -->
                                <ul class="choose-form">
                                    <li class="nav-signup"><a title="Sign Up" href="#signup">Sign Up</a></li>
                                    <li class="nav-login"><a title="Log In" href="#login">Log In</a></li>
                                </ul>
                                <p class="choose-more">Continue with <a title="Facebook" class="fb" href="#">Facebook</a> or <a title="Google" class="gg" href="#">Google</a></p>
                                <p class="choose-or"><span>Or</span></p>
                                <div class="popup-content">
                                    <form action="#" class="form-sign form-content" id="signup">
                                        <div class="field-inline">
                                            <div class="field-input">
                                                <input type="text" placeholder="First Name" value="" name="first_name">
                                            </div>
                                            <div class="field-input">
                                                <input type="text" placeholder="Last Name" value="" name="last_name">
                                            </div>
                                        </div>
                                        <div class="field-input">
                                            <input type="email" placeholder="Email" value="" name="email">
                                        </div>
                                        <div class="field-input">
                                            <input type="password" placeholder="Password" value="" name="password">
                                        </div>
                                        <div class="field-check">
                                            <label for="accept">
                                                <input type="checkbox" id="accept" value="">
                                                Accept the <a title="Terms" href="#">Terms</a> and <a title="Privacy Policy" href="#">Privacy Policy</a>
                                                <span class="checkmark">
                                                    <i class="la la-check"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <input type="submit" name="submit" value="Sign Up">
                                    </form>
                                    <form action="#" class="form-log form-content" id="login">
                                        <div class="field-input">
                                            <input type="text" placeholder="Username or Email" value="" name="user">
                                        </div>
                                        <div class="field-input">
                                            <input type="password" placeholder="Password" value="" name="password">
                                        </div>
                                        <a title="Forgot password" class="forgot_pass" href="#">Forgot password</a>
                                        <input type="submit" name="submit" value="Login">
                                    </form>
                                </div>
                            </div><!-- .popup-form -->
                            <div class="right-header__search">
                                <a title="Search" href="#" class="search-open">
                                    <i class="las la-search la-24-black"></i>
                                </a>
                                <div class="site__search">
                                    <a title="Close" href="#" class="search__close">
                                        <i class="la la-times"></i>
                                    </a><!-- .search__close -->
                                    <form action="#" class="site__search__form" method="GET">
                                        <div class="site__search__field">
                                            <span class="site__search__icon">
                                                <i class="las la-search la-24-black"></i>
                                            </span><!-- .site__search__icon -->
                                            <input class="site__search__input" type="text" name="s" placeholder="Search places, cities">
                                        </div><!-- .search__input -->
                                    </form><!-- .search__form -->
                                </div><!-- .site__search -->
                            </div>
                            <div class="right-header__button btn">
                                <a title="Add place" href="add-place.html">
                                    
                                    <span>Login</span>
                                </a>
                            </div><!-- .right-header__button -->
                        </div><!-- .right-header -->
                    </div><!-- .col-md-6 -->
                </div><!-- .row -->
            </div><!-- .container-fluid -->
        </header><!-- .site-header -->

        <router-view></router-view>

		<footer id="footer" class="footer">
			<div class="container">
				<div class="footer__top">
					<div class="row">
						<div class="col-lg-5">
							<div class="footer__top__info">
								<a title="Logo" href="01_index_1.html" class="footer__top__info__logo"><img src="images/assets/logo.png" alt="Golo"></a>
								<p class="footer__top__info__desc">Discover amazing deals everywhere you go.</p>
								<div class="footer__top__info__app d-none">
									<a title="App Store" href="#" class="banner-apps__download__iphone"><img src="images/assets/app-store.png" alt="App Store"></a>
									<a title="Google Play" href="#" class="banner-apps__download__android"><img src="images/assets/google-play.png" alt="Google Play"></a>
								</div>
							</div>
						</div>
						<div class="col-lg-2">
							<aside class="footer__top__nav">
								<h3>Company</h3>
								<ul>
									<li><a title="About Us" href="06_about-us.html">About Us</a></li>
									<li><a title="Blog" href="07_blog-right-sidebar.html">Blog</a></li>
									
									<li><a title="Contact" href="09_contact-us.html">Contact</a></li>
								</ul>
							</aside>
						</div>
						<div class="col-lg-2 d-none">
							<aside class="footer__top__nav">
								<h3>Support</h3>
								<ul>
									<li><a title="Get in Touch" href="#">Get in Touch</a></li>
									<li><a title="Help Center" href="#">Help Center</a></li>
									<li><a title="Live chat" href="#">Live chat</a></li>
									<li><a title="How it works" href="#">How it works</a></li>
								</ul>
							</aside>
						</div>
						<div class="col-lg-3">
							<aside class="footer__top__nav footer__top__nav--contact">
								<h3>Contact Us</h3>
								<p>Email: support@housedealsafrica.com</p>
								<p>Phone: 1 (00) 832 2342</p>
								<ul>
									<li class="facebook">
										<a title="Facebook" href="#">								
											<i class="la la-facebook-f"></i>
										</a>
									</li>
									<li class="twitter">
										<a title="Twitter" href="#">															
											<i class="la la-twitter"></i>
										</a>
									</li>
									<li class="youtube">
										<a title="Youtube" href="#">								
											<i class="la la-youtube"></i>
										</a>
									</li>
									<li class="instagram">
										<a title="Instagram" href="#">								
											<i class="la la-instagram"></i>
										</a>
									</li>
								</ul>
							</aside>
						</div>
					</div>
				</div><!-- .top-footer -->
				<div class="footer__bottom">
					<p class="footer__bottom__copyright">2022 &copy; <a title="Uxper Team" href="#">HouseDealsAfrica</a>. All rights reserved.</p>
				</div><!-- .top-footer -->
			</div><!-- .container -->
		</footer><!-- site-footer -->
	</div><!-- #wrapper -->
</template>