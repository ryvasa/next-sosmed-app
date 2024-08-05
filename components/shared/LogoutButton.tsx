"use client";
import { fetchLogout } from "@/libs/api/api";
import { useRouter } from "next/navigation";
import { Logout, User } from "../ui/icons";

const LogoutButton = ({ showText }: any) => {
  const router = useRouter();
  const handleLogout = async () => {
    const response = await fetchLogout();
    if (response.data.message) {
      router.push("/login");
      localStorage.clear();
    }
  };
  return (
    <button
      onClick={handleLogout}
      className={`${!showText && "flex  text-white dark:text-dark-sm justify-center gap-2 items-center "} flex justify-start items-center`}
    >
      {showText ? <Logout /> : <Logout w={5} h={5} />}
      {showText ? (
        <p className="text-sm lg:text-md">Log out</p>
      ) : (
        <p className="text-sm lg:text-md">Log out</p>
      )}
    </button>
  );
};
export default LogoutButton;
