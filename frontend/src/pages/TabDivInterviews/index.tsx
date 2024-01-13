import React from "react";

import { Button, Img, Text } from "components";

const TabDivInterviewsPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-400_02 flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 rounded-tl-[10px] rounded-tr-[10px] w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-center rounded-tl-[10px] w-auto">
            <div className="bg-blue_gray-100 flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] rounded-tl-[10px] w-auto">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Login Created
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
            <div className="flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] w-auto">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Applications
              </Text>
              <Text
                className="text-black-900 text-center text-xs"
                size="txtInterRegular12"
              >
                ##
              </Text>
            </div>
          </div>
          <div className="bg-gray-400_02 flex flex-col items-start justify-center w-auto">
            <div className="flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] w-auto">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Interviews
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
                Code of Conduct
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
                Active Tutors
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
                Inactive Tutors
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
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-400_02 flex flex-col items-center justify-start p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start max-w-[980px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xs w-auto"
                  size="txtInterRegular12"
                >
                  Search
                </Text>
                <div className="bg-white-A700 h-[26px] rounded-[10px] w-[95%]"></div>
              </div>
              <div className="bg-gray-300 flex flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-11 items-center justify-between py-2 w-full">
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Full Name
                    </Text>
                    <div className="flex flex-row gap-[15px] items-start justify-end w-auto">
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtInterRegular12"
                      >
                        Application Completed Date (Time Elapsed)
                      </Text>
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_expandarrow.png"
                        alt="expandarrow"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                    <Img
                      className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                      src="images/img_36477397310160_120x120.png"
                      alt="36477397310160"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 h-full items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Name: First & Last Name
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Gender: M/F/NB
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Age: ##
                        </Text>
                        <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[150px] text-center text-xs"
                            shape="round"
                            color="blue_gray_700"
                            size="sm"
                            variant="fill"
                          >
                            Academic Transcript
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[75px] text-center text-xs"
                            shape="round"
                            color="blue_gray_700"
                            size="sm"
                            variant="fill"
                          >
                            Resume
                          </Button>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Email: jasonhartnz@gmail.com
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Number: 027 123 456
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Location: Christchurch, NZ
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Top Tutoring Level: NCEA Lvl 3
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Subjects: English
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Specific Courses: BIOSCI107
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Lesson Format: [Online/ In-person/ Flexible]
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          Rate ($/hr): 27
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtMontserratRomanMedium12Black900"
                        >
                          <>
                            About:...................
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            ...................................
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[83px] text-center text-xs"
                          shape="round"
                          color="light_green_900"
                          size="sm"
                          variant="fill"
                        >
                          Accepted
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[136px] text-center text-xs"
                          shape="round"
                          color="red_900"
                          size="sm"
                          variant="fill"
                        >
                          Reject Application
                        </Button>
                      </div>
                    </div>
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

export default TabDivInterviewsPage;
