"use client";
import { fetchDeleteThread } from "@/libs/api/api";
import { Alert, Delete } from "../ui/icons";
import { useRouter } from "next/navigation";

const DeleteThreadButton = ({ id }: any) => {
  const router = useRouter();
  const fetchDelete = async () => {
    const response = await fetchDeleteThread(id as string);
    if (response.data) {
      router.push("/");
    }
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    const deletebutton: any = document.getElementById("thread_delete");
    if (deletebutton) {
      deletebutton.showModal();
    }
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        <Delete w={5} h={5} c="text-error" /> Delete
      </button>
      <dialog
        id="thread_delete"
        className="modal flex justify-center items-center backdrop-blur-sm"
      >
        <div className="modal-box bg-white dark:bg-dark-md">
          <h3 className="font-bold text-xl text-error">Warning</h3>
          <p className="py-4 text-gray-600 dark:text-dark-xs">
            Are you sure you want to delete this thread?
          </p>
          <div className="flex items-center gap-1">
            <Alert />
            <p className="text-xs lg:text-sm text-error font-semibold italic">
              Threads that have been deleted cannot be recovered
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={fetchDelete}
                className="normal-case btn btn-sm btn-error text-white"
              >
                Delete
              </button>
            </form>
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

export default DeleteThreadButton;
