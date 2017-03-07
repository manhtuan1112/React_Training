import axios from 'axios';

class productApi {

  static getAllProductsByCategory(id) {
    return fetch('http://localhost:5000/api/product/getallbycategory/'+id).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  
static updateProduct(product) {
    return axios.post('http://localhost:5000/api/product/update',product).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }

 static getAllProducts() {
    return fetch('http://localhost:5000/api/product/getallnopaging').then(response => {
      console.log(response);
       return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default productApi;