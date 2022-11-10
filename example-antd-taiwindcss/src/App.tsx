import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";

function App() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Footer></Footer>
    </div>
  );

  function Header() {
    const items = [
      {
        label: "Navigation",
        key: "item-1",
      },
      {
        label: "Navigation",
        key: "item-2",
      },
      {
        label: "Navigation",
        key: "item-3",
      },
    ];
    return (
      <div className="w-screen h-40">
        <div className="h-1/2 flex pl-80">
          <img
            src="https://tenten.vn/tin-tuc/wp-content/themes/tintuc.tenten.vn/assets/images/logo_tenten.png"
            alt=""
            className="w-auto h-10 mt-6"
          />
          <div className="pt-10 pl-32 w-6/12">
            <Search placeholder="input search text" enterButton />
          </div>
        </div>
        <div className="">
          <Menu mode="horizontal" items={items}></Menu>
        </div>
      </div>
    );
  }
  function Footer() {
    return (
      <div className="h-16 bg-stone-500 justify-center	flex font-bold">
        Footer
      </div>
    );
  }

  function SideMenu() {
    const navi = useNavigate();
    const items = [
      { label: "Home", key: "/", icon: <HomeOutlined /> },
      { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
      {
        label: "Users List",
        key: "/userslist",
        icon: <UnorderedListOutlined />,
      },
      { label: "Profile", key: "/profile", icon: <UserAddOutlined /> },
      {
        label: "Signout",
        key: "signout",
        icon: <PoweroffOutlined />,
        danger: true,
      },
    ];
    return (
      <div className="flex flex-row">
        <Menu
          className="w-1/6"
          onClick={(key) => {
            if (key.key === "signout") {
              //sign out funtionc
            } else navi(key.key);
          }}
          items={items}
        />
        <Content />
      </div>
    );
  }

  function Content() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="/userslist" element={<div>Users List</div>}></Route>
          <Route path="/profile" element={<div>Profile</div>}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
