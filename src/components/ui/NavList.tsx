/** @jsxImportSource theme-ui */
import { FC } from "react";
import { classNames } from "../../utils/css";
import { Flex, ThemeUIStyleObject } from "theme-ui";

type Props = {
  activeState: "open" | "closed";
  isSub?: boolean;
  isSubSub?: boolean;
  isDropDown?: boolean;
  id: string;
  role?: string;
  ariaLabelledby: string;
};


export const NavList: FC<Props> = ({
  id,
  role = "menubar",
  ariaLabelledby,
  activeState = "closed",
  isSub = false,
  isSubSub = false,
  isDropDown = false,
  children,
}) => {
  const rootClasses = classNames(
    "rmm__nav-list",
    `rmm__nav-list--${activeState}`,
    isSub ? "rmm__nav-list--sub" : "",
    isSubSub ? "rmm__nav-list--sub-sub" : "",
    isDropDown ? "rmm__nav-list--dropdown" : ""
  );
  
  const Styles: ThemeUIStyleObject = {};


  return (
    <ul
      id={id}
      role={role}
      aria-labelledby={ariaLabelledby}
      className={rootClasses}
      sx={Styles}
    >
      {children}
    </ul>
  );
};
