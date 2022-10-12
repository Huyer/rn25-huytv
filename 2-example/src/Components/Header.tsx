import React from "react";

type Props = {
  isLogin: boolean;
};

function Header({ isLogin }: Props) {
  return (
    <>
      <div className="bg-ccc text-white fs-1 text-center">The Pulpit Rock</div>
      <button className="btn btn-outline-primary">
        {isLogin === true ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default Header;
