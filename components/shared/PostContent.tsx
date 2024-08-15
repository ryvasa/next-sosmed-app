"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { threadStore } from "../../store";
import { truncateText } from "../../helper/truncateText";

const PostContent = ({ id }: any) => {
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

  // Potong array images untuk hanya mengambil 4 gambar pertama
  const imagesToShow = thread.images.slice(0, 4);
  const extraImagesCount = thread.images.length - 4;

  return (
    <>
      {!thread?.body ? (
        <Loading />
      ) : (
        <Link href={`/threads/${thread?.id}`} className="flex flex-col gap-4">
          <div className="text-sm lg:text-md">
            <div
              dangerouslySetInnerHTML={{
                __html: truncateText(thread?.body, 1000),
              }}
            />
          </div>
          <div
            className={`${imagesToShow.length > 1 && "grid-cols-2"} grid gap-1`}
          >
            {imagesToShow.length > 0 &&
              imagesToShow.map((image: any, index: number) => (
                <div
                  className={`${
                    imagesToShow.length === 3 && index === 0 && " col-span-2"
                  } relative h-full `}
                  key={index}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}/${image.image}`}
                    width={12000}
                    height={12000}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${image.image}`}
                    alt="photo postingan"
                    className={`w-full max-h-80 h-full object-cover rounded-sm`}
                  />
                  {extraImagesCount > 0 && index === 3 && (
                    <div className="absolute top-0 left-0 backdrop-blur-sm bg-gray-50/50 h-full w-full flex justify-center items-center">
                      <p className="text-dark-xs text-2xl lg:text-4xl">
                        +{extraImagesCount}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </Link>
      )}
    </>
  );
};

export default PostContent;
