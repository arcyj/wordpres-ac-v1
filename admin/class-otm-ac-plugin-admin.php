<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://onthemapmarketing.com
 * @since      1.0.0
 *
 * @package    Accessibly_Plugin
 * @subpackage Accessibly_Plugin/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Accessibly_Plugin
 * @subpackageAccessibly_Plugin/admin
 * @author     OnTheMapMarketing <evita@onthemapmarketing.com>
 */
class OTM_AC_Plugin_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->otm_ac_load_dependencies();

	}

	/**
	 * Load the required dependencies for the Admin facing functionality.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Accessibly_Plugin_Admin_Settings. Registers the admin settings and page.
	 *
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function otm_ac_load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) .  'admin/class-otm-ac-plugin-settings.php';

	}
	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function otm_ac_enqueue_styles() {
	    if ($_GET['page'] === 'accessibly_plugin_options') {
            wp_enqueue_style( 'Bootstrap', plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css', array(), $this->version, 'all' );
            wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/otm-ac-plugin-admin.css', array(), $this->version, 'all' );
        }
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function otm_ac_enqueue_scripts() {
        if ($_GET['page'] === 'accessibly_plugin_options') {
            wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/otm-ac-plugin-admin.js', array( 'jquery' ), $this->version, false );
            wp_enqueue_script(
                'Bootstrap JS',
                plugins_url( 'js/bootstrap.min.js', __FILE__)
            );
        }
	}
}
