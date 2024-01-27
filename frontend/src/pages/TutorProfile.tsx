import React, { useEffect, useState } from "react";
import Text from "components/Text";
import NavBar from "components/NavBar";
import Button from "components/Button";
import Input from "components/Input";
import StudentSidebar from "components/StudentSidebar";
import { useParams } from "react-router-dom";
import { Offer, Tutor } from "interfaces";

type ProfileSidebarSectionProps = {
  title: string;
  items: string[];
};

const ProfileSidebarSection: React.FC<ProfileSidebarSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex w-auto flex-col items-center justify-start px-2.5">
      <Text
        className="w-[279px] text-center text-[28px] text-black-900 md:text-[26px] sm:text-2xl"
        size="txtMontserratRomanSemiBold28"
      >
        {title}
      </Text>
      {items.map((item) => (
        <Text
          className="w-auto text-center text-lg text-black-900"
          size="txtMontserratRomanRegular18"
          key={item}
        >
          {item}
        </Text>
      ))}
    </div>
  );
};

const defaultTutor: Tutor = {
  id: 0,
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
};

const TutorProfile: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [tutor, setTutor] = useState<Tutor>(defaultTutor);
  const [tutorOffers, setTutorOffers] = useState<Offer[]>([] as Offer[]);

  const params = useParams();

  const updateTutor = async (id: number) => {
    const response: Response = await fetch(
      `http://127.0.0.1:8000/api/tutor/?id=${id}`,
    );

    const responseJson = await response.json();

    if (responseJson.error) {
      console.log(responseJson.error);
      return;
    }

    const thisTutor: Tutor = responseJson;

    console.log(thisTutor.user.first_name + " " + thisTutor.user.last_name);
    setTutor(thisTutor);
  };

  const updateTutorOffers = async (id: number) => {
    const response: Response = await fetch(
      `http://127.0.0.1:8000/api/offers/?id=${id}`,
    );

    const responseJson = await response.json();

    if (responseJson.error) {
      console.log(responseJson.error);
      return;
    }

    const thisOffers: Offer[] = responseJson;

    setTutorOffers(thisOffers);
  };

  useEffect(() => {
    if (params.id) {
      updateTutor(+params.id);
      updateTutorOffers(+params.id);
    }
  }, []);

  return (
    <>
      <div
        className={`mx-auto flex h-auto w-auto ${loggedIn ? "flex-row" : "flex-col"} items-center justify-start gap-2.5 bg-gray-200 font-montserrat`}
      >
        {loggedIn ? <StudentSidebar /> : <NavBar />}
        <div className="w mx-auto flex h-auto max-w-[1300px] items-start justify-center gap-[20px] rounded-[10px] bg-white-A700 px-6 py-2.5 md:flex-row sm:flex-col">
          <div className="flex h-auto w-[100%] flex-col items-center justify-start gap-3.5 px-[10px] py-2.5 md:w-[30%] sm:px-5">
            <div className="flex w-[96%] flex-col items-center justify-start gap-4 md:w-full">
              <div
                className="h-[200px] w-[200px] rounded-[100%] bg-blue_gray-100"
                style={{
                  backgroundImage: `url(http://127.0.0.1:8000${tutor.user.profile_photo})`,
                }}
              />
              <Text
                className="sm:[20px] text-center text-[24px] text-black-900 md:text-[22px]"
                size="txtMontserratRomanSemiBold28"
              >
                About {tutor.user.first_name}
              </Text>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-3.5">
              <ProfileSidebarSection
                title={"Current Availability"}
                items={[tutor.availability]}
              />
              <ProfileSidebarSection
                title={"Pricing"}
                items={[`${tutor.rate}/hr`]}
              />
              <ProfileSidebarSection
                title={"Qualifications"}
                items={[tutor.qualification]}
              />
              {tutorOffers.length != 0 && (
                <>
                  <ProfileSidebarSection
                    title={"Tutoring Levels"}
                    items={tutorOffers.map((offer) => offer.level)}
                  />
                  <ProfileSidebarSection
                    title={"Subjects"}
                    items={tutorOffers.map((offer) => offer.subject)}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex h-auto w-full flex-col items-start justify-start gap-[11px] p-[15px] md:w-[70%] ">
            <div className="flex w-full items-center justify-between gap-1 md:flex-row sm:flex-col">
              <h1>{tutor.user.first_name + " " + tutor.user.last_name}</h1>
              <div className="flex gap-2.5">
                <Button
                  className="min-w-[158px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Message {tutor.user.first_name}
                </Button>
                <Button
                  className="min-w-[153px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="xs"
                  variant="fill"
                >
                  Find other Tutors
                </Button>
              </div>
            </div>
            <p>{tutor.about}</p>
            <div className="flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-5 py-2.5">
              <div className="flex w-full flex-col items-start justify-start gap-2.5 py-2.5">
                <Text
                  className="w-full text-lg text-black-900"
                  size="txtMontserratRomanSemiBold18"
                >
                  Want to get in touch with this tutor?
                </Text>
                <Text
                  className="text-sm text-black-900"
                  size="txtMontserratRomanMedium14"
                >
                  Put in your details below to get full access to the platform
                  and contact this tutor for free!
                </Text>
                <div className="flex w-full flex-row items-start justify-start gap-2.5 sm:flex-col">
                  <div className="flex w-full flex-1 flex-col items-start justify-start">
                    <Text
                      className="w-auto text-center text-lg text-black-900"
                      size="txtMontserratRomanSemiBold18"
                    >
                      First Name
                    </Text>
                    <Input name="emailtextentry" className="w-full p-0" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-start">
                    <Text
                      className="w-auto text-center text-lg text-black-900"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Last Name
                    </Text>
                    <Input name="emailtextentry_One" className="w-full p-0" />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Email
                  </Text>
                  <Input name="email_entry" className="w-full p-0" />
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <Text
                    className="w-auto text-center text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Password
                  </Text>
                  <Input name="password_entry" className="w-full p-0" />
                </div>
                <Button
                  className="min-w-[198px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Get Access To All Tutors{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorProfile;
