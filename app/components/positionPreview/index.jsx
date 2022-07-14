import React from 'react';

import WebsitePreview from "../../assets/images/websitePreview";
import Heading from '../heading';
// const websitePreview = require('../../assets/images/');

const PositionPreview = (props) => {
  const previewPosition = {
    "top-left": { left: 0 },
    "top-right": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      height: "100%",
    },
    "bottom-left": {
      display: "flex",
      alignItems: "flex-end",
      bottom: 20,
      position: "relative",
      height: "100%",
    },
    "bottom-right": {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      bottom: 20,
      position: "relative",
      height: "100%",
    },
    "middle-right": {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100%",
    },
    "middle-left": { display: "flex", alignItems: "center", height: "100%" },
  };
  return (
    <div className="">
        <Heading
          title="Website preview"
          text="This is a preview of your Widget positioning."
          headingSize='base'
        />
    <div
      style={{
        overflow: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        width: "100%",
        height: "20rem",
        borderRadius: 5,
        maxWidth: "540px",
        margin: "auto",
      }}
      className="website-preview"
    >
      <div
        id="accessibility-widget"
        className="accessibility-menu-closed mt-4"
        style={{ position: "relative"}}
      >
      <WebsitePreview />
        <div
          id="accesibility-menu"
          className="accesibility-menu menu-closed"
          style={previewPosition[props.settings.position.type]}
        >
          <a
            id="accessibility-menu-btn"
            className={`accessibility-menu-btn make-it-fast navigable ${
              props.settings.widgetSize === "large" && "accessibly-btn-big"
            } ${props.settings.widgetSize === "small" && "accessibly-btn-small"} ${
              props.settings.widgetSize === "extra-small" &&
              "accessibly-btn-xs-small"
            }`}
            style={
              props.settings.widgetSize === "custom"
                ? {
                    background: props.settings.theme.branding,
                    fontSize: 16,
                    width: parseInt(props.settings.iconCustomSize),
                    height: parseInt(props.settings.iconCustomSize),
                  }
                : { background: props.settings.theme.branding, fontSize: 16 }
            }
          >
            <svg
              width="39"
              height="40"
              style={{ width: 39, height: 40 }}
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.9844 8.51562C27.8073 5.33854 23.9792 3.75 19.5 3.75C15.0208 3.75 11.1927 5.33854 8.01562 8.51562C4.83854 11.6927 3.25 15.5208 3.25 20C3.25 24.4792 4.83854 28.3073 8.01562 31.4844C11.1927 34.6615 15.0208 36.25 19.5 36.25C23.9792 36.25 27.8073 34.6615 30.9844 31.4844C34.1615 28.3073 35.75 24.4792 35.75 20C35.75 15.5208 34.1615 11.6927 30.9844 8.51562ZM5.75 6.32812C9.55208 2.52604 14.1354 0.625 19.5 0.625C24.8646 0.625 29.4219 2.52604 33.1719 6.32812C36.974 10.0781 38.875 14.6354 38.875 20C38.875 25.3646 36.974 29.9479 33.1719 33.75C29.4219 37.5 24.8646 39.375 19.5 39.375C14.1354 39.375 9.55208 37.5 5.75 33.75C2 29.9479 0.125 25.3646 0.125 20C0.125 14.6354 2 10.0781 5.75 6.32812ZM8.875 9.375C11.7917 6.45833 15.3333 5 19.5 5C23.6667 5 27.2083 6.45833 30.125 9.375C33.0417 12.2917 34.5 15.8333 34.5 20C34.5 24.1667 33.0417 27.7083 30.125 30.625C27.2083 33.5417 23.6667 35 19.5 35C15.3333 35 11.7917 33.5417 8.875 30.625C5.95833 27.7083 4.5 24.1667 4.5 20C4.5 15.8333 5.95833 12.2917 8.875 9.375ZM21.4531 9.29688C20.9323 8.72396 20.2812 8.4375 19.5 8.4375C18.7188 8.4375 18.0417 8.72396 17.4688 9.29688C16.9479 9.81771 16.6875 10.4688 16.6875 11.25C16.6875 12.0312 16.9479 12.7083 17.4688 13.2812C18.0417 13.8021 18.7188 14.0625 19.5 14.0625C20.2812 14.0625 20.9323 13.8021 21.4531 13.2812C22.026 12.7083 22.3125 12.0312 22.3125 11.25C22.3125 10.4688 22.026 9.81771 21.4531 9.29688ZM28.7188 16.0938C29.0312 16.0417 29.2656 15.8594 29.4219 15.5469C29.6302 15.2344 29.6823 14.9219 29.5781 14.6094C29.526 14.2448 29.3438 13.9844 29.0312 13.8281C28.7708 13.6198 28.4583 13.5677 28.0938 13.6719C24.3438 14.5573 21.4792 15 19.5 15C17.5208 15 14.6562 14.5573 10.9062 13.6719C10.5417 13.5677 10.2031 13.6198 9.89062 13.8281C9.63021 13.9844 9.44792 14.2448 9.34375 14.6094C9.29167 14.9219 9.34375 15.2344 9.5 15.5469C9.70833 15.8073 9.96875 15.9896 10.2812 16.0938C13.0417 16.7188 15.1771 17.1354 16.6875 17.3438C16.6875 19.7917 16.5573 21.875 16.2969 23.5938C16.0885 25.2604 15.9062 26.3542 15.75 26.875C15.5938 27.3438 15.2552 28.2031 14.7344 29.4531C14.6302 29.8177 14.6562 30.1823 14.8125 30.5469C14.9688 30.9115 15.2292 31.1719 15.5938 31.3281C15.9583 31.4323 16.2969 31.4062 16.6094 31.25C16.974 31.0938 17.2344 30.8594 17.3906 30.5469C18.3281 28.151 18.901 26.0938 19.1094 24.375H19.8906C20.099 26.0938 20.6719 28.151 21.6094 30.5469C21.7656 30.8594 22 31.0938 22.3125 31.25C22.6771 31.4062 23.0417 31.4323 23.4062 31.3281C23.7708 31.1719 24.0312 30.9115 24.1875 30.5469C24.3438 30.1823 24.3698 29.8177 24.2656 29.4531C23.7448 28.2031 23.4062 27.3438 23.25 26.875C23.0938 26.3542 22.8854 25.2604 22.625 23.5938C22.4167 21.875 22.3125 19.7917 22.3125 17.3438C23.8229 17.1354 25.9583 16.7188 28.7188 16.0938Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PositionPreview;
