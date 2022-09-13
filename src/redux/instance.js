import React from 'react';
import axios from "axios"

 const instance = axios.create({
  baseURL : `https://react-rails-api-demo.herokuapp.com/api/v1` 
 })
const AUTH_TOKEN = localStorage.getItem("user_token")

console.log(747,AUTH_TOKEN);

instance.defaults.headers.common["Authorization"] = AUTH_TOKEN
 
export default instance;