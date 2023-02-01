import React from "react";

function Estimate() {
  return (
    <div className="h-[95vh] w-full  grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1  bg-[#232949]">
      <div className="col-span-1">
        <h1>Easy steps to calculate quotation</h1>
        <p>Apply for quotation in minutes</p>
        <div className=" max-w-[40%]">
          <select className="w-full px-2 py-3 rounded-md">
            <option>Select brand</option>
          </select>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default Estimate;
