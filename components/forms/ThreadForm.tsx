"use client";
import { useState } from "react";
import ImageUploadPreview from "../shared/ImageUploadPreview";
import { CloudUpload } from "../ui/icons";
import ThreadBodyForm from "./ThreadBodyForm";
import { fetchCreateThread } from "@/libs/api/api";
import { useRouter } from "next/navigation";

const ThreadForm = () => {
  const [images, setImages] = useState([]);
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body", body);
    images.forEach((image, index) => {
      formData.append("images", image);
    });
    try {
      const response = await fetchCreateThread(formData);
      if (response.id) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="py-4">
      <ThreadBodyForm setBody={setBody} />
      <ImageUploadPreview setImages={setImages} />
      <div className="py-8 flex justify-center items-center">
        <button
          type="submit"
          className="flex w-40 btn btn-primary text-white dark:text-dark-sm border-none normal-case"
        >
          <p>Upload</p>
          <CloudUpload />
        </button>
      </div>
    </form>
  );
};
export default ThreadForm;
