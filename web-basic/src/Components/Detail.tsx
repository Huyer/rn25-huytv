import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function Detail() {
  let params = useParams();
  const [stateUser, setStateUser] = useState<IUser>({
    name: "",
    id: "",
  });

  useEffect(() => {
    getUserApi();
  }, []);

  const getUserApi = () => {
    const url =
      "https://63529aa8a9f3f34c3743aea4.mockapi.io/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setStateUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <p>ID: {stateUser.id}</p>
      <p>Name: {stateUser.name}</p>
    </div>
  );
}

export default Detail;
