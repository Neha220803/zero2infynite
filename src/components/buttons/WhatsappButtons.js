import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButtonsComp = () => {
  return (
    <div>
      <a
        href="https://wa.me/8111000953"
        className="float-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsappButtonsComp;
