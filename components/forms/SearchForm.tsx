import { Search } from "../ui/icons";

const SearchForm = () => {
  return (
    <div className="w-full flex relative justify-center items-center ">
      <input
        type="text"
        placeholder="Type here"
        className="input pr-11 bg-gray-100 dark:bg-dark-sm w-full flex-1"
      />
      <button className="absolute right-3 btn btn-square btn-primary btn-sm text-white dark:text-dark-lg">
        <Search />
      </button>
    </div>
  );
};

export default SearchForm;
