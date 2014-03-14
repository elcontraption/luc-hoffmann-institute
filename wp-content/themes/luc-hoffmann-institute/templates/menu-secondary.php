<?php
/**
 * The secondary (page) menu
 */
?>

<nav class="Secondary-menu">
	<?php wp_nav_menu( array(
		'theme_location' => 'main-menu',
		'menu_id' => false,
		'menu_class' => false,
		'walker' => new Hoffmann_Secondary_Menu_Walker(),
		'depth' => 2
	) ) ?>
</nav>