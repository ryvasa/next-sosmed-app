"use client";
import { messagesStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ItemBar = ({
  icon: Icon,
  text,
  href,
  position,
  tooltip,
}: {
  icon: React.ComponentType<any>;
  text: string;
  href: string;
  position: string;
  tooltip: string;
}) => {
  const pathname = usePathname();
  const { unreadedMessages } = messagesStore((state: any) => state);

  return (
    <li
      className={`relative ${
        position === "side" &&
        ` ${tooltip} tooltip-sidebar tooltip tooltip-primary`
      }`}
      data-tip={text}
    >
      <Link
        className={`relative btn-ghost btn btn-square btn-sm ${
          pathname === href
            ? `${position}bar-item-active`
            : `${position}bar-item`
        }`}
        href={href}
      >
        {unreadedMessages > 0 && text === "Chats" && (
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 badge badge-error badge-sm lg:badge-md text-white dark:text-dark-sm">
            {unreadedMessages}
          </span>
        )}
        <Icon />
      </Link>
    </li>
  );
};

export default ItemBar;
