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
      <div
        className="flex h-auto w-full flex-1 transform flex-col justify-start overflow-hidden rounded-[10px] bg-white-A700 transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg"
        onClick={() => navigate("/tutorprofile/" + tutor.id)}
      >
        <div
          className="flex h-[231px] w-full flex-col items-start justify-end bg-gradient bg-cover bg-no-repeat p-2.5"
          style={{
            backgroundImage: `url(http://127.0.0.1:8000${tutor.user.profile_photo})`,
          }}
        >
          <div className="flex w-auto flex-col items-start justify-end px-2">
            <div className="flex flex-row gap-2">
              <Text
                className="w-auto text-xl text-white-A700"
                size="txtMontserratRomanSemiBold18WhiteA700"
              >
                {tutor.user.first_name} {tutor.user.last_name}
              </Text>
            </div>
            <Text
              className="text-md w-auto text-white-A700"
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
          <Text className="text-s text-black-900">${tutor.rate}/hr</Text>
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
  },
};

export default TutorCard;
