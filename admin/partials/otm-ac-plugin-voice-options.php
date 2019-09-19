<form method="POST" action="options.php">
    <?php settings_fields('voice_options');?>
    <div class="my-4">
        <h2 class="mb-0">Voice Settings for Accessibility Plugin</h2>
        <?php echo get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030' ? '  <small>For Premium plan only.</small>' : null ?>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <input type="hidden" id="selected-lang" value="<?php echo get_option('otm_ac_voice_lang') ?>">
                <label for="voice">Voice Language</label>
                <select class="form-control" id="voice" name="otm_ac_voice_lang" <?php echo get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030' ? 'disabled' : null ?>>
                    <option value="Daniel English UK">Daniel English UK</option>
                    <option value="Alex English US">Alex English US</option>
                    <option value="Fred English US">Fred English US</option>
                    <option value="Victoria English US">Victoria English US</option>
                    <option value="Samantha English US">Samantha English US</option>
                    <option value="Karen English (Australia)">Karen English (Australia)</option>
                    <option value="Moira English (Ireland)">Moira English (Ireland)</option>
                    <option value="Tessa English (South Africa)">Tessa English (South Africa)</option>
                    <option value="Fiona English">Fiona English</option>
                    <option value="Alice Italy">Alice Italy</option>
                    <option value="Alva Sweden">Alva Sweden</option>
                    <option value="Amelie Canada">Amelie Canada</option>
                    <option value="Anna Germany">Anna Germany</option>
                    <option value="Carmit Israel">Carmit Israel</option>
                    <option value="Damayanti Indonesia">Damayanti Indonesia</option>
                    <option value="Diego Spanish">Diego Spanish</option>
                    <option value="Ellen Dutch (Belgium)">Ellen Dutch (Belgium)</option>
                    <option value="Ioana Romanian">Ioana Romanian</option>
                    <option value="Jorge Spanish">Jorge Spanish</option>
                    <option value="Monica Spanish">Monica Spanish</option>
                    <option value="Juan Spanish (Mexico)">Juan Spanish (Mexico)</option>
                    <option value="Paulina Spanish">Paulina Spanish</option>
                    <option value="Kyoko Japanese">Kyoko Japanese</option>
                    <option value="Laura Slovak">Laura Slovak</option>
                    <option value="Lekha Hindi">Lekha Hindi</option>
                    <option value="Luca Italian">Luca Italian</option>
                    <option value="Maged Arabic (Saudi Arabia)">Maged Arabic (Saudi Arabia)</option>
                    <option value="Mariska Hungarian">Mariska Hungarian</option>
                    <option value="Mei-Jia Chinese">Mei-Jia Chinese</option>
                    <option value="Sin-ji Chinese">Sin-ji Chinese</option>
                    <option value="Ting-Ting Chinese">Ting-Ting Chinese</option>
                    <option value="Melina Greek">Melina Greek</option>
                    <option value="Milena Russian">Milena Russian</option>
                    <option value="Yuri Russian">Yuri Russian</option>
                    <option value="Nora Norwegian">Nora Norwegian</option>
                    <option value="Sara Danish">Sara Danish</option>
                    <option value="Satu Finnish">Satu Finnish</option>
                    <option value="Thomas French">Thomas French</option>
                    <option value="Xander Dutch (Netherlands)">Xander Dutch (Netherlands)</option>
                    <option value="Yelda Turkish">Yelda Turkish</option>
                    <option value="Yuna Korean">Yuna Korean</option>
                    <option value="Zosia Polish">Zosia Polish</option>
                    <option value="Zuzana Czech (Czech Republic)">Zuzana Czech (Czech Republic)</option>
                    <option value="Google Deutsch German">Google Deutsch German</option>
                    <option value="Google US English">Google US English</option>
                    <option value="Google UK English Female">Google UK English Female</option>
                    <option value="Google UK English Male">Google UK English Male</option>
                    <option value="Google español">Google español</option>
                    <option value="Google español de Estados Unidos">Google español de Estados Unidos</option>
                    <option value="Google français">Google français</option>
                    <option value="Google हिन्दी">Google हिन्दी</option>
                    <option value="Google Bahasa Indonesia">Google Bahasa Indonesia</option>
                    <option value="Google italiano">Google italiano</option>
                    <option value="Google 日本語">Google 日本語</option>
                    <option value="Google 한국의">Google 한국의</option>
                    <option value="Google Nederlands">Google Nederlands</option>
                    <option value="Google polski">Google polski</option>
                    <option value="Google português do Brasil">Google português do Brasil</option>
                    <option value="Google русский">Google русский</option>
                    <option value="Google 普通话（中国大陆）">Google 普通话（中国大陆）</option>
                    <option value="Google 粤語（香港）">Google 粤語（香港）</option>
                    <option value="Google 國語（臺灣）">Google 國語（臺灣）</option>
                </select>
            </div>
            <div class="form-group">
                <label for="voice">Example Text</label>
                <input class="form-control" id="voice-text" placeholder="Voice example text" value="Voice example text">
                <small id="emailHelp" class="form-text text-muted">Type something to test the voice you selected.</small>
            </div>
        </div>
    </div>
    <div class="d-flex mt-2">
        <button type="button" id="test-voice" class="btn btn-outline-primary mr-2" <?php echo get_option('otm_ac_subscription_token') !== 'ACCES-LJ5B-B2310-W420-B1307-K3030' ? 'disabled' : null ?>>Test Voice</button>
        <button type="submit" class="btn btn-primary">Save Settings</button>
    </div>
</form>