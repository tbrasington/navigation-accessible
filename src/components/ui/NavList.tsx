/** @jsxImportSource theme-ui */
import { FC } from "react";
import { ThemeUIStyleObject } from "theme-ui";

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

  
  const Styles: ThemeUIStyleObject = {};


  return (
    <ul
      id={id}
      role={role}
      aria-labelledby={ariaLabelledby}
      sx={Styles}
    >
      {children}
    </ul>
  );
};
