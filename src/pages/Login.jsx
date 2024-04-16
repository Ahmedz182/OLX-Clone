import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
const LoginPage = () => {
  const [Showlogin, setShowlogin] = useState(true);

  //   useEffect(() => {}, [third]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {Showlogin && (
          <>
            <Login />

            <p
              className="text-lg text-blue font-bold cursor-pointer"
              onClick={() => {
                setShowlogin(false);
              }}>
              New to OLX? Create an account
            </p>
          </>
        )}

        {!Showlogin && (
          <>
            <Register />
            <p
              className="text-lg text-blue font-bold cursor-pointer"
              onClick={() => {
                setShowlogin(true);
              }}>
              Already have an account? Log in
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default LoginPage;
