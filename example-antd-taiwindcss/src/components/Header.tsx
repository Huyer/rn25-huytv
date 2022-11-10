import { Button, Col, Input, Menu, Row } from "antd";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const itemsMenu = [
    { label: "Navigation1", key: "item-1" }, // remember to pass the key prop
    { label: "Navigation2", key: "item-2" },
    { label: "Navigation3", key: "item-3" },
    { label: "Navigation4", key: "item-4" },
    { label: "Navigation5", key: "item-5" },
    { label: "Navigation6", key: "item-6" },
  ];
  return (
    <div className="px-6 pt-4 border-b border-neutral-200">
      <Row align={"bottom"}>
        <Col span={6}>
          <div className=" inline-block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBLRqzXDfFTYMTd33EhrKLs2C3pYktm1IIOIJ6vUKlkCA2sPZEhEd0W1cSHJe0sebWg&usqp=CAU"
              className="h-12 pl-4"
              alt=""
            />
          </div>
        </Col>
        <Col span={6}>
          <Input.Group style={{ marginBottom: "12px" }} compact>
            <Input
              style={{ width: "calc(100% - 200px)" }}
              placeholder={"search"}
            />
            <Button type="primary">Submit</Button>
          </Input.Group>
        </Col>
        <Col span={12}>
          <Menu items={itemsMenu} mode={"horizontal"} theme={"light"} />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
