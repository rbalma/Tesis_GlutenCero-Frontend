import { basePath, apiVersion } from "./config";

/*
    THREADS
*/

export const getThreadsApi = async(limit, page) => {
  const url = `${basePath}/${apiVersion}/threads?limit=${limit}&page=${page}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resp = await fetch(url, params);
  const body = await resp.json();

  return body;
  
}


export function addThreadApi(token, data) {
  const url = `${basePath}/${apiVersion}/threads`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateThreadApi(token, threadId, thread) {
  const url = `${basePath}/${apiVersion}/threads/${threadId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(thread),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteThreadApi(token, threadId) {
  const url = `${basePath}/${apiVersion}/threads/${threadId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getThreadByIdApi(threadId) {
  const url = `${basePath}/${apiVersion}/threads/${threadId}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getThreadByUserApi(token, userId) {
  const url = `${basePath}/${apiVersion}/threads/user/${userId}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

/*
    POSTS
*/
export const getPostsApi = async(threadId, limit = 5, page = 1) => {

  const url = `${basePath}/${apiVersion}/threads/${threadId}/posts?limit=${limit}&page=${page}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resp = await fetch(url, params);
  const body = await resp.json();

  return body;
}


export function getLastPostApi(threadId) {
  const url = `${basePath}/${apiVersion}/threads/${threadId}/last-post`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}


export function addPostApi(token, threadId, content) {
  const url = `${basePath}/${apiVersion}/threads/${threadId}/posts`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(content),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updatePostApi(token, threadId, postId, data) {
  const url = `${basePath}/${apiVersion}/threads/${threadId}/posts/${postId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function deletePostApi(token, postId) {
  const url = `${basePath}/${apiVersion}/posts/${postId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}


export function getPostByIdApi(token, postId) {
    const url = `${basePath}/${apiVersion}/posts/${postId}`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  
    return fetch(url, params)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.message;
      });
  }


export function getPostByUserApi(token, userId) {
  const url = `${basePath}/${apiVersion}/posts/user/${userId}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

