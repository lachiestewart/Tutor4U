import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const TutorDashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[380px] bg-blue_gray-700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <Img
            className="h-[120px]"
            src="images/img_sidebarheader_blue_gray_900.svg"
            alt="sidebarheader"
          />
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Job Board
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Profile Settings
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Account Details
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[275px] p-[15px] w-full">
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
        </Sidebar>
        <div className="flex flex-1 flex-col gap-2.5 items-center justify-start max-w-[1060px] p-[30px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1000px] rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start rounded-[10px] w-full">
              <div className="flex flex-col h-[118px] md:h-auto items-start justify-start w-[120px]">
                <Img
                  className="h-[118px] md:h-auto rounded-[50%] w-full"
                  src="images/img_36477397310160.png"
                  alt="36477397310160"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start max-w-[870px] w-full">
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
                    Academic Tutor - Science, Mathematics
                    <br />
                    Wellington, NZ
                    <br />
                    Tutor Rating: X X X X
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 h-[300px] md:h-auto items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtMontserratRomanBold32Black900"
              >
                My Students
              </Text>
              <div className="bg-blue_gray-100 flex flex-col gap-2.5 h-full items-center justify-start px-5 py-[15px] rounded-[10px] w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                      src="images/img_studentimg.png"
                      alt="studentimg"
                    />
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                      size="txtMontserratRomanSemiBold25"
                    >
                      Student Full Name
                    </Text>
                  </div>
                  <div className="flex flex-col h-[53px] md:h-auto items-center justify-between w-[53px]">
                    <Img
                      className="h-[34px] md:h-auto object-cover w-[34px]"
                      src="images/img_expandarrow.png"
                      alt="expandarrow"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] h-full items-center justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl w-[83px]"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Subject:
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-[58px]"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Level:
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-[131px]"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Last Session:
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-[70px]"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Status:
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-[157px]"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Average Rating
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-[137px]"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Next Session:
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[194px] text-center text-sm"
                      shape="round"
                      color="blue_gray_700"
                      size="xs"
                      variant="fill"
                    >
                      Student Lesson Details
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[229px] text-center text-sm"
                      shape="round"
                      color="blue_gray_700"
                      size="xs"
                      variant="fill"
                    >
                      Request Lesson Testimonial
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[157px] text-center text-sm"
                      shape="round"
                      color="blue_gray_700"
                      size="xs"
                      variant="fill"
                    >
                      Book Next Lesson
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between w-full">
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanBold32Black900"
                >
                  My Calendar
                </Text>
                <div className="bg-blue_gray-100 h-[368px] w-full"></div>
              </div>
              <div className="flex flex-1 flex-col h-[424px] md:h-auto items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanBold32Black900"
                >
                  My Income
                </Text>
                <div className="bg-blue_gray-100 h-[368px] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorDashboardPage;
