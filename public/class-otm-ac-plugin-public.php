<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://onthemapmarketing.com
 * @since      1.0.0
 *
 * @package    Accessibly_Plugin
 * @subpackage Accessibly_Plugin/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    otm_ac_Plugin
 * @subpackage otm_ac_Plugin/public
 * @author     OnTheMapMarketing <evita@onthemapmarketing.com>
 */
class OTM_AC_Plugin_Public {

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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function otm_ac_enqueue_scripts() {
        wp_enqueue_script(
            $this->plugin_name,
            plugins_url( 'js/otm-ac-plugin-public.js', __FILE__)
        );


        $otmAcScriptData = array(
            'showZoom' =>  get_option( 'otm_ac_show_zoom' ),
            'showCursor' => get_option( 'otm_ac_show_cursor' ),
            'showInvertColors' => get_option( 'otm_ac_show_invert_colors' ),
            'showContrast' => get_option( 'otm_ac_show_contrast' ),
            'showGrayScale' => get_option( 'otm_ac_show_grayscale' ),
            'showBrightness' => get_option( 'otm_ac_show_brightness' ),
            'iconColor' => get_option( 'otm_ac_icon_color' ),
            'themeColor' => get_option( 'otm_ac_branding_color' ),
            'position' => get_option( 'otm_ac_position' ),
            'showHighlightLinks' => get_option( 'otm_ac_show_highlight_links' ),
            'showHideImages' => get_option( 'otm_ac_show_hide_images' ),
            'showTooltip' => get_option( 'otm_ac_show_tooltips' ),
            'showVoiceOverText' => get_option( 'otm_ac_show_read_page' ),
            'showReadingLine' => get_option( 'otm_ac_show_reading_line' ),
            'showReadableFonts' => get_option( 'otm_ac_show_readable_fonts' ),
            'voiceLanguage' => get_option( 'otm_ac_voice_lang' ),
            'showLogo' => get_option( 'otm_ac_show_logo' ),
            'enabled' => get_option( 'otm_ac_status' )
        );

        wp_localize_script($this->plugin_name, 'otmAcScriptData', $otmAcScriptData);

	}
}
