import React from "react";
import { createPortal } from "react-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  MdOutlineContactPage,
} from "react-icons/all";

export const Footer: React.FC = () => {
  return createPortal(
    <>
      Built by Kobi Regev
      <div className="socials">
        <AiFillGithub />
        <AiFillLinkedin />
        <MdOutlineContactPage />
      </div>
    </>,
    document.getElementById("footer-root")!
  );
};
