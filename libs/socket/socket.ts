"use client";
import io from "socket.io-client";

export const messageSocket = io("http://localhost:3000/messages", {
  withCredentials: true,
});

export const notificationSocket = io("http://localhost:3000/notifications", {
  withCredentials: true,
});

export const userSocket = io("http://localhost:3000/users", {
  withCredentials: true,
});
