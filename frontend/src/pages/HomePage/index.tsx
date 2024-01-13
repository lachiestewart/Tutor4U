import React from "react";

import { Button, Img, Text } from "components";

const HomePagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-blue_gray-700 flex md:flex-col md:gap-2.5 items-center justify-between md:px-5 px-[60px] py-[27px] w-full">
          <Img
            className="sm:flex-1 h-14 md:h-auto object-cover w-[222px] sm:w-full"
            src="images/img_union1.png"
            alt="unionOne"
          />
          <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start px-2.5 w-auto md:w-full">
              <div className="flex flex-col items-center justify-start py-[3px] w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtMontserratRomanMedium20"
                >
                  HOME
                </Text>
              </div>
              <div className="flex flex-row gap-[5px] items-center justify-start py-[3px] w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtMontserratRomanMedium20"
                >
                  FOR STUDENTS
                </Text>
                <Img
                  className="h-5 md:h-auto object-cover w-5"
                  src="images/img_chevrondown.png"
                  alt="chevrondown"
                />
              </div>
              <div className="flex flex-row gap-[5px] items-center justify-start py-[3px] w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtMontserratRomanMedium20"
                >
                  FOR TUTORS
                </Text>
                <Img
                  className="h-5 md:h-auto object-cover w-5"
                  src="images/img_chevrondown.png"
                  alt="chevrondown_One"
                />
              </div>
              <div className="flex flex-col items-center justify-start py-[3px] w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtMontserratRomanMedium20"
                >
                  ABOUT
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start py-[3px] w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtMontserratRomanMedium20"
                >
                  CONTACT
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[194px] text-center text-xl"
              shape="round"
              color="gray_400"
              size="sm"
              variant="fill"
            >
              TUTOR SIGN-UP
            </Button>
          </div>
        </header>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-between md:px-10 sm:px-5 px-[60px] py-[15px] w-full">
          <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start py-[47px] w-auto sm:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
              size="txtMontserratRomanBold36"
            >
              Your Top Tutor Marketplace
            </Text>
            <Text
              className="leading-[22.00px] max-w-[522px] md:max-w-full text-black-900 text-lg"
              size="txtMontserratRomanSemiBold18"
            >
              We connect amazing tutors with motivated students in every subject
              at all levels right across NZ
            </Text>
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <Button
                className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[132px] text-center text-sm"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Browse Tutors
              </Button>
              <Button
                className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[162px] text-center text-sm"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Register as a Tutor
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col h-[595px] md:h-auto items-start justify-end max-w-[637px] w-full">
            <Text
              className="leading-[36.00px] max-w-[463px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
              size="txtMontserratRomanSemiBold28"
            >
              SPLINE FIND A TUTOR DASHBOARD GRAPHIC
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
