import React from "react";

import { Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
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
        <div className="bg-gray-300 flex flex-1 flex-row sm:gap-[46px] items-center justify-between p-2.5 rounded-[10px] w-full">
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
            Login created (Time Elapsed)
          </Text>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
