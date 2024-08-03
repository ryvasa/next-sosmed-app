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
export async function fetchLogin(body: any): Promise<any> {
  return fetchData({ url: "auth/login", method: "POST", body });
}
export async function fetchLogout(): Promise<any> {
  return fetchData({ url: "auth/logout", method: "DELETE" });
}

// THREADS
export async function fetchGetThreads(): Promise<any> {
  return fetchData({ url: "threads", method: "GET" });
}

export async function fetchGetOneThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}`, method: "GET" });
}

// CHATS
export async function fetchGetOneChat(id: string): Promise<any> {
  return fetchData({ url: `chats/${id}`, method: "GET" });
}

export async function fetchGetChats(): Promise<any> {
  return fetchData({ url: "chats", method: "GET" });
}

// MESSAGES
export async function fetchGetUnreadedMessages(): Promise<any> {
  return fetchData({ url: "messages/unreaded", method: "GET" });
}
