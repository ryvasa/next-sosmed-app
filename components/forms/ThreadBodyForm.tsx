'use client';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
const ThreadBodyForm = ({ body, setBody }: any) => {
  return <ReactQuill theme="snow" value={body} onChange={setBody} />;
};

export default ThreadBodyForm;
