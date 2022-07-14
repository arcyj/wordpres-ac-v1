import React, {useState, useEffect, useContext} from 'react';
import { AppProvider, AppContext } from '../lib/context';
import {   BrowserRouter as Router, useSearchParams } from "react-router-dom";
import General from './components/General';
import Advanced from './components/Advanced';
import Features from './components/Features';
import Statement from './components/Statement';
import MyPlan from './components/MyPlan';
import SaveBar from '../app/components/saveBar'
import Toast from '../app/components/toast'
import Badge from '../app/components/badge'
import Heading from '../app/components/heading';
import Card from '../app/components/layout/card';
import '../styles/globals.css'
import '../styles/preview.css'
import '../styles/positionPreview.css'
import SettingsService from '../app/services/SettingsService';
import axios from 'axios';

const AppView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  const { state, dispatch } = useContext(AppContext);

  const [loadingSettings, setLoadingSettings] = useState(true);
  const [activeTab, setActiveTab] = useState('general');
  const [prevState, setPrevState] = useState();
  const [token, setToken] = useState(null);
  const [showToast, setShowToast] = useState(false);

  let adminUrl, adminEmail;

  const createUser = async () => {
    try{
      var getUrl = window.location;
      var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
      const {data: {token}} = await SettingsService.register({email:adminEmail, platform: "wordpress", url: baseUrl});
      saveToken(token);
      fetchSettings(token)
    }catch(err){
      alert("We are very sorry, there was an error on our side. Please contact the support");
    }
  }

  const saveToken = (token) => {
    var data = new FormData();
    data.append('token', token);
    data.append('action', 'save_token');

    axios.post(adminUrl, data)
    .then((result) => {
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong with creating your profile. Please contact the support!");
    });
  }

  const billingUrl = async () => {
    try{
      const billingUrl = await SettingsService.getBillingUrl(token);
      window.open(billingUrl.data, "_blank")
    }catch(err){
      alert("We are very sorry, there was an error on our side. We could not generate the billing URL. Please contact the support");
    }
  }

  const fetchSettings = async (token) => {
    setLoadingSettings(true)
    if(!token){
      return;
    }
    try {
      const {
        data: userData,
      } = await SettingsService.fetchSettings(token);
      dispatch({ type: "set_userData", payload: userData });
      // dispatch({ type: "show_savebar", payload: false });
      // dispatch({ type: "set_prevstate", payload: userData });
      setPrevState(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSettings(false)
    }
  }

  useEffect(() => {
    adminUrl = document.getElementById("accessibly").getAttribute("data-admin-url");
    adminEmail = document.getElementById("accessibly").getAttribute("data-email");
    const token = document.getElementById("accessibly").getAttribute("data-token");
    if(token.length != 0){
      setToken(token);
      // dispatch({ type: "set_token", token });
      fetchSettings(token);
    }else{
      createUser();
    }
  }, []);

    /**
   * Save Settings
   *
   */
     const saveSettings = async () => {
      try {
        const update = await SettingsService.updateSettings(token, state.settings.userData)
        dispatch({ type: "show_savebar", payload: false });
      } catch (err) {
        console.log("err at save settings", err);
      }
    };

    const resetState = async () => {
      dispatch({ type: "set_userData", payload: prevState});
      dispatch({ type: "show_savebar", payload: false });
    }

    const popupToast = (data) => {
      dispatch({ type: "add_toast", payload:data})
    }

    const handleTabChange = (e) => {
      setActiveTab(e.target.id.split('-')[0]);
    }

  if(loadingSettings){
    return(
      <p>Loading data...</p>
    )
  }
  if(currentPage == "accessibly-plan"){
    return (
      <MyPlan />
    )
  }else if(currentPage == "accessibly-statement"){
    return (
      <div class="">
        <Statement
          addToast={(data) => popupToast(data)}
        />
        {state.app ?
          <SaveBar
            showSaveBar={state.app.showSaveBar}
            onSave={() => saveSettings()}
            onDiscard={() => resetState()}
          /> : ""
        }
        {state.app.toasts.length > 0 ?
        <Toast
        /> : ""
        }
      </div>
    )
  }else{
    return (
      <div class="">
        <div className="px-4 py-4">
          <Heading
            title="Settings"
            headingSize='xl'
          />
        </div>

        <div id="tabs" class="settings-tab">
          <div class="nav-tab-wrapper">
            <a class={`nav-tab ${activeTab == 'general' ? "nav-tab-active" : null}`} href="#general" id="general-tab" onClick={(e) => handleTabChange(e)}>General</a>
            <a class={`nav-tab ${activeTab == 'features' ? "nav-tab-active" : null}`} href="#features" id="features-tab" onClick={(e) => handleTabChange(e)}>Features</a>
            <a class={`nav-tab ${activeTab == 'advanced' ? "nav-tab-active" : null}`} href="#advanced" id="advanced-tab"  onClick={(e) => handleTabChange(e)}>Advanced <Badge/></a>
          </div>

          {activeTab == 'general' ? <General billingUrl={billingUrl} /> : null}
          {activeTab == 'features' ? <Features  billingUrl={billingUrl} /> : null}
          {activeTab == 'advanced' ? <Advanced billingUrl={billingUrl} /> : null}
        </div>
        {state.app ?
          <SaveBar
            showSaveBar={state.app.showSaveBar}
            onSave={() => saveSettings()}
            onDiscard={() => resetState()}
          /> : ""
        }

      </div>
    );
  }

}

const App = () => {


  return (
    <Router>
      <AppProvider>
        <AppView
        />
      </AppProvider>
    </Router>

    );
}

export default App;
