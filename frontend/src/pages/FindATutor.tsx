import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import TutorCardFindATutor from "components/TutorCardFindATutor";
import NavBar from "components/NavBar";
import TutorFilterSidebar from "components/TutorFilterSidebar";
import FindATutorWidget from "components/FindATutorWidget";

const FindATutor: React.FC = () => {
  return (
    <>
      <div className="main-div-gray">
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
          <FindATutorWidget />
        </div>
      </div>
    </>
  );
};

export default FindATutor;
