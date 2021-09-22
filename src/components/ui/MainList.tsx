/** @jsxImportSource theme-ui */

import { motion } from "framer-motion";
import { FC } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import { MenuStateProps } from "../../state-machine/menu";
import { useIsDesktop } from "../../utils/responsiveMotion";

type Props = {
  id?: string;
  ariaLabel: string;
  menuOpen: MenuStateProps;
  subNavOpen: MenuStateProps;
};

const Styles: ThemeUIStyleObject = {
  display : 'flex',
  flexDirection: ["column", null, null, "row"],
  justifyContent: "flex-start",
  alignContent: "center",
  m: 0,
  p: 16,
  width: "100%",
  height: ["calc(100vh - 4rem)", null, null, "4rem"],
  zIndex: 1,
  listStyle: "none",
  "& > li + li": {
    ml: [0,null,null,16],
  },
};

export const MainList: FC<Props> = ({
  id,
  ariaLabel = "Main menu",
  menuOpen,
  subNavOpen,
  children,
}) => {
  const isDesktop = useIsDesktop();
  const variants = isDesktop
    ? { closed: { opacity: 1, x: 0 }, open: { opacity: 1, x: 0 } }
    : {
        closed: { opacity: 0, x: -66 },
        open: { opacity: 1, x: 0 },
      };

  return (
    <motion.ul
      id={id}
      role="menubar"
      aria-label={ariaLabel}
      sx={Styles}
      animate={menuOpen}
      variants={variants}
    >
      {children}
    </motion.ul>
  );
};
