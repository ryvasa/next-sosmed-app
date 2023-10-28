"use client";
import image1 from "../../public/missfortune.jpg";
import image2 from "../../public/twistedfate.jpg";
import image3 from "../../public/nautilus.jpg";

import Image from "next/image";
import { useState } from "react";
import { AddImage, Close } from "../ui/icons";
const ImageUploadPreview = () => {
  const [images, setImages] = useState([
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ]);
  const deleteImage = (id: number) => {
    const data = images.filter((image: any) => image.id !== id);
    setImages(data);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <button
            className="text-error absolute right-2 top-5"
            onClick={() => {
              deleteImage(image.id);
            }}
          >
            <Close />
          </button>
          <Image
            src={image.image}
            alt="preview"
            className="mt-4 object-cover h-[168px] w-[168px] rounded-lg"
          />
        </div>
      ))}

      <div className="h-[168px] w-[168px] py-4 mt-4 rounded-lg flex bg-gray-100 dark:bg-dark-lg/30 items-center justify-center relative">
        <input type="file" id="image" className="hidden" />
        <label htmlFor="image">
          <AddImage />
        </label>
      </div>
    </div>
  );
};

export default ImageUploadPreview;
