import useChatNotify from '@/libs/hooks/useChatNotify';
import useActiveStatus from '@/libs/hooks/useActiveStatus';
import { useEffect, useState } from 'react';
import { fetchGetChats } from '@/libs/api/api';
import { chatsStore } from '@/store';
import RightBarChatCard from './RightBarChatCard';

const RightBarChats = () => {
  const { updateChats } = chatsStore((state: any) => state);
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetchGetChats({});
    updateChats(res.data);
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useChatNotify(fetchData);
  useActiveStatus(fetchData);

  return (
    <div className="flex flex-col pt-3 gap-1 w-full px-4">
      {data.map((item: any) => (
        <div key={item.id}>
          <RightBarChatCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default RightBarChats;
