import React from "react";
// Initialization for ES Users
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-900 text-center text-black">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center"></div>
        </div>

        <div className="p-4 text-center">
          <div className="text-whitehite">
            © 2023 Copyright: Tailwind Elements
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
