import React from "react";
type Props = {};

const TestNetworking = (props: Props) => {
  const onSubmitPromise = () => {
    const data = {
      name: "tungnt@softech.vn",
    };

    const url = "https://63528edfa9f3f34c374147e3.mockapi.io/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };
  return (
    <div>
      <input type="text" />
      <input type="submit" onClick={onSubmitPromise} />
    </div>
  );
};

export default TestNetworking;
