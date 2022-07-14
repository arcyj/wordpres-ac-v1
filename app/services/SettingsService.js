import Request from "./Request";

const client = new Request();

export default {
  fetchSettings(token) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.get(`/fetch-settings`);
  },
  updateSettings(token, settings) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.post("/update-settings", settings);
  },
  getBillingUrl(token) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.get("/get-billing-url");
  },
  fetchInvoices(token) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.get("/get-user-invoices");
  },
  register(userData) {
    return client.request.post("/register", userData);
  }

};
