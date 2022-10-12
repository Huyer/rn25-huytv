import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Basic01 from "./Homeworks/Section02/Basic01";
import Basic02 from "./Homeworks/Section02/Basic02";
import Basic03 from "./Homeworks/Section02/Basic03";

function App() {
  let isLogin = false;
  return (
    <>
      {/* <Header isLogin={isLogin} />
      <div className="row">
        <div className="col-md-4">
          <p className="border-bottom py-4 ps-3">The Driver</p>
          <p className="border-bottom py-4 ps-3">The Driver</p>
          <p className="border-bottom py-4 ps-3">The Driver</p>
          <p className="border-bottom py-4 ps-3">The Driver</p>
        </div>
        <div className="col-md-4">
          <h1>The Walk</h1>
          <p>
            The Walk to the Pulpit Rock will take your to the Pulpit Rock will
            take your to the Pulpit Rock will take your
          </p>
          <img
            className="w-100"
            src="https://s27363.pcdn.co/wp-content/uploads/2019/09/Pulpit-Rock.jpg.optimal.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4 bg-secondary pr-0">
          <h1>What?</h1>
          <p>The Walk to the Pulpit Rock will take your</p>
          <h1>Where?</h1>
          <p>The Walk to the Pulpit Rock will take your</p>
          <h1>Price?</h1>
          <p>The Walk is free</p>
        </div>
      </div>
      <Footer /> */}

      <Basic01 />
      <Basic02 />
      <Basic03 />
    </>
  );
}
export default App;
