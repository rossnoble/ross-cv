<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>	  <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>	  <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<title>Who is Ross Noble?</title>

	<meta http-equiv="X-UA-Compatible" content="chrome=1;IE=Edge" />
	<meta charset="utf-8" />

	<meta name="description" content="Ross Noble" />
	<meta name="keywords" content="Ross Noble" />
	<meta name="author" content="Ross Noble" />
	<meta charset="UTF-8" />

	<link rel="stylesheet" type="text/css" href="/css/style.css" />

	<script src="/js/modernizr.custom.98217.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>	
<!-- 	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js"></script>	 -->

	<!-- Google Analytics -->
	<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-12913476-3']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>

<body>

	<article id="main">
		
		<div class="">
			<header id="header" class="bookmark">
				<a id="mail-link" href="mailto:hello@rossnoble.net?subject=Hello!">Work with me!</a>
				<h1><a href="/">Ross Haliburton Noble</a></h1>
				<h2><span>Design</span> <span>Development</span> <span>Consulting</span></h2>
			</header>
		</div>
		
		<nav id="nav">
				<ul id="main-menu" class="">
					<li class="active"><a href="#header">Home</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
		</nav>
		
		<div id="body">
			
			<section id="services" class="bookmark">
				<div class="container">				
					<div class="column-12">
						<h2>Who are you? What do you do?</h2>
						<div id="about">
							<p>I am a freelance web designer and developer living and working in Montreal, QC. I work with <em>individuals</em>, <em>startups</em> and <em>established businesses</em> to solve problems using the web and other technology.</p>
							<p>Want to chat about your next project? <a href="mailto:hello@rossnoble.net?subject=Hello!">Send me an email</a>.</p>
						</div>
					</div>
					<div class="column-12">
						<h3>The Process</h3>
					</div>
				</div>
				<figure>
					<img src="/images/circle-graphic.png" />
				</figure>
			</section>
			
			<section id="portfolio" class="bookmark">
				<div class="container">
					<header class="column-12">
						<h2>Clients &amp; Sample Work</h2>
					</header>
					<?php 
						$projects = file_get_contents('projects.json'); 
						$projects = json_decode($projects, true);
					?>
			
					<?php foreach($projects['Clients'] as $project) : ?>
				
					<?php if ($project['active'] == 'true') : ?>
						
					<article>
						<div class="content">
					
							<div class="column-5">
								<div class="thumbnail">
									<a href="#">
										<img src="/images/projects/<?php echo $project['image_file'] ?>" width="" class="thumb" />	
									</a>	
									<div class="hover-msg">
										<span>View Larger Image</span>
									</div>
								</div>
							</div>
							<div class="column-7">
								<h3><?php echo $project['title'] ?>
									<a href="<?php echo $project['url'] ?>" target="_blank" class="external">Visit the Site &raquo;</a>
								</h3>
								<h4>The Project</h4>
								<p><?php echo $project['about'] ?></p>
					
								<h4>Services</h4>
								<ul class="tags">
									<?php foreach($project['services'] as $tag): ?>
									<li><?php echo $tag ?></li>
									<?php endforeach ?>
								</ul>
							</div>
						</div>
					</article>
					
					<?php endif ?>
					
					<?php endforeach; ?>
				</div>
			</section>
			
			<section id="projects" class="bookmark">
				
				<header class="">
					<h2>Other Projects</h2>
				</header>
				
				<div class="container">		
					<?php foreach($projects['Projects'] as $project) : ?>
				
					<article>
						<div class="content">
							<div class="column-5">
								<div class="thumbnail">
									<a href="#">
										<img src="/images/projects/<?php echo $project['image_file'] ?>" width="" />
									</a>
									<div class="hover-msg">
										<span>View Larger Image</span>
									</div>
								</div>
							</div>
							<div class="column-7">
								<h3><?php echo $project['title'] ?></h3>
								<p><?php echo $project['summary'] ?></p>
							</div>
						</div>
					</article>
				
					<?php endforeach ?>
				</div>
			</section>
			
			<section id="contact" class="bookmark">
				
				<header>
					<h2>Get in Touch</h2>	
				</header>
				
				<div class="container">
					<div class="column-8">
						<h3>Working Together</h3>
						<p>If you'd like to discuss collaborating on your next web project, don't hesitate to <a href="mailto:hello@rossnoble.net?subject=Hello!">send me an email</a>. Even if you're just in the early planning stages, let's chat. I might be able to help.</p>
					</div>
				
					<div id="elsewhere" class="column-4">
						<h3>Elsewhere</h3>
						<ul>
							<?php foreach($projects['Social'] as $item) : ?>
							<li><a href="<?php echo $item['url'] ?>" target="_blank"><?php echo $item['site'] ?></a></li>
							<?php endforeach ?>
						</ul>
					</div>
					
					<div class="column-12">
						<h3>A Little Bit About Me</h3>
							
						<img src="/images/ross-cartoon-212x212.jpg" class="avatar" />
						<p>I live and work in Montreal, QC where I'm active in the local startup scene. I was a co-founder of <a href="http://startupifier.com" target="_blank">Startupifier</a>, an organization that connects students to the startup community through hackathons and other events.</p>
						
						<p>When I'm not designing or coding, I enjoy watching movies, reading books and playing <a href="http://en.wikipedia.org/wiki/Puerto_Rico_(board_game)" target="_blank">German</a> <a href="http://en.wikipedia.org/wiki/Settlers_of_Catan" target="_blank">board</a> <a href="http://en.wikipedia.org/wiki/Carcassonne_(board_game)" target="_blank">games</a>.</p>
					</div>
					
					<footer id="footer" class="column-12">
						<small><p>Ross Noble. 2012 &copy; Copyright n' stuff.</small>
					</footer>
					
				</div>
				
			</section>
			
		</div>
		<!-- END .container -->
		<div id="resize"></div>

	<article>
		
	<div id="darkness" class="close">
		<div id="overlay">
			<!-- <div class="content"></div> -->
		</div>
	</div>
	
	<script src="/js/jquery.scrollTo-min.js"></script>
	<script src="/js/main.js"></script>
	
</body>
</html>