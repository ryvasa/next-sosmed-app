'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { threadStore } from '../../store';
import { truncateText } from '../../helper/truncateText';

const PostContent = ({ detail, id }: any) => {
  const [thread, setThread] = useState({
    body: '',
    images: [{ image: '' }],
    id: '',
  });
  const { threads } = threadStore((state: any) => state);
  useEffect(() => {
    const filteredThread = threads.find((thread: any) => thread.id === id);
    setThread(filteredThread);
  }, [id]);
  return (
    <Link href={`/threads/${thread?.id}`} className="flex flex-col gap-4">
      <p className="text-sm lg:text-lg">
        {detail ? thread?.body : truncateText(thread.body, 30)}
      </p>
      {thread?.images?.length > 0 &&
        (detail ? (
          thread.images.map((image: any, index: number) => (
            <div className="h-full" key={index}>
              <Image
                placeholder="blur"
                blurDataURL={`http://localhost:3000/${image.image}`}
                width={12000}
                height={12000}
                src={`http://localhost:3000/${image.image}`}
                alt="photo postingan"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))
        ) : (
          <div className="h-full">
            <Image
              placeholder="blur"
              width={12000}
              height={12000}
              src={`http://localhost:3000/${thread.images[0].image}`}
              blurDataURL={`http://localhost:3000/${thread.images[0].image}`}
              alt="photo postingan"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
    </Link>
  );
};

export default PostContent;
