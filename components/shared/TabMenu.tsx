'use client';
import { useState } from 'react';
import { Group, User } from '../ui/icons';
import { usePathname, useRouter } from 'next/navigation';
import SearchList from './SearchList';
import FriendList from './FriendList';

const TabMenu = () => {
  const path = usePathname();
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('user');

  const changeTab = (tab: string) => {
    setCurrentTab(tab);
    router.push(`/search#${tab}`);
  };
  return (
    <>
      <div className="tabs py-2 tabs-boxed bg-gray-100 dark:bg-dark-lg/30 flex justify-between items-center w-52">
        <button
          onClick={() => {
            changeTab('user');
          }}
          className={`tab flex items-center justify-center gap-1 ${
            currentTab === 'user' && 'bg-primary'
          }`}
        >
          <div
            className={`flex gap-1 ${
              currentTab === 'user'
                ? 'dark:text-dark-sm text-white'
                : 'text-primary'
            }`}
          >
            <User w={6} h={6} />
            <p>User</p>
          </div>
        </button>
        <button
          onClick={() => {
            changeTab('group');
          }}
          className={`tab flex items-center justify-center gap-1 ${
            currentTab === 'group' && 'bg-primary'
          }`}
        >
          <div
            className={`flex gap-1 ${
              currentTab === 'group'
                ? 'dark:text-dark-sm text-white'
                : 'text-primary'
            }`}
          >
            <Group />
            <p>Group</p>
          </div>
        </button>
      </div>
      {path === '/users' ? <FriendList /> : <SearchList tab={currentTab} />}
    </>
  );
};

export default TabMenu;
