import React, { useEffect, useState } from "react";
import { auth, provider } from "../utils/Firebase/Config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const notAvail = () => {
    alert("Not Available yet Sign in with Google ");
  };

  const [EmailValue, setEmailValue] = useState("");
  const GoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
        setEmailValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName);
        localStorage.setItem("Login", true);
        window.location.reload();
      })
      .catch((error) => {
        // navigate("/");
        // Handle sign-in errors
      });
  };

  useEffect(() => {
    setEmailValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-5 gap-5   ">
        <p className="text-primary font-bold text-2xl">
          Login into your OLX account
        </p>
        <span
          onClick={GoogleSignIn}
          className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2 items-center justify-center w-80 cursor-pointer">
          <img
            className="w-7"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="google logo"
          />
          <p className="font-bold text-primary text-lg">Login with Google</p>
        </span>
        <span
          onClick={notAvail}
          className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2  items-center justify-center w-80 cursor-pointer">
          <img
            className="w-7"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
            alt="google logo"
          />
          <p className="font-bold text-primary text-lg">Login with Facebook</p>
        </span>

        <p className="text-lg">OR</p>
        <span
          onClick={notAvail}
          className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2  items-center justify-center w-80 cursor-pointer">
          <i className="ri-mail-line text-3xl"></i>
          <p className="font-bold text-primary text-lg">Login with Email</p>
        </span>
        <span
          onClick={notAvail}
          className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2  items-center justify-center w-80 cursor-pointer">
          <i className="ri-phone-line text-3xl"></i>
          <p className="font-bold text-primary text-lg">Login with Phone</p>
        </span>
      </div>
    </>
  );
};

export default Login;
