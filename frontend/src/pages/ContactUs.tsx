import React from "react";

import { Button, Img, Input, Text } from "components";
import NavBar from "components/NavBar";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-montserrat gap-2.5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
      <NavBar className="bg-blue_gray-700 flex md:flex-col md:gap-2.5 items-center justify-between md:px-5 px-[60px] py-[27px] w-full" />
        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[54px] py-[30px] w-full">
          <div className="bg-gray-200_01 flex flex-col items-center justify-center md:px-5 px-[50px] py-5 rounded-[10px] w-auto sm:w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto sm:w-full">
              <Img
                className="h-[60px] md:h-auto object-cover w-[241px] sm:w-full"
                src="images/img_union21.png"
                alt="unionTwentyOne"
              />
              <Text
                className="text-black-900 text-center text-lg w-[254px]"
                size="txtMontserratRomanSemiBold18"
              >
                We’d love to hear from you!
              </Text>
              <Text
                className="max-w-[315px] md:max-w-full text-black-900 text-center text-sm"
                size="txtMontserratRomanMedium14"
              >
                Fill in the details below and one of our team will get back to
                you as soon as possible :)
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
                      name="emailtextentry"
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
                      name="emailtextentry_One"
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
                    name="emailtextentry_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-[476px] sm:w-full">
                  <Text
                    className="max-w-[476px] md:max-w-full text-black-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Just so we have context and we can answer your query
                    appropriately, are you a....
                  </Text>
                  <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-[476px] sm:w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Message
                  </Text>
                  <div className="bg-white-A700 h-[134px] rounded-[10px] w-full"></div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[83px] text-center text-sm"
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
