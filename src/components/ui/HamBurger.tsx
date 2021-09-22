/** @jsxImportSource theme-ui */

import React, { FC } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import { MenuStateProps } from "../../state-machine/menu";

type Props = {
  state:MenuStateProps,
  openLabel : string,
  closeLabel : string
  onClick: (e: React.MouseEvent<HTMLElement>) => void,
};

const Styles: ThemeUIStyleObject = {};

export const HamBurger: FC<Props> = ({ onClick,state = false, openLabel, closeLabel }) => {

  return (
       <button onClick={onClick} sx={Styles}>{state==='closed' ? openLabel : closeLabel}</button>

  );
};
