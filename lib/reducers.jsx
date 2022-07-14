import helpers from "../app/helpers/helpers";

export const appRecudcer = (state, action) => {
  switch (action.type) {
    case "show_savebar":
      return {
        ...state,
        showSaveBar: action.payload
      };
    case "set_prevstate":
      return {
        ...state,
        prevState: action.payload,
      };
    case "set_token":
      return {
        ...state,
        token: action.payload
      };
      case "add_toast":
        let toasts = state.toasts;
        toasts.push(action.payload)
        return {
          ...state,
          toasts: toasts
        };
      case "remove_toast":
        let toastsPop = state.toasts.shift();
        return {
          ...state,
          toasts: state.toasts
        };
        default: {
          return {
            ...state
          }
        }
  }
}

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "set_userData":
      return {
        ...state,
        userData: action.payload,
      };
    case "set_showToast":
      return {
        ...state,
        showToast: action.payload,
      };
    case "set_enabled":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, appIsEnabled: !state.userData.settings.appIsEnabled}},
      };
    case "set_themeColor":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, theme: {...state.userData.settings.theme, branding: action.payload}}},
      };
    case "set_iconColor":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, theme: {...state.userData.settings.theme, icons: action.payload}}},
      };
    case "show_logo":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, showAccessiblyLogo: !state.userData.settings.showAccessiblyLogo}},
      };
    case "show_hideForever":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, showHideForever: !state.userData.settings.showHideForever}},
      };
    case "enable_fetchAltTags":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, autoGenerateAltTags: !state.userData.settings.autoGenerateAltTags}},
      };
    case "set_customTrigger":
      return {
        ...state,
        userData: { ...state.userData, advanced_settings: {...state.userData.advanced_settings, custom_desktop_trigger: action.payload}},
      };
    case "set_mobileCustomTrigger":
      return {
        ...state,
        userData: { ...state.userData, advanced_settings: {...state.userData.advanced_settings, custom_mobile_trigger: action.payload}},
      };
    case "enable_toggleAcOnTab":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, widgetActiviationWithTab: !state.userData.settings.widgetActiviationWithTab}},
      };
    case "enable_initialHide":
      return {
        ...state,
        userData: { ...state.userData, advanced_settings: {...state.userData.advanced_settings, initial_hide: !state.userData.advanced_settings.initial_hide}},
      };
    case "set_initialLoadTrigger":
      return {
        ...state,
        userData: { ...state.userData, advanced_settings: {...state.userData.advanced_settings, custom_trigger: action.payload}},
      };
    case "set_welcomeScreen":
      return {
        ...state,
        shop: { ...state.shop, welcomeScreen: action.payload },
      };
    case "set_customWrapper":
      return {
        ...state,
        userData: { ...state.userData, advanced_settings: {...state.userData.advanced_settings, wrapper_for_filter_animations: action.payload}},
      };
    case "isbusy_savebar":
      return {
        ...state,
        contextualSaveBarIsBusy: !state.contextualSaveBarIsBusy,
      };

    //Features

    case "enable_biggerText":

      return {
        ...state.userData,
        userData: {
          ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "bigger_text") },
      };
    case "enable_showCursor":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "bigger_cursor") },
      };
    case "enable_showInvertColor":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "invert_colors") },
      };
    case "enable_showContrast":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "contrast") },
      };
    case "enable_showGrayScale":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "grayscale") },
      };
    case "enable_showBrightness":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "brightness") },
      };
    case "enable_showReadingLine":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "reading_line") },
      };
    case "enable_showReadableFonts":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "readable_fonts") },
      };
    case "enable_showTooltip":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "tooltips") },
      };
    case "enable_showHighlightLinks":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "highlight_links") },
      };
    case "enable_showHideImages":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "hide_images") },
      };
    case "enable_showVoiceOverText":
      return {
        ...state,
        userData: { ...state.userData, features: helpers.upadateFeatureArray(state.userData.features, "read_page") },
      };

    // Widget Position
    case "set_topBottomPosition":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, position: {...state.userData.settings.position, coords: {...state.userData.settings.position.coords, top: action.payload}}}},
      };
    case "set_rightLeftPosition":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, position: {...state.userData.settings.position, coords: {...state.userData.settings.position.coords, offset: action.payload}}}},
      };
    case "set_position":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, position: {...state.userData.settings.position, type: action.payload}}},
      };
    case "set_iconSize":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, widgetSize: action.payload}},
      };
    case "set_iconCustomSize":
      return {
        ...state,
        shop: { ...state.shop, iconCustomSize: action.payload },
      };
    //Language
    case "set_widgetLang":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, widgetLanguage: action.payload}},
      };
    case "set_voiceLanguage":
      return {
        ...state,
        userData: { ...state.userData, settings: {...state.userData.settings, voiceLanguage: action.payload}},
      };
    // MyPlan
    case "set_couponPrice":
      return {
        ...state,
        shop: { ...state.shop, couponPrice: action.payload },
      };
    case "set_coupon":
      return {
        ...state,
        shop: { ...state.shop, coupon: action.payload },
      };
    case "set_subscription_active":
      return {
        ...state,
        shop: { ...state.shop, subscription_active: action.payload },
      };
    case "set_subscription_basic_active":
      return {
        ...state,
        shop: { ...state.shop, subscription_basic_active: action.payload },
      };
    // Statement
    case "set_statementLink":
      return {
        ...state,
        userData: { ...state.userData, accessibility_statement_url: action.payload },
      };
    default: {
        return {
          ...state
        }
      }
  }
};
