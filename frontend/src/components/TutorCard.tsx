import React from "react";

import { Text } from "components";

type TutorCardProps = {
    tutorFirstName: string;
    tutorLastName: string;
    tutorLocation?: string;
    tutorSubjects?: string[];
    tutorRate?: number;
    tutorQualification?: string;
    tutorProfilePhoto?: string;
  };

const TutorCard: React.FC<TutorCardProps> = (props) => {
  return (
    <>
      <div className="bg-white-A700 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer flex flex-1 flex-col h-auto justify-start rounded-[10px] overflow-hidden w-full">
        <div
          className="bg-cover bg-gradient bg-no-repeat flex flex-col h-[231px] items-start justify-end p-2.5 w-full"
          style={{ backgroundImage: `${props.tutorProfilePhoto}` }}
        >
          <div className="flex flex-col items-start justify-end px-2 w-auto">
            <div className="flex flex-row gap-2">
              <Text
                className="text-xl text-white-A700 w-auto"
                size="txtMontserratRomanSemiBold18WhiteA700"
              >
                {props.tutorFirstName} {props.tutorLastName}
              </Text>
            </div>
            <Text
              className="text-white-A700 text-md w-auto"
              size="txtMontserratRomanRegular12"
            >
              {props.tutorLocation}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2 pl-4">
          <Text className="text-black-900 text-s" >
            {props.tutorSubjects.join(" | ")}
          </Text>
          <Text className="text-black-900 text-s">
            ${props.tutorRate}/hr 
          </Text>
          <Text
            className=" text-[12px] text-black-900"
            size="txtInterRegular10Black900"
          >
            {props.tutorQualification}
          </Text>
        </div>
      </div>
    </>
  );
};

TutorCard.defaultProps = {
  tutorFirstName: "first name",
  tutorLastName: "last name",
  tutorLocation: "location",
  tutorSubjects: ["subject 1", "subject 2"],
  tutorRate: 99,
  tutorQualification: "qualification",
  tutorProfilePhoto: "url('images/img_frame13_231x220.png')",
};

export default TutorCard;
