/** @jsxImportSource theme-ui */

import { motion } from "framer-motion";
import { FC } from "react";
import { MenuStateProps } from "../../state-machine/menu";

type Props = {
  menuOpen: MenuStateProps;
};
const variants = {
  closed: { scale: 1},
  open: { scale: 0.5},
};

export const Page: FC<Props> = ({ menuOpen }) => {
  return (
    <motion.main
      animate={menuOpen}
      variants={variants}
      style={{
        originX: 1.5,
        originY: 0.5,
        willChange: "overflow, height, scale, transform",
      }}
      sx={{
        bg  : 'white',
        zIndex:3,
        minHeight  :'100vh'
      }}
    >
      The page Content
    </motion.main>
  );
};
