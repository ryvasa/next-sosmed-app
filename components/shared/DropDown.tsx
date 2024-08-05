import ThemeToggle from "./ThemeToggle";
import { Hamburger } from "../ui/icons";
import LogoutButton from "./LogoutButton";
const DropDown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="m-1">
        <button className="btn btn-square btn-ghost">
          <Hamburger />
        </button>
      </label>
      <ul className="dropdown-list">
        <li>
          <ThemeToggle showText={true} />
        </li>
        <li>
          <LogoutButton showText={true} />
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
