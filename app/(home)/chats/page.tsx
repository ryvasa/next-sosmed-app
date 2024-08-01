'use client';
import SearchForm from '@/components/forms/SearchForm';
import ChatCard from '@/components/cards/ChatCard';
import { useEffect, useState } from 'react';
import { fetchGetChats } from '../../../libs/api/api';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchGetChats();
      setData(res.data);
    }

    fetchData();
  }, []);

  return (
    <div className="pt-10">
      <SearchForm />
      <div className="flex flex-col pt-3 gap-1">
        {data.map((item: any) => (
          <div key={item.id}>
            <ChatCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
