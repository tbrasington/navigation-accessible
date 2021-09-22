/** @jsxImportSource theme-ui */

import { FC } from "react";
import { classNames } from "../../utils/css";
import { ThemeUIStyleObject } from "theme-ui";
import Link from "next/link";
type Props = {
  id?: string;
  role?: string;
  className?: string;
  href:string
  isActive?:boolean
  isForward?:boolean
  isHeading?:boolean
  isBack?:boolean
  ariaHaspopup?:boolean;
  ariaControls?:string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
};

const Styles: ThemeUIStyleObject = {};

export const NavItemLink: FC<Props> = ({
  id,
  role='menuitem',
  href,
  className,
  isActive,
  isForward,
  isHeading,
  isBack,
  onClick,
  onKeyDown,
  ariaHaspopup,
  ariaControls,
  children,
}) => {
  const rootClasses = classNames(
    '66__main-nav-item-link',
    isBack ? '66__main-nav-item-link--back' :'',
    isHeading ? '66__main-nav-item-link--heading':'',
    isForward ? '66__main-nav-item-link--forward':'',
    isActive ? '66__main-nav-item-link--active':'',
    className ? className:''
  )

  return (
    <Link href={href} passHref>
      <a
        sx={Styles}
        id={id}
        role={role}
        href={href}
        className={rootClasses}
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-haspopup={ariaHaspopup}
        aria-controls={ariaControls}
      >
        {children}
      </a>
    </Link>
  );
};
