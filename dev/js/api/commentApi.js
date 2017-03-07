import axios from 'axios';

class commentApi {

   static getAllCommentsByProduct(id) {
    return fetch('http://localhost:5000/api/comment/getallbyproduct/'+id).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  
  static createComment(comment) {
    return axios.post('http://localhost:5000/api/comment/create',comment).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }

  // static createComment(comment){
  //   const request = new Request('http://localhost:5000/api/comment/create', {
  //       method: 'POST',
  //       headers: new Headers({
  //         'Content-Type': 'application/json'
  //       }), 
  //       body: JSON.stringify({comment: comment})
  //     }); 

  //     return fetch(request).then(response => {
  //        return response.json();
  //     }).catch(error => {
  //     return error;
  //      });
  //   }

}

export default commentApi;