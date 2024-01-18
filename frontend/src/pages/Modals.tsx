import React from "react";

import { Button, Input, Text } from "components";

const Modals: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-full flex-row items-start justify-start gap-[151px] bg-white-A700 p-11 font-montserrat md:flex-col md:gap-10 md:px-10 sm:flex-col sm:gap-10 sm:px-5">
        <div className="mb-[588px] mt-10 flex w-auto flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:mt-0 md:px-5 sm:w-full">
          <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
            <a
              href="javascript:"
              className="flex w-[212px] justify-start text-center text-lg text-black-900"
            >
              <Text size="txtMontserratRomanSemiBold18">
                Forgot your password?
              </Text>
            </a>
            <Text
              className="max-w-[315px] text-center text-sm text-black-900 md:max-w-full"
              size="txtMontserratRomanMedium14"
            >
              Put in your email below and we will send you a reset password link
              to your email
            </Text>
            <div className="flex w-[476px] flex-col items-start justify-start sm:w-full">
              <Text
                className="w-auto text-center text-lg text-black-900"
                size="txtMontserratRomanSemiBold18"
              >
                Email
              </Text>
              <Input
                name="emailtextentry"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
            <Input
              name="language"
              placeholder="Send Me A Password Reset Link "
              className="w-full p-0 text-center text-sm font-medium leading-[normal] placeholder:text-white-A700"
              wrapClassName="w-[54%]"
              type="password"
              color="blue_gray_700"
              size="xs"
            ></Input>
          </div>
        </div>
        <div className="mb-[410px] mt-[54px] flex w-auto flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:mt-0 md:px-5 sm:w-full">
          <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
            <Text
              className="max-w-[264px] text-center text-lg text-black-900 md:max-w-full"
              size="txtMontserratRomanSemiBold18"
            >
              Awesome to hear you want to become a Tutor!
            </Text>
            <Text
              className="max-w-[315px] text-center text-sm text-black-900 md:max-w-full"
              size="txtMontserratRomanMedium14"
            >
              Put in your details below to get access to the tutor portal
            </Text>
            <div className="flex w-full flex-col items-center justify-start gap-2.5">
              <div className="flex w-full flex-row items-start justify-start gap-2.5 sm:flex-col">
                <div className="flex w-full flex-1 flex-col items-start justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    First Name
                  </Text>
                  <Input
                    name="emailtextentry_One"
                    placeholder=""
                    className="w-full p-0"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="emailtextentry_Two"
                    placeholder=""
                    className="w-full p-0"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex w-[476px] flex-col items-start justify-start sm:w-full">
                <Text
                  className="w-auto text-center text-lg text-black-900"
                  size="txtMontserratRomanSemiBold18"
                >
                  Email
                </Text>
                <Input
                  name="emailtextentry_Three"
                  placeholder=""
                  className="w-full p-0"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <div className="flex w-[476px] flex-col items-start justify-start sm:w-full">
                <Text
                  className="w-auto text-center text-lg text-black-900"
                  size="txtMontserratRomanSemiBold18"
                >
                  Password
                </Text>
                <Input
                  name="emailtextentry_Four"
                  placeholder=""
                  className="w-full p-0"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <Button
                className="min-w-[121px] cursor-pointer text-center text-sm font-medium leading-[normal]"
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
