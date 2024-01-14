import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import TutorCardFindATutor from "components/TutorCardFindATutor";
import NavBar from "components/NavBar";

const FindATutor: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-montserrat items-start justify-start">
        <NavBar className="bg-blue_gray-700 flex md:flex-col md:gap-2.5 items-center justify-between md:px-5 px-[60px] py-[27px] w-full" />
        <div className="flex flex-col items-start justify-start p-2.5 w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1421px] mx-auto md:px-5 py-6 w-auto">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
              size="txtMontserratRomanBold32"
            >
              Find A Tutor
            </Text>
            <div className="flex flex-col gap-2.5 items-center justify-start w-auto md:w-auto">
              <Text
                className="leading-[24.00px] text-black-900 text-center text-lg"
                size="txtMontserratRomanRegular18"
              >
                If you see a tutor that you think could be a good fit, click
                their box for their detailed profile page and to get in touch
                with them
              </Text>
              <Text
                className="leading-[24.00px] text-black-900 text-center text-lg"
                size="txtMontserratRomanRegular18"
              >
                Can’t seem to find the perfect tutor? Make a subject request and
                we will do our best to find one for you!
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[247px] text-center text-lg"
                shape="round"
                color="blue_gray_700"
                size="xs"
                variant="fill"
              >
                Make A Subject Request
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-2.5 items-start justify-center mx-auto md:px-5 w-[95%]">
            <div className="bg-white-A700 flex flex-col gap-[11px] items-start justify-center px-2.5 py-4 rounded-[10px] w-auto">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtMontserratRomanRegular18"
              >
                <span className="text-black-900 font-montserrat text-left font-normal">
                  Showing{" "}
                </span>
                <span className="text-blue-A700 font-montserrat text-left font-bold">
                  375
                </span>
                <span className="text-black-900 font-montserrat text-left font-normal">
                  {" "}
                  results of{" "}
                </span>
                <span className="text-blue-A700_01 font-montserrat text-left font-bold">
                  561
                </span>
                <span className="text-black-900 font-montserrat text-left font-normal">
                  {" "}
                  tutors
                </span>
              </Text>
             <form action="">
               
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Search
                  </Text>
                  <Input
                    name="tutorTextSearchFilterEntry"
                    placeholder="Search through tutor profiles...."
                    className="p-3 w-full"
                    wrapClassName="border border-gray-400_02 border-solid flex h-auto w-full"
                  ></Input>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-auto">
                  <div className="filter-category-title-div">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_training.png"
                        alt="training"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Subjects
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="flex flex-col h-auto gap-1
                   md:h-auto items-start justify-start py-2 w-full flex-wrap">
                        <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2 w-[325px]">
                          <input className="rounded" type="checkbox" name="" value="" ></input>
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
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_university.png"
                        alt="university"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Tutoring Level
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
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
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_star.png"
                        alt="star"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Tutor Rating
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <Img
                    className="h-[29px] w-full"
                    src="images/img_filterlistframe.svg"
                    alt="filterlistframe"
                  />
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_location.png"
                        alt="location"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Location
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
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
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_ok.png"
                        alt="ok"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Availability
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
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
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-[325px]">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_toilet.png"
                        alt="toilet"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Gender
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
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
             </form>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
              <div className="flex flex-col items-start justify-center w-[325px]">
                <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_knowledgesharing.png"
                      alt="knowledgesharin"
                    />
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Lesson Format
                    </Text>
                  </div>
                  <Button
                    className="reset-btn"
                  >
                    Reset
                  </Button>
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
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
              <div className="flex flex-col items-start justify-center w-[325px]">
                <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_cash.png"
                      alt="cash"
                    />
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutor Rate
                    </Text>
                  </div>
                  <Button
                    className="reset-btn"
                  >
                    Reset
                  </Button>
                </div>
                <Img
                  className="h-[29px] w-full"
                  src="images/img_filterlistframe.svg"
                  alt="filterlistframe_One"
                />
              </div>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
            </div>
            <div className="flex flex-col gap-[15px] h-[1208px] w-[66%] max-w-[1100px] md:h-auto items-center justify-start">
              <div className="flex flex-row bg-white-A700 rounded-[10px] text-left items-center w-full p-2 text-lg">
                <text className="w-auto font-medium">Filtering by:</text>
              {/*<Input
                name="filteredtutors"
                placeholder="Filtering by:"
                className="p-0 placeholder:text-black-900 text-center text-lg w-full"
                wrapClassName="w-full"
                size="sm"
  ></Input>*/}
              </div>
              <div className="gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full">
                  <div
                    className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                    style={{ backgroundImage: "url('images/img_frame13.png')" }}
                  >
                    <div className="flex flex-col items-start justify-start px-2 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold18WhiteA700"
                      >
                        Ryan Barr
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMontserratRomanRegular12"
                      >
                        Christchurch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter h-full items-start justify-center px-2 py-1 w-full">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500 w-auto"
                        size="txtInterRegular10"
                      >
                        XXXXX
                      </Text>
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Health | Biology
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      $35/hr
                    </Text>
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtInterRegular10Black900"
                    >
                      BSc in Sports Science
                    </Text>
                  </div>
                </div>
                <TutorCardFindATutor className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full" />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Naomi Ranger"
                />
                <div className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full">
                  <div
                    className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_frame13_2.png')",
                    }}
                  >
                    <div className="flex flex-col gap-[5px] items-start justify-start px-2 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold18WhiteA700"
                      >
                        Josh Lin
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMontserratRomanRegular12"
                      >
                        Christchurch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter h-full items-start justify-center px-2 py-1 w-full">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500 w-auto"
                        size="txtInterRegular10"
                      >
                        XXXXX
                      </Text>
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Health | Biology
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      $35/hr
                    </Text>
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtInterRegular10Black900"
                    >
                      BSc in Sports Science
                    </Text>
                  </div>
                </div>
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="John Nixon"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Angela Richards"
                />
                <div className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full">
                  <div
                    className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_frame13_5.png')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start px-2 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold18WhiteA700"
                      >
                        Angela Richards
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMontserratRomanRegular12"
                      >
                        Christchurch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter h-full items-start justify-center px-2 py-1 w-full">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500 w-auto"
                        size="txtInterRegular10"
                      >
                        XXXXX
                      </Text>
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Health | Biology
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      $35/hr
                    </Text>
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtInterRegular10Black900"
                    >
                      BSc in Sports Science
                    </Text>
                  </div>
                </div>
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Jason Hart"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Matt Coombs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindATutor;
