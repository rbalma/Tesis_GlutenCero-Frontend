import { basePath, apiVersion } from "./config";


export function newRecipeApi(token, data) {
  const url = `${basePath}/${apiVersion}/new-recipe`;

  const formData = new FormData();
  formData.append("image", data.image, data.image.name);
  formData.append("title", data.title);
  formData.append("category", data.category);
  formData.append("ingredient", data.ingredient);
  formData.append("description", data.description);
  formData.append("userId", data.userId);
  formData.append("userName", data.userName);
  formData.append("userLastName", data.userLastName);
  
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


export function getRecipeByIdApi(token, recipeId) {
  const url = `${basePath}/${apiVersion}/get-recipe/${recipeId}`
  const params = {
    method: "GET",
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


export function getRecipesApi(token) {
  const url = `${basePath}/${apiVersion}/recipes`;

  const params = {
    method: "GET",
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
      return result;
    })
    .catch(err => {
      return err.message;
    });
}


export function getRecipesActiveApi(status, limit, page) {

  if (!limit && !page) {
    page = 1;
    limit = 10;
  }

  const url = `${basePath}/${apiVersion}/recipes-active?active=${status}&limit=${limit}&page=${page}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
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

export function uploadImageApi(token, image, recetaId) {
  const url = `${basePath}/${apiVersion}/upload-image-recipe/${recetaId}`;

  const formData = new FormData();
  formData.append("avatar", image, image.name);

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

export function getImageApi(imageName) {
  const url = `${basePath}/${apiVersion}/get-image-recipe/${imageName}`;

  return fetch(url)
    .then(response => {
      return response.url;
    })
    .catch(err => {
      return err.message;
    });
}

export function updateRecipeApi(token, recipe, recipeId) {
  const url = `${basePath}/${apiVersion}/update-user/${recipeId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(recipe)
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

export function activateRecipeApi(token, recipeId, status) {
  const url = `${basePath}/${apiVersion}/activate-recipe/${recipeId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      active: status
    })
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

export function deleteRecipeApi(token, recipeId) {
  const url = `${basePath}/${apiVersion}/delete-recipe/${recipeId}`;

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

