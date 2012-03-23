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
			<header id="header" class="">
				<a id="mail-link" href="mailto:hello@rossnoble.net?subject=Hello!">Work with me!</a>
				<h1><a href="/">Ross Haliburton Noble</a></h1>
				<h2><span>Design</span> <span>Development</span> <span>Consulting</span></h2>
			</header>
		</div>
		
		<nav id="nav">
				<ul id="main-menu" class="">
					<li><a href="#services">Services</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
		</nav>
		
		<div id="body">
			
			<section id="services">
				<div class="container">				
					<div class="column-4">
						<h3>About &rarr;</h3>
						<p>I am a freelance web designer &amp; developer living and working in Montreal, QC.</p>

						<p>I work with individuals, startups and established businesses to solve problems using web.</p>

						<p>Have a project you need help on? Send me an email. Let’s chat.</p>
					</div>
				</div>
			</section>
			
			<section id="portfolio">
				<div class="container">
					<header class="column-12">
						<h2>Clients &amp; Sample Work</h2>
					</header>
					<?php 
						$projects = file_get_contents('projects.json'); 
						$projects = json_decode($projects, true);
					?>
			
					<?php foreach($projects['Clients'] as $project) : ?>
				
					<article class="project">
					
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
					</article>
				
					<?php endforeach; ?>
				</div>
			</section>
			
			<section id="projects">
				
			</section>
			
			<section id="contact">
				<div class="container">
					<div class="column-4">
						<h3>Work</h3>
						<p>If you’d like to discuss collaborating on your next web project, don’t hesitate to <a href="mailto:hello@rossnoble.net?subject=Hello!">send me an email</a>. I offer the following services:</p>
						<ul>
							<li>Web &amp; graphic design</li>
							<li>Frontend &amp; backend web development</li>
							<li>Online marketing consulting</li>
						</ul>
					</div>
				
					<div class="column-4">
						<h3>Contact</h3>
						<p>If you’d like to discuss collaborating on your next web project, don’t hesitate to <a href="mailto:hello@rossnoble.net?subject=Hello!">send me an email</a>. I offer the following services:</p>
						<ul>
							<li>Web &amp; graphic design</li>
							<li>Frontend &amp; backend web development</li>
							<li>Online marketing consulting</li>
						</ul>
					</div>
					<div class="column-4">
						<h3>Projects</h3>
						<p>I am a co-founder of the social film review site <a href="http://burnreel.com" target="_blank" class="hoc">Burnreel</a> with <a href="http://robertbrockie.com" target="_blank" class="hoc">Robert Brockie</a>.</p>

						<p>I helped build a job search aggregator called <a href="http://www.perzoot.com" target="_blank" class="pz">Perzoot</a> with <a href="http://danielnephin.net/" target="_blank" class="pz">Daniel Nephin</a>.</p>

						<p>I was a co-founder of <a href="http://startupifier.com" target="_blank" class="stupf">Startupifier</a>, an organization that connects students to the startup community.</p>
					</div>
				</div>
			</section>
			
			<footer id="footer" class="column-12">
				<h3>A Little Bit About Me</h3>
				<p>I live in Montreal where I design and build websites and web applications.</p>

				<p>I also enjoy movies, books and <a href="http://en.wikipedia.org/wiki/Puerto_Rico_(board_game)" target="_blank">German</a> <a href="http://en.wikipedia.org/wiki/Settlers_of_Catan" target="_blank">board</a> <a href="http://en.wikipedia.org/wiki/Carcassonne_(board_game)" target="_blank">games</a>.</p>
				<p>You can follow me on <a href="http://twitter.com/rossnoble" target="_blank">Twitter</a>.</p>
				<small><p>Ross Noble. 2012 &copy; Copyright n' stuff.</small>
			</footer>
		</div>
		<!-- END .container -->
		<div id="resize"></div>

	<article>
		
		
	<script src="/js/jquery.scrollTo-min.js"></script>
	<script src="/js/main.js"></script>
	
</body>
</html>