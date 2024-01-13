import React from "react";

import { Img, Text } from "components";

const TutorCodeofConductPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-blue_gray-700 flex flex-col items-center justify-start md:px-5 w-[27%] md:w-full">
          <Img
            className="h-[120px]"
            src="images/img_sidebarheader_blue_gray_900.svg"
            alt="sidebarheader"
          />
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Job Board
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Profile Settings
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Account Details
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[275px] p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              FAQs
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-end p-[9px] w-full">
            <div className="bg-blue_gray-100 h-[60px] my-1.5 rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Code of Conduct
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Logout
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1060px] p-[30px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1000px] rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start rounded-[10px] w-full">
              <div className="flex flex-col h-[118px] md:h-auto items-start justify-start w-[120px]">
                <Img
                  className="h-[118px] md:h-auto rounded-[50%] w-full"
                  src="images/img_36477397310160.png"
                  alt="36477397310160"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start max-w-[870px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[181px]"
                  size="txtMontserratRomanBold32Black900"
                >
                  Jason Hart
                </Text>
                <Text
                  className="leading-[24.00px] text-black-900 text-xl"
                  size="txtMontserratRomanRegular20"
                >
                  <>
                    Academic Tutor - Science, Mathematics
                    <br />
                    Wellington, NZ
                    <br />
                    Tutor Rating: X X X X
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanBold32Black900"
                    >
                      Tutor4U Code of Conduct
                    </Text>
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Text
                        className="leading-[24.00px] text-black-900 text-center text-lg"
                        size="txtMontserratRomanRegular18"
                      >
                        <>
                          As a tutor on the platform, you have already agreed to
                          the following code of conduct during your onboarding.
                          If any of the below rules are broken, your account may
                          be suspended without notice. <br />
                          Every negative incident will be dealt with on a case
                          by case basis by the Tutor4U team{" "}
                        </>
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Ethical Behaviour
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
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
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Maintain Professionalism
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
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
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Be Punctual{" "}
                        </Text>
                        <Text
                          className="leading-[24.00px] text-black-900 text-lg"
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
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Ensure A Safe Environment For Yourself And Your
                          Students
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
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
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Keep Privacy Of Students
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
                          size="txtMontserratRomanRegular18"
                        >
                          Maintain privacy of the students information. This
                          could include contact details and other confidential
                          information such as personal matters and academic
                          performance.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          All Lessons Must Be Recorded On The Tutor4U Platform
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
                          size="txtMontserratRomanRegular18"
                        >
                          Tutors are strictly prohibited from offering or
                          providing students tutoring services outside of the
                          Tutor4U platform if those students were originally
                          introduced by Tutor4U. All lessons must be recorded
                          and paid through the Tutor4U platform.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Compliance & Enforcement
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
                          size="txtMontserratRomanRegular18"
                        >
                          Tutor4U has the right to remove anyone from the
                          Tutor4U platform who does not adhere to this Code of
                          Conduct. Severe violations may be reported to the
                          police and/or other legal authorities.  Any violations
                          will be treated on a case-by-case basis.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Provide Correct Information
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-lg"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorCodeofConductPage;
