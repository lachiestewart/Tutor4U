import React from "react";

import Text from "./Text";
import { Tutor } from "interfaces";
import { useNavigate } from "react-router-dom";

type TutorCardProps = {
  tutor: Tutor;
};

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer flex flex-1 flex-col h-auto justify-start rounded-[10px] overflow-hidden w-full"
        onClick={() => navigate("/tutorprofile/" + tutor.id)}
      >
        <div
          className="bg-cover bg-gradient bg-no-repeat flex flex-col h-[231px] items-start justify-end p-2.5 w-full"
          style={{ backgroundImage: `url(http://127.0.0.1:8000${tutor.user.profile_photo})` }}
        >
          <div className="flex flex-col items-start justify-end px-2 w-auto">
            <div className="flex flex-row gap-2">
              <Text
                className="text-xl text-white-A700 w-auto"
                size="txtMontserratRomanSemiBold18WhiteA700"
              >
                {tutor.user.first_name} {tutor.user.last_name}
              </Text>
            </div>
            <Text
              className="text-white-A700 text-md w-auto"
              size="txtMontserratRomanRegular12"
            >
              {tutor.location}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2 pl-4">
          {/* will put list of tutor subjects here <Text className="text-black-900 text-s" >
            {tutor.}
          </Text> */}
          <Text className="text-black-900 text-s">
            ${tutor.rate}/hr
          </Text>
          <Text
            className=" text-[12px] text-black-900"
            size="txtInterRegular10Black900"
          >
            {tutor.qualification}
          </Text>
        </div>
      </div>
    </>
  );
};

TutorCard.defaultProps = {
  tutor: {
    id: 1,
    user: {
      id: 1,
      username: "username",
      first_name: "first name",
      last_name: "last name",
      phone_number: "111 111 1111",
      email: "username@email.com",
      gender: "gender",
      profile_photo: "url('images/img_frame13_231x220.png')",
    },
    rate: 99,
    availability: "availability",
    remote: true,
    in_person: true,
    location: "location",
    qualification: "qualification",
    about: "about",
  }

};

export default TutorCard;
