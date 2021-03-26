import { basePath, apiVersion } from "./config";


export function getNoticesApi() {
    const url = `${basePath}/${apiVersion}/notices`;
  
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


export function updateNoticeApi(token, notice, noticeId) {
    const url = `${basePath}/${apiVersion}/update-notice/${noticeId}`;

    const formData = new FormData();

    if(!notice.image){
      formData.append("title", notice.title);
      formData.append("date", notice.date);
      formData.append("description", notice.description);
    } else {
      formData.append("image", notice.image, notice.image.name);
      formData.append("title", notice.title);
      formData.append("date", notice.date);
      formData.append("description", notice.description);
    }
  
  
    const params = {
      method: "PUT",
      body: formData,
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


export function newNoticeApi(token, data) {
    const url = `${basePath}/${apiVersion}/new-notice`;

    const formData = new FormData();
    formData.append("image", data.image, data.image.name);
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("description", data.description);
    
    const params = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.message;
      })
      .catch(err => {
        return err.message;
      });
  }


export function deleteNoticeApi(token, noticeId) {
    const url = `${basePath}/${apiVersion}/delete-notice/${noticeId}`;
  
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.message;
      })
      .catch(err => {
        return err.message;
      });
  }


export function getImageApi(imageName) {
    const url = `${basePath}/${apiVersion}/get-image/${imageName}`;
  
    return fetch(url)
      .then(response => {
        return response.url;
      })
      .catch(err => {
        return err.message;
      });
  }