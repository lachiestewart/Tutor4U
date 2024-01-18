import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-full flex-row items-center bg-white-A700 font-montserrat md:flex-col md:gap-5 sm:flex-col sm:gap-5">
        <div className="flex w-[56%] flex-col items-center justify-center bg-blue_gray-700 p-[101px] md:w-full md:px-5">
          <Img
            className="mt-[134px] h-[76px]"
            src="images/img_union_white_a700.svg"
            alt="union"
          />
          <Text
            className="mt-[49px] text-center text-[32px] text-white-A700 md:text-3xl sm:text-[28px]"
            size="txtMontserratRomanBold32WhiteA700"
          >
            Login To Your Account
          </Text>
          <Line className="mt-[46px] h-[3px] w-[84%] bg-white-A700" />
          <div className="mb-[150px] mt-[50px] flex w-full flex-col items-center justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <Text
                className="text-center text-lg text-white-A700"
                size="txtMontserratRomanBlack18"
              >
                Email
              </Text>
              <Input
                name="emailtextentry"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] mt-[9px] w-full"
                shape="square"
                color="blue_gray_100"
              ></Input>
              <Text
                className="mt-[26px] text-center text-lg text-white-A700"
                size="txtMontserratRomanBlack18"
              >
                Password
              </Text>
              <Input
                name="emailtextentry_One"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] mt-2 w-full"
                shape="square"
                color="blue_gray_100"
              ></Input>
              <div className="mt-[35px] flex w-[69%] flex-row items-center justify-start gap-[19px] md:w-full sm:flex-col">
                <Button
                  className="min-w-[143px] cursor-pointer text-center text-lg font-black leading-[normal]"
                  shape="round"
                  color="blue_A200"
                  size="md"
                  variant="fill"
                >
                  Log In
                </Button>
                <Button
                  className="min-w-[248px] cursor-pointer text-center text-lg font-black leading-[normal]"
                  shape="round"
                  color="blue_A200"
                  size="md"
                  variant="fill"
                >
                  Forgot Password
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[45%] flex-col items-center justify-center p-[89px] md:w-full md:px-5">
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
                {" "}
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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
