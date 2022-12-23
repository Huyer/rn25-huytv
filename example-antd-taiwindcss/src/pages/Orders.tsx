import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
// import { moment } from "moment";
var moment = require("moment");

type Props = {};

const Orders = (props: Props) => {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:9000/orders", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setOrders(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "_id",
      key: "_id",
      width: "10%",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "status",
      key: "status",
      width: "10%",
    },
    {
      title: "Địa chỉ nhận hàng",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
    },
    {
      title: "Kiểu thanh toán",
      dataIndex: "paymentType",
      key: "paymentType",
      width: "10%",
    },
    {
      title: "Ngày đặt đơn hàng",
      dataIndex: "createdDate",
      key: "createdDate",
      width: "15%",
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
      width: "7%",
      render: (text: any, record: any) => {
        const { orderDetails } = record;

        let total = 0;
        orderDetails.forEach((od: any) => {
          let sum = od.quantity * od.product.total;
          total = total + sum;
        });

        return <strong>{total}$</strong>;
      },
    },
    {
      key: "action",
      width: "10%",
      render: (text: any, record: any) => {
        return (
          <Space>
            <Button onClick={() => {}}>Chi tiết đơn hàng</Button>
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => {}} onCancel={() => {}}>
              <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return <Table dataSource={orders} columns={columns} rowKey={"id"} />;
};

export default Orders;
