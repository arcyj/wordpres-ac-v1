<form class="otm-ac-customize" method="POST" action="options.php">
    <?php settings_fields('otm-ac-customize_options');?>
    <h2 class="my-4">Customize the style of your Accessibly Plugin</h2>
    <?php do_settings_sections('otm-ac-customize_options')?>
    <button type="submit" class="btn btn-primary">Save Settings</button>
</form>
