import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Basic01 from "./Homeworks/Section02/Basic01";
import Basic02 from "./Homeworks/Section02/Basic02";
import Basic03 from "./Homeworks/Section02/Basic03";
import BtNumber from "./Components/Bt/BtNumber";
import BlockUi01 from "./Homeworks/Section02/BlockUi01";
import BlockUi4 from "./Homeworks/Section02/BlockUi4";
import { FaFacebookF } from "react-icons/fa";
function App() {
  return (
    <>
      <BlockUi4
        text="today's visitors"
        totalNum={25000}
        percentage1={30}
        percentage2={30}
        percentage3={30}
        percentage4={30}
        percentage5={30}
      />

      <BlockUi01 text="text" color1="violet" color2="pink" percentage={50} />
    </>
  );
}
export default App;
