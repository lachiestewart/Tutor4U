import React from "react";
import Sidebar from "components/Sidebar";

import { Button, Input, List, Text } from "components";
import TutorDashboardProfileHeader from "components/ProfileHeader";
import Onboarding1 from "components/Onboarding1";
import Onboarding2 from "components/Onboarding2";

const TutorOnboarding: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-auto flex-row items-start justify-between bg-white-A700 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5">
        <Sidebar />
        <div className="flex w-full flex-col items-start justify-start gap-2.5 p-[30px] md:px-5">
          <TutorDashboardProfileHeader />
          <Onboarding1 />
          <Onboarding2 />
          <div className="flex w-full flex-col items-center justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="flex w-full flex-col items-center justify-start gap-2.5">
                <h1
                >
                  Congratulations - We would love to have you onboard!
                </h1>
                <p
                >
                  
                    All you have to do now is agree to the code of conduct and
                    then you'll have full access to Tutor4U!
                  
                </p>
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <img
                    className=" w-[70%] object-cover sm:h-auto"
                    src="images/img_createtutor4ulogin_1.png"
                    alt="createtutor4ulo_Two"
                  />
                  <Text
                    className="w-full text-center text-lg leading-[24.00px] text-black-900"
                    size="txtMontserratRomanRegular18"
                  >
                    Please read the following carefully. We need to ensure that
                    all tutors on the platform abides by these rules. If any
                    tutor is found to be behaving out of line with the below,
                    Tutor4U has the right to suspend their account.
                  </Text>
                  <div className="flex w-auto flex-col items-center justify-start gap-5 md:w-full">
                    <Text
                      className="w-auto text-center text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
                      size="txtMontserratRomanBold32"
                    >
                      Tutor4U Code of Conduct
                    </Text>
                    <div className="flex w-full flex-col items-center justify-start gap-5">
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Ethical Behaviour
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          All tutors must interact with students in an ethical
                          manner. As a tutor, you hold a position of influence,
                          mentorship and trust. Therefore, it is important that
                          you exercise a high level of care and integrity with
                          students you interact with. We will not tolerate any
                          discrimination of any sort on our platform. This
                          includes any behaviour relating to harassment based on
                          gender, race, religion, sexual orientation or any
                          other personal characteristic.{" "}
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Maintain Professionalism
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          You will professional with your interactions. As a
                          tutor in the Tutor4U community, you will be
                          representing our brand with anyone that interacts with
                          the platform. This includes students, parents,
                          guardians, teachers and other tutors.   Tutor4U
                          expects you to have a professional appearance, use
                          appropriate language and respect all those involved
                          with the platform.
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Be Punctual{" "}
                        </Text>
                        <Text
                          className="text-lg leading-[24.00px] text-black-900"
                          size="txtMontserratRomanRegular18"
                        >
                          <>
                            You will be punctual with communication and
                            interactions on the platform. This includes getting
                            back to any students in a timely fashion with
                            regards to setting up future lessons as well as any
                            feedback they require that could help them reach
                            their academic potential. This also includes
                            ensuring that you turn up for all your scheduled
                            lessons on time, at the appropriate location as
                            previously organised with the students.
                            <br />
                            We also require that you keep an open channel of
                            communication with the Tutor4U team.{" "}
                          </>
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Ensure A Safe Environment For Yourself And Your
                          Students
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          You will prioritise the well-being and safety of
                          students. As a tutor, you will be in a position of
                          authority. Maintain professional boundries and do not
                          meet students outside of scheduled sessions, whether
                          online or in-person. Do not contact your students
                          outside of the platform if such contact is unrelated
                          to tutoring.
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Keep Privacy Of Students
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          Maintain privacy of the students information. This
                          could include contact details and other confidential
                          information such as personal matters and academic
                          performance.
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          All Lessons Must Be Recorded On The Tutor4U Platform
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          Tutors are strictly prohibited from offering or
                          providing students tutoring services outside of the
                          Tutor4U platform if those students were originally
                          introduced by Tutor4U. All lessons must be recorded
                          and paid through the Tutor4U platform.
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Compliance & Enforcement
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          Tutor4U has the right to remove anyone from the
                          Tutor4U platform who does not adhere to this Code of
                          Conduct. Severe violations may be reported to the
                          police and/or other legal authorities.  Any violations
                          will be treated on a case-by-case basis.
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                        <Text
                          className="w-auto text-lg text-black-900"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Provide Correct Information
                        </Text>
                        <Text
                          className="max-w-[1000px] text-lg leading-[24.00px] text-black-900 md:max-w-full"
                          size="txtMontserratRomanRegular18"
                        >
                          All tutors must be responsible for maintaining their
                          records and ensure all of their information is up to
                          date and accurate. If any substantial change in their
                          circumstances occurs where it could impact their
                          qualifications or suitability for tutoring, you must
                          inform the Tutor4U team about these changes. This
                          extends to any criminal convictions or other legal
                          matters affecting eligibility.{" "}
                        </Text>
                      </div>
                      <Button
                        className="min-w-[301px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                        shape="round"
                        color="blue_gray_700"
                        size="sm"
                        variant="fill"
                      >
                        I Agree to the Code Of Conduct Above
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start">
            <div className="flex w-full flex-col items-center justify-start gap-2.5">
              <Text
                className="w-auto text-center text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
                size="txtMontserratRomanBold32"
              >
                Congratulations & Welcome To Our Tutor Community!
              </Text>
              <Text
                className="w-auto text-center text-lg text-black-900"
                size="txtMontserratRomanRegular18"
              >
                We’re so excited to have you onboard!
              </Text>
              <img
                className="h-[263px] w-full object-cover sm:h-auto"
                src="images/img_createtutor4ulogin_2.png"
                alt="createtutor4ulo_Three"
              />
              <Text
                className="w-auto text-center text-lg text-black-900"
                size="txtMontserratRomanRegular18"
              >
                Now you have full access to Tutor4U’s platform :D
              </Text>
              <Button
                className="min-w-[236px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Jump into the platform here!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorOnboarding;
