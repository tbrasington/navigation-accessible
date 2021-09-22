/** @jsxImportSource theme-ui */

import { FC } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuStateProps } from "../../state-machine/menu";
type Props = {
  id?: string;
  role?: string;
  className?: string;
  href: string;
  isActive?: boolean;
  isForward?: boolean;
  isHeading?: boolean;
  isBack?: boolean;
  menuOpen?: MenuStateProps;
  subNavOpen?: MenuStateProps;
  ariaHaspopup?: boolean;
  ariaControls?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
};

const Styles: ThemeUIStyleObject = {};

const variants = {
  closed: { opacity: 1, x: 0 },
  open: { opacity: 1, x: 0 },
  openingSubMenu: { opacity: 0, x: -66 },
};

export const NavItemLink: FC<Props> = ({
  id,
  role = "menuitem",
  href,
  className,
  isActive,
  isForward,
  isHeading,
  isBack,
  menuOpen,
  subNavOpen,
  onClick,
  onKeyDown,
  ariaHaspopup,
  ariaControls,
  children,
}) => {
  // needs thought on how we handle this "closing" when the sub opens

  let menuOpenAnimation = "closed";
  if (menuOpen === "open" && subNavOpen === "open") {
    menuOpenAnimation = "openingSubMenu";
  } else if (menuOpen === "open" && subNavOpen === "closed") {
    menuOpenAnimation = "open";
  } else if (menuOpen === "closed") {
    menuOpenAnimation = "closed";
  }

  return (
    <motion.div
      animate={menuOpenAnimation}
      variants={variants}
      style={{ width: "auto", display: "inline-block" }}
    >
      <Link href={href} passHref>
        <a
          sx={Styles}
          id={id}
          role={role}
          href={href}
          onClick={onClick}
          onKeyDown={onKeyDown}
          aria-haspopup={ariaHaspopup}
          aria-controls={ariaControls}
        >
          {children}
        </a>
      </Link>
    </motion.div>
  );
};
