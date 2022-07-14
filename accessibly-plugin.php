<?php
/**
 * Plugin Name:       Accessibly
 * Description:       Accessibility app by On The Map Marketing
 * Requires at least: 5.5
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            On The Map Marketing
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accessibly
 */
require_once (__DIR__.'/vendor/autoload.php');

 // If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

add_action('admin_menu', 'accessibly_init_menu');

/**
 * Init Admin Menu.
 *
 * @return void
 */
function accessibly_init_menu()
{
    $accessiblyIcon = '<svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2984 5.70161C20.0027 3.40591 17.2366 2.25806 14 2.25806C10.7634 2.25806 7.99731 3.40591 5.70161 5.70161C3.40591 7.99731 2.25806 10.7634 2.25806 14C2.25806 17.2366 3.40591 20.0027 5.70161 22.2984C7.99731 24.5941 10.7634 25.7419 14 25.7419C17.2366 25.7419 20.0027 24.5941 22.2984 22.2984C24.5941 20.0027 25.7419 17.2366 25.7419 14C25.7419 10.7634 24.5941 7.99731 22.2984 5.70161ZM4.06452 4.12097C6.81183 1.37366 10.1237 0 14 0C17.8763 0 21.1694 1.37366 23.879 4.12097C26.6263 6.83065 28 10.1237 28 14C28 17.8763 26.6263 21.1882 23.879 23.9355C21.1694 26.6452 17.8763 28 14 28C10.1237 28 6.81183 26.6452 4.06452 23.9355C1.35484 21.1882 0 17.8763 0 14C0 10.1237 1.35484 6.83065 4.06452 4.12097ZM6.32258 6.32258C8.43011 4.21505 10.9892 3.16129 14 3.16129C17.0108 3.16129 19.5699 4.21505 21.6774 6.32258C23.7849 8.43011 24.8387 10.9892 24.8387 14C24.8387 17.0108 23.7849 19.5699 21.6774 21.6774C19.5699 23.7849 17.0108 24.8387 14 24.8387C10.9892 24.8387 8.43011 23.7849 6.32258 21.6774C4.21505 19.5699 3.16129 17.0108 3.16129 14C3.16129 10.9892 4.21505 8.43011 6.32258 6.32258ZM15.4113 6.26613C15.0349 5.85215 14.5645 5.64516 14 5.64516C13.4355 5.64516 12.9462 5.85215 12.5323 6.26613C12.1559 6.64247 11.9677 7.1129 11.9677 7.67742C11.9677 8.24194 12.1559 8.73118 12.5323 9.14516C12.9462 9.52151 13.4355 9.70968 14 9.70968C14.5645 9.70968 15.0349 9.52151 15.4113 9.14516C15.8253 8.73118 16.0323 8.24194 16.0323 7.67742C16.0323 7.1129 15.8253 6.64247 15.4113 6.26613ZM20.6613 11.1774C20.8871 11.1398 21.0565 11.0081 21.1694 10.7823C21.3199 10.5565 21.3575 10.3306 21.2823 10.1048C21.2446 9.8414 21.1129 9.65323 20.8871 9.54032C20.6989 9.38979 20.4731 9.35215 20.2097 9.42742C17.5 10.0672 15.4301 10.3871 14 10.3871C12.5699 10.3871 10.5 10.0672 7.79032 9.42742C7.52688 9.35215 7.28226 9.38979 7.05645 9.54032C6.86828 9.65323 6.73656 9.8414 6.66129 10.1048C6.62366 10.3306 6.66129 10.5565 6.77419 10.7823C6.92473 10.9704 7.1129 11.1022 7.33871 11.1774C9.33333 11.629 10.8763 11.9301 11.9677 12.0806C11.9677 13.8495 11.8737 15.3548 11.6855 16.5968C11.5349 17.8011 11.4032 18.5914 11.2903 18.9677C11.1774 19.3065 10.9328 19.9274 10.5565 20.8306C10.4812 21.0941 10.5 21.3575 10.6129 21.621C10.7258 21.8844 10.914 22.0726 11.1774 22.1855C11.4409 22.2608 11.6855 22.2419 11.9113 22.129C12.1747 22.0161 12.3629 21.8468 12.4758 21.621C13.1532 19.8898 13.5672 18.4032 13.7177 17.1613H14.2823C14.4328 18.4032 14.8468 19.8898 15.5242 21.621C15.6371 21.8468 15.8065 22.0161 16.0323 22.129C16.2957 22.2419 16.5591 22.2608 16.8226 22.1855C17.086 22.0726 17.2742 21.8844 17.3871 21.621C17.5 21.3575 17.5188 21.0941 17.4435 20.8306C17.0672 19.9274 16.8226 19.3065 16.7097 18.9677C16.5968 18.5914 16.4462 17.8011 16.2581 16.5968C16.1075 15.3548 16.0323 13.8495 16.0323 12.0806C17.1237 11.9301 18.6667 11.629 20.6613 11.1774Z" fill="#fff"/></svg>';
    add_menu_page(__('Accessibly App', 'accessibly-otm'), __('Accessibly', 'accessibly-otm'), 'manage_options', 'accessibly-otm', 'accessibly_admin_page', 'data:image/svg+xml;base64,' . base64_encode( $accessiblyIcon ), '2.1');
    add_submenu_page('accessibly-otm',  __('My Plan', 'accessibly-otm'), __('My Plan', 'accessibly-otm'), 'manage_options',  __('accessibly-plan', 'accessibly-otm'), 'accessibly_my_plan_page');
    add_submenu_page('accessibly-otm',  __('Accessibly Statement', 'accessibly-otm'), __('Accessibly Statement', 'accessibly-otm'), 'manage_options',  __('accessibly-statement', 'accessibly-otm'), 'accessibly_statement_page');
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function accessibly_admin_page()
{
    require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}

/**
 * Init My Plan Page.
 *
 * @return void
 */
function accessibly_my_plan_page()
{
    require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}

/**
 * Init Accessibly Statement Page.
 *
 * @return void
 */
function accessibly_statement_page()
{
    require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}

add_action('admin_enqueue_scripts', 'accessibly_admin_enqueue_scripts');

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function accessibly_admin_enqueue_scripts()
{
    wp_enqueue_style('accessibly-style', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_enqueue_script('accessibly-script', plugin_dir_url(__FILE__) . 'build/index.js', [ 'wp-element' ], '1.0.0', true);
}

function save_token()
{
    $token = $_POST['token'];
    add_option('otm_accessibly_token', $token);

    return true;
    exit();
}
add_action('wp_ajax_nopriv_save_token', 'save_token');
add_action('wp_ajax_save_token', 'save_token');

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_otm_ac_plugin()
{
    $plugin = new OTM_AC_Plugin();
    $plugin->otm_ac_run();
}
// run_otm_ac_plugin();

add_action('wp_enqueue_scripts', 'otm_ac_enqueue_scripts');
/**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since    1.0.0
     */
function otm_ac_enqueue_scripts()
{
    $url = `https://ac.onthemapmarketing.com/api/fetch-settings`;
    // $url = "http://accessibly-dashboard.test/api/fetch-settings";
    $token = get_option('otm_accessibly_token');


    $client = new GuzzleHttp\Client;

    $response = $client->get("https://ac.onthemapmarketing.com/api/fetch-settings", [
        'headers' => [
            'Authorization' => 'Bearer ' . $token,
        ]
    ]);

    $userData = json_decode($response->getBody(), true);

    wp_enqueue_script(
        "accessibly-widget",
        plugins_url('public/js/otm-ac-plugin-public.js', __FILE__)
    );

    $otmAcScriptData = [
        'showZoom' => in_array("bigger_text", $userData["features"]),
        'showCursor' => in_array("bigger_cursor", $userData["features"]),
        'showInvertColors' => in_array("invert_colors", $userData["features"]),
        'showContrast' => in_array("contrast", $userData["features"]),
        'showGrayScale' => in_array("grayscale", $userData["features"]),
        'showBrightness' => in_array("brightness", $userData["features"]),
        'iconColor' => $userData["settings"]["theme"]["icons"],
        'themeColor' => $userData["settings"]["theme"]["branding"],
        'position' => $userData["settings"]["position"]["type"],
        'showHighlightLinks' => in_array("highlight_links", $userData["features"]),
        'showHideImages' => in_array("hide_images", $userData["features"]),
        'showTooltip' => in_array("tooltips", $userData["features"]),
        'showVoiceOverText' => in_array("read_page", $userData["features"]),
        'showReadingLine' => in_array("reading_line", $userData["features"]),
        'showReadableFonts' => in_array("readable_fonts", $userData["features"]),
        'voiceLanguage' => $userData["settings"]["voiceLanguage"],
        'showLogo' => $userData["settings"]["appIsEnabled"],
        'enabled' => $userData["settings"]["appIsEnabled"],
    ];

    wp_localize_script("accessibly-widget", 'otmAcScriptData', $otmAcScriptData);
}
