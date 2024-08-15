"use client";
import Image from "next/image";
import { Close } from "../ui/icons";

const ShowPicture = ({ data }: any) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const closebutton: any = document.getElementById(`show_photo_${data}`);
    if (closebutton) {
      closebutton.showModal();
    }
  };
  return (
    <>
      {data && (
        <>
          <Image
            onClick={handleClick}
            placeholder="blur"
            blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}/${data}`}
            width={12000}
            height={12000}
            src={`${process.env.NEXT_PUBLIC_API_URL}/${data}`}
            alt="photo postingan"
            className="w-full h-full object-cover rounded-md"
          />
          <dialog
            id={`show_photo_${data}`}
            className="modal backdrop-blur-sm flex justify-center items-center"
          >
            <div className=" rounded-sm relative  lg:h-[95%] h-11/12 w-11/12">
              <Image
                placeholder="blur"
                blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}/${data}`}
                width={12000}
                height={12000}
                src={`${process.env.NEXT_PUBLIC_API_URL}/${data}`}
                alt="photo postingan"
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute lg:right-16 lg:-top-9 -top-10 -right-5 modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle text-white btn-error">
                    <Close />
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
};

export default ShowPicture;
