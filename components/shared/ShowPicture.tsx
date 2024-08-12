"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Close } from "../ui/icons";

const ShowPicture = ({ data }: any) => {
  return (
    <>
      {data && (
        <>
          <Image
            onClick={() => document.getElementById("show_photo").showModal()}
            placeholder="blur"
            blurDataURL={`http://localhost:3000/${data}`}
            width={12000}
            height={12000}
            src={`http://localhost:3000/${data}`}
            alt="photo postingan"
            className="w-full h-full object-cover rounded-xl"
          />
          <dialog
            id="show_photo"
            className="modal backdrop-blur-sm flex justify-center items-center"
          >
            <div className=" rounded-sm relative  lg:h-[95%] h-11/12 w-11/12">
              <Image
                placeholder="blur"
                blurDataURL={`http://localhost:3000/${data}`}
                width={12000}
                height={12000}
                src={`http://localhost:3000/${data}`}
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
