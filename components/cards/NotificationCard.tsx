import Link from "next/link";
import ProfilePicture from "../shared/ProfilePicture";

const NotificationCard = () => {
  return (
    <Link
      href={"/posts/123"}
      className="bg-gray-100 dark:bg-dark-lg/30 flex gap-5 p-5 rounded-lg"
    >
      <ProfilePicture />
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <p className="text-primary font-semibold text-sm">Username</p>
          <p className="text-sm">liked your post</p>
        </div>
        <p className="text-sm font-semibold text-primary">10:20</p>
      </div>
    </Link>
  );
};

export default NotificationCard;
