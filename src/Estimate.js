import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { carcases, Drawer, Shelf, Shutter, visible } from "./constant";

function Estimate() {
  const [charge, setCharge] = useState([]);
  const [sqFeet, setSqFeet] = useState(0);
  const [rupee, setRupee] = useState(0);

  const totalValue = (e) => {
    const fittingCharges = sqFeet * 150;
    const misCharges = sqFeet * 75;
    console.log(charge);
    setCharge((d) => [...d, e]);
    const sum = charge.map((item) => parseInt(item)).reduce((p, a) => p + a, 0);
    const totalAmmount = sum * sqFeet + fittingCharges + misCharges;
    const less = 5 / 100;
    const GST = 18 / 100;
    const discount = totalAmmount - totalAmmount * less;
    const totalValue = setRupee(discount + discount * GST);
  };

  return (
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
          <div className="w-full space-y-2">
            <div className="mb-2 block">
              <Label htmlFor="sqFeet" value="Square Feet" className="text-xl" />
            </div>
            <TextInput
              id="sqFeet"
              type="number"
              min={0}
              placeholder="Enter SQ/Feet"
              required={true}
              onChange={(e) => setSqFeet(e.target.value)}
            />
          </div>
          <div className="w-full space-y-2">
            <div className="mb-2 block">
              <Label
                className="text-xl text-white"
                htmlFor="carcase"
                value="carcase"
              />
            </div>
            <Select onChange={(e) => totalValue(e.target.value)} id="carcase">
              <option value="">Select Carcases</option>
              {carcases.map((item) => (
                <option value={item.Price}>{item.title}</option>
              ))}
            </Select>
          </div>
          <div className="w-full space-y-2">
            <div className="mb-2 block">
              <Label
                className="text-xl text-white"
                htmlFor="shutter"
                value="shutter"
              />
            </div>
            <Select onChange={(e) => totalValue(e.target.value)} id="shutter">
              <option>Select Shutter</option>
              {Shutter.map((item) => (
                <option value={item.Price}>{item.title}</option>
              ))}
            </Select>
          </div>
          <div className="w-full space-y-2">
            <div className="mb-2 block">
              <Label
                className="text-xl text-white"
                htmlFor="shelf"
                value="shelf"
              />
            </div>
            <Select id="shelf" onChange={(e) => totalValue(e.target.value)}>
              <option>Select Shelf</option>
              {Shelf.map((item) => (
                <option value={item.Price}>{item.title}</option>
              ))}
            </Select>
          </div>
          <div className="w-full space-y-2">
            <div className="mb-2 block">
              <Label
                className="text-xl text-white"
                htmlFor="drawer"
                value="Drawer"
              />
            </div>
            <Select onChange={(e) => totalValue(e.target.value)} id="drawer">
              <option>Select Drawer</option>
              {Drawer.map((item) => (
                <option value={item.Price}>{item.title}</option>
              ))}
            </Select>
          </div>
          <div className="w-full space-y-2">
            <div className="mb-2 block">
              <Label
                className="text-xl text-white"
                htmlFor="visible"
                value="Visible"
              />
            </div>
            <Select onChange={(e) => totalValue(e.target.value)} id="visible">
              <option>Select Visibles</option>
              {visible.map((item) => (
                <option value={item.Price}>{item.title}</option>
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
                Rs.<spam className="font-normal">{rupee}</spam>
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
              <p className="text-lg text-white font-serif ">10%</p>
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
  );
}

export default Estimate;
