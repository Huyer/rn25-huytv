import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
