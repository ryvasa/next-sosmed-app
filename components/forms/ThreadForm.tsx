"use client";
import { useEffect, useState } from "react";
import ImageUploadPreview from "../shared/ImageUploadPreview";
import { CloudUpload } from "../ui/icons";
import ThreadBodyForm from "./ThreadBodyForm";
import {
  fetchCreateThread,
  fetchGetOneThread,
  fetchUpdateThread,
} from "@/libs/api/api";
import { useParams, useRouter } from "next/navigation";

const ThreadForm = () => {
  const [images, setImages] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [body, setBody] = useState("");
  const router = useRouter();
  const [currentImages, setCurrentImages] = useState<any>([]);

  const { id } = useParams();
  const fetchData = async () => {
    if (id) {
      const response = await fetchGetOneThread(id as string);
      setCurrentImages(response.data.images);
      setBody(response.data.body);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body", body);
    const imagePathsToKeep = currentImages.map((item: any) => item.image);
    formData.append("currentImages", imagePathsToKeep);
    images.forEach((image) => {
      formData.append("images", image);
    });
    try {
      let response;
      if (id) {
        response = await fetchUpdateThread(id as string, formData);
      } else {
        response = await fetchCreateThread(formData);
      }
      if (response.data) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };
  useEffect(() => {
    if (body) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [body]);
  return (
    <form onSubmit={handleSubmit} className="py-4">
      <ThreadBodyForm body={body} setBody={setBody} />
      <ImageUploadPreview
        currentImages={currentImages}
        setCurrentImages={setCurrentImages}
        images={images}
        setImages={setImages}
      />
      <div className="py-8 flex justify-center items-center">
        <button
          disabled={disabled}
          type="submit"
          className="disabled:bg-gray-100 disabled:cursor-not-allowed flex w-40 btn btn-primary text-white dark:text-dark-sm border-none normal-case"
        >
          <p>Upload</p>
          <CloudUpload />
        </button>
      </div>
    </form>
  );
};
export default ThreadForm;
