<?php

/**
 * The settings of the plugin.
 *
 * @link       http://onthemapmarketing.com
 * @since      1.0.0
 *
 * @package    accessibly_Plugin
 * @subpackage accessibly_Plugin/admin
 */

/**
 * Class WordPress_Plugin_Template_Settings
 *
 */
class OTM_AC_Admin_Settings
{

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $plugin_name The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $version The current version of this plugin.
     */
    private $version;
    private $menu;

    /**
     * Initialize the class and set its properties.
     *
     * @param string $plugin_name The name of this plugin.
     * @param string $version The version of this plugin.
     * @param $menu
     * @since    1.0.0
     */
    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    /**
     * This function introduces the theme options into the 'Appearance' menu and into a top-level
     * 'Accessibly' menu.
     */
    public function otm_ac_setup_plugin_options_menu()
    {
        //Add the menu to the Settings set of menu items
        add_options_page(
            'Accessibly Options',                    // The title to be displayed in the browser window for this page.
            'Accessibly Options',                    // The text to be displayed for this menu item
            'manage_options',                // Which type of users can see this menu item
            'accessibly_plugin_options',            // The unique ID - that is, the slug - for this menu item
            [$this, 'otm_ac_render_settings_page_content']                // The name of the function to call when rendering this menu's page
        );

    }

    /**
     * Register setting Plugin Options
     */
    public function otm_ac_plugin_options_init()
    {
        add_settings_section(
            'otm_ac_plugin-options-section', // id of the section
            '', // title to be displayed
            '', // callback function to be called when opening section
            'otm_ac_plugin_options' // page on which to display the section, this should be the same as the slug used in add_submenu_page()
        );

        $allOptions = $this->otm_ac_default_plugin_options();
        foreach ($allOptions as $key => $value) {

            // Register options
            register_setting(
                'otm_ac_plugin_options',
                $value[1]
            );

            // Set default values
            if(!get_option( $value[1])) {
                update_option( $value[1], $value[0] );
            }

            // Create select
            add_settings_field(
                $key,
                ucwords($key),
                [$this, 'otm_ac_plugin_options_cb'],
                'otm_ac_plugin_options',
                'otm_ac_plugin-options-section',
                $args = $value
            );
        }
    }

    /**
     * Register setting Plugin Options input Callback
     */
    public function otm_ac_plugin_options_cb(array $args)
    {
        $value = esc_attr(get_option($args[1], ''));
        $name= $args[1];
        ?>
        <?php  if ($name !== 'otm_ac_show_read_page')
            {?>
                <div class="form-group">
                    <select class="form-control" name="<?php echo $name ?>" <?php echo $name === 'otm_ac_show_read_page' && !get_option('otm_ac_subscription_token') ? 'disabled' : null  ?>>
                        <option value="true" <?php echo $value == 'true' ? 'selected' : null ?>>Enabled</option>
                        <option value="false" <?php echo $value == 'false' ? 'selected' : null ?>>Disabled</option>
                    </select>
                    <?php
                    if($name === 'otm_ac_show_read_page' && !get_option('otm_ac_subscription_token')) {
                        ?>
                        <small class="position-absolute mt-1">For Premium plan only.</small>
                        <?php
                    }
                    ?>
                </div>
            <?php }
    }

    /**
     * Register setting Voice Options
     */
    public function otm_ac_voice_options_init() {
        add_settings_section(
            'otm-ac-plugin-voice-section', // id of the section
            'Voice Settings for Accessibility Plugin', // title to be displayed
            '', // callback function to be called when opening section
            'voice_options' // page on which to display the section, this should be the same as the slug used in add_submenu_page()
        );
        // Register options
        register_setting(
            'voice_options',
            'otm_ac_voice_lang'
        );

        // Set default values
        if(!get_option('otm_ac_voice_lang')) {
            update_option('otm_ac_voice_lang', 'Daniel English UK');
        }
    }

    /**
     * Register customize Options
     */
    public function otm_ac_customize_options_init() {
        add_settings_section(
            'otm-ac-plugin-customize-section', // id of the section
            '', // title to be displayed
            '', // callback function to be called when opening section
            'otm-ac-customize_options' // page on which to display the section, this should be the same as the slug used in add_submenu_page()
        );

        $allOptions = $this->otm_ac_default_customize_options();

        foreach ($allOptions as $key => $value) {
            // Register options
            register_setting(
                'otm-ac-customize_options',
                $value[1]
            );
            // Set default values
            if(!get_option( $value[1])) {
                update_option( $value[1], $value[0] );
            }

            // Create select
            add_settings_field(
                $key,
                ucwords($key),
                [$this, $key === 'icon color' || $key === 'branding color' ? 'otm_ac_customize_options_cb' : 'otm_ac_customize_options_cb2'] ,
                'otm-ac-customize_options',
                'otm-ac-plugin-customize-section',
                $args = [$key, $value]
            );
        }
    }

