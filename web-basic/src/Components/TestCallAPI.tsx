import React, { useEffect, useState } from "react";

type Props = {};

const TestCallAPI = (props: Props) => {
  const [listUsers, getListUsers] = useState([]);
  useEffect(() => {
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
  }, []);

  console.log(listUsers);
  return <div>TestCallAPI</div>;
};

export default TestCallAPI;
