'use client';
import image1 from '../../public/missfortune.jpg';
import image2 from '../../public/twistedfate.jpg';
import image3 from '../../public/nautilus.jpg';

import Image from 'next/image';
import { useState } from 'react';
import { AddImage, Close } from '../ui/icons';
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
    <div className="grid grid-cols-2 lg:gap-5 gap-2 h-fit">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <button
            className="text-error absolute right-2 top-5 z-10"
            onClick={() => {
              deleteImage(image.id);
            }}
          >
            <Close />
          </button>
          <Image
            src={image.image}
            alt="preview"
            className="mt-4 object-cover h-[168px] w-[168px] lg:h-full lg:w-full rounded-lg"
          />
        </div>
      ))}

      <div className="lg:h-full lg:min-h-[260px] lg:w-full h-[168px] w-[168px] py-4 mt-4 rounded-lg flex bg-gray-100 dark:bg-dark-lg/30 items-center justify-center relative">
        <input
          // onChange={handleChange}
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
