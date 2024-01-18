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
        <NavBar />
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-4 p-2.5 py-6 md:px-5 sm:w-full">
          <div className="mb-4 flex w-auto flex-col items-center justify-start gap-4 md:w-auto">
            <Text
              className="text-center text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
              size="txtMontserratRomanBold32"
            >
              Find A Tutor
            </Text>

            <Text className="text-center text-lg leading-[24.00px] text-black-900">
              If you see a tutor that you think could be a good fit, click their
              box for their detailed profile page and to get in touch with them.{" "}
              <br />
              <br />
              Can’t seem to find the perfect tutor? Make a subject request and
              we will do our best to find one for you!
            </Text>
            <Button
              className="min-w-[247px] cursor-pointer bg-purple-primary text-center text-lg font-semibold leading-[normal]"
              shape="round"
              color="blue_gray_700"
              size="sm"
              variant="fill"
            >
              Make A Subject Request
            </Button>
          </div>

          <FindATutorWidget />
        </div>
      </div>
    </>
  );
};

export default FindATutor;
