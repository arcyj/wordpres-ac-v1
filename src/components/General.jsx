import React, {useContext, useCallback, useState, useEffect} from 'react';
import Speech from "speak-tts";
import { AppContext } from '../../lib/context';
import ToggleSwitch from '../../app/components/ToggleSwitch';
import InputField from '../../app/components/inputField';
import Heading from '../../app/components/heading';
import Card from '../../app/components/layout/card';
import ColorPicker from '../../app/components/colorPicker';
import Dropdown from '../../app/components/dropdown';
import Button from '../../app/components/button';
import PositionPreview from '../../app/components/positionPreview';
import Preview from '../../app/components/preview';
import Badge from '../../app/components/badge';
import Notification from '../../app/components/notification';
// Icons
import Zoom from '../../app/assets/images/icons/svg/zoom';

const General = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [exampleForVoice, setExampleForVoice] = useState("Voice example text");
  const [speechVoices, setVoices] = useState([{label: "Default", value: "Default"}]);
  const [speech, setSpeech] = useState(null);
  const {settings: {userData}} = state;

  const buttonSizeOptions = [
    { label: "Large", value: "large" },
    { label: "Small", value: "small" },
    { label: "Extra Small", value: "extra-small" },
    // { label: "Custom", value: "custom" },
  ];

  const position = [
    { label: "Top Left", value: "top-left" },
    { label: "Top Right", value: "top-right" },
    { label: "Bottom Left", value: "bottom-left" },
    { label: "Bottom Right", value: "bottom-right" },
    { label: "Middle Right", value: "middle-right" },
    { label: "Middle Left", value: "middle-left" },
  ];

  const languages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Swedish", value: "se" },
    { label: "German", value: "de" },
    { label: "French", value: "fr" },
    { label: "Japanese", value: "jp" },
    { label: "South Korean", value: "kr" },
  ];

  const CustomSize = (props) => {

  const handleIconCustomSize = useCallback((val) => {
    dispatch({ type: "set_iconCustomSize", payload: parseInt(val) });
    dispatch({ type: "show_savebar", payload: true });
  });

  if (state.shop.iconSize != "custom") {
    return "";
  }

  state.shop.iconCustomSize != null
    ? state.shop.iconCustomSize
    : (state.shop.iconCustomSize = "64");

  return (
    <div style={{ marginTop: 15 }}>
      <TextField
        value={state.shop.iconCustomSize.toString()}
        onChange={handleIconCustomSize}
        label="Icon custom size in px"
        type="number"
        prefix="px"
        maxLength={3}
        helpText=""
        min={0}
      />
    </div>
  );
};

  const getAllVoices = () => {
    const speech = new Speech();
    setSpeech(speech);
    speech
      .init({ volume: 0.5, lang: "en-GB", rate: 1, pitch: 1 })
      .then((data) => {
        const voices = data.voices;
        const values = [];

        voices.forEach(function (item) {
          values.push({
            data: item,
            label: `${item.name} (${item.lang})`,
            value: item.name,
          });
        });

        setVoices(values);
      })
      .catch((e) => {
        console.error("An error occured while initializing : ", e);
      });

    if (!speech.hasBrowserSupport) {
      alert(
        "Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !"
      );
    }
  };

  const testVoice = () => {
    let languages = speechVoices.filter(
      (voices) => voices.value === userData.settings.voiceLanguage
    )[0];

    let voice = userData.settings.voiceLanguage;

    if (!languages) {
      languages = speechVoices.filter(
        (voices) => voices.value === speechVoices[0].data.name
      )[0];
      voice = speechVoices[0].data.name;
    }

    const language = languages.data.lang;
    if (language) speech.setLanguage(language);
    if (voice) speech.setVoice(voice);
    speech
      .speak({
        text: exampleForVoice,
        queue: false,
        listeners: {
          onstart: () => {},
        },
      })
      .catch((e) => {
        console.error("An error occurred :", e);
      });
  };

  useEffect(() => {
    getAllVoices();
  }, []);

  const toggleEnable = () => {
    dispatch({ type: "set_enabled" });
    dispatch({ type: "show_savebar", payload: true });
  };

  const toggleShowLogo = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "show_logo" });
    dispatch({ type: "show_savebar", payload: true });
  };

  const toggleHideForever = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "show_hideForever" });
    dispatch({ type: "show_savebar", payload: true });
  };

  const toggleEnableFetchAltTags = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "enable_fetchAltTags" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleAcOnTab = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "enable_toggleAcOnTab" });
    dispatch({ type: "show_savebar", payload: true });
  };

  const handleBrandingColor = (color) => {
    dispatch({ type: "set_themeColor", payload: color.hex });
    dispatch({ type: "show_savebar", payload: true });
  };

  const handleIconColor = (color) => {
    dispatch({ type: "set_iconColor", payload: color.hex });
    dispatch({ type: "show_savebar", payload: true });
  };

  const handleTopBottomPosition = (val) => {
    dispatch({ type: "set_topBottomPosition", payload: val })
    dispatch({ type: "show_savebar", payload: true });
  };

  const handleRightLeftPosition = (val) => {
    dispatch({ type: "set_rightLeftPosition", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  };

  const handlePosition = useCallback((val) => {
    dispatch({ type: "set_position", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  const handleIconSize = useCallback((val) => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "set_iconSize", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  const handleLanguage = useCallback((val) => {
    dispatch({ type: "set_widgetLang", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  const handleVoice = useCallback((val) => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "set_voiceLanguage", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  return (
    <div data-id="general" class="wrap">
      <Notification  onClick={props.billingUrl}/>
      <div className="lg:flex">
        <div className="lg:w-8/12 w-full">
        <div className="bg-white shadow rounded">
          <Card classes="max-w-3xl">
              <Heading
                title="General"
                text="Customize the style of your Accessibility App."
                headingSize='base'
              />
              <ToggleSwitch
                title="Enable widget"
                enabled={userData.settings.appIsEnabled}
                onChange={toggleEnable}
              />
            </Card>
          <Card classes="max-w-3xl">
            <Heading
              title="Widget Position"
              text="Change the positioning of the Widget."
              headingSize='base'
            />
            <InputField
              label="Top/bottom position (px)"
              type="number"
              value={userData.settings.position.coords.top}
              onChange={handleTopBottomPosition}
              prefix="px"
            />
            <InputField
              label="Left/right position (px)"
              type="number"
              value={userData.settings.position.coords.offset}
              prefix="px"
              onChange={handleRightLeftPosition}
            />
            <Dropdown
              label="Widget button position"
              options={position}
              onChange={handlePosition}
              inline={true}
              value={userData.settings.position.type}
            />
            <Dropdown
              label="Widget button size"
              options={buttonSizeOptions}
              onChange={handleIconSize}
              customClass=""
              inline={true}
              value={userData.settings.widgetSize}
              disabled={!userData.spark ? true : false}
            />
        </Card>

        <Card classes="max-w-3xl" premium={!userData.spark ? true : false}>
              {!userData.spark ?
                <p className="mt-2 mb-4" >These are premium plan features. To access these, please <a className="text-indigo-600 cursor-pointer font-medium" onClick={props.billingUrl}>Upgrade to Premium Plan Here</a></p>
              : ""}
              <ColorPicker
                label="Color of widget icons"
                value={userData.settings.theme.icons}
                onChange={handleIconColor}
                disabled={!userData.spark ? true : false}
              />
              <ColorPicker
                label="Branding color"
                value={userData.settings.theme.branding}
                onChange={handleBrandingColor}
                disabled={!userData.spark ? true : false}
              />
              <ToggleSwitch
                title="Show Accessibly App logo"
                enabled={userData.settings.showAccessiblyLogo}
                tooltip="Support our app by showing Accessibly logo on your site!"
                onChange={toggleShowLogo}
                disabled={!userData.spark ? true : false}
              />
              <ToggleSwitch
                title="Show Hide Forever Button"
                enabled={userData.settings.showHideForever}
                tooltip="Add Hide forever button so users who don’t need Accessibly app can remove it on your site for themselves."
                onChange={toggleHideForever}
                disabled={!userData.spark ? true : false}
              />
              <ToggleSwitch
                title="Automatically (AI) generate image ALT tags"
                enabled={userData.settings.autoGenerateAltTags}
                tooltip="Let an AI generate image ALT tags for you based on what is visible in the image. This greatly helps visually impaired visitors who use screen readers or “read page“ feature."
                onChange={toggleEnableFetchAltTags}
                disabled={!userData.spark ? true : false}
              />
              <ToggleSwitch
                title="Widget activation with “Tab” key on keyboard"
                enabled={userData.settings.widgetActiviationWithTab}
                tooltip="Able users to open Accessibly widget with “Tab“ key on their keyboard. This feature is beneficial for users with visual impairment who use keyboard to navigate websites."
                onChange={toggleAcOnTab}
                disabled={!userData.spark ? true : false}
              />
              <div className="mt-4">
                <Button color="indigo" onClick={props.billingUrl} label="Upgrade to Premium Plan" />
              </div>
        </Card>

        <Card>
          <Heading
              title="Language and voice"
              text="If you have a local business, set-up the Widhet in your language."
              headingSize='base'
            />
            <div className="lg:flex justify-between items-center  max-w-3xl mt-4 ">
              <div className="">
                <Heading
                  title="Default Widget language"
                  text="Don’t see the language you are looking for? Send us over your translation and get 20% off of Premium plan! For more information reach out to us."
                  headingSize='sm'
                  borderBottom={false}
                />
              </div>
              <div className="">
                <Dropdown
                  label="Language"
                  options={languages}
                  onChange={handleLanguage}
                />
              </div>
            </div>

            <div className="lg:flex justify-between max-w-3xl mt-5">
              <div className="max-w-sm">
                <Heading
                  title="Voice settings"
                  headingSize='sm'
                  borderBottom={false}
                >
                  <Badge/>
                </Heading>
              </div>
              <div className="">
                <Dropdown
                  label="Voice language"
                  options={speechVoices}
                  onChange={handleVoice}
                  disabled={!userData.spark ? true : false}
                />
                <InputField
                  label="Voice example text"
                  type="text"
                  placeholder="Enter voice example text"
                  onChange={(value) => setExampleForVoice(value)}
                  inline={false}
                  disabled={!userData.spark ? true : false}
                />
                <div className="mt-4 mb-4">
                  <Button color="indigo" onClick={() => testVoice()} label="Test Voice" />
                </div>
              </div>
            </div>

        </Card>
        </div>


        </div>
        <div className="lg:w-4/12 w-full px-4">
          <Card>
            <PositionPreview
              settings={userData.settings}
            />
            <Preview
              shop={userData}
            />
          </Card>
        </div>
      </div>


    </div>
    );
}

export default General;
