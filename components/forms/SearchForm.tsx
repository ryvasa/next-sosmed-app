"use client";
import { useState } from "react";
import { Search } from "../ui/icons";

const SearchForm = ({ fetchData }: any) => {
  const [username, setUsername] = useState();
  const handleChange = (e: any) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData(username);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex relative justify-center items-center "
    >
      <input
        onChange={handleChange}
        value={username}
        type="text"
        placeholder="Type here"
        className="input pr-11 bg-gray-100 dark:bg-dark-sm w-full flex-1"
      />
      <button
        disabled={!username}
        type="submit"
        className="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-white absolute right-3 btn btn-square btn-primary btn-sm text-white dark:text-dark-lg"
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
