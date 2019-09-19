<form class="otm-ac-plugin-options" method="POST" action="options.php">
    <?php settings_fields('otm_ac_plugin_options');?>
    <h2 class="my-4">Check what options you want to display in your Accessibility App.</h2>
    <?php do_settings_sections('otm_ac_plugin_options')?>
    <button type="submit" class="btn btn-primary">Save Settings</button>
</form>
