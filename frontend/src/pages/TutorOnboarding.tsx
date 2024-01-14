import React from "react";
import Sidebar from "components/Sidebar";

import { Button, Img, Input, List, Text } from "components";

const TutorOnboarding: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar />
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
                  size="txtMontserratRomanBold32"
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
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtMontserratRomanBold32"
              >
                Welcome to Tutor4U!
              </Text>
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="leading-[24.00px] text-black-900 text-center text-lg"
                  size="txtMontserratRomanRegular18"
                >
                  <>
                    It&#39;s so awesome to see that you are taking your first
                    steps in joining our amazing community of tutors!
                    <br />
                    <br />
                    As you can see below, there are a few steps you will need to
                    complete in order to get fully onboarded. Once you complete
                    the steps below, you will have complete access to all the
                    functionalities of the Tutor4U platform. But don&#39;t
                    worry, we&#39;ve tried to make the process as streamlined as
                    possible so that you can start getting students as quickly
                    as possible!{" "}
                  </>
                </Text>
                <Img
                  className="h-[263px] sm:h-auto object-cover w-full"
                  src="images/img_createtutor4ulogin.png"
                  alt="createtutor4ulo"
                />
                <Text
                  className="leading-[24.00px] text-black-900 text-center text-lg"
                  size="txtMontserratRomanRegular18"
                >
                  <>
                    Please complete all the details below. Once submitted, the
                    Tutor4U team will review your application. Once it&#39;s
                    reviewed, you will be informed of the outcome and whether
                    you will be invited for an interview.
                    <br />
                    <br />
                    All fields are required unless otherwise stated. Please
                    know, you will be able to change your profile settings if
                    your application is accepted.{" "}
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="bg-blue_gray-100 flex flex-col gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                size="txtMontserratRomanSemiBold28"
              >
                Personal Details
              </Text>
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    First Name
                  </Text>
                  <Input
                    name="emailtextentry"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="emailtextentry_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Email Address
                  </Text>
                  <Input
                    name="emailtextentry_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    color="gray_200_01"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Phone Number
                  </Text>
                  <Input
                    name="emailtextentry_Three"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanSemiBold18"
                >
                  Date of Birth
                </Text>
                <Input
                  name="emailtextentry_Four"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Profile Photo
                  </Text>
                  <div className="flex flex-row gap-[50px] items-center justify-start px-2.5 py-[5px] w-auto">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[31px] w-[63px]"
                      src="images/img_36477397310160_64x63.png"
                      alt="36477397310160_One"
                    />
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[164px] text-center text-sm"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      Add Profile Picture
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Gender
                  </Text>
                  <Input
                    name="emailtextentry_Five"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="max-w-[970px] md:max-w-full text-black-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    About You (If accepted, this will be what visitors read on
                    your profile page so try to advertise yourself well!)
                  </Text>
                  <div className="bg-white-A700 h-[180px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      LinkedIn Link (Optional)
                    </Text>
                    <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Website Link (Optional)
                    </Text>
                    <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                  </div>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  Academic Details
                </Text>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      School Attended
                    </Text>
                    <Input
                      name="emailtextentry_Nine"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[50px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      University Attended (Optional)
                    </Text>
                    <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Highest Academic Qualification
                  </Text>
                  <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      CV Upload
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      Select File for CV Upload
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Academic Transcript Upload
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      Select File for CV Upload
                    </Button>
                  </div>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  Tutoring Details
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Highest Academic Level You Can Tutor
                  </Text>
                  <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Primary Subject You Can Tutor
                    </Text>
                    <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Secondary Subject You Can Tutor (Optional)
                    </Text>
                    <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Specific Courses / Papers You Can Tutor
                  </Text>
                  <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Usual Tutoring Location
                  </Text>
                  <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Hourly Rate ($XX/hr)
                  </Text>
                  <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutorial Format
                    </Text>
                    <Input
                      name="emailtextentry_Eighteen"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[50px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutoring Availability
                    </Text>
                    <div className="bg-white-A700 h-[50px] rounded-[10px] w-full"></div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[161px] text-center text-sm"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Submit My Details
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanBold32"
                >
                  Well Done - We would love to get to know you better!
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanRegular18"
                >
                  The next step is to schedule an interview with one of our
                  team!{" "}
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-[263px] md:h-auto object-cover w-full"
                    src="images/img_createtutor4ulogin_263x1000.png"
                    alt="createtutor4ulo_One"
                  />
                  <Text
                    className="leading-[24.00px] text-black-900 text-center text-lg w-full"
                    size="txtMontserratRomanRegular18"
                  >
                    Click the button below to book in a time with one of our
                    team so that we can get to know you a little better and
                    answer any questions that you may have :)
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[212px] text-center text-sm"
              shape="round"
              color="blue_gray_700"
              size="sm"
              variant="fill"
            >
              Book Your Interview Here
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanBold32"
                >
                  Congratulations - We would love to have you onboard!
                </Text>
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtMontserratRomanRegular18"
                >
                  <>
                    All you have to do now is agree to the code of conduct and
                    then you&#39;ll have full access to Tutor4U!
                  </>
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-[263px] sm:h-auto object-cover w-full"
                    src="images/img_createtutor4ulogin_1.png"
                    alt="createtutor4ulo_Two"
                  />
                  <Text
                    className="leading-[24.00px] text-black-900 text-center text-lg w-full"
                    size="txtMontserratRomanRegular18"
                  >
                    Please read the following carefully. We need to ensure that
                    all tutors on the platform abides by these rules. If any
                    tutor is found to be behaving out of line with the below,
                    Tutor4U has the right to suspend their account.
                  </Text>
                  <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanBold32"
                    >
                      Tutor4U Code of Conduct
                    </Text>
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[301px] text-center text-sm"
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
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtMontserratRomanBold32"
              >
                Congratulations & Welcome To Our Tutor Community!
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtMontserratRomanRegular18"
              >
                We’re so excited to have you onboard!
              </Text>
              <Img
                className="h-[263px] sm:h-auto object-cover w-full"
                src="images/img_createtutor4ulogin_2.png"
                alt="createtutor4ulo_Three"
              />
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtMontserratRomanRegular18"
              >
                Now you have full access to Tutor4U’s platform :D
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[236px] text-center text-sm"
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
