import React from "react";

import { Button, Text } from "components";
import Header from "components/Header";

const TabDivSuggestedTutorsPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 rounded-tl-[10px] rounded-tr-[10px] w-auto md:w-full">
          <div className="flex flex-col items-start justify-center rounded-tl-[10px] w-auto">
            <div className="flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] rounded-tl-[10px] w-auto">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Lesson Requests
              </Text>
              <Text
                className="text-black-900 text-center text-xs"
                size="txtInterRegular12"
              >
                ##
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-auto">
            <div className="bg-gray-400_02 flex flex-row gap-[21px] items-start justify-start px-2.5 py-[7px] w-auto">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Suggested Tutors For Lesson Requests
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
                Upcoming Lessons
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
                Completed Lessons
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
                Reviews
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
          <Header className="bg-gray-400_02 flex md:flex-col gap-2.5 items-center justify-center p-2.5 md:px-5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-full" />
        </div>
      </div>
    </>
  );
};

export default TabDivSuggestedTutorsPage;
