"use client";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { threadStore } from "../../store";
import { truncateText } from "../../helper/truncateText";
import LoadingCircle from "./LoadingCircle";
import ShowPicture from "./ShowPicture";

const ThreadContent = ({ id }: any) => {
  const [thread, setThread] = useState({
    body: "",
    images: [{ image: "" }],
    id: "",
  });
  const { threads } = threadStore((state: any) => state);
  useEffect(() => {
    const filteredThread = threads.find((thread: any) => thread.id === id);
    setThread(filteredThread);
  }, [id]);
  return (
    <>
      {!thread?.body ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="text-sm lg:text-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(thread?.body),
              }}
            />
          </div>
          {thread?.images?.length > 0 &&
            thread.images.map((image: any, index: number) => (
              <div className="h-full" key={index}>
                {image.image ? (
                  <>
                    <ShowPicture data={image.image} />
                    {/*<Image
                      placeholder="blur"
                      blurDataURL={`http://localhost:3000/${image.image}`}
                      width={12000}
                      height={12000}
                      src={`http://localhost:3000/${image.image}`}
                      alt="photo postingan"
                      className="w-full h-full object-cover rounded-xl"
                    />*/}
                  </>
                ) : (
                  <LoadingCircle />
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ThreadContent;
