import React from "react";

import { Button, Img, Input, Text } from "components";
import NavBar from "components/NavBar";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-auto flex-col items-start justify-start gap-2.5 bg-gray-200 font-montserrat md:w-full sm:w-full">
        <NavBar className="flex w-full items-center justify-between bg-blue_gray-700 px-[60px] py-[27px] md:flex-col md:gap-2.5 md:px-5" />
        <div className="flex w-full flex-col items-center justify-start px-[54px] py-[30px] md:px-10 sm:px-5">
          <div className="flex w-auto flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:px-5 sm:w-full">
            <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
              <Img
                className="h-[60px] w-[241px] object-cover md:h-auto sm:w-full"
                src="images/img_union21.png"
                alt="unionTwentyOne"
              />
              <Text
                className="w-[254px] text-center text-lg text-black-900"
                size="txtMontserratRomanSemiBold18"
              >
                We’d love to hear from you!
              </Text>
              <Text
                className="max-w-[315px] text-center text-sm text-black-900 md:max-w-full"
                size="txtMontserratRomanMedium14"
              >
                Fill in the details below and one of our team will get back to
                you as soon as possible :)
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
                      name="emailtextentry"
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
                      name="emailtextentry_One"
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
                    name="emailtextentry_Two"
                    placeholder=""
                    className="w-full p-0"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex w-[476px] flex-col items-start justify-start sm:w-full">
                  <Text
                    className="max-w-[476px] text-lg text-black-900 md:max-w-full"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Just so we have context and we can answer your query
                    appropriately, are you a....
                  </Text>
                  <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
                </div>
                <div className="flex w-[476px] flex-col items-start justify-start sm:w-full">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Message
                  </Text>
                  <div className="h-[134px] w-full rounded-[10px] bg-white-A700"></div>
                </div>
                <Button
                  className="min-w-[83px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
