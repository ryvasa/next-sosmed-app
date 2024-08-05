"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { AddImage, Close } from "../ui/icons";
const ImageUploadPreview = ({ setImages }: any) => {
  const [previewImage, setPreviewImage] = useState([]);
  const deleteImage = (id: number) => {
    const data = previewImage.filter((image: any) => image !== id);
    setPreviewImage(data);
  };

  return (
    <div className="grid grid-cols-2 lg:gap-5 gap-2 h-fit">
      {previewImage.length > 0 && (
        <>
          {previewImage.map((image, index) => (
            <div
              key={index}
              className="relative w-full items-center justify-center"
            >
              <button
                className="text-error absolute right-1 top-5 z-10"
                onClick={() => {
                  deleteImage(image);
                }}
              >
                <Close />
              </button>
              <Image
                width={0}
                height={0}
                style={{ width: "576px", height: `${(9 / 16) * 576}px` }}
                src={image}
                alt="preview"
                className="mt-4 object-cover lg:h-full lg:w-full rounded-lg"
              />
            </div>
          ))}
        </>
      )}

      <div
        className="lg:min-h-[260px] lg:w-full h-[100%-95px] w-full mt-4 rounded-lg flex
       min-h-[180px] min-w-16 bg-gray-100 dark:bg-dark-sm items-center justify-center relative"
      >
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e?.target?.files?.[0]) {
              setImages((prevComments) => [...prevComments, ...e.target.files]);
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = () => {
                setPreviewImage((prevComments) => [
                  ...prevComments,
                  reader.result as string,
                ]);
              };
              reader.readAsDataURL(file);
            }
          }}
          type="file"
          id="image"
          accept="image/*"
          className="hidden"
        />
        <label htmlFor="image">
          <AddImage />
        </label>
      </div>
    </div>
  );
};

export default ImageUploadPreview;
