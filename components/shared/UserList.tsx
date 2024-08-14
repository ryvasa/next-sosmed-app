"use client";
import { fetchGetUsers } from "@/libs/api/api";
import UserCard from "../cards/UserCard";
import { useEffect, useState } from "react";
import SearchForm from "../forms/SearchForm";
import useActiveStatus from "@/libs/hooks/useActiveStatus";

const UserList = () => {
  const [users, setUsers] = useState<any>([]);
  const fetchUser = async (username?: string) => {
    const response = await fetchGetUsers({ username });
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  useActiveStatus(fetchUser);
  return (
    <>
      <div className="flex flex-col gap-2">
        <SearchForm fetchData={fetchUser} />
      </div>
      <div className="py-4">
        <div className="flex justify-between border-gray-200 dark:border-gray-700 border-b-[2px] pb-2 items-end">
          <h1 className="font-semibold text-lg">User List</h1>
          <button
            type="submit"
            onClick={() => fetchUser()}
            className="text-primary font-semibold text-sm"
          >
            Show All
          </button>
        </div>
        <div className="flex flex-col gap-1 pt-3">
          {users.map((user: any) => (
            <div key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
