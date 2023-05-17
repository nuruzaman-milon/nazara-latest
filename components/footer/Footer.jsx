import React from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary-color">
      {/* for mobile & tab*/}
      <MobileFooter />

      {/* for laptop & desktop */}
      <DesktopFooter />
    </footer>
  );
};

export default Footer;
