const BASE_URL = "http://localhost:3000";

const errorFetch = async (response: any) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error! status: ${response.status}, ${errorData.message}`,
    );
  }
};

interface fetchParam {
  url: string;
  method: string;
  body?: any;
}

const fetchData = async (data: fetchParam) => {
  try {
    const response = await fetch(`${BASE_URL}/${data.url}`, {
      method: data.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.body),
      credentials: "include",
    });
    errorFetch(response);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error in fetchLogin:", error);
    throw error;
  }
};

// AUTH
export async function fetchRegister(body: any): Promise<any> {
  return fetchData({ url: "auth/register", method: "POST", body });
}
export async function fetchLogin(body: any): Promise<any> {
  return fetchData({ url: "auth/login", method: "POST", body });
}
export async function fetchCurrentUser(): Promise<any> {
  return fetchData({ url: "auth/me", method: "GET" });
}
export async function fetchLogout(): Promise<any> {
  return fetchData({ url: "auth/logout", method: "DELETE" });
}

// User
export async function fetchGetOneUser(id: string): Promise<any> {
  return fetchData({ url: `users/${id}`, method: "get" });
}
export async function fetchGetUsers({
  take,
  skip,
  username,
}: {
  take?: number;
  skip?: number;
  username?: string;
}): Promise<any> {
  return fetchData({
    url: `users?${username && `username=${username}&`}take=${take || 15}&skip=${
      skip || 0
    }`,
    method: "GET",
  });
}

export async function fetchUpdateUser(
  formData: FormData,
  id: string,
): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PATCH",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, ${errorData.message}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCreateThread:", error);
    throw error;
  }
}

// THREADS
// export async function fetchCreateThread(body: any): Promise<any> {
//   return fetchData({ url: "threads", method: "POST", body });
// }
export async function fetchCreateThread(formData: FormData): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/threads`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, ${errorData.message}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCreateThread:", error);
    throw error;
  }
}

export async function fetchUpdateThread(
  id: string,
  formData: FormData,
): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/threads/${id}`, {
      method: "PATCH",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, ${errorData.message}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCreateThread:", error);
    throw error;
  }
}

export async function fetchGetThreads(): Promise<any> {
  return fetchData({ url: "threads", method: "GET" });
}

export async function fetchGetUserThreads(id: string): Promise<any> {
  return fetchData({ url: `threads/user/${id}`, method: "GET" });
}

export async function fetchGetOneThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}`, method: "GET" });
}
export async function fetchDeleteThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}`, method: "DELETE" });
}

//THREAD ACTIONS
export async function fetchLikeThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}/like`, method: "POST" });
}

export async function fetchCancelLikeThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}/like`, method: "DELETE" });
}

export async function fetchDislikeThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}/dislike`, method: "POST" });
}

export async function fetchCancelDislikeThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}/dislike`, method: "DELETE" });
}

// COMMENTS
export async function fetchGetComments(id: string, skip: number): Promise<any> {
  return fetchData({
    url: `threads/${id}/comments?take=10&skip=${skip}`,
    method: "GET",
  });
}
export async function fetchGetCountComments(id: string): Promise<any> {
  return fetchData({
    url: `threads/${id}/comments/count`,
    method: "GET",
  });
}
export async function fetchCreateComment(id: string, body: any): Promise<any> {
  return fetchData({
    url: `threads/${id}/comments`,
    method: "POST",
    body,
  });
}
export async function fetchLikeComment(
  threadId: string,
  commandId: string,
): Promise<any> {
  return fetchData({
    url: `threads/${threadId}/comments/${commandId}/like`,
    method: "POST",
  });
}
export async function fetchCancelLikeComment(
  threadId: string,
  commandId: string,
): Promise<any> {
  return fetchData({
    url: `threads/${threadId}/comments/${commandId}/like`,
    method: "DELETE",
  });
}

// CHATS
export async function fetchCreateChat(receiverId: string): Promise<any> {
  return fetchData({
    url: `chats`,
    method: "POST",
    body: { receiverId },
  });
}
export async function fetchGetOneChat(id: string): Promise<any> {
  return fetchData({ url: `chats/${id}`, method: "GET" });
}

export async function fetchDeleteChat(id: string): Promise<any> {
  return fetchData({ url: `chats/${id}`, method: "DELETE" });
}

export async function fetchGetChats({
  take = 15,
  skip = 0,
  username,
}: {
  take?: number;
  skip?: number;
  username?: string;
}): Promise<any> {
  return fetchData({
    url: `chats?${username && `username=${username}&`}take=${take || 15}&skip=${
      skip || 0
    }`,
    method: "GET",
  });
}

// MESSAGES
export async function fetchGetUnreadedMessages(): Promise<any> {
  return fetchData({ url: "messages/unreaded", method: "GET" });
}

export async function fetchGetCountMessages(id: string): Promise<any> {
  return fetchData({ url: `messages/${id}/count`, method: "GET" });
}
export async function fetchGetMessages(
  id: string,
  skip?: number,
): Promise<any> {
  return fetchData({
    url: `messages/chats/${id}?take=15&skip=${skip || 0}`,
    method: "GET",
  });
}

// SEARCH
export async function fetchSearch({
  take,
  skip,
  query,
}: {
  take?: number;
  skip?: number;
  query?: string;
}): Promise<any> {
  return fetchData({
    url: `search?${query && `query=${query}&`}take=${take || 15}&skip=${
      skip || 0
    }`,
    method: "GET",
  });
}

// NOTIFICATIONS
export async function fetchGetNotifications(): Promise<any> {
  return fetchData({ url: "notifications", method: "GET" });
}

export async function fetchGetCountNotifications(): Promise<any> {
  return fetchData({ url: "notifications/count", method: "GET" });
}

export async function fetchUpdateNotification(id: string): Promise<any> {
  return fetchData({ url: `notifications/${id}`, method: "PATCH" });
}

export async function fetchUpdateAllNotification(): Promise<any> {
  return fetchData({ url: `notifications`, method: "PATCH" });
}
