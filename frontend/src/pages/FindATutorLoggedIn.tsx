import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import TutorCardFindATutor from "components/TutorCardFindATutor";
import Sidebar from "components/Sidebar";
import FindATutorWidget from "components/FindATutorWidget";

const FindATutorLoggedIn: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar />
        <div className="flex flex-col items-start justify-start p-2.5 md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start px-2.5 py-6 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-[207px]"
              size="txtMontserratRomanBold32"
            >
              Find A Tutor
            </Text>
            <div className="flex flex-col gap-2.5 items-center justify-start w-[91%] md:w-full">
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
          <FindATutorWidget />
        </div>
      </div>
    </>
  );
};

export default FindATutorLoggedIn;
