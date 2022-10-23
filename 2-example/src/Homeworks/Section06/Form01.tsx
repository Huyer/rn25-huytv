import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

interface IUser {
  id: string;
  name: string;
}

function Form01() {
  //get dữ liệu từ db lưu vào state data
  const [data, setData] = useState<Array<IUser>>([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const url = "https://63529aa8a9f3f34c3743aea4.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  }, [count]);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const url = "https://63529aa8a9f3f34c3743aea4.mockapi.io/users";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
          setCount(count + 1);
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.errors.name ?? null}</p>
        </div>
        <input type="submit" />
      </form>
      <div>
        {data.map((item: IUser, i: number) => (
          <p key={i}>{item.name}</p>
        ))}
      </div>
    </>
  );
}

export default Form01;
