import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import TutorCardFindATutor from "components/TutorCardFindATutor";
import NavBar from "components/NavBar";

const FindATutor: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-montserrat items-start justify-start">
        <NavBar className="bg-blue_gray-700 flex md:flex-col md:gap-2.5 items-center justify-between md:px-5 px-[60px] py-[27px] w-full" />
        <div className="flex flex-col items-center justify-start p-2.5 w-[90%] sm:w-full mx-auto">
          <div className="flex flex-col gap-2.5 items-center justify-center max-w-[100%] md:px-5 py-6 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
              size="txtMontserratRomanBold32"
            >
              Find A Tutor
            </Text>
            <div className="flex flex-col gap-2.5 items-center justify-start w-auto md:w-auto">
              <Text
                className="leading-[24.00px] text-black-900 text-center text-lg"
              >
                If you see a tutor that you think could be a good fit, click
                their box for their detailed profile page and to get in touch
                with them
              </Text>
              <Text
                className="leading-[24.00px] text-black-900 text-center text-lg"
              >
                Can’t seem to find the perfect tutor? Make a subject request and
                we will do our best to find one for you!
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[247px] text-center text-lg"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Make A Subject Request
              </Button>
            </div>
          </div>
          <div className="flex relative flex-row gap-2.5 items-start justify-center w-full sm:flex-col">
            <div className="sticky top-5 z-10 bg-white-A700 flex flex-col gap-[10px] min-w-[250px] items-start justify-center px-2.5 py-4 rounded-[10px] sm:w-full w-[25%]">
              <Text
                className="text-black-900 text-lg w-auto"
              >
                <span className=" text-black-900 text-left">
                  Showing{" "}
                </span>
                <span className="text-blue-A700 text-left font-bold">
                  375
                </span>
                <span className="text-black-900 text-left">
                  {" "}
                  results of{" "}
                </span>
                <span className="text-blue-A700_01 text-left font-bold">
                  561
                </span>
                <span className="text-black-900 text-left">
                  {" "}
                  tutors
                </span>
              </Text>
             <form action="" className="w-full">
               
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-start text-lg w-full font-semibold"
                  >
                    Search
                  </Text>
                  <Input
                    name="tutorTextSearchFilterEntry"
                    placeholder="Search through tutors...."
                    className="p-3 w-full"
                    wrapClassName="border border-gray-400_02 border-solid flex h-auto w-full"
                  ></Input>
                  <div className="py-4 hidden sm:block"><text>Advance search</text></div>
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
                        className="filter-category-title-text"
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
                  <div className="flex flex-col gap-1
                   items-start justify-start p-2 w-full flex-wrap overflow-y-scroll ">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <input className="rounded" type="checkbox" name="" value="" ></input>
                          <Text
                        className="filter-items-text"
                      >
                        English
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                        </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="filter-category-title-div">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_university.png"
                        alt="university"
                      />
                      <Text
                        className="filter-category-title-text"
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
                  <div className="flex flex-col h-auto gap-1
                   md:h-auto items-start justify-start py-2 w-full flex-wrap">
                        <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2 w-[325px]">
                          <input className="rounded" type="checkbox" name="" value="" ></input>
                          <Text
                        className="filter-items-text"
                      >
                        NCEA L1
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                        </div>
                  </div>
                  
                    
                  
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_star.png"
                        alt="star"
                      />
                      <Text
                        className="filter-category-title-text"
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
                    className="h-auto w-full"
                    src="images/img_filterlistframe.svg"
                    alt="filterlistframe"
                  />
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_location.png"
                        alt="location"
                      />
                      <Text
                        className="filter-category-title-text"
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
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Auckland
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Wellington
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Christchurch
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_ok.png"
                        alt="ok"
                      />
                      <Text
                        className="filter-category-title-text"
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
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Available
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Limited Availability
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Not Available
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_toilet.png"
                        alt="toilet"
                      />
                      <Text
                        className="filter-category-title-text"
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
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Male
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Female
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Non-Binary
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
             </form>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_knowledgesharing.png"
                      alt="knowledgesharin"
                    />
                    <Text
                      className="filter-category-title-text"
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
                     
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                    <Text
                      className="filter-items-text"
                    >
                      Online
                    </Text>
                    <Text
                      className="filter-items-numbers-text"
                    >
                      ##
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                     
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                    <Text
                      className="filter-items-text"
                    >
                      Face to face
                    </Text>
                    <Text
                      className="filter-items-numbers-text"
                    >
                      ##
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                     
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                    <Text
                      className="filter-items-text"
                    >
                      Flexible
                    </Text>
                    <Text
                      className="filter-items-numbers-text"
                    >
                      ##
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
              <div className="flex flex-col items-start justify-center w-full">
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
                  className="h-auto w-full"
                  src="images/img_filterlistframe.svg"
                  alt="filterlistframe_One"
                />
              </div>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
            </div>
            <div className="flex relative flex-col gap-[15px] h-[1208px] w-[66%] md:w-[75%] sm:w-full max-w-[1100px] md:h-auto items-center justify-start">
              <div className="flex flex-row sticky top-5 z-10 bg-white-A700 rounded-[10px] text-left items-center w-full p-2 text-lg">
                <text className="w-auto font-medium">Filtering by:</text>
              {/*<Input
                name="filteredtutors"
                placeholder="Filtering by:"
                className="p-0 placeholder:text-black-900 text-center text-lg w-full"
                wrapClassName="w-full"
                size="sm"
  ></Input>*/}
              </div>
              <div className="gap-3 md:gap-5 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
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
                  className="bg-white-A700 flex flex-1 flex-col md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Jason Hart"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[10px] w-full"
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
