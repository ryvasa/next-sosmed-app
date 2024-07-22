'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <li
      className={`tooltip ${tooltip} tooltip-primary ${
        position === 'side' && 'tooltip-sidebar'
      }`}
      data-tip={text}
    >
      <Link
        className={` btn-ghost btn btn-square btn-sm ${
          pathname === href
            ? `${position}bar-item-active`
            : `${position}bar-item`
        }`}
        href={href}
      >
        <Icon />
      </Link>
    </li>
  );
};

export default ItemBar;
