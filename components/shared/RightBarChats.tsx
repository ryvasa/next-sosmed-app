import useChatNotify from "@/libs/hooks/useChatNotify";
import ChatCard from "../cards/ChatCard";
import useActiveStatus from "@/libs/hooks/useActiveStatus";
import { useEffect, useState } from "react";
import { fetchGetChats } from "@/libs/api/api";
import { chatsStore } from "@/store";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";
import { formaterTimeChatList } from "@/helper/formaterTime";
import Image from "next/image";
import image from "../../public/pf.jpg";
import RightBarChatCard from "./RightBarChatCard";

const RightBarChats = () => {
  const { chats, updateChats } = chatsStore((state: any) => state);
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetchGetChats(3);
    updateChats(res.data);
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useChatNotify(fetchData);
  useActiveStatus(fetchData);
  // Data dummy
  const dummyData = {
    id: "1",
    users: [
      {
        user: {
          id: "2",
          username: "John Doe",
          avatar: "https://via.placeholder.com/150",
          active: true,
        },
      },
    ],
    messages: [
      {
        message:
          "Hello! How are you doing today? This is a long message that will be truncated.",
        created_at: "2024-08-05T12:34:56.789Z",
      },
    ],
    _count: {
      messages: 5,
    },
  };

  // Menggunakan data dummy
  const { users, messages, _count } = dummyData;
  const filteredUser = users[0];
  // chatcard
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
