import React from "react";

import { Button, Input, Text } from "components";
import NavBar from "components/NavBar";

const TutorProfile: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-auto h-auto flex-col items-center justify-start gap-2.5 bg-gray-200 font-montserrat">
        <NavBar />
        <div className="mx-7 h-auto flex max-w-[1300px] items-start justify-center gap-[20px] rounded-[10px] bg-white-A700 px-6 py-2.5 md:flex-row sm:flex-col">
          <div className="flex h-auto w-[100%] flex-col items-center justify-start gap-3.5 px-[10px] py-2.5 md:w-[30%] sm:px-5">
            <div className="flex w-[96%] flex-col items-center justify-start gap-4 md:w-full">
              <div className="h-[200px] w-[200px] rounded-[100%] bg-blue_gray-100"></div>
              <Text
                className="sm:[20px] text-center text-[24px] text-black-900 md:text-[22px]"
                size="txtMontserratRomanSemiBold28"
                
              >
                About (First Name)
              </Text>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-3.5">
              <div className="flex w-auto flex-col items-center justify-start px-2.5">
                <Text
                  className="w-[279px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                  size="txtMontserratRomanSemiBold28"
                >
                  Current Availability
                </Text>
                <Text
                  className="w-auto text-center text-lg text-black-900"
                  size="txtMontserratRomanRegular18"
                >
                  Available
                </Text>
              </div>
              <div className="flex w-auto flex-col items-center justify-start px-2.5">
                <Text
                  className="w-[101px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                  size="txtMontserratRomanSemiBold28"
                >
                  Pricing
                </Text>
                <Text
                  className="w-auto text-center text-lg text-black-900"
                  size="txtMontserratRomanRegular18"
                >
                  $35/hr
                </Text>
              </div>
              <div className="flex w-auto flex-col items-center justify-start px-2.5">
                <Text
                  className="w-[200px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                  size="txtMontserratRomanSemiBold28"
                >
                  Qualifications
                </Text>
                <Text
                  className="w-auto text-center text-lg text-black-900"
                  size="txtMontserratRomanRegular18"
                >
                  BSc in Physiology
                </Text>
              </div>
              <div className="flex w-auto flex-col items-center justify-start px-2.5">
                <Text
                  className="w-[223px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                  size="txtMontserratRomanSemiBold28"
                >
                  Tutoring Levels
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanRegular18"
                  >
                    NCEA L1
                  </Text>
                  <Text
                    className="mt-0.5 w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanRegular18"
                  >
                    NCEA L2
                  </Text>
                  <Text
                    className="mt-0.5 w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanRegular18"
                  >
                    NCEA L3
                  </Text>
                </div>
              </div>
              <div className="flex w-auto flex-col items-center justify-start px-2.5">
                <Text
                  className="w-[258px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                  size="txtMontserratRomanSemiBold28"
                >
                  Tutoring Subjects
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanRegular18"
                  >
                    Health
                  </Text>
                  <Text
                    className="mt-[3px] w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanRegular18"
                  >
                    Biology
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-auto flex-col items-center justify-start px-2.5">
              <Text
                className="w-auto text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                size="txtMontserratRomanSemiBold28"
              >
                Specific Courses I Tutor
              </Text>
              <Text
                className="w-auto text-center text-lg text-black-900"
                size="txtMontserratRomanRegular18"
              >
                CELS 170
              </Text>
            </div>
          </div>
          <div className="flex md:w-[70%] flex-col items-start justify-start gap-[11px] p-[15px] h-auto w-full ">
            <div className="flex w-full items-center justify-between gap-1 md:flex-row sm:flex-col">
              <h1>Full Name</h1>
              <div className="flex gap-2.5">
                <Button
                  className="min-w-[158px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Message (FName)
                </Button>
                <Button
                  className="min-w-[153px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="xs"
                  variant="fill"
                >
                  Find other Tutors
                </Button>
              </div>
            </div>
            <p>
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </>
            </p>
            <div className="flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-5 py-2.5">
              <div className="flex w-full flex-col items-start justify-start gap-2.5 py-2.5">
                <Text
                  className="w-full text-lg text-black-900"
                  size="txtMontserratRomanSemiBold18"
                >
                  Want to get in touch with this tutor?
                </Text>
                <Text
                  className="text-sm text-black-900"
                  size="txtMontserratRomanMedium14"
                >
                  Put in your details below to get full access to the platform
                  and contact this tutor for free!
                </Text>
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
                <div className="flex w-full flex-col items-start justify-start">
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
                <div className="flex w-full flex-col items-start justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Password
                  </Text>
                  <Input
                    name="emailtextentry_Three"
                    placeholder=""
                    className="w-full p-0"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <Button
                  className="min-w-[198px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Get Access To All Tutors{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorProfile;
