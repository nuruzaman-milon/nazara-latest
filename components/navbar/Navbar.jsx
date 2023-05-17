import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="bg-primary-color text-base-100 relative">
      {/* pc and desktop view  */}
      <DesktopNavbar />

      {/* mobile and tab view  */}
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
