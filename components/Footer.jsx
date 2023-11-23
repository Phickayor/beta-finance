import React from "react";

function Footer() {
  return (
    <div className="text-center bg-purple text-white py-20 space-y-8">
      <ul className="flex font-poppins-semibold text-[18px] justify-center gap-5">
        <li>Service</li>
        <li>Support</li>
        <li>Company</li>
        <li>Legal</li>
        <li>Join Us</li>
      </ul>
      <ul className="flex justify-center gap-10">
        <img src="/images/icons/Mail.svg" alt="Mail" />
        <img src="/images/icons/Calendar.svg" alt="Calendar" />
        <img src="/images/icons/Message.svg" alt="Message" />
        <img src="/images/icons/Security.svg" alt="Security" />
        <img src="/images/icons/Time.svg" alt="Time" />
      </ul>
      <span className="block text-[#92989F] text-[12px]">
        All rights reserved
      </span>
    </div>
  );
}

export default Footer;
