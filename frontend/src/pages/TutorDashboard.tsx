import React from "react";

import Sidebar from "components/Sidebar";

import { Button, Img, Text } from "components";

const TutorDashboard: React.FC = () => {
  return (
    <>
      <div className="relative flex w-full flex-row items-start justify-center gap-2.5 bg-white-A700 font-montserrat md:w-full md:flex-col sm:w-full sm:flex-col">
        <Sidebar />
        <div className="flex h-[200vh] w-full flex-1 flex-col items-start justify-start gap-2.5 p-[30px] md:px-5">
          <div className="flex w-full max-w-[1000px] flex-col items-center justify-start rounded-[10px] bg-white-A700">
            <div className="flex w-full flex-row items-start justify-start gap-2.5 rounded-[10px] md:flex-col">
              <div className="flex h-[118px] w-[120px] flex-col items-start justify-start md:h-auto">
                <Img
                  className="h-[118px] w-full rounded-[50%] md:h-auto"
                  src="images/img_36477397310160.png"
                  alt="36477397310160"
                />
              </div>
              <div className="flex w-full max-w-[870px] flex-1 flex-col items-start justify-start">
                <Text
                  className="w-[181px] text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
                  size="txtMontserratRomanBold32"
                >
                  Jason Hart
                </Text>
                <Text
                  className="text-xl leading-[24.00px] text-black-900"
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
          <div className="flex w-full flex-col items-start justify-start">
            <div className="flex h-[300px] w-full flex-col items-center justify-start gap-2.5 md:h-auto">
              <Text
                className="w-auto text-center text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
                size="txtMontserratRomanBold32"
              >
                My Students
              </Text>
              <div className="items-left flex h-full w-full flex-col justify-start gap-2.5 rounded-[10px] bg-blue_gray-100 px-5 py-[15px]">
                <div className="flex w-full flex-row items-center justify-between gap-2.5 sm:flex-col">
                  <div className="flex w-auto flex-row items-center justify-start gap-2.5">
                    <Img
                      className="h-[52px] w-[52px] rounded-[50%] md:h-auto"
                      src="images/img_studentimg.png"
                      alt="studentimg"
                    />
                    <Text
                      className="w-auto text-[25px] text-black-900 md:text-[23px] sm:text-[21px]"
                      size="txtMontserratRomanSemiBold25"
                    >
                      Student Full Name
                    </Text>
                  </div>
                  <div className="flex h-[53px] w-[53px] flex-col items-center justify-between md:h-auto">
                    <Img
                      className="h-[34px] w-[34px] object-cover md:h-auto"
                      src="images/img_expandarrow.png"
                      alt="expandarrow"
                    />
                  </div>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-start gap-[5px]">
                  <div className="flex w-full flex-row items-center justify-between gap-2.5">
                    <Text
                      className="w-[83px] text-xl text-black-900"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Subject:
                    </Text>
                    <Text
                      className="w-[58px] text-xl text-black-900"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Level:
                    </Text>
                    <Text
                      className="w-[131px] text-xl text-black-900"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Last Session:
                    </Text>
                    <Text
                      className="w-[70px] text-xl text-black-900"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Status:
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <Text
                      className="text-xl text-black-900"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Average Rating:
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <Text
                      className="w-[137px] text-xl text-black-900"
                      size="txtMontserratRomanSemiBold20"
                    >
                      Next Session:
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <Button
                      className="text-md min-w-[157px] cursor-pointer text-center font-medium leading-[normal]"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      Book Next Lesson
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorDashboard;
