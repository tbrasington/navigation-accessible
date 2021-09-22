/** @jsxImportSource theme-ui */

import { FC } from "react";
import { classNames } from "../../utils/css";
import { Flex, ThemeUIStyleObject } from "theme-ui";

type Props = {
  id: string;
  activeState: "open" | "closed";
};


export const MegaList: FC<Props> = ({

  activeState,
  id,
  children,
}) => {
  
  const rootClasses = classNames(
    "66__mega-list",
    activeState && `66__mega-list--${activeState}`
  );

  const Styles: ThemeUIStyleObject = {
    position  : 'absolute',
    zIndex : [2,null,null,4],
    left: 0,
    flexDirection : 'column',
    top : 88,
    width : '100%',
    height  : ['100vh', null, null, '4rem'],
    display  : activeState ==='open' ? 'flex' : 'none',
    bg : 'white'
  };


  return (
    <Flex
      as="ul"
      role="menu"
      className={rootClasses}
      id={id}
      aria-labelledby={id}
      sx={Styles}
    >
      {children}
    </Flex>
  );
};
