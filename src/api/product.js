import { basePath, apiVersion } from "./config";

export function getListProductsApi() {
   
      const url = `${basePath}/${apiVersion}/products-anmat`;
    
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };
    
      return fetch(url, params)
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result;
        })
        .catch(err => {
          return err.message;
        });
    }

  
    export function postListProductsApi(token, data) {
   
      const url = `${basePath}/${apiVersion}/products-anmat`;

      const params = {
        method: "POST",
        body: data,
        headers: {
          Authorization: token
        }
      };
    
      return fetch(url, params)
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result;
        })
        .catch(err => {
          return err.message;
        });
    }