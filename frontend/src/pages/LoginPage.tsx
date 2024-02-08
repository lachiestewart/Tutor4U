import React, { useContext, useState } from "react";

import ForgotPasswordModal from "components/ForgotPasswordModal";
import SignUpModal from "components/SignUpModal";
import Input from "components/Input";

import NavBar from "components/NavBar";
import { UserContext } from "components/UserProvider";
import { login } from "api";
import { User } from "interfaces";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [displaySignup, setDisplaySignup] = useState<boolean>(false);
  const [displayForgotPassword, setDisplayForgotPassword] =
    useState<boolean>(false);

  const handleForgotPasswordClick = () => {
    setDisplayForgotPassword(true);
  };

  const handleChange = (field: keyof LoginForm, value: string) => {
    /** Updates the state of messageForm when a change is made to an input */
    setLoginForm((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(loginForm)
      .map((key: string) => loginForm[key as keyof LoginForm])
      .every((str) => str !== "");
    if (!validForm) return;
    console.log("messageForm", loginForm);
    //send user info to backend get user info and redirect
    try {
      const loginUser: User = await login(loginForm.email, loginForm.password);
      console.log("loginUser", loginUser);
      setUser(loginUser);
      navigate("/home");
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-auto overflow-clip">
      {displayForgotPassword && (
        <ForgotPasswordModal onHide={() => setDisplayForgotPassword(false)} />
      )}
      {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      <NavBar />
      <div className="flex w-full flex-row font-montserrat md:min-h-[85vh] md:flex-row sm:flex-col">
        {/*Login form*/}
        <div className="lg:flex-row flex h-auto w-full flex-col items-center rounded-[10px] bg-blue_gray-700 p-10 py-10 md:m-5 md:px-5 sm:m-2">
          <div className="flex w-full flex-col items-center">
            <img
              className="mt-[20px] h-[76px]"
              src="images/img_union_white_a700.svg"
              alt="Tutor4U-Logo-White"
            />
            <h1 className="my-[20px] text-center text-[32px] text-white-A700 md:text-3xl sm:text-[28px]">
              Login To Your Account
            </h1>
            <form
              className="flex max-w-[700px] flex-col items-center justify-center gap-2.5 md:w-[70%] sm:w-full"
              onSubmit={handleSubmit}
            >
              <Input
                label="Email"
                onChange={(e) => handleChange("email", e)}
                placeholder="Email"
                className="w-full"
                wrapClassName="flex h-[50px] justify-center"
                labelClassName="text-white-A700"
              ></Input>
              <Input
                label="Password"
                onChange={(e) => handleChange("password", e)}
                placeholder="Password"
                className="w-full"
                wrapClassName="flex h-[50px] justify-center"
                labelClassName="text-white-A700"
                type="password"
              ></Input>
              <div className="flex min-w-[60%] flex-row gap-5">
                <button
                  className="w-1/2 min-w-[83px] rounded-[10px] bg-blue-A200 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
                  type="submit"
                >
                  Login
                </button>
                <button
                  className="w-1/2 min-w-[83px] rounded-[10px] bg-blue-A200 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot password
                </button>
              </div>
            </form>
          </div>
          <div className="lg:mx-[40px] lg:h-full lg:w-[2px] max-w-[700px] bg-white-A700 md:w-[70%] sm:my-[40px] sm:h-[3px] sm:w-full" />
          <div className="flex max-w-[700px] flex-col items-center md:w-[70%] sm:w-full">
            <h1 className="mb-[20px] text-center text-[32px] text-white-A700 md:text-3xl sm:text-[28px]">
              New Here?
            </h1>
            <h2 className="my-[20px] text-center text-[32px] text-white-A700 md:text-2xl sm:text-[28px]">
              We'd love for you to apply to be a tutor and join our amazing
              community!
            </h2>
            <button className="animate-bounce rounded-xl border-2 border-blue_gray-700 bg-blue-700 py-2 px-8 font-semibold text-violet-100 shadow-lg duration-300 ease-in-out  hover:border-2 hover:border-blue-900 hover:bg-blue-900 hover:text-white-A700 hover:shadow-xl">
              Count Me In!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
