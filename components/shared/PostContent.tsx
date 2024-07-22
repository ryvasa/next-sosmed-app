import Image from 'next/image';
import Link from 'next/link';

const PostContent = ({ detail, data }: any) => {
  return (
    <Link href={'/posts/123'} className="flex flex-col gap-4">
      <p className="text-sm lg:text-lg">
        {detail
          ? data.desc
          : data.desc.split(' ').slice(0, 30).join(' ') + '...'}
      </p>
      {detail ? (
        data.images.map((image: string, index: number) => (
          <div className="h-96" key={index}>
            <Image
              placeholder="blur"
              src={image}
              alt="photo postingan"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))
      ) : (
        <div className="h-96">
          <Image
            placeholder="blur"
            src={data.images[0]}
            alt="photo postingan"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </Link>
  );
};

export default PostContent;
