/** @jsxImportSource theme-ui */

import { FC } from "react";
import { classNames } from "../../utils/css";
import { Flex, ThemeUIStyleObject } from "theme-ui";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  ariaLabel:string;
  id: string
  activeState: "open" | "closed";
};


export const Nav: FC<Props> = ({ className, children,ariaLabel,activeState,id }) => {
  const rootClasses = classNames("66__nav", className ? className : "");
  const Styles: ThemeUIStyleObject = {
    display : 'flex',
    width : '100%',
    height  :[ '100vh', null,null,'4rem'],
    flexDirection  : ['column',null,null,'row'],
    p : 16,
    overflowY : ['scroll', null,null,'visible'],
    position  :['absolute',null,null,'revert'],
    top : 88, 
    zIndex : [2,null,null,4],
  };

  return (
    <motion.nav layout id={id} className={rootClasses} aria-label={ariaLabel} sx={Styles}>
      {children}
    </motion.nav>
  );
};
