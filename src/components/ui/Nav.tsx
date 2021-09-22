/** @jsxImportSource theme-ui */

import { FC } from "react";
import { classNames } from "../../utils/css";
import { Flex, ThemeUIStyleObject } from "theme-ui";

type Props = {
  className?: string;
  ariaLabel:string;
  id: string
  activeState: "open" | "closed";
};


export const Nav: FC<Props> = ({ className, children,ariaLabel,activeState,id }) => {
  const rootClasses = classNames("66__nav", className ? className : "");
  const Styles: ThemeUIStyleObject = {
    position : 'absolute',
    top: '8rem',
    left:  [activeState ==='closed' ? '-100%' : 0, null,null,0],
    width : '100%',
    height  :[ '100vh', null,null,'4rem'],
    flexDirection  : ['column',null,null,'row'],
    p : 16,
    overflowY : ['scroll', null,null,'visible']
  };

  return (
    <Flex as="nav" id={id} className={rootClasses} aria-label={ariaLabel} sx={Styles}>
      {children}
    </Flex>
  );
};
