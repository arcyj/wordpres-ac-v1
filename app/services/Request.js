/* It's a wrapper for the axios library that allows you to set headers and make requests */
 import axios from "axios";

 let instance = null;

 const config = {
   baseURL: `https://ac.onthemapmarketing.com/api`,
  //  baseURL: `http://accessibly-dashboard.test/api`,
   headers: {
     "Content-Type": "application/json"
   }
 };
 class Request {
   constructor() {
     if (!instance) {
       instance = this;
     }

     this.request = axios.create(config);

     return instance;
   }

   setHeader(key, value) {
     this.request.defaults.headers[key] = value;
   }

   request() {
     return this.request;
   }
 }

 export default Request;
