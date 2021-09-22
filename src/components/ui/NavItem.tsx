/** @jsxImportSource theme-ui */

import { FC } from "react";
import { classNames } from "../../utils/css";
import { Flex, ThemeUIStyleObject } from "theme-ui";

type Props = {
  className?: string;
  id?: string;
  isForward?: boolean;
  isChildren?: boolean;
  isHeading?: boolean;
  role?: string;
};

const Styles: ThemeUIStyleObject = {};

export const NavItem: FC<Props> = ({
  className,
  role='none',
  id,
  isForward = false,
  isChildren = false,
  isHeading = false,
  children,
}) => {
  const rootClasses = classNames(
    "66__main-nav-item",
    isHeading ? "66__main-nav-item--heading" : "",
    isChildren ? "66__main-nav-item--children" : "",
    isForward ? "66__main-nav-item--forward" : "",
    className ? className : ""
  );
  return (
    <li id={id} role={role} className={rootClasses} sx={Styles}>
      {children}
    </li>
  );
};
