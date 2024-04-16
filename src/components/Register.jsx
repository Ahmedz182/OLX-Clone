import React from "react";

const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-5 gap-5   ">
        <p className="text-primary font-bold text-2xl">
          Create a new olx account
        </p>
        <span className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2 items-center justify-center w-80 cursor-pointer">
          <img
            className="w-7"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="google logo"
          />
          <p className="font-bold text-primary text-lg">Join with Google</p>
        </span>
        <span className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2  items-center justify-center w-80 cursor-pointer">
          <img
            className="w-7"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
            alt="google logo"
          />
          <p className="font-bold text-primary text-lg">Join with Facebook</p>
        </span>

        <p className="text-lg">OR</p>
        <span className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2  items-center justify-center w-80 cursor-pointer">
          <i className="ri-mail-line text-3xl"></i>
          <p className="font-bold text-primary text-lg">Join with Email</p>
        </span>
        <span className="outline outline-text rounded outline-2 flex gap-3  px-3 py-2  items-center justify-center w-80 cursor-pointer">
          <i className="ri-phone-line text-3xl"></i>
          <p className="font-bold text-primary text-lg">Join with Phone</p>
        </span>
      </div>
    </>
  );
};

export default Register;
