import axios from 'axios';
import { redirect} from "react-router-dom";
import * as React from 'react';
import { Buffer } from "buffer";
export interface IAppProps {
  

}
let user:any;
let pass:any;
let token:'';

export function postConfig(jsonArray: any) {
console.log(user,pass,"")


return axios.post('http://localhost:8081/ApiTest/CalculatorController', jsonArray,{
  
  headers: {
    'Authorization': 'Basic ' + btoa(user + ':' + pass)
  }  
     

  }
  )
}

export function loginConfig(username:any,password:any) {
  console.log(username,password)
 user=username;
 pass=password;

  //Buffer is not supported by run time envioremnt you need to iimport and install this
  //working is same as btoa (binary to ascii)
  // http://localhost:8080/reactcalculatorbackend/
  return axios.post('http://localhost:8081/ApiTest/login',
   {
    headers: {
      'Authorization': 'Basic ' + btoa(user + ':' + pass)
    }  
     

  }
  ).then((response)=>{
    token=response.data.accessToken;
console.log(response.data.accessToken)
  });
}
export function logout() {
  window.localStorage.removeItem("jwtToken");

user=''
pass=''
  //Buffer is not supported by run time envioremnt you need to iimport and install this
  //working is same as btoa (binary to ascii)
  // http://localhost:8080/reactcalculatorbackend/user/logout
  return axios.post('http://localhost:8081/ApiTest/user/logout',
   {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  );
}