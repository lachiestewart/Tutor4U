import React from "react";
import Sidebar from "components/Sidebar";

import { Button, Img, Input, Text } from "components";

const TutorProfileLoggedIn: React.FC = () => {
  return (
    <>
      <div className="main-outside-dive">
        <Sidebar />
        <div className="main-dashboard-div">
          
            <div className="flex flex-col gap-3.5 h-[907px] md:h-auto items-center justify-start sm:px-5 px-[33px] py-2.5 w-[358px]">
              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                <div className="bg-blue_gray-100 h-[277px] rounded-[138px] w-[277px]"></div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[277px]"
                  size="txtMontserratRomanSemiBold28"
                >
                  About (First Name)
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start px-2.5 w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[279px]"
                    size="txtMontserratRomanSemiBold28"
                  >
                    Current Availability
                  </Text>
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanRegular18"
                  >
                    Available
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2.5 w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[101px]"
                    size="txtMontserratRomanSemiBold28"
                  >
                    Pricing
                  </Text>
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanRegular18"
                  >
                    $35/hr
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2.5 w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[200px]"
                    size="txtMontserratRomanSemiBold28"
                  >
                    Qualifications
                  </Text>
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanRegular18"
                  >
                    BSc in Physiology
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2.5 w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[223px]"
                    size="txtMontserratRomanSemiBold28"
                  >
                    Tutoring Levels
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      NCEA L1
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      NCEA L2
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      NCEA L3
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2.5 w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[258px]"
                    size="txtMontserratRomanSemiBold28"
                  >
                    Tutoring Subjects
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Health
                    </Text>
                    <Text
                      className="mt-[3px] text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Biology
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start px-2.5 w-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  Specific Courses I Tutor
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanRegular18"
                >
                  CELS 170
                </Text>
              </div>
              <Text
                className="text-black-900 text-center text-lg w-36"
                size="txtMontserratRomanRegular18"
              >
                <>
                  XXX
                  <br />
                  XXX
                </>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start p-[15px] w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-1 items-center justify-center w-full">
                <Text
                  className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtMontserratRomanBold32"
                >
                  Full Name
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[158px] text-center text-sm"
                  shape="round"
                  color="blue_gray_700"
                  size="xs"
                  variant="fill"
                >
                  Message (FName)
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[153px] text-center text-sm"
                  shape="round"
                  color="blue_gray_700"
                  size="xs"
                  variant="fill"
                >
                  Find other Tutors
                </Button>
              </div>
              <Text
                className="leading-[24.00px] max-w-[570px] md:max-w-full text-black-900 text-lg"
                size="txtMontserratRomanRegular18"
              >
                <>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.&quot;
                </>
              </Text>
              <div className="bg-blue_gray-100 flex flex-col gap-[22px] items-start justify-start pb-5 pt-[13px] px-[15px] rounded-[10px] w-[570px] sm:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[381px]"
                  size="txtMontserratRomanSemiBold28"
                >
                  Get in touch with (FName)
                </Text>
                <div className="flex flex-col gap-[15px] items-start justify-start w-[537px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Full Name
                    </Text>
                    <Input
                      name="emailtextentry"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[50px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Email
                    </Text>
                    <Input
                      name="emailtextentry_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[50px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Message
                    </Text>
                    <div className="bg-white-A700 h-[82px] rounded-[10px] w-full"></div>
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

export default TutorProfileLoggedIn;
