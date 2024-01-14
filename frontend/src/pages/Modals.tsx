import React from "react";

import { Button, Input, Text } from "components";

const Modals: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-10 md:gap-10 gap-[151px] items-start justify-start mx-auto p-11 md:px-10 sm:px-5 w-full">
        <div className="bg-gray-200_01 flex flex-col items-center justify-center mb-[588px] md:mt-0 mt-10 md:px-5 px-[50px] py-5 rounded-[10px] w-auto sm:w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto sm:w-full">
            <a
              href="javascript:"
              className="flex justify-start text-black-900 text-center text-lg w-[212px]"
            >
              <Text size="txtMontserratRomanSemiBold18">
                Forgot your password?
              </Text>
            </a>
            <Text
              className="max-w-[315px] md:max-w-full text-black-900 text-center text-sm"
              size="txtMontserratRomanMedium14"
            >
              Put in your email below and we will send you a reset password link
              to your email
            </Text>
            <div className="flex flex-col items-start justify-start w-[476px] sm:w-full">
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtMontserratRomanSemiBold18"
              >
                Email
              </Text>
              <Input
                name="emailtextentry"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
            <Input
              name="language"
              placeholder="Send Me A Password Reset Link "
              className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="w-[54%]"
              type="password"
              color="blue_gray_700"
              size="xs"
            ></Input>
          </div>
        </div>
        <div className="bg-gray-200_01 flex flex-col items-center justify-center mb-[410px] md:mt-0 mt-[54px] md:px-5 px-[50px] py-5 rounded-[10px] w-auto sm:w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto sm:w-full">
            <Text
              className="max-w-[264px] md:max-w-full text-black-900 text-center text-lg"
              size="txtMontserratRomanSemiBold18"
            >
              Awesome to hear you want to become a Tutor!
            </Text>
            <Text
              className="max-w-[315px] md:max-w-full text-black-900 text-center text-sm"
              size="txtMontserratRomanMedium14"
            >
              Put in your details below to get access to the tutor portal
            </Text>
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    First Name
                  </Text>
                  <Input
                    name="emailtextentry_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="emailtextentry_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[476px] sm:w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Email
                </Text>
                <Input
                  name="emailtextentry_Three"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-[476px] sm:w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Password
                </Text>
                <Input
                  name="emailtextentry_Four"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[121px] text-center text-sm"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Create Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
