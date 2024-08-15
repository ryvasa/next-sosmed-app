const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

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
import { cookies } from "next/headers";
const fetchData = async (param: fetchParam) => {
  try {
    const response = await fetch(`${BASE_URL}/${param.url}`, {
      method: param.method,
      headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param.body),
    });
    const result = await response.json();
    return result;
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
export async function fetchLogout(): Promise<any> {
  return fetchData({ url: "auth/logout", method: "DELETE" });
}

// User
export async function fetchGetOneUser(id: string): Promise<any> {
  return fetchData({ url: `users/${id}`, method: "get" });
}
export async function fetchGetUsers(
  take?: number,
  skip?: number,
  username?: string,
): Promise<any> {
  return fetchData({
    url: `users?${username && `username=${username}`}?take=${take || 15}&skip=${skip || 0}`,
    method: "GET",
  });
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
      cache: "force-cache",
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

export async function fetchGetOneThread(id: string): Promise<any> {
  return fetchData({ url: `threads/${id}`, method: "GET" });
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

// CHATS
export async function fetchGetOneChat(id: string): Promise<any> {
  return fetchData({ url: `chats/${id}`, method: "GET" });
}

export async function fetchGetChats(
  take?: number,
  skip?: number,
): Promise<any> {
  return fetchData({
    url: `chats?take=${take || 15}&skip=${skip || 0}`,
    method: "GET",
  });
}

// MESSAGES
export async function fetchGetUnreadedMessages(): Promise<any> {
  return fetchData({ url: "messages/unreaded", method: "GET" });
}
export async function fetchGetMessages(
  id: string,
  skip?: number,
): Promise<any> {
  return fetchData({
    url: `messages/chats/${id}?take=10&skip=${skip || 0}`,
    method: "GET",
  });
}
