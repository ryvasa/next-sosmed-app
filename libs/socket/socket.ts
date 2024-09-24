'use client';
import io from 'socket.io-client';

export const messageSocket = io(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
  withCredentials: true,
});

export const notificationSocket = io(
  `${process.env.NEXT_PUBLIC_API_URL}/notifications`,
  {
    withCredentials: true,
  }
);

export const userSocket = io(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
  withCredentials: true,
});

export const callSocket = io(`${process.env.NEXT_PUBLIC_API_URL}/calls`, {
  withCredentials: true,
});
