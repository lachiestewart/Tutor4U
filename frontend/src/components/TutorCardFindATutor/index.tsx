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
      <div className={props.className}>
        <div
          className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
          style={{ backgroundImage: "url('images/img_frame13_231x220.png')" }}
        >
          <div className="flex flex-col items-start justify-start px-2 w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtMontserratRomanSemiBold18WhiteA700"
            >
              {props?.tutorfullname}
            </Text>
            <Text
              className="text-white-A700 text-xs w-auto"
              size="txtMontserratRomanRegular12"
            >
              {props?.tutorlocation}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center p-2">
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
