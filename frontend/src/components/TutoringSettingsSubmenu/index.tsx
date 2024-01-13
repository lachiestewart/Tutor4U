import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

type TutoringSettingsSubmenuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tutoringtext"
  | "savebutton"
  | "yoursubjectstext"
  | "yoursubjectsinfotext"
  | "mathunionebutton"
  | "englishnceaonebutton"
  | "subjectlabel"
  | "levellabel"
  | "addbutton"
  | "hourlyratelabel"
  | "locationlabel"
  | "availablelabel"
> &
  Partial<{
    tutoringtext: string;
    savebutton: string;
    yoursubjectstext: string;
    yoursubjectsinfotext: string;
    mathunionebutton: string;
    englishnceaonebutton: string;
    subjectlabel: string;
    levellabel: string;
    addbutton: string;
    hourlyratelabel: string;
    locationlabel: string;
    availablelabel: string;
  }>;

const TutoringSettingsSubmenu: React.FC<TutoringSettingsSubmenuProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtMontserratRomanBold36"
              >
                {props?.tutoringtext}
              </Text>
              <Line className="bg-blue-A200 h-2.5 w-full" />
            </div>
            <Button
              className="cursor-pointer font-black font-montserrat leading-[normal] mb-4 min-w-[100px] text-center text-lg"
              shape="round"
              color="blue_A200"
              size="md"
              variant="fill"
            >
              {props?.savebutton}
            </Button>
          </div>
          <Text
            className="mt-6 text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.yoursubjectstext}
          </Text>
          <Text
            className="leading-[24.00px] mt-1 text-black-900 text-lg w-full"
            size="txtMontserratRomanRegular18"
          >
            {props?.yoursubjectsinfotext}
          </Text>
          <div className="bg-white-A700 flex flex-row items-start justify-start mt-[13px] p-[5px] rounded-[10px] w-full">
            <Button
              className="!text-black-900 cursor-pointer font-montserrat font-semibold mb-[50px] min-w-[129px] text-center text-lg"
              shape="round"
              color="blue_100"
              size="sm"
              variant="fill"
            >
              {props?.mathunionebutton}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-montserrat font-semibold mb-[50px] min-w-[171px] ml-[5px] text-center text-lg"
              shape="round"
              color="blue_100"
              size="sm"
              variant="fill"
            >
              {props?.englishnceaonebutton}
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between mt-2.5 w-full">
            <List
              className="sm:flex-col flex-row gap-[25px] grid grid-cols-2"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-row items-center justify-between sm:ml-[0] p-[11px] rounded-[10px] w-full">
                <Text
                  className="ml-1 mt-[5px] text-black-900 text-center text-lg"
                  size="txtMontserratRomanSemiBold18"
                >
                  {props?.subjectlabel}
                </Text>
                <Img
                  className="h-px mr-[7px]"
                  src="images/img_dropdownarrow.svg"
                  alt="dropdownarrow"
                />
              </div>
              <div className="bg-white-A700 flex flex-row items-center justify-between sm:ml-[0] p-[13px] rounded-[10px] w-full">
                <Text
                  className="ml-[9px] text-black-900 text-center text-lg"
                  size="txtMontserratRomanSemiBold18"
                >
                  {props?.levellabel}
                </Text>
                <Img
                  className="h-px mr-[5px]"
                  src="images/img_dropdownarrow.svg"
                  alt="dropdownarrow"
                />
              </div>
            </List>
            <Button
              className="cursor-pointer font-black font-montserrat leading-[normal] min-w-[100px] text-center text-lg"
              shape="round"
              color="blue_A200"
              size="md"
              variant="fill"
            >
              {props?.addbutton}
            </Button>
          </div>
          <Text
            className="mt-[21px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.hourlyratelabel}
          </Text>
          <Input
            name="hourlyratetext"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 mt-1.5 rounded-[5px] w-full"
            color="white_A700"
            variant="fill"
          ></Input>
          <Text
            className="mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.locationlabel}
          </Text>
          <Input
            name="locationtextent"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 mt-2 rounded-[5px] w-full"
            color="white_A700"
            variant="fill"
          ></Input>
          <Text
            className="mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.availablelabel}
          </Text>
          <div className="flex h-10 md:h-12 justify-end mt-2 relative w-full">
            <Img
              className="h-px mb-[13px] ml-auto mr-[22px] mt-auto"
              src="images/img_dropdownarrow.svg"
              alt="dropdownarrow"
            />
            <Input
              name="availabletexten"
              placeholder=""
              className="justify-center p-0 w-full"
              wrapClassName="absolute flex h-10 inset-[0] m-auto rounded-[5px] w-full"
              color="white_A700"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

TutoringSettingsSubmenu.defaultProps = {
  tutoringtext: "Tutoring",
  savebutton: "Save",
  yoursubjectstext: "Your Subjects",
  yoursubjectsinfotext:
    "Add below, subjects which you wish to tutor, please note only approved subjects will appear",
  mathunionebutton: "Math - Uni 1",
  englishnceaonebutton: "English - NCEA 1",
  subjectlabel: "Subject",
  levellabel: "Level",
  addbutton: "Add",
  hourlyratelabel: "Hourly Rate",
  locationlabel: "Location",
  availablelabel: "Available",
};

export default TutoringSettingsSubmenu;
