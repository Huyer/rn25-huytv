import React, { useEffect } from "react";
import { Space, Table } from "antd";

type Props = {};

const ListUsers = (props: Props) => {
  const [listUsers, getListUsers] = React.useState([]);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    fetch("https://63529aa8a9f3f34c3743aea4.mockapi.io/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        getListUsers(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  return (
    <div className="px-8 py-4">
      <Table dataSource={listUsers} columns={columns} rowKey={"id"}></Table>
    </div>
  );
};

export default ListUsers;
