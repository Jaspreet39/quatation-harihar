import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Bottombar from "./assets/Bottombar";
import {
  carcases,
  Drawer,
  FlatFittingType,
  flpStay,
  foldingSystem,
  hingeType,
  intermatHinge,
  liftUp,
  onsysHinge,
  sensysHinge,
  Shelf,
  Shutter,
  slidingAndFoldingSystem,
  visible,
} from "./constant";
import Sidebar from "./Sidebar";

function Hettich() {
  const [charge, setCharge] = useState([]);
  const [rupee, setRupee] = useState(0);
  const [hinge, setHinge] = useState("Onsys Hinges");
  const [FlapFillting, setFlapFillting] = useState("Lift Up - Top Box Lift");

  const totalValue = (e) => {
    setCharge((d) => [...d, e]);
    const sum = charge.map((item) => parseInt(item)).reduce((p, a) => p + a, 0);
    console.log(sum);
    console.log(charge);
    const totalAmmount = sum;
    const less = 5 / 100;
    const GST = 18 / 100;
    const discount = totalAmmount - totalAmmount * less;
    setRupee(discount + discount * GST);
  };

  const Header = () => {
    return (
      <div className="bg-[#30355A] py-4 px-1">
        <h1 className="font-semibold text-white text-center">
          HARIHAR QUOTATION
        </h1>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="xl:col-span-1 md:col-span-1 ">
          <Sidebar />
        </div>
        <div className="xl:col-span-11 md:col-span-11 col-span-12">
          <div className="h-[95vh] w-full  grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 space-y-4 xl:space-y-0 md:space-y-0 bg-[#232949]">
            <div className="col-span-1 flex flex-col  justify-center items-center space-y-4">
              <div>
                <h1 className="xl:text-5xl md:text-3xl text-2xl  font-serif text-white">
                  Easy steps to calculate quotation
                </h1>
                <p className="text-white xl:text-xl md:text-lg text-sm">
                  Apply for quotation in minutes
                </p>
              </div>
              <form
                id="form"
                className="xl:w-[60%] md:w-[60%] w-[100%] bg-[#30355A] px-3 py-5 space-y-3"
              >
                <fieldset
                  className="flex items-center justify-around gap-4 space-y-2"
                  id="radio"
                >
                  <legend className="text-white">Choose your Hinge</legend>
                  {hingeType.map((item) => (
                    <div className="flex items-center gap-2">
                      <Radio
                        id={item.id}
                        name="hinges"
                        value={item.id}
                        defaultChecked={true}
                        onClick={() => setHinge(item.title)}
                      />
                      <Label htmlFor={item.id}>{item.title}</Label>
                    </div>
                  ))}
                </fieldset>
                {hinge === "Onsys Hinges" && (
                  <Select onChange={(e) => totalValue(e.target.value)}>
                    <option value="">Select</option>
                    {onsysHinge.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                )}
                {hinge === "Intermat Hinge" && (
                  <Select onChange={(e) => totalValue(e.target.value)}>
                    <option value="">Select</option>
                    {intermatHinge.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                )}
                {hinge === "Sensys hinge" && (
                  <Select onChange={(e) => totalValue(e.target.value)}>
                    <option value="">Select</option>
                    {sensysHinge.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                )}
                <fieldset
                  className="flex items-center justify-around gap-4 space-y-2"
                  id="radio"
                >
                  <legend className="text-white">
                    Choose your Flat Fitting
                  </legend>
                  {FlatFittingType.map((item) => (
                    <div className="flex items-center gap-2">
                      <Radio
                        id={item.id}
                        name="flap-fitting"
                        value={item.id}
                        defaultChecked={true}
                        onClick={() => setFlapFillting(item.title)}
                      />
                      <Label htmlFor={item.id}>{item.title}</Label>
                    </div>
                  ))}
                </fieldset>
                {FlapFillting === "Lift Up - Top Box Lift" && (
                  <Select onChange={(e) => totalValue(e.target.value)}>
                    <option value="">Select</option>
                    {liftUp.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                )}
                {FlapFillting === "Flap Stay Lift Basis" && (
                  <Select onChange={(e) => totalValue(e.target.value)}>
                    <option value="">Select</option>
                    {flpStay.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                )}
                <div className="w-full space-y-2">
                  <div className="mb-2 block">
                    <Label
                      className="text-xl text-white"
                      htmlFor="FoldingSystem"
                      value="Folding System"
                    />
                  </div>
                  <Select
                    onChange={(e) => {
                      totalValue(e.target.value);
                    }}
                    id="FoldingSystem"
                  >
                    <option value="">Select Folding System</option>
                    {foldingSystem.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-full space-y-2">
                  <div className="mb-2 block">
                    <Label
                      className="text-xl text-white"
                      htmlFor="SlidingFoldingSystem"
                      value="Sliding and Folding System"
                    />
                  </div>
                  <Select
                    onChange={(e) => totalValue(e.target.value)}
                    id="SlidingFoldingSystem"
                  >
                    <option value="">Select Sliding and Folding System</option>
                    {slidingAndFoldingSystem.map((item) => (
                      <option
                        className={`${
                          charge.find((price) => parseInt(price) === item.Price)
                            ? "bg-gray-400"
                            : "bg-white"
                        }`}
                        value={item.Price}
                      >
                        {item.title}
                      </option>
                    ))}
                  </Select>
                </div>
              </form>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <div className="bg-[#30355A] h-[400px] w-[400px] shadow-md xl:rounded-2xl md:rounded-2xl flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-around">
                    {charge.map((item) => (
                      <p className="px-1 bg-gray-50 rounded-md">{item}</p>
                    ))}
                  </div>
                  <h1 className="text-2xl text-white font-serif font-semibold">
                    Total Payment is
                  </h1>
                  {charge.length > 0 ? (
                    <p className="text-2xl text-white font-serif font-semibold text-center">
                      Rs.<spam className="font-normal">{rupee.toFixed(0)}</spam>
                    </p>
                  ) : (
                    <p className="text-2xl text-white font-serif font-semibold text-center">
                      Rs.<spam className="font-normal">0</spam>
                    </p>
                  )}
                </div>
                <div className="h-[1px] w-[70%] bg-white" />
                <div className="flex items-center justify-between space-x-10">
                  <div>
                    <h1 className="text-xl text-white font-serif ">Discount</h1>
                    <p className="text-lg text-white font-serif ">35%</p>
                  </div>
                  <div>
                    <h1 className="text-xl text-white font-serif ">GST</h1>
                    <p className="text-lg text-white font-serif ">18%</p>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    setCharge([]);
                    document.getElementById("form").reset();
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default Hettich;
