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
        <a href="https://github.com/kobiregev/Calculator" target="_blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kobi-regev-94a2381b8/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://kobiregev.github.io/Portfolio/" target="_blank">
          <MdOutlineContactPage />
        </a>
      </div>
    </>,
    document.getElementById("footer-root")!
  );
};
