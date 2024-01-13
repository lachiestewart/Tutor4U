import React from "react";

import { Img, List, Text } from "components";

const AdminLessonsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-teal-300 flex flex-col md:gap-10 gap-[338px] h-[1028px] md:h-auto items-start justify-between md:px-5 w-[380px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Img
              className="h-[120px] w-[380px]"
              src="images/img_sidebarheader_cyan_800.svg"
              alt="sidebarheader"
            />
            <div className="flex flex-col items-start justify-center w-full">
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-[15px] items-center justify-between p-[15px] w-full">
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                      size="txtMontserratRomanSemiBold28WhiteA700"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[47px]"
                    size="txtMontserratRomanBold32"
                  >
                    ##
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-[15px] items-center justify-between p-[15px] w-full">
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                      size="txtMontserratRomanSemiBold28WhiteA700"
                    >
                      Tutors
                    </Text>
                  </div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[47px]"
                    size="txtMontserratRomanBold32"
                  >
                    ##
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-[15px] items-center justify-between p-[15px] w-full">
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                      size="txtMontserratRomanSemiBold28WhiteA700"
                    >
                      Lessons
                    </Text>
                  </div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[47px]"
                    size="txtMontserratRomanBold32"
                  >
                    ##
                  </Text>
                </div>
              </List>
              <div className="flex flex-col items-center justify-between p-[15px] w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                    size="txtMontserratRomanSemiBold28WhiteA700"
                  >
                    Finance
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-between p-[15px] w-full">
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                    size="txtMontserratRomanSemiBold28WhiteA700"
                  >
                    Developments
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[47px]"
                  size="txtMontserratRomanBold32"
                >
                  ##
                </Text>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-2.5 items-start w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-center justify-between my-0 p-[15px] w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold28WhiteA700"
                >
                  Account
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-between my-0 p-[15px] w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                <div className="bg-blue_gray-100 h-[50px] rounded-[50%] w-[50px]"></div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold28WhiteA700"
                >
                  Logout
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1060px] p-[30px] md:px-5 w-full">
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
                    CEO
                    <br />
                    Christchurch, NZ
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
              size="txtMontserratRomanBold32Black900"
            >
              Lessons
            </Text>
            <List
              className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 sm:px-5 px-[88px] py-[13px] w-full"
              orientation="horizontal"
            >
              <div className="bg-blue_gray-100 flex flex-1 flex-col gap-2.5 items-center justify-center md:px-10 px-20 sm:px-5 py-[15px] rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-center text-xl w-auto"
                  size="txtMontserratRomanSemiBold20"
                >
                  Tutor Requests
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  ##
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-1 flex-col gap-2.5 items-center justify-center md:px-10 px-20 sm:px-5 py-[15px] rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-center text-xl w-auto"
                  size="txtMontserratRomanSemiBold20"
                >
                  Lessons Booked
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  ##
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-1 flex-col gap-2.5 items-center justify-center md:px-10 px-20 sm:px-5 py-[15px] rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-center text-xl w-auto"
                  size="txtMontserratRomanSemiBold20"
                >
                  Lessons Completed
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  ##
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-1 flex-col gap-2.5 items-center justify-center md:px-10 px-20 sm:px-5 py-[15px] rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-center text-xl w-auto"
                  size="txtMontserratRomanSemiBold20"
                >
                  Reviews
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  ##
                </Text>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-inter items-start justify-start w-full">
            <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start rounded-tl-[10px] rounded-tr-[10px] w-auto sm:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center rounded-tl-[10px] w-auto">
                <div className="bg-blue_gray-100 flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] rounded-tl-[10px] w-auto">
                  <Text
                    className="text-black-900 text-center text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Lesson Requests
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterRegular12"
                  >
                    ##
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center w-auto">
                <div className="bg-blue_gray-100 flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] w-auto">
                  <Text
                    className="text-black-900 text-center text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Upcoming Lessons
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterRegular12"
                  >
                    ##
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center w-auto">
                <div className="bg-blue_gray-100 flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] w-auto">
                  <Text
                    className="text-black-900 text-center text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Completed Lessons
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterRegular12"
                  >
                    ##
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center rounded-tr-[10px] w-auto">
                <div className="bg-blue_gray-100 flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] rounded-tr-[10px] w-auto">
                  <Text
                    className="text-black-900 text-center text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    Reviews
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterRegular12"
                  >
                    ##
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-100 h-[200px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-full"></div>
          </div>
          <div className="flex flex-col font-montserrat items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  Interviews Calendar
                </Text>
                <div className="bg-blue_gray-100 h-[368px] w-full"></div>
              </div>
              <div className="flex flex-1 flex-col h-[424px] md:h-auto items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  No. of Active Tutors
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

export default AdminLessonsPage;
