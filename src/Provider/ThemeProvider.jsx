"use client";
import React, { useEffect, useState } from "react";
import context from "./context";
import { usePathname } from "next/navigation";

const ThemeProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const pathname = usePathname();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
          ? value
          : !!value
    );
  };
  // const toggleMegaMenu = (value) => {

  //   setOpenMegaMenu((preMenuStatus) =>
  //     value === undefined
  //       ? !preMenuStatus
  //       : typeof value === "boolean"
  //         ? value
  //         : !!value
  //   );

  //   document.body.classList.toggle("megamenu-popup-active", !openMegaMenu);
  // };
  const toggleMegaMenu = useCallback((value) => {
    setOpenMegaMenu((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
          ? value
          : !!value
    );

    document.body.classList.toggle("megamenu-popup-active", !openMegaMenu);
  }, [openMegaMenu]); 

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };
  const toggleSidebar = () => {
    setOpenSidebar((preState) => !preState);
    document.body.classList.toggle("locked", !openSidebar);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    document.body.classList.toggle("locked", !isExpanded);
  };
  useEffect(() => {
    toggleMenu(false);
    setIsExpanded(false);
    setOpenMegaMenu(false);

    toggleMegaMenu(false);
    document.body.classList.remove("megamenu-popup-active");
  }, [toggleMenu]);

  const value = {
    handleToggle,
    isExpanded,
    setIsExpanded,
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    toggleMegaMenu,
    openMegaMenu,
    openSidebar,
    setOpenSidebar,
    toggleSidebar,
    setOpenMegaMenu
  };
  return <context.Provider value={value}>{children}
    <a
      href="https://wa.me/923462488254"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25d366",
        color: "white",
        fontSize: "42px",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        zIndex: 1000,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        opacity : '0.7',
        ':hover' : {
          opacity : '1'
        }
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  </context.Provider>;
};

export default ThemeProvider;
