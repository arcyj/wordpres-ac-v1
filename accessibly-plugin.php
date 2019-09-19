<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://onthemapmarketing.com
 * @since             1.0.0
 * @package           OTM_AC_Plugin
 *
 * @wordpress-plugin
 * Plugin Name:       Accessibly Plugin
 * Plugin URI:        https://www.onthemapmarketing.com/accessibly/
 * Description:       Accessibly App makes your website accessible for everyone.
 * Version:           1.0.0
 * Author:            OnTheMapMarketing
 * Author URI:        https://www.onthemapmarketing.com/
 * License:           GPL-2.0+
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       accessibly-app
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-otm-ac-plugin-activator.php
 */
function activate_otm_ac_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-otm-ac-plugin-activator.php';
	OTM_AC_Plugin_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-otm-ac-plugin-deactivator.php
 */
function deactivate_otm_ac_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-otm-ac-plugin-deactivator.php';
	OTM_AC_Plugin_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_otm_ac_plugin' );
register_deactivation_hook( __FILE__, 'deactivate_otm_ac_plugin' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-otm-ac-plugin.php';

add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'otm_ac_plugin_action_links' );

function otm_ac_plugin_action_links( $links ) {
    $links[] = '<a href="'. esc_url( get_admin_url(null, 'options-general.php?page=accessibly_plugin_options') ) .'">Settings</a>';
//    $links[] = '<a href="https://onthemapmarketing.com/accessibly/" target="_blank">Premium Plan</a>';
    return $links;
}
/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_otm_ac_plugin() {

	$plugin = new OTM_AC_Plugin();
	$plugin->otm_ac_run();

}
run_otm_ac_plugin();
