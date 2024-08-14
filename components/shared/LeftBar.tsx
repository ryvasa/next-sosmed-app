'use client';
// import { useEffect, useRef, useState } from "react";
import { Add, Chat, Friend, Home, Search } from '../ui/icons';
import ItemBar from './ItemBar';

const Leftbar = () => {
  // const parentRef = useRef(null);
  // const [parentWidth, setParentWidth] = useState(0);

  // useEffect(() => {
  //   if (parentRef.current) {
  //     setParentWidth(parentRef.current.offsetWidth);
  //   }
  // }, []);
  const items = [
    {
      tooltip: 'tooltip-right',
      icon: Home,
      text: 'Home',
      href: '/',
      position: 'side',
    },
    {
      tooltip: 'tooltip-right',
      icon: Friend,
      text: 'Users',
      href: '/users',
      position: 'side',
    },
    {
      tooltip: 'tooltip-right',
      icon: Add,
      text: 'New Thread',
      href: '/create-thread',
      position: 'side',
    },
    {
      tooltip: 'tooltip-right',
      icon: Chat,
      text: 'Chats',
      href: '/chats',
      position: 'side',
    },
    {
      tooltip: 'tooltip-right',
      icon: Search,
      text: 'Search',
      href: '/search',
      position: 'side',
    },
  ];

  return (
    <div className="w-full relative z-[10] ">
      <div className="sidebar">
        <ul className="flex justify-center gap-5 items-center h-full flex-col">
          {items.map((item) => (
            <ItemBar
              key={item.text}
              icon={item.icon}
              href={item.href}
              text={item.text}
              position={item.position}
              tooltip={item.tooltip}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
