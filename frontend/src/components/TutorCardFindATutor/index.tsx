import React from "react";

import { Text } from "components";

type TutorCardFindATutorProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tutorfullname"
  | "tutorlocation"
  | "tutorsubject"
  | "tutorrate"
  | "tutorqualification"
> &
  Partial<{
    tutorfullname: string;
    tutorlocation: string;
    tutorsubject: string;
    tutorrate: string;
    tutorqualification: string;
  }>;

const TutorCardFindATutor: React.FC<TutorCardFindATutorProps> = (props) => {
  return (
    <>
      <div className="bg-white-A700 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer flex flex-1 flex-col h-[325px] md:h-auto justify-start rounded-[10px] overflow-hidden w-full">
        <div
          className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-end p-2.5 w-full"
          style={{ backgroundImage: "url('images/img_frame13_231x220.png')" }}
        >
          <div className="flex flex-col items-start justify-end px-2 w-auto">
            <Text
              className="text-xl text-white-A700 w-auto"
              size="txtMontserratRomanSemiBold18WhiteA700"
            >
              {props?.tutorfullname}
            </Text>
            <Text
              className="text-white-A700 text-md w-auto"
              size="txtMontserratRomanRegular12"
            >
              {props?.tutorlocation}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2 pl-4">
          <Text className="text-black-900 text-xs" size="txtInterRegular12">
            {props?.tutorsubject}
          </Text>
          <Text className="text-black-900 text-xs" size="txtInterRegular12">
            {props?.tutorrate}
          </Text>
          <Text
            className="mb-7 mt-1 text-[10px] text-black-900"
            size="txtInterRegular10Black900"
          >
            {props?.tutorqualification}
          </Text>
        </div>
      </div>
    </>
  );
};

TutorCardFindATutor.defaultProps = {
  tutorfullname: "Alicia Craig",
  tutorlocation: "Christchurch",
  tutorsubject: "Health | Biology",
  tutorrate: "$35/hr",
  tutorqualification: "BSc in Sports Science",
};

export default TutorCardFindATutor;
