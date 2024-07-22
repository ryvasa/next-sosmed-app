'use client';
import { Add, Chat, Friend, Home, Search } from '../ui/icons';
import ItemBar from './ItemBar';

const Sidebar = () => {
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
      text: 'New Post',
      href: '/create-post',
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
    <div className="relative z-[10] ">
      <div className="sidebar">
        <ul className="flex justify-center gap-5 items-center h-full flex-col">
          {items.map((item) => (
            <ItemBar key={item.text} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
