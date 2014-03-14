<article class="Article" id="article-<?php the_ID() ?>">
										
	<header class="Article-header">

		<div class="Article-meta">
			<time class="Article-date" datetime="<?php get_the_date( 'c' ) ?>"><?php echo get_the_date( 'd.m.Y' ) ?></time>
			<?php the_category() ?>
		</div>
		
		<h2 class="Article-title"><?php the_title() ?></h2>

	</header>

	<div class="Article-content entry">
    	<?php the_content() ?>
    </div>

</article>