import Image from "next/image";
import image from "../../public/pf.jpg";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="navbar fixed top-0 shadow-2xl bg-gray-800 z-[99]">
      <div className="flex-1">
        <Link href="/users/123" className="avatar-profile">
          <Image alt="profile" src={image} quality={1} />
        </Link>
      </div>

      <div className="flex-none flex gap-2">
        <Link href={"/"}>
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            ></path>
          </svg>
        </Link>
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-7 h-7 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
