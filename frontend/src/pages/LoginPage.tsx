import React, { useState } from "react";

import ForgotPasswordModal from "components/ForgotPasswordModal";
import SignUpModal from "components/SignUpModal";
import Input from "components/Input";
import Line from "components/Line";
import Text from "components/Text";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: ""
  });

  const [displaySignup, setDisplaySignup] = useState<boolean>(false);
  const [displayForgotPassword, setDisplayForgotPassword] = useState<boolean>(false);

  const handleForgotPasswordClick = () => {
    setDisplayForgotPassword(true);
  }

  const handleChange = (field: keyof LoginForm, value: string) => {
    /** Updates the state of messageForm when a change is made to an input */
    setLoginForm(prevState => ({ ...prevState, [field]: value }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(loginForm).map((key: string) => loginForm[key as keyof LoginForm]).every(str => str !== "");
    if (!validForm) return;
    console.log("messageForm", loginForm);
    //send user info to backend get user info and redirect
  }

  return (
    <>
      {displayForgotPassword && <ForgotPasswordModal onHide={() => setDisplayForgotPassword(false)} />}
      {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      {/* <NavBar /> */}
      <div className="flex md:flex-row flex-col font-montserrat w-screen h-auto lg:h-screen">
        {/*Login form*/}
        <div className="bg-blue_gray-700 flex flex-col items-center h-auto md:px-5 w-[50%]">
          <img
            className="h-[76px] mt-[134px]"
            src="images/img_union_white_a700.svg"
            alt="union"
          />
          <Text
            className="mt-[49px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32WhiteA700"
          >
            Login To Your Account
          </Text>
          <Line className="bg-white-A700 h-[3px] my-[50px] w-[60%]" />
          <form
            className="flex flex-col gap-2.5 items-center justify-center w-[70%]"
            onSubmit={handleSubmit}
          >
            <Input
              label="Email"
              onChange={e => handleChange('email', e)}
              placeholder="email"
              className="w-full"
              wrapClassName="flex h-[50px] justify-center"
              labelClassName="text-white-A700"
            ></Input>

            <Input
              label="Password"
              onChange={e => handleChange('password', e)}
              placeholder="password"
              className="w-full"
              wrapClassName="flex h-[50px] justify-center"
              labelClassName="text-white-A700"
            ></Input>


            <div className="flex flex-row gap-5 min-w-[60%]">
              <button
                className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue-A200 text-white-A700 p-[5px]"
                type="submit"
              >Sign Up</button>

              <button
                className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue-A200 text-white-A700 p-[5px]"
                onClick={handleForgotPasswordClick}
              >Forgot password</button>

            </div>
          </form>
        </div>


        <div className="flex flex-col items-center justify-center p-[89px] px-5 md:w-[50%] sm:w-full">
          <Text
            className="mt-[318px] md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-600"
            size="txtMontserratRomanBold32Indigo600"
          >
            New Here?
          </Text>
          <Text
            className="leading-[36.00px] mt-3 sm:text-2xl md:text-[26px] text-[28px] text-center text-indigo-600 w-full"
            size="txtMontserratRomanSemiBold28Indigo600"
          >
            Create a free login to use Tutor4U’s platform!
          </Text>
          <div className="flex flex-col gap-[46px] items-center justify-start mb-[252px] mt-8">
            <Text
              className="bg-blue-A200 h-[50px] justify-center pl-2.5 pr-3.5 py-[13px] rounded-[10px] text-center text-lg text-white-A700 w-[158px]"
              size="txtMontserratRomanBlack18"
            >
              <span className="text-white-A700 font-montserrat font-black">
                Tutor Sign
              </span>
              <span className="text-white-A700 font-montserrat font-black">
                {" "}
              </span>
              <span className="text-white-A700 font-montserrat font-black">
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
        </div>
      </div>
    </>

  );
};

export default LoginPage;
