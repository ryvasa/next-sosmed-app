'use client';
import SearchForm from '@/components/forms/SearchForm';
import ChatCard from '@/components/cards/ChatCard';
import { useEffect, useState } from 'react';
import { fetchGetThreads } from '../../../service/api';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchGetThreads();
      setData(res.data);
    }

    fetchData();
  }, []);
  return (
    <div className="pt-10">
      <SearchForm />
      <p>{data.length}</p>
      <div className="flex flex-col pt-3 gap-1">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
    </div>
  );
};

export default Page;
