import React, {useContext, useCallback, useState, useEffect} from 'react';
import { AppContext } from '../../lib/context';
import SettingsService from '../../app/services/SettingsService';
import Card from '../../app/components/layout/card';
import Button from '../../app/components/button';
import Heading from '../../app/components/heading';
import InvoiceTable from '../../app/components/invoiceTable';
import Notification from '../../app/components/notification';
const MyPlan = () => {
  const { state, dispatch } = useContext(AppContext);
  const [invoices, setInvoices] = useState([]);
  const spark = state.settings.userData.spark;
  const token = document.getElementById("accessibly").getAttribute("data-token");
  useEffect(() => {
    fetchInvoices();
  }, []);

  const billingUrl = async () => {
    try{
      const billingUrl = await SettingsService.getBillingUrl(token);
      window.open(billingUrl.data, "_blank")
    }catch(err){
      alert("We are very sorry, there was an error on our side. We could not generate the billing URL. Please contact the support");
    }
  }

  const fetchInvoices = async () => {
    try{
      const {data} = await SettingsService.fetchInvoices(token);
      setInvoices(data);
    }catch(err){
      alert("We are very sorry, there was an error on our side. We could not generate the billing URL. Please contact the support");
    }
  }
    if(!spark){
      return (
        <div id="myplan" class="wrap">
          <Card>
            <Heading
              title="My Plan"
              headingSize='lg'
              />
            <Notification  onClick={billingUrl}/>
          </Card>
        </div>
      )
    }
    return (
      <div id="myplan" class="wrap">
        <Card>
          <div className="flex items-center justify-between w-full">
            <Heading
              title="My Plan"
              headingSize='lg'
            />
            <Button color="indigo" onClick={() => billingUrl()} label="Change subscription plan" />
          </div>
        </Card>
        <Card>
          <div className="flex bg-white rounded shadow">
              <div className="w-6/12 px-4 py-6 border-r">
                <p className="text-base weight-semibold text-gray-900">Next payment due on</p>
                <p className="mt-2"><span className="text-xl weight-semibold text-ac">{state.settings.userData.nextPaymentDate}</span> <span className="text-xs text-gray-400">(In {state.settings.userData.daysTillPayment})</span></p>
              </div>
              <div className="w-6/12 py-6 px-4">
                <p className="text-base weight-semibold text-gray-900">Payment amount</p>
                <p className="mt-2"><span className="text-xl weight-semibold text-ac">${state.settings.userData.nextPaymentAmount}</span> <span className="text-xs text-gray-400">USD</span></p>
              </div>
          </div>
        </Card>
        <Card bgColor={'bg-white'} classes="shadow">
          <InvoiceTable data={invoices}/>
        </Card>
      </div>
     );
}

export default MyPlan;
