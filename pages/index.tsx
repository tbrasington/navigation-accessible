import type { NextPage } from "next";
import Head from "next/head";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Flex } from "theme-ui";
import { MenuStateMachine, MenuStateProps } from "../src/state-machine/menu";
import { HamBurger } from "../src/components/ui/HamBurger";
import { navData } from "./api/nav";
import { MainList } from "../src/components/ui/MainList";
import { Nav } from "../src/components/ui/Nav";
import { NavItem } from "../src/components/ui/NavItem";
import { NavItemLink } from "../src/components/ui/NavItemLink";
import { MegaList } from "../src/components/ui/MegaList";
import { Page } from "../src/components/ui/Page";

const Home: NextPage = () => {
  const [megaMenuState, setMegaMenuState] = useState<MenuStateProps>("closed");
  const [subMenuState, setSubMenuState] = useState<MenuStateProps>("closed");
  const [activeMenus, setActiveMenus] = useState<string[]>([]); // array that captures the ids of active menus
  const [isMobile, setIsMobile] = useState(true); // array that captures the ids of active menus
  const wrapperRef = useRef<HTMLDivElement>(null); // used to detect clicks outside of component

  const viewportLarge = 1024;

  const resetMenus = () => {
    // close all menus and empty activeMenus array
    setActiveMenus([]);
    setSubMenuState("closed");
  };

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      // Reset menu if clicked on outside of element
      const handleClickOutside = (e: MouseEvent | Event) => {
        if (ref.current && !ref.current.contains(e.target)) {
          resetMenus();
        }
      };

      // Bind the event listener to both mouse and key events
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleClickOutside);
      return () => {
        // Unbind the event listener to clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleClickOutside);
      };
    }, [ref]);
  };

  const updateActiveMenus = (state: MenuStateProps, menuId: string) => {
    if (state === "open") {
      // add menuId from activeMenus
      setActiveMenus([...activeMenus, menuId]);
    } else if (state === "closed") {
      // remove menuId from activeMenus
      setActiveMenus(activeMenus.filter((item) => item !== menuId));
    }
  };

  const toggleMegaMenu = (e: MouseEvent, menuId: string) => {
    e.preventDefault();

    const nextState = MenuStateMachine(megaMenuState);

    setMegaMenuState(nextState);

    updateActiveMenus(nextState, menuId);

    if (megaMenuState === "open") {
      resetMenus();
    }
  };

  const toggleSubMenu = (e: MouseEvent, menuId: string) => {
    e.preventDefault();

    const nextState = MenuStateMachine(subMenuState);

    setSubMenuState(MenuStateMachine(subMenuState));
    /* 
      I haven't come up with single solution (yet) that takes care of 
      opening and closing menus for both small and large screens, so for 
      now I fork the logic based on viewport size.
      */
    if (!isMobile) {
      if (activeMenus.includes(menuId)) {
        // menu is already open, remove it from activeMenus to close it
        setActiveMenus([]);
      } else {
        // menu is not yet active, add it to activeMenus to open it
        setActiveMenus([menuId]);
      }
    } else {
      // remove menuId from activeMenus
      updateActiveMenus(nextState, menuId);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= viewportLarge) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [activeMenus, isMobile]);

  const doEscape = (e) => {
    if (e.keyCode === 27) {
      resetMenus();
    }
  };

  const a11yClick = (e: KeyboardEvent) => {
    const code = e.charCode || e.keyCode;
    if (code === 32 || code === 13) {
      return true;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", doEscape, false);

    return () => {
      document.removeEventListener("keydown", doEscape, false);
    };
  });

  useOutsideAlerter(wrapperRef); // create bindings for closing menu from outside events

  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        height: "auto",
      }}
    >
      <Head>
        <title>test nav</title>
        <meta name="description" content="testing out an accessible nav" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        role="navigation"
        className="66__root"
        ref={wrapperRef}
        sx={{
          width: "100%",
          height: 88,
          borderBottom: "1px solid grey",
        }}
      >
        <HamBurger
          openLabel="Menu"
          closeLabel="Closed"
          state={megaMenuState}
          onClick={(e) => toggleMegaMenu(e, "nav-main")}
        />

        <Nav
          id="site-nav"
          activeState={megaMenuState}
          ariaLabel="Main Navigation"
        >
          <MainList
            id="menubar-main"
            ariaLabel="Main Menu"
            menuOpen={megaMenuState}
            subNavOpen={subMenuState}
          >
            <NavItem role="none" id="nav-home">
              <NavItemLink
                id="menuitem-home"
                role="menuitem"
                href="/"
                menuOpen={megaMenuState}
                subNavOpen={subMenuState}
              >
                Home
              </NavItemLink>
            </NavItem>

            {navData.map((topLevelNav) => {
              return (
                <NavItem
                  key={topLevelNav.document.uid}
                  role="none"
                  id={`nav-${topLevelNav.document.uid}`}
                  isChildren
                >
                  <NavItemLink
                    menuOpen={megaMenuState}
                    subNavOpen={subMenuState}
                    role="menuitem"
                    id={`menuitem-${topLevelNav.document.uid}`}
                    href="/?page=mega-menu"
                    isForward
                    isActive={
                      activeMenus.includes(`menu-${topLevelNav.document.uid}`)
                        ? true
                        : false
                    }
                    onClick={(e) =>
                      toggleSubMenu(e, `menu-${topLevelNav.document.uid}`)
                    }
                    onKeyDown={(e) =>
                      a11yClick(e) &&
                      toggleSubMenu(e, `menu-${topLevelNav.document.uid}`)
                    }
                    ariaHaspopup
                    ariaControls={`menu-${topLevelNav.document.uid}`}
                  >
                    {topLevelNav.title}
                  </NavItemLink>

                  {/* mega list */}
                  <MegaList
                    id={`menu-${topLevelNav.document.uid}`}
                    activeState={
                      activeMenus.includes(`menu-${topLevelNav.document.uid}`)
                        ? "open"
                        : "closed"
                    }
                  >
                    <NavItem
                      id={`nav-${topLevelNav.document.uid}-back`}
                      isBack={true}
                    >
                      <NavItemLink
                        id={`menuitem-${topLevelNav.document.uid}-back`}
                        href={`/?page=${topLevelNav.document.uid}`}
                        onClick={(e) =>
                          toggleSubMenu(e, `menu-${topLevelNav.document.uid}`)
                        }
                        onKeyDown={(e) =>
                          a11yClick(e) &&
                          toggleSubMenu(e, `menu-${topLevelNav.document.uid}`)
                        }
                        ariaControls={`nav-main-${topLevelNav.document.uid}`}
                        isBack
                      >
                        Back
                      </NavItemLink>
                    </NavItem>
                    {/* child items */}
                    {topLevelNav.document.data.column_1.map(
                      (trayItem, trayItemIndex) => {
                        return (
                          <NavItem
                            key={trayItemIndex}
                            id={`nav-${topLevelNav.document.uid}-Sub-menu-${trayItemIndex}`}
                            role="none"
                          >
                            <NavItemLink
                              id={`menuitem-${topLevelNav.document.uid}-Sub-menu-${trayItemIndex}`}
                              role="menuitem"
                              href={`/?page=sub-menu-${trayItemIndex}]`}
                            >
                              {trayItem.label.map((label) => label.text)[0]}
                            </NavItemLink>
                          </NavItem>
                        );
                      }
                    )}
                  </MegaList>
                </NavItem>
              );
            })}
          </MainList>
        </Nav>
      </Flex>

      <Page menuOpen={megaMenuState} />
    </Flex>
  );
};

export default Home;
