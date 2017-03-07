import axios from 'axios';

class cartApi {

  //  static getAll() {
  //   return fetch('http://localhost:5000/api/shoppingcart/getall').then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }
  
  static makePayment(orderModel) {
    return axios.post('http://localhost:5000/api/shoppingcart/createOrder',orderModel).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }

}

export default cartApi;