    public function otm_ac_customize_options_cb(array $args) {
        $value = esc_attr(get_option($args[1][1], ''));
        $name= $args[1][1];
        ?>
        <?php  if ($name !== 'otm_ac_branding_color') {
            ?>
            <div class="form-group <?php echo get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030'  &&  $name === 'otm_ac_branding_color' ? 'disabled' : null ?> " id="<?php echo $name ?>">
                <input type="text" class="form-control" <?php echo get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030'  &&  $name === 'otm_ac_branding_color' ? 'disabled' : null ?> name="<?php echo $name ?>" value="<?php echo $value ?>" >
                <?php
                if($name === 'otm_ac_branding_color' && get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030') {
                    ?>
                    <small class="position-absolute mt-1">For Premium plan only.</small>
                    <?php
                }
                ?>
            </div>
            <?php
        } ?>
        <?php
    }

    public function otm_ac_set_subscription_status() {
        add_settings_section(
            'accessibility-subscription', // id of the section
            '', // title to be displayed
            '', // callback function to be called when opening section
            'otm_ac_subscription' // page on which to display the section, this should be the same as the slug used in add_submenu_page()
        );
        // Register options
        register_setting(
            'otm_ac_subscription',
            'otm_ac_subscription_token'
        );

        // Set default values
        if(!get_option('otm_ac_subscription_token')) {
            update_option('otm_ac_subscription_token', '');
        }
    }

    public function otm_ac_set_plugin_status() {
        add_settings_section(
            'otm-ac-status', // id of the section
            '', // title to be displayed
            '', // callback function to be called when opening section
            'otm-ac-status' // page on which to display the section, this should be the same as the slug used in add_submenu_page()
        );
        // Register options
        register_setting(
            'otm-ac-status',
            'otm_ac_status'
        );

        // Set default values
        if(!get_option('otm_ac_status')) {
            update_option('otm_ac_status', 'false');
        }
    }

    public function otm_ac_customize_options_cb2(array $args) {
        $value = esc_attr(get_option($args[1][1], ''));
        $name= $args[1][1];
        if ($name === 'otm_ac_position') {
            ?>
            <div class="form-group">
                <select class="form-control" id="cursor" name="<?php echo $name ?>">
                    <option value="top-right" <?php echo $value == 'top-right' ? 'selected' : null ?>>Top Right</option>
                    <option value="top-left" <?php echo $value == 'top-left' ? 'selected' : null ?>>Top Left</option>
                    <option value="bottom-right" <?php echo $value == 'bottom-right' ? 'selected' : null ?>>Bottom Right</option>
                    <option value="bottom-left" <?php echo $value == 'bottom-left' ? 'selected' : null ?>>Bottom Left</option>
                    <option value="middle-right" <?php echo $value == 'middle-right' ? 'selected' : null ?>>Middle Right</option>
                    <option value="middle-left" <?php echo $value == 'middle-left' ? 'selected' : null ?>>Middle Left</option>
                </select>
            </div>
            <?php
        } else {
            ?>
<!--            <div class="form-group">-->
<!--                <select class="form-control" id="cursor" name="--><?php //echo $name ?><!--" --><?php //echo
//                get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030' ? 'disabled' : null ?><!-- name="--><?php //echo $name ?><!--" >-->
<!--                    <option value="true" --><?php //echo $value == 'true' ? 'selected' : null ?>
<!--                    >-->
<!--                        Yes</option>-->
<!--                    <option value="false" --><?php //echo $value == 'false' ? 'selected' : null ?>
<!--                    >-->
<!--                        No</option>-->
<!--                </select>-->
<!--                --><?php
//                    if (get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030') {
//                        echo ' <small class="position-absolute mt-1">For Premium plan only.</small>';
//                    }
//                ?>
<!--            </div>-->
            <?php
        }
        ?>
        <?php
    }

    public function otm_ac_default_customize_options() {
        $defaults = [
            'icon color' => ['#574cd5', 'otm_ac_icon_color'],
            'branding color' => ['#574cd5', 'otm_ac_branding_color'],
            'position' => ['top-right', 'otm_ac_position'],
            'show logo' => ['true', 'otm_ac_show_logo'],
        ];

        return $defaults;
    }

