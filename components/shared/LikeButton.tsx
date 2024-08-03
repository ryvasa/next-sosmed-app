'use client';
import { useState } from 'react';
import { Like } from '../ui/icons';

interface props {
  w: number;
  h: number;
  isComment: boolean;
  dataCount: number;
}

const LikeButton = ({ w, h, isComment, dataCount }: props) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(123);

  const likePost = () => {
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    setLike(like ? false : true);
  };

  return (
    <button
      onClick={() => {
        likePost();
      }}
      className={`flex items-center gap-2 ${
        isComment ? '  justify-start ' : 'flex-1  justify-center '
      }  ${like && 'text-primary '}`}
    >
      <Like w={w} h={h} />
      <p className={`${isComment && 'text-sm'}`}>
        {dataCount > 0 && dataCount}
      </p>
    </button>
  );
};

export default LikeButton;
