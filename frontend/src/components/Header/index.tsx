import React from "react";

import { Button, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-1 sm:flex-col flex-row gap-3.5 items-center justify-start w-full">
          <Text
            className="text-black-900 text-center text-xs w-auto"
            size="txtInterRegular12"
          >
            Search
          </Text>
          <div className="bg-white-A700 h-[26px] rounded-[10px] w-[95%]"></div>
        </div>
        <div className="bg-gray-300 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
          <div className="flex flex-row sm:gap-10 items-center justify-between py-2 w-full">
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterRegular12"
            >
              Full Name
            </Text>
            <Text
              className="text-black-900 text-center text-xs w-auto"
              size="txtInterRegular12"
            >
              Email
            </Text>
            <Text
              className="text-black-900 text-center text-xs w-auto"
              size="txtInterRegular12"
            >
              Lesson Request Created (Time Elapsed)
            </Text>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                [Subject Level] [Subject]
              </Text>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Tutoring Sessions Requested: XX
              </Text>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Lesson Frequency: XX
              </Text>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterRegular12"
              >
                Rate ($/hr): XX
              </Text>
            </div>
            <Text
              className="text-black-900 text-center text-xs w-auto"
              size="txtInterRegular12"
            >
              Specific Help Needed....
            </Text>
            <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
              <Button
                className="cursor-pointer font-medium font-montserrat leading-[normal] min-w-[112px] text-center text-xs"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Email Student
              </Button>
              <Button
                className="cursor-pointer font-medium font-montserrat leading-[normal] min-w-[111px] text-center text-xs"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Suggest Tutor
              </Button>
              <Button
                className="cursor-pointer font-medium font-montserrat leading-[normal] min-w-[165px] text-center text-xs"
                shape="round"
                color="red_900"
                size="sm"
                variant="fill"
              >
                Cancel Lesson Request
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
