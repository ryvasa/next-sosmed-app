"use client";
import Image from "next/image";
import image from "../../public/pf.jpg";
import { Edit, Friend } from "../ui/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchGetOneUser } from "@/libs/api/api";
import { useParams } from "next/navigation";
import { userStore } from "@/store";
import { formatRelativeTime } from "@/helper/formaterTime";
import useActiveStatus from "@/libs/hooks/useActiveStatus";
import LoadingCircle from "../shared/LoadingCircle";
import ChatButton from "../shared/ChatButton";

const ProfileCard = ({ data }: any) => {
  const currentUser = userStore((state: any) => state.user);
  const [userMatch, setUserMatch] = useState(false);
  const [user, setUser] = useState({
    avatar: image,
    username: "",
    created_at: "",
    updated_at: "",
    active: false,
    id: "",
  });
  const { id } = useParams();
  const validateUser = () => {
    if (currentUser) {
      if (currentUser.id === id) {
        setUserMatch(true);
      }
    }
  };
  const getUser = async () => {
    const response = await fetchGetOneUser(id as string);

    setUser(response.data);
  };
  useEffect(() => {
    getUser();
    validateUser();
  }, [id]);

  useActiveStatus(getUser);
  return (
    <div className="bg-white dark:bg-dark-md rounded-lg py-3 px-6">
      {!user.id ? (
        <div className="flex justify-center items-center h-48 lg:h-38">
          <LoadingCircle />
        </div>
      ) : (
        <>
          <div className="flex items-center lg:justify-start justify-between h-48 lg:gap-4 lg:h-40">
            <div className="flex-1 flex gap-5 items-center ">
              <div
                className={`rounded-full ${
                  user.active && "avatar-profile-online"
                } overflow-hidden`}
              >
                {/* <ShowPicture data={user?.avatar} /> */}
                <Image
                  alt="profile"
                  width={10000}
                  height={10000}
                  // style={{ width: "112px", height: `112px` }}
                  src={
                    user?.avatar
                      ? `http://localhost:3000/${user?.avatar}`
                      : image
                  }
                  className="object-cover h-20 w-20 lg:h-28 lg:w-28 "
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-lg lg:text-2xl font-semibold">
                  {user.username}
                </p>
                <p className="lg:text-md text-sm">
                  Join on {formatRelativeTime(user.created_at)}
                </p>
                {user.active ? (
                  <p className="lg:text-md font-semibold text-sm text-success">
                    Online
                  </p>
                ) : (
                  <p className="lg:text-md text-sm">
                    last online{" "}
                    <span className="text-error">
                      {formatRelativeTime(user.updated_at)}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="">
              {userMatch ? (
                <Link href={`/users/${user.id}/edit`}>
                  <Edit />
                </Link>
              ) : (
                <ChatButton userId={user.id} />
              )}
            </div>
          </div>
          {/* {!userMatch && (
            <div className="py-5 flex gap-10 lg:gap-5 lg:w-80">
              <div className="user-profile-action">
                <Check w={5} h={5} />
                <p className="normal-case">Confirm</p>
              </div>
              <div className="user-profile-cancle">
                <Close w={5} h={5} />
                <p className="normal-case">Cancel</p>
              </div>
            </div>
          )} */}
        </>
      )}
      <div className="flex items-center py-5 gap-3 ">
        <Friend textColor={"text-primary"} />
        <p>
          <b>{data}</b> threads
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
