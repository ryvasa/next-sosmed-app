"use client";
import { useEffect, useState } from "react";
import { Thread, User } from "../ui/icons";
import { usePathname, useRouter } from "next/navigation";
import UserCard from "../cards/UserCard";
import SearchForm from "../forms/SearchForm";
import { fetchSearch } from "@/libs/api/api";
import PostCard from "../cards/PostCard";

const SearchContainer = () => {
  const [users, setUsers] = useState([]);
  const [threads, setThreads] = useState([]);
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("users");
  const changeTab = (e: any) => {
    setCurrentTab(e?.target?.value);
  };
  async function fetchData(query?: string) {
    const response = await fetchSearch({ query });
    setThreads(response.data.threads);
    setUsers(response.data.users);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-3 lg:gap-6 ">
      <SearchForm fetchData={fetchData} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between border-b-[2px] pb-2 lg:pb-4 border-gray-200 dark:border-gray-700  items-end">
          <div className="tabs py-2 tabs-boxed bg-gray-100 dark:bg-dark-md flex justify-between items-center w-52">
            <input
              onClick={changeTab}
              className="hidden"
              id="user"
              type="text"
              value={"users"}
            />
            <label
              htmlFor="user"
              className={`tab flex items-center justify-center gap-1 ${
                currentTab === "users" && "bg-primary"
              }`}
            >
              <div
                className={`flex gap-1 ${
                  currentTab === "users"
                    ? "dark:text-dark-sm text-white"
                    : "text-primary"
                }`}
              >
                <User w={6} h={6} />
                <p>User</p>
              </div>
            </label>
            <input
              onClick={changeTab}
              className="hidden"
              id="threads"
              type="text"
              value={"threads"}
            />
            <label
              htmlFor="threads"
              className={`tab flex items-center justify-center gap-1 ${
                currentTab === "threads" && "bg-primary"
              }`}
            >
              <div
                className={`flex gap-1 ${
                  currentTab === "threads"
                    ? "dark:text-dark-sm text-white"
                    : "text-primary"
                }`}
              >
                <Thread />
                <p>Thread</p>
              </div>
            </label>
          </div>
          <button
            type="submit"
            onClick={() => fetchData()}
            className="text-primary font-semibold text-sm"
          >
            Show All
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {currentTab === "users"
            ? users &&
              users.map((user: any) => (
                <div key={user.id} className="">
                  <UserCard user={user} />
                </div>
              ))
            : threads.map((thread: any) => (
                <div key={thread.id}>
                  <PostCard data={thread} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
