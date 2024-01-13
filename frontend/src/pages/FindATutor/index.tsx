import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const FindATutorPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-200 flex flex-col items-start justify-start max-w-[1440px] w-full">
          <div className="flex flex-col items-start justify-start p-2.5 w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1421px] mx-auto md:px-5 py-6 w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-[207px]"
                size="txtMontserratRomanBold32Black900"
              >
                Find A Tutor
              </Text>
              <div className="flex flex-col gap-2.5 items-center justify-start w-[66%] md:w-full">
                <Text
                  className="leading-[24.00px] text-black-900 text-center text-lg w-full"
                  size="txtMontserratRomanRegular18"
                >
                  If you see a tutor that you think could be a good fit, click
                  their box for their detailed profile page and to get in touch
                  with them
                </Text>
                <Text
                  className="leading-[24.00px] text-black-900 text-center text-lg w-full"
                  size="txtMontserratRomanRegular18"
                >
                  Can’t seem to find the perfect tutor? Make a subject request
                  and we will do our best to find one for you!
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[202px] text-center text-sm"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Make a Subject Request
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center max-w-[1421px] mx-auto md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col gap-[11px] items-start justify-center px-2.5 py-4 rounded-[10px] w-auto">
                <Text
                  className="text-black-900 text-lg w-[259px]"
                  size="txtMontserratRomanRegular18"
                >
                  <span className="text-black-900 font-montserrat text-left font-normal">
                    Showing{" "}
                  </span>
                  <span className="text-blue-A700 font-montserrat text-left font-bold">
                    4
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-normal">
                    {" "}
                    results of{" "}
                  </span>
                  <span className="text-blue-A700_01 font-montserrat text-left font-bold">
                    4
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-normal">
                    {" "}
                    tutors
                  </span>
                </Text>
                <div className="flex flex-col items-start justify-start w-[325px]">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Search
                  </Text>
                  <Input
                    name="emailtextentry"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-400_01 border-solid flex h-[50px] w-full"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2.5 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Subjects
                    </Text>
                    <Text
                      className="ml-[174px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        English
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        History
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Mathematics
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutoring Level
                    </Text>
                    <Text
                      className="ml-[123px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        NCEA L1
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        NCEA L2
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        NCEA L3
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutor Rating
                    </Text>
                    <Text
                      className="ml-[140px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <Img
                    className="h-[29px] w-full"
                    src="images/img_filterlistframe.svg"
                    alt="filterlistframe"
                  />
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2.5 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Location
                    </Text>
                    <Text
                      className="ml-[173px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Auckland
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Wellington
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Christchurch
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-[9px] text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Availability
                    </Text>
                    <Text
                      className="ml-[152px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Available
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Limited Availability
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Not Available
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2.5 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Gender
                    </Text>
                    <Text
                      className="ml-[185px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Male
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Female
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Non-Binary
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2.5 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Lesson Format
                    </Text>
                    <Text
                      className="ml-[116px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Online
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Face to face
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <div className="bg-blue_gray-100 h-3 w-3"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Flexible
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row items-center justify-start py-[7px] w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[25px] items-center justify-center rounded-[12px] text-[5px] text-black-900 text-center w-[25px]"
                      size="txtMontserratRomanSemiBold5"
                    >
                      ICON
                    </Text>
                    <Text
                      className="ml-2.5 text-black-900 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutor Rate
                    </Text>
                    <Text
                      className="ml-[157px] text-indigo-A400 text-right text-xs"
                      size="txtMontserratRomanMedium12"
                    >
                      Reset
                    </Text>
                  </div>
                  <Img
                    className="h-[29px] w-full"
                    src="images/img_filterlistframe.svg"
                    alt="filterlistframe_One"
                  />
                </div>
                <Line className="bg-blue_gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[15px] h-[1208px] md:h-auto items-center justify-start">
                <Input
                  name="filteredtutors"
                  placeholder="Filtering by:"
                  className="p-0 placeholder:text-black-900 text-center text-lg w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
                <List
                  className="sm:flex-col flex-row md:gap-[5px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[1144px] justify-between max-w-[685px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-[220px]">
                    <div
                      className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_frame13.png')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-center p-[5px]">
                        <Text
                          className="mt-[33px] text-lg text-white-A700"
                          size="txtMontserratRomanSemiBold18WhiteA700"
                        >
                          Jason Hart
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtMontserratRomanRegular12"
                        >
                          Christchurch
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-inter justify-start p-[7px] w-[98%] md:w-full">
                      <Text
                        className="h-[13px] md:ml-[0] ml-[78px] text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                      <div className="flex flex-col items-start justify-start mb-3.5 mr-[95px] mt-0.5">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtInterRegular12"
                        >
                          Health | Biology
                        </Text>
                        <Text
                          className="text-black-900 text-xs"
                          size="txtInterRegular12"
                        >
                          $35/hr
                        </Text>
                        <Text
                          className="mt-1 text-[10px] text-black-900"
                          size="txtInterRegular10Black900"
                        >
                          BSc in Sports Science
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-[220px]">
                    <div
                      className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_frame13.png')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-center p-[5px]">
                        <Text
                          className="mt-[33px] text-lg text-white-A700"
                          size="txtMontserratRomanSemiBold18WhiteA700"
                        >
                          Jason Hart
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtMontserratRomanRegular12"
                        >
                          Christchurch
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-inter items-start justify-center p-2">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12"
                      >
                        Health | Biology
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12"
                      >
                        $35/hr
                      </Text>
                      <Text
                        className="mb-7 mt-1 text-[10px] text-black-900"
                        size="txtInterRegular10Black900"
                      >
                        BSc in Sports Science
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-[220px]">
                    <div
                      className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_frame13.png')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-center p-[5px]">
                        <Text
                          className="mt-[33px] text-lg text-white-A700"
                          size="txtMontserratRomanSemiBold18WhiteA700"
                        >
                          Jason Hart
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtMontserratRomanRegular12"
                        >
                          Christchurch
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-inter items-start justify-center p-2">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12"
                      >
                        Health | Biology
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12"
                      >
                        $35/hr
                      </Text>
                      <Text
                        className="mb-7 mt-1 text-[10px] text-black-900"
                        size="txtInterRegular10Black900"
                      >
                        BSc in Sports Science
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindATutorPage;
