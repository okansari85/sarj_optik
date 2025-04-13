<template>
<!--=============== HEADER ===============-->
<header :class="['header', isScrolled ? 'header-scroll' : '']">
		<div class="container">
			<a href="#" class="nav-btn">
				<span></span>
				<span></span>
				<span></span>
			</a>
			<div class="row align-items-center">
				<!--=============== LOGO ===============-->
				<div class="col-12 col-sm-6 col-lg-3 logo-item">
					<a href="index.html" class="logo"><Logo/></a>
				</div>
				<!--============= LOGO END =============-->
				<div class="col-6 nav-menu-cover">
					<!--============= NAV MENU =============-->
					<nav class="nav-menu">
						<ul class="nav-list">
							<li class="active">
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="about.html">About us</a>
							</li>
							<li class="dropdown">
								<a href="#">pages <i class="fa fa-angle-down" aria-hidden="true"></i></a>
								<ul>
									<li><a href="services.html">Services</a></li>
									<li><a href="blog.html">News</a></li>
									<li><a href="pravicy-policy.html">Pravicy policy</a></li>
									<li><a href="404.html">404</a></li>
								</ul>
							</li>
							<li><a href="shop.html">Shop</a></li>
							<li><a href="gallery.html">Gallery</a></li>
							<li><a href="contacts.html">Contacts</a></li>
						</ul>
					</nav>
					<!--=========== NAV MENU END ===========-->
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<!--============ HEADER ICON ============-->
					<ul class="header-icon">
						<li class="search">
							<a class="icon" href="#">
								<i class="fa fa-search" aria-hidden="true"></i>
							</a>
							<form action="#">
								<input type="search" name="search" placeholder="Search">
								<button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
							</form>
						</li>
						<li class="favorites">
							<a class="icon" href="#">
								<i class="fa fa-heart" aria-hidden="true"></i>
								<span>2</span>
							</a>
						</li>
						<li>
							<a class="icon" href="#">
								<i class="fa fa-user" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a class="icon" href="#">
								<i class="fa fa-shopping-cart" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
					<!--========== HEADER ICON END ==========-->
				</div>
			</div>
		</div>
	</header>
	<!--============= HEADER END =============-->
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '~/assets/svg/logo.svg'
const isScrolled = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 150
}

onMounted(() => {
  checkScroll() // Sayfa yüklendiğinde ilk kontrol
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
