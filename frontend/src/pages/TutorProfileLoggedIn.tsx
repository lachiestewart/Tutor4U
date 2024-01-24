import React from "react";
import Sidebar from "components/Sidebar";
import Text from "components/Text";
import Button from "components/Button";
import Input from "components/Input";

const TutorProfileLoggedIn: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-full items-start justify-between gap-2.5 bg-gray-200 font-montserrat md:flex-row sm:flex-col md:mt-0 sm:mt-[-100vh]">
        <Sidebar />
        <div className="flex w-full flex-col items-start justify-start gap-[21px] rounded-[10px] bg-white-A700 px-6  py-2.5 md:flex-col md:px-5 sm:px-5">
          <div className="flex h-[907px] flex-col items-center justify-start gap-3.5 px-[33px] py-2.5 md:h-auto sm:px-5">
            <div className="flex w-[96%] flex-col items-center justify-start gap-4 md:w-full">
              <div className="h-[277px] w-[277px] rounded-[138px] bg-blue_gray-100"></div>
              <Text
                className="w-[277px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
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
            <Text
              className="w-36 text-center text-lg text-black-900"
              size="txtMontserratRomanRegular18"
            >
              <>
                XXX
                <br />
                XXX
              </>
            </Text>
          </div>
          <div className="flex w-auto flex-col items-start justify-start gap-[11px] p-[15px] md:w-full md:flex-1">
            <div className="flex w-full flex-row items-center justify-center gap-1 sm:flex-col">
              <Text
                className="w-auto flex-1 text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
                size="txtMontserratRomanBold32"
              >
                Full Name
              </Text>
              <Button
                className="min-w-[158px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                shape="round"
                color="blue_gray_700"
                size="xs"
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
            <Text
              className="max-w-[570px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
              size="txtMontserratRomanRegular18"
            >
              <>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.&quot;
              </>
            </Text>
            <div className="flex w-[570px] flex-col items-start justify-start gap-[22px] rounded-[10px] bg-blue_gray-100 px-[15px] pb-5 pt-[13px] sm:w-full">
              <Text
                className="w-[381px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
                size="txtMontserratRomanSemiBold28"
              >
                Get in touch with (FName)
              </Text>
              <div className="flex w-[537px] flex-col items-start justify-start gap-[15px] sm:w-full">
                <div className="flex w-auto flex-col items-start justify-start sm:w-full">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Full Name
                  </Text>
                  <Input
                    name="emailtextentry"
                    placeholder=""
                    className="w-full p-0"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex w-auto flex-col items-start justify-start sm:w-full">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Email
                  </Text>
                  <Input
                    name="emailtextentry_One"
                    placeholder=""
                    className="w-full p-0"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex w-auto flex-col items-start justify-start sm:w-full">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Message
                  </Text>
                  <div className="h-[82px] w-full rounded-[10px] bg-white-A700"></div>
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

export default TutorProfileLoggedIn;
