import "./App.css";
import Estimate from "./Estimate";
import logo from "./assets/2020-01.png";

const Header = () => {
  return (
    <div className="bg-[#30355A] py-4 px-1">
      <h1 className="font-semibold text-white text-center">
        HARIHAR QUOTATION
      </h1>
    </div>
  );
};

function App() {
  return (
    <div className="h-[100vh] w-full ">
      <Header />
      <Estimate />
    </div>
  );
}

export default App;
