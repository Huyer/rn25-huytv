import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, UnorderedListOutlined, UserAddOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Content from "./Content";

function SideMenu() {
  const navi = useNavigate();
  const items = [
    { label: "Category", key: "/", icon: <MenuOutlined /> },
    { label: "Dashboard", key: "/dashboard", icon: <MenuOutlined /> },
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
    <div className="flex">
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

export default SideMenu;
