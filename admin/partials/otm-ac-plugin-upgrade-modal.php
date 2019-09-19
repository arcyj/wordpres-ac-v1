<div class="modal fade" id="upgradeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-center w-100" id="exampleModalLongTitle">Upgrade to premium plan</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="text-center">To get your premium token purchase token <a href="#">here</a>.</p>
                <form method="POST" action="options.php">
                    <?php settings_fields('otm_ac_subscription');?>
                    <input type="text" class="form-control" name="otm_ac_subscription_token" placeholder="Enter Token" value="<?php echo get_option('otm_ac_subscription_token') ?>">
                    <div class="d-flex w-100 align-items-center justify-content-center mt-3">
                        <button class="btn btn-primary" type="submit">Upgrade</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>