import Image from "next/image";
import Link from "next/link";
import image from "../../public/pf.jpg";
import { Add, Eye } from "../ui/icons";

const GroupCard = ({ joined }: any) => {
  return (
    <div className="rounded-lg px-4 py-3 bg-gray-100 dark:bg-dark-lg/30 flex justify-between">
      <Link
        href={"/users/123"}
        className="flex gap-3 items-center justify-center"
      >
        <div className="overflow-hidden w-10 h-10 avatar rounded-lg">
          <Image placeholder="blur" src={image} alt="photo frofile" />
        </div>
        <div className="flex items-center flex-col gap-1">
          <p className="">Username</p>
          <p className="text-xs text-primary">123 member</p>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-4">
        <button
          className={`w-24 btn btn-sm normal-case flex gap-1 items-center ${
            joined
              ? "btn-ghost border-2 border-primary text-primary"
              : "btn-primary text-white dark:text-dark-sm"
          }`}
        >
          {joined ? (
            <>
              <Eye w={4} h={4} />
              <p>Show</p>
            </>
          ) : (
            <>
              <Add w={4} h={4} />
              <p>Join</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
