<?php

if (!function_exists('aceofpen_setup')) :
    function aceofpen_setup()
    {
        // Add support for block styles.
        add_theme_support('wp-block-styles');

        // Enqueue editor styles.
        add_editor_style('style.css');
    }

endif;
add_action('after_setup_theme', 'aceofpen_setup');


/* css/js enqueue */
function aceofpen_theme_scripts()
{
    wp_enqueue_style('aceofpen-style', get_stylesheet_uri());

    // wp_enqueue_style('slider', get_template_directory_uri() . '/css/slider.css', array(), '1.1', 'all');

    wp_enqueue_script('aceofpen_script', get_template_directory_uri() . '/src/js/script.js', array('jquery'), 1.1, true);

    // if (is_singular() && comments_open() && get_option('thread_comments')) {
    //     wp_enqueue_script('comment-reply');
    // }
}
add_action('wp_enqueue_scripts', 'aceofpen_theme_scripts');
