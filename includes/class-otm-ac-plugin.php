<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       http://onthemapmarketing.com
 * @since      1.0.0
 *
 * @package    accessibly_Plugin
 * @subpackage accessibly_Plugin/admin
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Accessibly_Plugin
 * @subpackage Accessibly_Plugin/includes
 * @author     Onthemapmarketing.com <evita@onthemapmarketing.com>
 */
class OTM_AC_Plugin {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var       OTM_AC_Plugin_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->plugin_name = 'accessibly-plugin';
		$this->version = '1.0.0';

		$this->otm_ac_load_dependencies();
		$this->otm_ac_set_locale();
		$this->otm_ac_define_admin_hooks();
		$this->otm_ac_define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - OTM_AC_Plugin_Loader. Orchestrates the hooks of the plugin.
	 * - OTM_AC_Plugin_i18n. Defines internationalization functionality.
	 * - OTM_AC_Plugin_Admin. Defines all hooks for the admin area.
	 * - OTM_AC_Plugin_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function otm_ac_load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-otm-ac-plugin-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-otm-ac-plugin-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-otm-ac-plugin-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-otm-ac-plugin-public.php';

		$this->loader = new OTM_AC_Plugin_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the OTM_AC_Plugin_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function otm_ac_set_locale() {

		$plugin_i18n = new OTM_AC_Plugin_i18n();
		$plugin_i18n->set_domain( 'accessibly' );

		$this->loader->otm_ac_add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function otm_ac_define_admin_hooks() {

		$plugin_admin = new OTM_AC_Plugin_Admin( $this->otm_ac_get_plugin_name(), $this->otm_ac_get_version() );
		$plugin_settings = new OTM_AC_Admin_Settings( $this->otm_ac_get_plugin_name(), $this->otm_ac_get_version() );

		$this->loader->otm_ac_add_action( 'admin_enqueue_scripts', $plugin_admin, 'otm_ac_enqueue_styles' );
		$this->loader->otm_ac_add_action( 'admin_enqueue_scripts', $plugin_admin, 'otm_ac_enqueue_scripts' );

		$this->loader->otm_ac_add_action( 'admin_menu', $plugin_settings, 'otm_ac_setup_plugin_options_menu' );

        $this->loader->otm_ac_add_action('admin_init', $plugin_settings,'otm_ac_plugin_options_init');
        $this->loader->otm_ac_add_action('admin_init', $plugin_settings,'otm_ac_voice_options_init');
        $this->loader->otm_ac_add_action('admin_init', $plugin_settings,'otm_ac_customize_options_init');
        $this->loader->otm_ac_add_action('admin_init', $plugin_settings,'otm_ac_set_subscription_status');
        $this->loader->otm_ac_add_action('admin_init', $plugin_settings,'otm_ac_set_plugin_status');

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function otm_ac_define_public_hooks() {

		$plugin_public = new OTM_AC_Plugin_Public( $this->otm_ac_get_plugin_name(), $this->otm_ac_get_version() );

		$this->loader->otm_ac_add_action( 'wp_enqueue_scripts', $plugin_public, 'otm_ac_enqueue_scripts' );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function otm_ac_run() {
		$this->loader->otm_ac_run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function otm_ac_get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return     OTM_AC_Plugin_Loader    Orchestrates the hooks of the plugin.
	 */
	public function otm_ac_get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function otm_ac_get_version() {
		return $this->version;
	}

}
