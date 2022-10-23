import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface IUser {
  id: string;
  name: string;
}

const FormTestGet = () => {
  const [data, setData] = useState<Array<IUser>>([]);
  useEffect(() => {
    const url = "https://63529aa8a9f3f34c3743aea4.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("1");
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  }, []);
  return (
    <div>
      {data.map((item: IUser, i: number) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default FormTestGet;
