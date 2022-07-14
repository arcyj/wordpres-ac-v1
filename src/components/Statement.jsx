import React, {useContext, useState, useCallback, useEffect} from 'react'
import { AppContext } from '../../lib/context';

import InputField from '../../app/components/inputField';
import Heading from '../../app/components/heading';
import TextStyle from '../../app/components/textStyle';

// icons
import NewPage from '../../app/assets/images/icons/svg/newPage';
import CopyStatement from '../../app/assets/images/icons/svg/copyStatement';
import PasteLink from '../../app/assets/images/icons/svg/pasteLink';
import CodeIcon from '../../app/assets/images/icons/svg/codeIcon';
import CopyTextIcon from '../../app/assets/images/icons/svg/copyText';

const Statement = ({addToast}) => {
  const { state, dispatch } = useContext(AppContext);
  const [copiedToast, setCopiedToast] = useState(false);
  const [codeView, setCodeView] = useState(false);
  const [codeGenerated, setCodeGenerated] = useState(false);

  const statementH2Style  = {
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: "10px",
  };
  const statementH3Style  = {
    fontWeight: "600",
    fontSize: "17px",
    marginBottom: "5px",
    marginTop: "15px",
  };
  const statementH4Style  = {
    fontWeight: "600",
    fontSize: "17px",
    marginBottom: "5px",
    marginTop: "15px",
  };
  const statementPStyle  = {
    fontWeight: "400",
    fontSize: "14px",
    marginBottom: "2px",
  };

  useEffect(() => {

  }, []);


  const convertToCode = () => {
    setCodeView(!codeView);

    if (codeGenerated) {
      return;
    }

    const container = document.getElementById("accessibly-statement");
    const result = document.querySelector(".code-result pre code");

    const textContent = container.innerHTML
      .replace(/</gi, "&lt;")
      .replace(/>/gi, "&gt;");
    result.innerHTML = textContent;
    //hljs.highlightBlock(result);
    setCodeGenerated(true);
  };

  const copyText = () => {
    addToast({message: "Copied to clipboard"});
    let containerId;
    if(!codeView){
      containerId = "accessibly-statement";
    }else{
      containerId = "accessibly-statement-code";
    }


    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    }

    if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerId));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().empty();
      setCopiedToast(true);
    }
  };

  const onStatementLinkChange = (val) => {
    dispatch({ type: "set_statementLink", payload: val });
    dispatch({ type: "show_savebar", payload: true  });
  };

    return (
      <div id="statement" class="wrap" style={{maxWidth: "1000px",}}>
        <div className="bg-white shadow rounded p-4">
        <Heading headingSize="md" title="Accessibility Statement"/>

        <TextStyle fontSize="sm">Accessibility statement on your site can help with ADA/WCAG compliance. If you already don't have one, make a new page on your website and call it "Accessibility". Feel free to use our Accessibility statement below as the copy for this page. Then copy the link to the Accessibility Statement below so we can forward visitors and lawyers to the right page in your website.</TextStyle>

        <div className="lg:flex mt-6 mb-6">
          <div className="lg:text-center mr-12">
            <TextStyle fontWeight="bold" fontSize="sm">
              1. Create a new page
            </TextStyle>
            <NewPage />
          </div>
          <div className="lg:text-center mr-12">
            <TextStyle fontWeight="bold" fontSize="sm">
              2. Copy Statement in your new page
            </TextStyle>
            <CopyStatement />
          </div>
          <div className="lg:text-center mr-6">
            <TextStyle fontWeight="bold" fontSize="sm">
              3. Paste your Accessibility link
            </TextStyle>
            <PasteLink />
          </div>
        </div>

        <InputField
          label="Paste a link to Accessibility Statement in your website"
          type="text"
          value={state.settings.userData.accessibility_statement_url}
          placeholder="www.example.com/accessibility"
          fullWidth={true}
          labelWidth="w-72"
          onChange={(value) => onStatementLinkChange(value)}
        />

        <div className="flex justify-end mt-5">
          <button className="button-helper mr-2" onClick={() => copyText()}>
            <CopyTextIcon/>
            <span>Copy text</span>
          </button>
          <button className="button-helper" onClick={() => convertToCode()}>
            <CodeIcon/>
            <span>{codeView ? "Text" : "<code>"}</span>
          </button>
        </div>

        <div
          id="accessibly-statement"
          className={`pb-12 ${codeView ? "mt-9 hidden" : "mt-9"}`}
          style={{maxWidth: "1000px"}}
        >
          <h2 style={statementH2Style}>Accessibly App Accessibility Statement</h2>
          {"\n"}
          <p style={statementPStyle}>
            Accessibly App is committed to making sites accessible for
            all, including people with disabilities. We are continuously
            improving the service we provide through our app to comply
            with increased accessibility standards, guidelines, and to
            make the browsing experience better for everyone.
          </p>
          {"\n"}
          <h3 style={statementH3Style}>Conformance status</h3>
          {"\n"}
          <p style={statementPStyle}>
          The app uses the Web Content Accessibility Guidelines (WCAG) defined requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Accessibly App is following the best guidelines and is partially conformant with WCAG 2.0 level AA.
          </p>
          {"\n"}
          <h3 style={statementH3Style}>Technical information</h3>
          {"\n"}
          <p style={statementPStyle}>Accessibly App is an app supported in Shopify and Wordpress environments. The app relies on the following technologies:</p>
          {"\n"}
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
          {"\n"}
          <h3 style={statementH3Style}>Accessibly App features</h3>
          {"\n"}
          <p style={statementPStyle}>When a site has Accessibly App installed, the website can be adjusted with keyboard navigation using the “tab” key (WCAG 2.1/2.1.1). Additionally, see the list of all provided Accessibly App features and tools for better website experience:</p>
          {"\n"}
          <h4 style={statementH4Style}>Zoom | WCAG 2.1 / 1.4.4</h4>
          {"\n"}
          <p style={statementPStyle}>This feature enables users to enhance the size of the text to up to three times the original text for better text readability. </p>
          {"\n"}
          <h4 style={statementH4Style}>Bigger cursor</h4>
          {"\n"}
          <p style={statementPStyle}>Makes the cursor bigger and more prominent. Increases the size for better site browsing. </p>
          {"\n"}
          <h4 style={statementH4Style}>Invert colors</h4>
          {"\n"}
          <p style={statementPStyle}>Invert the colors of the website content. For those with decreased vision, the high contrast greatly helps to read the site better. </p>
          {"\n"}
          <h4 style={statementH4Style}>Tweak Contrast | WCAG 2.1 / 1.4.6</h4>
          {"\n"}
          <p style={statementPStyle}>This feature lets users manually select from two options: to enhance the contrast of the website or to decrease the contrast. </p>
          {"\n"}
          <h4 style={statementH4Style}>Tweak Brightness | WCAG 2.1 / 1.4.6</h4>
          {"\n"}
          <p style={statementPStyle}>This feature lets users update the brightness on the site. The content can either be made brighter or darker. </p>
          {"\n"}
          <h4 style={statementH4Style}>Grayscale | WCAG 2.1 / 1.4.6</h4>
          {"\n"}
          <p style={statementPStyle}>Users can turn on grayscale, making the website content appear only in shades of gray. This benefits people with visual impairment.</p>
          {"\n"}
          <h4 style={statementH4Style}>Reading Line</h4>
          {"\n"}
          <p style={statementPStyle}>Add a supportive reading line to the site.</p>
          {"\n"}
          <h4 style={statementH4Style}>Readable fonts</h4>
          {"\n"}
          <p style={statementPStyle}>Convert the fonts available on-site to one of the most easily readable fonts: Helvetica.</p>
          {"\n"}
          <h4 style={statementH4Style}>Alt Text and Images</h4>
          {"\n"}
          <p style={statementPStyle}>Ability to read alt text of images. As of now, our tool has added a feature where alt descriptions for images without them are generated using <a href="https://cloud.google.com/vision/" >Google&apos;s Vision AI</a>. In the event that you haven&apos;t manually written these image descriptions yourself, this greatly helps people with visual impairment browse your site.</p>
          {"\n"}
          <h4 style={statementH4Style}>Tooltips | WCAG 2.1 / 2.5.3</h4>
          {"\n"}
          <p style={statementPStyle}>Add labels to images that contain a written description of the image.</p>
          {"\n"}
          <h4 style={statementH4Style}>Highlight links</h4>
          {"\n"}
          <p style={statementPStyle}>Highlight links to make them more prominent.</p>
          {"\n"}
          <h4 style={statementH4Style}>Hide images</h4>
          {"\n"}
          <p style={statementPStyle}>Hide images on the site. This provides better site readability for people with visual impairment.</p>
          {"\n"}
          <h4 style={statementH4Style}>Read page</h4>
          {"\n"}
          <p style={statementPStyle}>A feature that allows a voice to read the text on your site out loud to visitors. </p>
          {"\n"}
          <h2>Notes & Feedback</h2>
          {"\n"}
          <p style={statementPStyle}>We always try to update our services and operate in the best possible manner to benefit all of our clients and their site visitors. If you experience any issues with the Accessibly App provided service, however, please email <a href="mailto:christiana@onthemapmarketing.com">christiana@onthemapmarketing.com</a>. We respond within 3 business days. </p>
          {"\n"}
          <p style={statementPStyle}>We cannot control or correct problems with third-party sites, but please let us know if you encounter difficulty with any sites we link to so we can pass the information along to the site owners. You may also want to address your concerns directly to these third parties.</p>
        </div>
        <div
          id="accessibly-statement-code"
          className={
            codeView
              ? "code-result mt-4"
              : "code-result mt-4 hidden"
          }
        >
          <pre>
            <code className="html" style={{whiteSpace: "break-spaces"}}/>
          </pre>
        </div>
        </div>
      </div>
     );
}

export default Statement;
