import React, { useState } from "react";

import ForgotPasswordModal from "components/ForgotPasswordModal";
import SignUpModal from "components/SignUpModal";
import Input from "components/Input";

import NavBar from "components/NavBar";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(loginForm)
      .map((key: string) => loginForm[key as keyof LoginForm])
      .every((str) => str !== "");
    if (!validForm) return;
    console.log("messageForm", loginForm);
    //send user info to backend get user info and redirect
  };

  return (
    <div className="w-auto overflow-clip">
      {displayForgotPassword && (
        <ForgotPasswordModal onHide={() => setDisplayForgotPassword(false)} />
      )}
      {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      <NavBar />
      <div className="flex flex-row md:min-h-[85vh] w-full sm:flex-col font-montserrat md:flex-row">
        {/*Login form*/}
        <div className="md:m-5 sm:m-2 flex h-auto w-full lg:flex-row flex-col items-center rounded-[10px] bg-blue_gray-700 p-10 py-10 md:px-5">
          <div className="w-full flex items-center flex-col">
            <img
              className="mt-[20px] h-[76px]"
              src="images/img_union_white_a700.svg"
              alt="Tutor4U-Logo-White"
            />
            <h1 className="my-[20px] text-center text-[32px] text-white-A700 md:text-3xl sm:text-[28px]">
              Login To Your Account
            </h1>
            <form
              className="flex sm:w-full md:w-[70%] max-w-[700px] flex-col items-center justify-center gap-2.5"
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
              ></Input>
              <div className="flex min-w-[60%] flex-row gap-5">
                <button
                  className="w-1/2 min-w-[83px] rounded-[10px] bg-blue-A200 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
                  type="submit"
                  onClick={setLoginForm}
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
          <div className="sm:my-[40px] lg:mx-[40px] sm:w-full md:w-[70%] sm:h-[3px] lg:h-full lg:w-[2px] max-w-[700px] bg-white-A700" />
          <div className="max-w-[700px] sm:w-full md:w-[70%] flex flex-col items-center">
            <h1 className="mb-[20px] text-center text-[32px] text-white-A700 md:text-3xl sm:text-[28px]">
              New Here?
            </h1>
            <h2 className="my-[20px] text-center text-[32px] text-white-A700 md:text-2xl sm:text-[28px]">
              We'd love for you to apply to be a tutor and join our amazing
              community!
            </h2>
            <button
              className="rounded-xl border-2 border-blue_gray-700 bg-blue-700 py-2 px-8 animate-bounce font-semibold text-violet-100 shadow-lg duration-300 ease-in-out  hover:border-2 hover:border-blue-900 hover:bg-blue-900 hover:text-white-A700 hover:shadow-xl"
              shape="round"
              color="gray_400"
              size="md"
              variant="fill"
              onClick={setDisplaySignup}
            >
              Count Me In!
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center p-[89px] px-5 md:w-[50%] sm:w-full">
          <Text
            className="mt-[318px] text-center text-[32px] text-indigo-600 md:text-3xl sm:text-[28px]"
            size="txtMontserratRomanBold32Indigo600"
          >
            New Here?
          </Text>
          <Text
            className="mt-3 w-full text-center text-[28px] leading-[36.00px] text-indigo-600 md:text-[26px] sm:text-2xl"
            size="txtMontserratRomanSemiBold28Indigo600"
          >
            Create a free login to use Tutor4U’s platform!
          </Text>
          <div className="mb-[252px] mt-8 flex flex-col items-center justify-start gap-[46px]">
            <Text
              className="h-[50px] w-[158px] justify-center rounded-[10px] bg-blue-A200 py-[13px] pl-2.5 pr-3.5 text-center text-lg text-white-A700"
              size="txtMontserratRomanBlack18"
            >
              <span className="font-montserrat font-black text-white-A700">
                Tutor Sign
              </span>
            
              <span className="font-montserrat font-black text-white-A700">
                Up
              </span>
            </Text>
            <Text
              className="text-center text-lg text-white-A700"
              size="txtMontserratRomanBlack18"
            >
              Student Sign-Up
            </Text>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
