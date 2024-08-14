"use client";
import { Add, Chat, Friend, Home, Search } from "@/components/ui/icons";
import ItemBar from "./ItemBar";

const Bottombar = () => {
  const items = [
    {
      tooltip: "tooltip-top",
      icon: Home,
      text: "Home",
      href: "/",
      position: "bottom",
    },
    {
      tooltip: "tooltip-top",
      icon: Friend,
      text: "Users",
      href: "/users",
      position: "bottom",
    },
    {
      tooltip: "tooltip-top",
      icon: Add,
      text: "New Thread",
      href: "/create-thread",
      position: "bottom",
    },
    {
      tooltip: "tooltip-top",
      icon: Chat,
      text: "Chats",
      href: "/chats",
      position: "bottom",
    },
    {
      tooltip: "tooltip-top",
      icon: Search,
      text: "Search",
      href: "/search",
      position: "bottom",
    },
  ];
  return (
    <div className="bottombar ">
      <div className="bottombar-container">
        <ul className="flex justify-between w-full relative">
          {items.map((item) => (
            <ItemBar key={item.text} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
