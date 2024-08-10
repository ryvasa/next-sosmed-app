"use client";
import { fetchDeleteChat } from "@/libs/api/api";
import { Alert, Delete } from "../ui/icons";
import { useParams, useRouter } from "next/navigation";

const DeleteButton = () => {
  const { chat_id } = useParams();
  const router = useRouter();
  const fetchDelete = async () => {
    const response = await fetchDeleteChat(chat_id as string);
    if (response.data.message) {
      router.push("/chats");
    }
  };
  return (
    <>
      <div>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          type="button"
          className="flex items-center justify-center btn btn-ghost btn-sm btn-circle"
        >
          <Delete />
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white dark:bg-dark-md">
          <h3 className="font-bold text-xl text-error">Warning</h3>
          <p className="py-4">Are you sure you want to delete this chat?</p>
          <div className="flex items-center gap-1">
            <Alert />
            <p className="text-sm text-error font-semibold">
              All messages will disappear
            </p>
          </div>
          <div className="modal-action">
            <button
              onClick={fetchDelete}
              className="normal-case btn btn-sm btn-error text-white"
            >
              Delete
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="normal-case btn btn-sm btn-primary text-white">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteButton;