    /**
     * Provide default values for the Plugin Options.
     *
     * @return array
     */
    public function otm_ac_default_plugin_options()
    {
        $defaults = [
            'zoom' => ['true', 'otm_ac_show_zoom'],
            'bigger cursor' => ['true', 'otm_ac_show_cursor'],
            'invert colors' => ['true', 'otm_ac_show_invert_colors'],
            'contrast' => ['true', 'otm_ac_show_contrast'],
            'grayscale' => ['true', 'otm_ac_show_grayscale'],
            'brightness' => ['true', 'otm_ac_show_brightness'],
            'reading line' => ['true', 'otm_ac_show_reading_line'],
            'readable fonts' => ['true', 'otm_ac_show_readable_fonts'],
            'tooltips' => ['true', 'otm_ac_show_tooltips'],
            'highlight links' => ['true', 'otm_ac_show_highlight_links'],
            'hide images' => ['true', 'otm_ac_show_hide_images'],
            'read Page' => ['false', 'otm_ac_show_read_page'],
        ];

        return $defaults;
    }

    /**
     * Renders a simple page to display for the theme menu defined above.
     */
    public function otm_ac_render_settings_page_content($active_tab = '')
    {
        ?>
        <!-- Create a header in the default WordPress 'wrap' container -->
        <div class="wrap container">
            <div class="accessibly-alert settings-error is-dismissible d-none">
                <p>
                    <strong>Settings saved.</strong>
                </p>
                <button type="button" class="notice-dismiss" id="dismiss-alert">
                    <span class="screen-reader-text">Dismiss this notice.</span>
                </button>
            </div>
            <div class="d-flex">
                <img class="my-3" src="<?php echo plugins_url('images/logo.svg', __FILE__) ?>" alt="Logo">
                <div class="w-100 d-flex align-items-center justify-content-end">
                    <form method="POST" action="options.php" id="accessibly-status-form">
                        <?php settings_fields('otm-ac-status');?>
                        <input type="hidden" name="otm_ac_status" id="otm_ac_status" value=" <?php echo get_option('otm_ac_status') ?>">
                        <div class="d-flex align-items-center justify-content-center mr-3">
                            <label class="switch mb-0 mr-2">
                                <input type="checkbox" id="accessibly-switch" <?php echo get_option('otm_ac_status') === 'true' ? 'checked' : null ?>>
                                <span class="slider round"></span>
                            </label>
                            <p class="mb-0"><?php echo get_option('otm_ac_status') === 'true' ? 'Accessibly app is enabled' : 'Accessibly app is disabled' ?></p>
                        </div>
                    </form>
<!--                    --><?php //if (get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030')
//                        echo
//                        '
//                     <button class="btn btn-primary" data-toggle="modal" data-target="#upgradeModal">Upgrade</button>
//                    '
//                    ?>
                </div>
            </div>

            <?php settings_errors(); ?>

            <?php if (isset($_GET['tab'])) {
                $active_tab = $_GET['tab'];
            } else if ($active_tab == 'social_options') {
                $active_tab = 'social_options';
            } else if ($active_tab == 'input_examples') {
                $active_tab = 'input_examples';
            } else {
                $active_tab = 'customize_options';
            } // end if/else ?>

            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-3 p-0">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mb-0 d-flex align-content-center <?php echo $active_tab == 'customize_options' ? 'active' : ''; ?>">
                            <a class="nav-link mb-0 d-flex align-content-center"
                               href="?page=accessibly_plugin_options&tab=customize_options">Customize Plugin</a>
                        </li>
<!--                        <li class="nav-item mb-0 --><?php //echo $active_tab == 'voice_options' ? 'active' : ''; ?><!--">-->
<!--                            <a class="nav-link mb-0 d-flex align-content-center"-->
<!--                               href="?page=accessibly_plugin_options&tab=voice_options">Voice Options</a>-->
<!--                        </li>-->
                        <li class="nav-item mb-0 <?php echo $active_tab == 'app_options' ? 'active' : ''; ?>">
                            <a class="nav-link mb-0 d-flex align-content-center"
                               href="?page=accessibly_plugin_options&tab=app_options">Plugin Options</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="main-container">
                <?php
                if ($active_tab == 'customize_options') {
                    include(plugin_dir_path(__FILE__) . './partials/otm-ac-plugin-customize-options.php');
                } elseif ($active_tab == 'voice_options') {
                    include(plugin_dir_path(__FILE__) . './partials/otm-ac-plugin-voice-options.php');
                } else {
                    include(plugin_dir_path(__FILE__) . './partials/otm-ac-plugin-plugin-options.php');
                }
                ?>
            </div>
            <?php include(plugin_dir_path(__FILE__) . './partials/otm-ac-plugin-upgrade-modal.php'); ?>
        </div><!-- /.wrap -->
        <?php
    }
}
