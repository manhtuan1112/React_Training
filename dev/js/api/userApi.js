import axios from 'axios';

class userApi {
   
  
  static checkAccount(account) {
    var querystring = require('querystring');
    return axios.post('http://localhost:5000/api/account/checkaccount',querystring.stringify({
            username: account.username, //gave the values directly for testing
            password: account.password,
    })).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }


   static getUserByUserName(username) {
        return fetch('http://localhost:5000/api/applicationUser/detailbyusername/'+username).then(response => {
        console.log(response);
        return response.json();
        }).catch(error => {
          return error;
        });
   }

}

export default userApi;