/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React, { useState, Fragment, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ReRender = ({ mobileContent, desktopContent }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <Fragment>{isDesktop ? desktopContent : mobileContent}</Fragment>;
};
export default ReRender;
