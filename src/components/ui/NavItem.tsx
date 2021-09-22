/** @jsxImportSource theme-ui */

import { FC } from "react";
import { classNames } from "../../utils/css";
import { ThemeUIStyleObject } from "theme-ui";

type Props = {
  className?: string;
  id?: string;
  isForward?: boolean;
  isChildren?: boolean;
  isBack?: boolean;
  role?: string;
};


export const NavItem: FC<Props> = ({
  className,
  role='none',
  id,
  isForward = false,
  isChildren = false,
  isBack = false,
  children,
}) => {
  const rootClasses = classNames(
    "66__main-nav-item",
    isBack ? "66__main-nav-item--heading" : "",
    isChildren ? "66__main-nav-item--children" : "",
    isForward ? "66__main-nav-item--forward" : "",
    className ? className : ""
  );


  const Styles: ThemeUIStyleObject = {
    display : ['inline-block',null,null,isBack ? 'none' : 'inline-block']
  };

  return (
    <li id={id} role={role} className={rootClasses} sx={Styles}>
      {children}
    </li>
  );
};
