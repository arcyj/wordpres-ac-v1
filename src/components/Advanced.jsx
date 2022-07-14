import React, {useContext, useState, useCallback} from 'react'
import { AppContext } from '../../lib/context';

import Heading from '../../app/components/heading';
import InputField from '../../app/components/inputField';
import ToggleSwitch from '../../app/components/ToggleSwitch';
import Spacer from '../../app/components/spacer';
import Card from '../../app/components/layout/card';
import Notification from '../../app/components/notification';
import Badge from '../../app/components/badge';
const Advanced = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const handleCustomTriggerChange = (val) => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "set_customTrigger", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  };

  const handleMobileCustomTriggerChange = useCallback((val) => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "set_mobileCustomTrigger", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  const handleCustomWrapperChange = useCallback((val) => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "set_customWrapper", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  const handleCustomTrigger = useCallback((val) => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "set_initialLoadTrigger", payload: val });
    dispatch({ type: "show_savebar", payload: true });
  }, []);

  const toggleInitialHide = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({ type: "enable_initialHide" });
    dispatch({ type: "show_savebar", payload: true });
  };

    return (
      <div data-id="advanced" class="wrap">
       <Notification  onClick={props.billingUrl}/>
       <div className={`bg-white shadow rounded`}>
        <Card>
          <Heading
          title="Advanced"
          text="Here you can add more advanced functionality for your widget. Some technical knowledge is required to correctly incorporate the following items. If you don’t have the required knowledge, feel free to reach out to On The Map’s technical support."
          headingSize='base'
          >
            <Badge/>
          </Heading>
        </Card>
        <div className={`f-full lg:w-8/12 ${!state.settings.userData.spark ? "opacity-50 pointer-events-none" : ""}`}>
          <Card classes="max-w-2xl">
            <Heading
              title="Custom trigger"
              text="If you want your custom trigger for Accessibly widget please enter element ID which you want to use as a trigger."
              headingSize='sm'
            />
            <InputField
              label="Custom trigger for Desktop"
              type="text"
              value={state.settings.userData.advanced_settings.custom_desktop_trigger}
              prefix="ID or Class"
              placeholder="element"
              onChange={(val)=>handleCustomTriggerChange(val)}
            />
            <InputField
              label="Custom trigger for Mobile"
              type="text"
              value={state.settings.userData.advanced_settings.custom_mobile_trigger}
              prefix="ID or Class"
              placeholder="element"
              onChange={handleMobileCustomTriggerChange}
            />
            <Spacer />
            <InputField
              label="Custom wrapper for filter animations (advanced)"
              type="text"
              value={state.settings.userData.advanced_settings.wrapper_for_filter_animations}
              onChange={handleCustomWrapperChange}
              placeholder="Ex. body"
            />
            <Spacer />
            <ToggleSwitch
              title="Enable intial hide for the first time user"
              enabled={state.settings.userData.advanced_settings.initial_hide}
              tooltip="Support our app by showing Accessibly logo on your site!"
              onChange={toggleInitialHide}
            />
            {state.settings.userData.advanced_settings.initial_hide ?
            <InputField
              label="Custom trigger"
              type="text"
              value={state.settings.userData.advanced_settings.custom_trigger}
              onChange={handleCustomTrigger}
              placeholder="element"
            /> : ""
            }
          </Card>
        </div>
        </div>
      </div>
     );
}

export default Advanced;
