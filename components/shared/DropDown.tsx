import ThemeToggle from "../ui/ThemeToggle";
import { Dark, Hamburger, Light, User, Notification } from "../ui/icons";

const DropDown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="m-1">
        <button className="btn btn-square btn-ghost">
          <Hamburger />
        </button>
      </label>
      <ul className="relative dropdown-content z-[1] menu p-2 rounded-box w-40 drop-shadow-xl bg-white/95 dark:bg-dark-sm">
        <li>
          <ThemeToggle />
        </li>
        <li>
          <div className="flex justify-start items-center">
            <User w={4} h={4} />
            <p className="text-md text-dark-xl dark:text-dark-xs">Log out</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
