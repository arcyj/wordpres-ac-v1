import React, {useContext} from 'react';
import { AppContext } from '../../lib/context';
import ToggleSwitch from '../../app/components/ToggleSwitch';
import Heading from '../../app/components/heading';
import Card from '../../app/components/layout/card';
import Preview from '../../app/components/preview';
import Notification from '../../app/components/notification';

// Icons
import Zoom from '../../app/assets/images/icons/svg/zoom';
import Brightness from '../../app/assets/images/icons/svg/brightness';
import Contrast from '../../app/assets/images/icons/svg/contrast';
import Cursor from '../../app/assets/images/icons/svg/cursor';
import HideImages from '../../app/assets/images/icons/svg/hideImages';
import HighlightLinks from '../../app/assets/images/icons/svg/highlightLinks';
import InvertColors from '../../app/assets/images/icons/svg/invertColors';
import ReadableFonts from '../../app/assets/images/icons/svg/readableFonts';
import ReadingLine from '../../app/assets/images/icons/svg/readingLine';
import ReadPage from '../../app/assets/images/icons/svg/readPage';
import Tooltips from '../../app/assets/images/icons/svg/tooltips';
import Grayscale from '../../app/assets/images/icons/svg/grayscale';

const Features = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const {settings: {userData}} = state;

  // Defaults
  const iconDefaultColor = "#D0DEE6";

  const toggleZoom = () => {
    dispatch({ type: "enable_biggerText" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleCursor = () => {
    dispatch({ type: "enable_showCursor" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleInvert = () => {
    dispatch({ type: "enable_showInvertColor" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleContrast = () => {
    dispatch({ type: "enable_showContrast" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleBrightness = () => {
    dispatch({ type: "enable_showBrightness" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleGrayscale = () => {
    dispatch({ type: "enable_showGrayScale" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleReadingLine = () => {
    dispatch({ type: "enable_showReadingLine" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleReadableFonts = () => {
    dispatch({ type: "enable_showReadableFonts" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleTooltips = () => {
    dispatch({ type: "enable_showTooltip" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleHighlightLinks = () => {
    dispatch({ type: "enable_showHighlightLinks" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleHideImages = () => {
    dispatch({ type: "enable_showHideImages" });
    dispatch({ type: "show_savebar", payload: true });
  };
  const toggleReadPage = () => {
    dispatch({ type: "enable_showVoiceOverText" });
    dispatch({ type: "show_savebar", payload: true });
  };

  return (
    <div data-id="features" class="wrap">
      <Notification  onClick={props.billingUrl}/>
      <div className="lg:flex">
        <div className="w-full lg:w-7/12 ">
          <div className="bg-white shadow rounded">
          <Card classes="max-w-2xl">
              <Heading
                title="Features"
                text="Customize the features of your Accessibly Widget."
                headingSize='base'
              />
              <ToggleSwitch
                title="Bigger cursor"
                enabled={userData.features.includes("bigger_cursor") ? true : false}
                onChange={() => toggleCursor()}
                text="Increase the size of the text up to three sizes of original text!"
                icon={
                  <Cursor
                    color={ userData.features.includes("bigger_cursor") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Bigger text"
                enabled={userData.features.includes("bigger_text") ? true : false}
                onChange={() => toggleZoom()}
                text="Increase the size of the text up to three sizes of original text!"
                icon={
                  <Zoom
                  color={ userData.features.includes("bigger_text") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Invert colors"
                enabled={userData.features.includes("invert_colors") ? true : false}
                onChange={() => toggleInvert()}
                text="Invert the colors of images."
                icon={
                  <InvertColors
                    color={ userData.features.includes("invert_colors") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Contrast"
                enabled={userData.features.includes("contrast") ? true : false}
                onChange={() => toggleContrast()}
                text="Increase / decrease the contact of photos."
                icon={
                  <Contrast
                    color={ userData.features.includes("contrast") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Brightness"
                enabled={userData.features.includes("brightness") ? true : false}
                onChange={() => toggleBrightness()}
                text="Brighten / darken the images on site."
                icon={
                  <Brightness
                    color={ userData.features.includes("brightness") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Grayscale"
                enabled={userData.features.includes("grayscale") ? true : false}
                onChange={() => toggleGrayscale()}
                text="Add grayscale to images."
                icon={
                  <Grayscale
                    color={ userData.features.includes("grayscale") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Reading line"
                enabled={userData.features.includes("reading_line") ? true : false}
                onChange={() => toggleReadingLine()}
                text="Add supportive reading line to site."
                icon={
                  <ReadingLine
                    color={ userData.features.includes("reading_line") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Readable fonts"
                enabled={userData.features.includes("readable_fonts") ? true : false}
                onChange={() => toggleReadableFonts()}
                text="Convert fonts on site for a better reading experience."
                icon={
                  <ReadableFonts
                    color={ userData.features.includes("readable_fonts") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Tooltips"
                enabled={userData.features.includes("tooltips") ? true : false}
                onChange={() => toggleTooltips()}
                text="Ability to read alt text of images."
                icon={
                  <Tooltips
                    color={ userData.features.includes("tooltips") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Highlight links"
                enabled={userData.features.includes("highlight_links") ? true : false}
                onChange={() => toggleHighlightLinks()}
                text="Highlight links to make them more prominent."
                icon={
                  <HighlightLinks
                  color={ userData.features.includes("highlight_links") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
                <ToggleSwitch
                title="Hide images"
                enabled={userData.features.includes("hide_images") ? true : false}
                onChange={() => toggleHideImages()}
                text="Hide images on site."
                icon={
                  <HideImages
                    color={ userData.features.includes("hide_images") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
              <ToggleSwitch
                title="Read page"
                enabled={userData.features.includes("read_page") ? true : false}
                onChange={() => toggleReadPage()}
                disabled={!userData.spark ? true : false}
                premiumBadge={true}
                text="Feature that allows a voice to read the text on your site out loud to visitors."
                icon={
                  <ReadPage
                  color={ userData.features.includes("read_page") ? userData.settings.theme.icons : iconDefaultColor }
                  />
                }
              />
          </Card>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mt-5 pt-5 px-4">
          <Preview
            shop={userData}
          />
        </div>
      </div>
    </div>
    );
}

export default Features;
