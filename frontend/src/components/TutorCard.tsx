import React from "react";

import { Text } from "components";

type TutorCardProps = {
    tutorfirstname: string;
    tutorlastname: string;
    tutorlocation?: string;
    tutorsubject?: string;
    tutorrate?: number;
    tutorqualification?: string;
  };

const TutorCard: React.FC<TutorCardProps> = (props) => {
  return (
    <>
      <div className="bg-white-A700 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer flex flex-1 flex-col h-auto justify-start rounded-[10px] overflow-hidden w-full">
        <div
          className="bg-cover bg-gradient bg-no-repeat flex flex-col h-[231px] items-start justify-end p-2.5 w-full"
          style={{ backgroundImage: "url('images/img_frame13_231x220.png')" }}
        >
          <div className="flex flex-col items-start justify-end px-2 w-auto">
            <div className="flex flex-row gap-2">
              <Text
                className="text-xl text-white-A700 w-auto"
                size="txtMontserratRomanSemiBold18WhiteA700"
              >
                {props.tutorfirstname} {props.tutorlastname}
              </Text>
            </div>
            <Text
              className="text-white-A700 text-md w-auto"
              size="txtMontserratRomanRegular12"
            >
              {props.tutorlocation}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2 pl-4">
          <Text className="text-black-900 text-s" >
            {props.tutorsubject}
          </Text>
          <Text className="text-black-900 text-s">
            ${props.tutorrate}/hr 
          </Text>
          <Text
            className=" text-[12px] text-black-900"
            size="txtInterRegular10Black900"
          >
            {props.tutorqualification}
          </Text>
        </div>
      </div>
    </>
  );
};

TutorCard.defaultProps = {
  tutorfirstname: "first name",
  tutorlastname: "last name",
  tutorlocation: "Christchurch",
  tutorsubject: "Health | Biology",
  tutorrate: 35,
  tutorqualification: "BSc in Sports Science",
};

export default TutorCard;
