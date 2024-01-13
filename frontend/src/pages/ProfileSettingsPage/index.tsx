import React from "react";

import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ProfileSettingsPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[380px] bg-blue_gray-700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-start p-[30px] md:px-5 w-full">
          <div className="bg-blue_gray-100 flex flex-col items-start justify-start rounded-[10px] w-full">
            <div className="border-r-[5px] border-solid border-white-A700 flex flex-col items-center justify-start py-[65px] w-1/4 md:w-full">
              <div className="flex flex-col gap-2 items-center justify-end p-3 w-full">
                <Text
                  className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtMontserratRomanBold32Black900"
                >
                  Profile
                </Text>
                <Line className="bg-blue-A200 h-[5px] w-[67%]" />
              </div>
              <div className="flex flex-col items-center justify-end p-[23px] sm:px-5 w-full">
                <Text
                  className="mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                  size="txtMontserratRomanBold32Bluegray400"
                >
                  History
                </Text>
              </div>
              <div className="flex flex-col items-center justify-end mb-[564px] p-[23px] sm:px-5 w-full">
                <Text
                  className="mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                  size="txtMontserratRomanBold32Bluegray400"
                >
                  Subjects
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettingsPagePage;
