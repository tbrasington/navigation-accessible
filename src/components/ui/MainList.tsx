/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Flex, ThemeUIStyleObject } from "theme-ui";

type Props = {
  id?: string;
  ariaLabel: string;
};

const Styles: ThemeUIStyleObject = {
  position : 'absolute',
  top:0,
  left: 0,
  flexDirection : ['column',null,null,'row'],
  justifyContent: 'flex-start',
  alignContent : 'center',
  m: 0,
  p : 16,
  width : '100%', 
  height :[ 'calc(100vh - 4rem)',null,null,'4rem'],
  zIndex: 1
};

export const MainList: FC<Props> = ({
  id,
  ariaLabel = "Main menu",
  children,
}) => {
  return (
    <Flex as="ul" id={id} role="menubar" aria-label={ariaLabel} sx={Styles}>
      {children}
    </Flex>
  );
};
