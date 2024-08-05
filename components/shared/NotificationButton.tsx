import Link from "next/link";
import { Notification } from "../ui/icons";

const NotificationButton = () => {
  return (
    <Link
      className="text-primary flex items-center justify-center btn btn-ghost btn-sm btn-circle"
      data-tip="Notifications"
      href={"/notifications"}
    >
      <Notification />
    </Link>
  );
};

export default NotificationButton;
