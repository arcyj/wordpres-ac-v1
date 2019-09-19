import voiceOptions from './data/voiceOptions.js';
import { serialize } from './helpers/serialize';
import Picker from 'vanilla-picker';

class AccessiblyPlugin {
    init() {
        console.log(1234567);
        window.speechSynthesis.getVoices();

        const optons = document.querySelectorAll('#voice option');

        // Set voice language select
        optons.forEach(function (option, index) {
            if (option.value === document.querySelector('#selected-lang').value) {
                document.querySelector('#voice').selectedIndex = index;
            }
        });

        setTimeout(() => {
            if (document.querySelector('#otm_ac_icon_color')) {
                this.colorPicker(
                  document.querySelector('#otm_ac_branding_color'),
                  document.querySelector('#otm_ac_branding_color > input')
                );
                this.colorPicker(
                  document.querySelector('#otm_ac_icon_color'),
                  document.querySelector('#otm_ac_icon_color > input')
                );
            }
        }, 100);

        if (document.querySelector('#test-voice')) {
            this.testVoice();
        }

        setTimeout(() => {
            this.updatedPluginStatus();
        }, 100);

        if (document.querySelector('.updated.settings-error')) {
            document.querySelector('.accessibly-alert').classList.remove('d-none');

            const alerts = document.querySelectorAll('.updated.settings-error');

            alerts.forEach(function(selector) {
                selector.className = 'd-none';
            });

            document.querySelector('#dismiss-alert').addEventListener("click", () => {
                document.querySelector('.accessibly-alert').className = 'd-none';
            });
        }
    }

    getVoice() {
        const voiceSelect = document.querySelector('#voice');
        const selectedVoice = voiceSelect.options[voiceSelect.selectedIndex].value;

        const lang = voiceOptions.filter(function(el) {
            return el.value === selectedVoice;
        });

        let voice = null;

        if (lang[0]) {
            const availableVoices = window.speechSynthesis.getVoices();
            availableVoices.forEach((obj, i) => {
                if (availableVoices[i].voiceURI === lang[0].data.voiceURI) {
                    voice = availableVoices[i];
                }
            });
        }
        return voice;
    }

    testVoice() {
        document.querySelector('#test-voice').addEventListener("click", () => {
            const utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.5;
            utter.text = document.querySelector('#voice-text').value;
            utter.voice = this.getVoice();

            window.speechSynthesis.speak(utter);
        });
    }

    colorPicker(selector, input) {
        if (!selector.classList.contains('disabled')) {
            const picker = new Picker({
                color: input.value,
                parent:  selector,
                popup: 'bottom',
                editor: true,
            });
            input.addEventListener("focusin", () => {
                picker.onChange = function(color) {
                    input.value = color.hex;
                };
            });
        }
    }

    updatedPluginStatus() {
        const accessiblySwitch = document.querySelector('#accessibly-switch');
        accessiblySwitch.addEventListener("change", function() {
            if(this.checked) {
                document.querySelector('#otm_ac_status').value = 'true';
            } else {
                document.querySelector('#otm_ac_status').value = 'false';
            }

            document.querySelector('#accessibly-status-form').submit();
        });
    }
}
export default AccessiblyPlugin;