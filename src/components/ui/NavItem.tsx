/** @jsxImportSource theme-ui */

import { FC } from "react";
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
 


  const Styles: ThemeUIStyleObject = {
    display : ['inline-block',null,null,isBack ? 'none' : 'inline-block']
  };

  return (
    <li id={id} role={role}  sx={Styles}>
      {children}
    </li>
  );
};
