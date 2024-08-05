"use client";
import { fetchGetUsers } from "@/libs/api/api";
import UserCard from "../cards/UserCard";
import { useEffect, useState } from "react";

const FriendList = ({ section, friend, invitation }: any) => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    const response = await fetchGetUsers({});
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="py-4">
      <h1 className="font-semibold text-lg">{section}</h1>
      <div className="flex flex-col gap-1 pt-3">
        {users.map((user) => (
          <div key={user.id}>
            <UserCard friend={friend} invitation={invitation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
