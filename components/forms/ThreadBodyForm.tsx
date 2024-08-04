"use client";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const ThreadBodyForm = ({ setBody }: any) => {
  return <ReactQuill theme="snow" onChange={setBody} />;
};

export default ThreadBodyForm;
