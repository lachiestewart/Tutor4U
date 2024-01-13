import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LoginPageMVPPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-blue_gray-700 flex flex-col items-center justify-center p-[101px] md:px-5 w-[56%] md:w-full">
          <Img
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
          <Line className="bg-white-A700 h-[3px] mt-[46px] w-[84%]" />
          <div className="flex flex-col items-center justify-start mb-[150px] mt-[50px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-center text-lg text-white-A700"
                size="txtMontserratRomanBlack18"
              >
                Email
              </Text>
              <Input
                name="emailtextentry"
                placeholder=""
                className="p-0 w-full"
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
                className="p-0 w-full"
                wrapClassName="flex h-[50px] mt-2 w-full"
                shape="square"
                color="blue_gray_100"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start mt-[35px] w-[69%] md:w-full">
                <Button
                  className="cursor-pointer font-black leading-[normal] min-w-[143px] text-center text-lg"
                  shape="round"
                  color="blue_A200"
                  size="md"
                  variant="fill"
                >
                  Log In
                </Button>
                <Button
                  className="cursor-pointer font-black leading-[normal] min-w-[248px] text-center text-lg"
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
        <div className="flex flex-col items-center justify-center p-[89px] md:px-5 w-[45%] md:w-full">
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

export default LoginPageMVPPage;
