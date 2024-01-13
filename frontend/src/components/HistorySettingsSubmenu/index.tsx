import React from "react";

import { Button, Input, Line, Text } from "components";

type HistorySettingsSubmenuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "historytext"
  | "savebutton"
  | "highschooltext"
  | "universitytext"
  | "qualificationtext"
  | "cvtext"
  | "transcripttext"
  | "uploadbutton1"
  | "uploadbutton2"
> &
  Partial<{
    historytext: string;
    savebutton: string;
    highschooltext: string;
    universitytext: string;
    qualificationtext: string;
    cvtext: string;
    transcripttext: string;
    uploadbutton1: string;
    uploadbutton2: string;
  }>;

const HistorySettingsSubmenu: React.FC<HistorySettingsSubmenuProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtMontserratRomanBold36"
            >
              {props?.historytext}
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
          className="mt-5 text-black-900 text-center text-lg"
          size="txtMontserratRomanSemiBold18"
        >
          {props?.highschooltext}
        </Text>
        <Input
          name="highschooltext"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="flex h-10 mt-[7px] rounded-[5px] w-full"
          color="white_A700"
          variant="fill"
        ></Input>
        <Text
          className="mt-5 text-black-900 text-center text-lg"
          size="txtMontserratRomanSemiBold18"
        >
          {props?.universitytext}
        </Text>
        <Input
          name="universitytext"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="flex h-10 mt-[7px] rounded-[5px] w-full"
          color="white_A700"
          variant="fill"
        ></Input>
        <Text
          className="mt-5 text-black-900 text-center text-lg"
          size="txtMontserratRomanSemiBold18"
        >
          {props?.qualificationtext}
        </Text>
        <Input
          name="qualificationte"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="flex h-10 mt-[7px] rounded-[5px] w-full"
          color="white_A700"
          variant="fill"
        ></Input>
        <div className="flex flex-row gap-[100px] items-start justify-end md:ml-[0] ml-[106px] mt-6 w-[71%] md:w-full">
          <Text
            className="text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.cvtext}
          </Text>
          <Text
            className="text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.transcripttext}
          </Text>
        </div>
        <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[30px] mt-[5px] w-[87%] md:w-full">
          <Button
            className="cursor-pointer font-black font-montserrat leading-[normal] min-w-[180px] text-center text-lg"
            shape="round"
            color="blue_A200"
            size="md"
            variant="fill"
          >
            {props?.uploadbutton1}
          </Button>
          <Button
            className="cursor-pointer font-black font-montserrat leading-[normal] min-w-[180px] text-center text-lg"
            shape="round"
            color="blue_A200"
            size="md"
            variant="fill"
          >
            {props?.uploadbutton2}
          </Button>
        </div>
      </div>
    </>
  );
};

HistorySettingsSubmenu.defaultProps = {
  historytext: "History",
  savebutton: "Save",
  highschooltext: "High School",
  universitytext: "University (if attended)",
  qualificationtext: "Highest Academic Qualification",
  cvtext: "CV",
  transcripttext: "Academic Transcript",
  uploadbutton1: "Upload",
  uploadbutton2: "Upload",
};

export default HistorySettingsSubmenu;
