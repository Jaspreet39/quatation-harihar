import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Bottombar() {
  const location = useLocation();
  const PN = location.pathname;
  const navigate = useNavigate();
  return (
    <div className="fixed w-full z-20 bottom-0 bg-white h-[50px] xl:hidden md:hidden">
      <div className="flex items-center justify-around h-full w-full">
        <h1
          onClick={() => navigate("/")}
          className={` px-1 py-2 rounded-md ${
            PN === "/" && "bg-[#30355A] text-white  font-semibold"
          }`}
        >
          Outer-Quotion
        </h1>
        <h1
          onClick={() => navigate("/hettich")}
          className={` px-1 py-2 rounded-md ${
            PN === "/hettich" && "bg-[#30355A] text-white  font-semibold"
          }`}
        >
          Hettich-Quotion
        </h1>
      </div>
    </div>
  );
}

export default Bottombar;
