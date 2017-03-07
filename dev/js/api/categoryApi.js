class categoryApi {

  static getAllCategories() {
    return fetch('http://localhost:5000/api/productcategory/getallparents').then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default categoryApi;