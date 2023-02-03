import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const PN = location.pathname;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full space-y-5 xl:flex md:flex flex-col items-center justify-center hidden">
      <h1
        onClick={() => navigate("/")}
        className={`text-[15px] font-semibold  font-serif cursor-pointer px-1 py-2 rounded-md ${
          PN === "/" && "bg-[#30355A] text-white"
        }`}
      >
        Outer-Quotation
      </h1>
      <h1
        onClick={() => navigate("/hettich")}
        className={`text-[15px] font-semibold  font-serif cursor-pointer px-1 py-2 rounded-md ${
          PN === "/hettich" && "bg-[#30355A] text-white"
        }`}
      >
        Hettich-Quotation
      </h1>
    </div>
  );
}

export default Sidebar;
