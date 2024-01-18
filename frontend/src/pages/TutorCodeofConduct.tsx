import React from "react";
import Sidebar from "components/Sidebar";

import { Img, List, Text } from "components";
import TutorDashboardProfileHeader from "components/ProfileHeader";

const TutorCodeofConduct: React.FC = () => {
  return (
    <div className="flex w-full flex-row items-start justify-between bg-white-A700 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5">
      <Sidebar />
      <div className="flex w-full flex-col items-start justify-start gap-2.5 p-[50px] md:px-5">
        <TutorDashboardProfileHeader />
        <div className="flex w-full flex-col items-start justify-start">
          <div className="flex w-auto flex-col items-center justify-start gap-5 md:w-full">
            <h1>Tutor4U Code of Conduct</h1>
            <div className="flex w-full flex-col items-center justify-start gap-5">
              <p className="text-center">
                As a tutor on the platform, you have already agreed to the
                following code of conduct during your onboarding. If any of the
                below rules are broken, your account may be suspended without
                notice. <br />
                Every negative incident will be dealt with on a case by case
                basis by the Tutor4U team
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>Ethical Behaviour</h4>
                <p>
                  All tutors must interact with students in an ethical manner.
                  As a tutor, you hold a position of influence, mentorship and
                  trust. Therefore, it is important that you exercise a high
                  level of care and integrity with students you interact with.
                  We will not tolerate any discrimination of any sort on our
                  platform. This includes any behaviour relating to harassment
                  based on gender, race, religion, sexual orientation or any
                  other personal characteristic.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>Maintain Professionalism</h4>
                <p>
                  You will professional with your interactions. As a tutor in
                  the Tutor4U community, you will be representing our brand with
                  anyone that interacts with the platform. This includes
                  students, parents, guardians, teachers and other tutors.
                  Tutor4U expects you to have a professional appearance, use
                  appropriate language and respect all those involved with the
                  platform.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>Be Punctual </h4>
                <p>
                  <>
                    You will be punctual with communication and interactions on
                    the platform. This includes getting back to any students in
                    a timely fashion with regards to setting up future lessons
                    as well as any feedback they require that could help them
                    reach their academic potential. This also includes ensuring
                    that you turn up for all your scheduled lessons on time, at
                    the appropriate location as previously organised with the
                    students.
                    <br />
                    We also require that you keep an open channel of
                    communication with the Tutor4U team.
                  </>
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>
                  Ensure A Safe Environment For Yourself And Your Students
                </h4>
                <p>
                  You will prioritise the well-being and safety of students. As
                  a tutor, you will be in a position of authority. Maintain
                  professional boundries and do not meet students outside of
                  scheduled sessions, whether online or in-person. Do not
                  contact your students outside of the platform if such contact
                  is unrelated to tutoring.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>Keep Privacy Of Students</h4>
                <p>
                  Maintain privacy of the students information. This could
                  include contact details and other confidential information
                  such as personal matters and academic performance.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>All Lessons Must Be Recorded On The Tutor4U Platform</h4>
                <p>
                  Tutors are strictly prohibited from offering or providing
                  students tutoring services outside of the Tutor4U platform if
                  those students were originally introduced by Tutor4U. All
                  lessons must be recorded and paid through the Tutor4U
                  platform.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>Compliance & Enforcement</h4>
                <h1 className="h1"></h1>
                <p>
                  Tutor4U has the right to remove anyone from the Tutor4U
                  platform who does not adhere to this Code of Conduct. Severe
                  violations may be reported to the police and/or other legal
                  authorities. Any violations will be treated on a case-by-case
                  basis.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-[5px]">
                <h4>Provide Correct Information</h4>
                <p>
                  All tutors must be responsible for maintaining their records
                  and ensure all of their information is up to date and
                  accurate. If any substantial change in their circumstances
                  occurs where it could impact their qualifications or
                  suitability for tutoring, you must inform the Tutor4U team
                  about these changes. This extends to any criminal convictions
                  or other legal matters affecting eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCodeofConduct;
