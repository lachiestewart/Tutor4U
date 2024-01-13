import React from "react";

import { Img, Input, Text } from "components";

const StudentLessonRequestPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-indigo-A400 flex flex-col items-center justify-start md:px-5 w-[27%] md:w-full">
          <Img
            className="h-[120px]"
            src="images/img_sidebarheader.svg"
            alt="sidebarheader"
          />
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Find A Tutor
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-end p-2 w-full">
            <div className="bg-blue_gray-100 h-[60px] my-[7px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Lesson Requests
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Profile Settings
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Account Details
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[185px] p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              FAQs
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-end p-[9px] w-full">
            <div className="bg-blue_gray-100 h-[60px] my-1.5 rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Code of Conduct
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Logout
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 h-[1151px] md:h-auto items-center justify-start max-w-[1060px] p-[30px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1000px] rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start rounded-[10px] w-full">
              <div className="flex flex-col h-[118px] md:h-auto items-start justify-start w-[120px]">
                <Img
                  className="h-[118px] md:h-auto rounded-[50%] w-full"
                  src="images/img_36477397310160.png"
                  alt="36477397310160"
                />
              </div>
              <div className="flex flex-1 flex-col h-[118px] md:h-auto items-start justify-center max-w-[870px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[181px]"
                  size="txtMontserratRomanBold32Black900"
                >
                  Jason Hart
                </Text>
                <Text
                  className="leading-[24.00px] text-black-900 text-xl"
                  size="txtMontserratRomanRegular20"
                >
                  <>
                    Student - NCEA Level 2<br />
                    Wellington, NZ
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtMontserratRomanBold32Black900"
              >
                Request a Lesson
              </Text>
              <Text
                className="leading-[24.00px] text-black-900 text-lg"
                size="txtMontserratRomanRegular18"
              >
                <>
                  We want to help everyone receive the tutoring they need!
                  <br />
                  <br />
                  If you&#39;re unable to find a tutor that suits your needs,
                  fill out the form below and we will do our best to find one
                  for you.
                  <br />
                  <br />
                  Please note, when you complete a lesson request, it gets
                  displayed on our tutor job board to those who are qualified to
                  teach the subject. Those tutors are then able to get in touch
                  with you through our platform so that you have the best chance
                  of getting a tutor efficiently.{" "}
                </>
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray-100 flex flex-col gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
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
                  shape="round"
                  color="white_A700"
                  variant="fill"
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
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Email Address
                </Text>
                <Input
                  name="emailtextentry_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-[50px] w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Subject Level
                </Text>
                <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Subject
                </Text>
                <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Specifically, I need help with....
                </Text>
                <div className="bg-white-A700 h-[95px] rounded-[10px] w-full"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="max-w-[480px] md:max-w-full text-black-900 text-lg"
                  size="txtMontserratRomanSemiBold18"
                >
                  Roughly, how many tutoring sessions would you like?
                </Text>
                <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  How frequently would you like to have tutoring?
                </Text>
                <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtMontserratRomanSemiBold18"
              >
                I’m willing to pay...
              </Text>
              <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
            </div>
            <Text
              className="bg-blue_gray-700 justify-center pt-1.5 px-[15px] text-center text-sm text-white-A700 w-auto"
              size="txtMontserratRomanMedium14"
            >
              Submit
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLessonRequestPage;
