import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[120px]"
          src="images/img_sidebarheader.svg"
          alt="sidebarheader"
        />
        <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
          <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            Dashboard
          </Text>
        </div>
        <div className="flex flex-row gap-3.5 items-center justify-start p-[15px] w-full">
          <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            Job Board
          </Text>
        </div>
        <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
          <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            Profile Settings
          </Text>
        </div>
        <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
          <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            Account Details
          </Text>
        </div>
        <div className="flex flex-row gap-[15px] items-center justify-start mt-[275px] p-[15px] w-full">
          <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            FAQs
          </Text>
        </div>
        <div className="flex flex-row gap-[15px] items-center justify-end p-[9px] w-full">
          <div className="bg-blue_gray-100 h-[60px] my-1.5 rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            Code of Conduct
          </Text>
        </div>
        <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
          <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratRomanBold32"
          >
            Logout
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
