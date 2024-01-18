import React, { useState } from "react";

import { Button, Img, Input, Line, Text } from "components";
import NavBar from "components/NavBar";
import Sidebar from "components/Sidebar";
import TutorCard from "components/TutorCard";
import TutorFilterSidebar from "components/TutorFilterSidebar";

const FindATutor: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <>
      <div className={`flex w-full ${loggedIn?"flex-row":"flex-col"} items-start justify-between bg-gray-300 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5`}>
        {loggedIn ? <Sidebar /> : <NavBar />}
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

          <div className="relative flex w-full flex-row items-start justify-center gap-2.5 sm:flex-col">
            <TutorFilterSidebar />
            <div className="relative flex h-[1208px] w-[66%] max-w-[1100px] flex-col items-center justify-start gap-[15px] md:h-auto md:w-[75%] sm:w-full">
              <div className="sticky top-5 z-10 flex w-full flex-row items-center rounded-[10px] bg-white-A700 p-2 text-left text-lg">
                <text className="w-auto font-medium">Filtering by:</text>
              </div>
              <div className="gap-3 md:gap-5 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <TutorCard
                  tutorFirstName="Naomi"
                  tutorLastName="Ranger"
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
