import Link from "next/link";
import { Edit, More } from "../ui/icons";
import DeleteThreadButton from "./DeleteThreadButton";

const ThreadOption = ({ id }: any) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm btn-ghost btn-square"
      >
        <More />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu dark:bg-dark-md bg-white shadow-lg drop-shadow-lg rounded-box z-[1] w-40 lg:w-52 p-2 "
      >
        <li>
          <Link href={`threads/${id}/edit`} className="flex gap-2">
            <Edit w={5} h={5} />
            <p>Edit</p>
          </Link>
        </li>
        <li>
          <DeleteThreadButton id={id} />
        </li>
      </ul>
    </div>
  );
};
export default ThreadOption;
