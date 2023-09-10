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
    wp_enqueue_script('aceofpen_script', get_template_directory_uri() . '/src/js/script.js', array('jquery'), 1.1, true);
}

add_action('wp_enqueue_scripts', 'aceofpen_theme_scripts');

/**
 * Make popular posts links red in 'cards-compact' theme.
 *
 * @param  string $additional_styles
 * @param  string $theme_name
 * @return string
 */
function wpp_additional_css_rules($additional_styles, $theme_name)
{
    if ('cards-compact' == $theme_name) {
        $additional_styles .= '.wpp-cards-compact li {
            border-bottom: 0;
        }
        .wpp-cards-compact li .wpp-thumbnail{
            margin-right: 25px;
        }
        .wpp-cards-compact li .wpp-taxonomy {
            font-family: \'Inter Tight\', sans-serif;
            font-weight: 300;
            font-size: 21px;
            color: #dedede;
        }
        .wpp-cards-compact li .wpp-taxonomy:hover {
            color: #666;
            text-decoration: none;
        }
        .wpp-cards-compact li .wpp-post-title {
            font-family: \'Inter Tight\', sans-serif;
            font-weight: 300;
            font-size: 27px;
            line-height: 1.3;
            letter-spacing: -0.25px;
            color: #555;
            margin-bottom: 9px;
        }
        .wpp-cards-compact li .wpp-post-title:hover {
            color: #2288f8;
            text-decoration: none;
        }';
    }
    return $additional_styles;
}
add_filter('wpp_additional_theme_styles', 'wpp_additional_css_rules', 10, 2);
