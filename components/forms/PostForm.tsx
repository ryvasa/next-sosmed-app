'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
const PostForm = () => {
  const [value, setValue] = useState('');
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default PostForm;
