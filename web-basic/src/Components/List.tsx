import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IUser {
  id: string;
  name: string;
}
const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

type Props = {};

const List = (props: Props) => {
  const navi = useNavigate();
  const gotoDetail = (id: string) => {
    navi("detail/" + id);
  };
  const [listUser, setListUser] = useState<Array<IUser>>([]);
  useEffect(() => {
    getListUser();
  }, []);
  const handleDelete = (id: string) => {
    const url = "https://63529aa8a9f3f34c3743aea4.mockapi.io/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        getListUser();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };
  const getListUser = () => {
    fetch("https://63529aa8a9f3f34c3743aea4.mockapi.io/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setListUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
          getListUser();
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
        <div style={{ marginLeft: "10px" }}>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder={"nhập tên mới"}
          />
          <p>{formik.errors.name ?? null}</p>
        </div>
        <input style={{ marginLeft: "10px" }} type="submit" />
      </form>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listUser?.map(function (user: IUser) {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => gotoDetail(user.id)}
                  >
                    Detail
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
