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