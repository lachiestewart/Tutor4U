import React from "react";
import Sidebar from "components/TutorSidebar";

import TutorDashboardProfileHeader from "components/ProfileHeader";
import CodeOfConductTerms from "components/CodeOfConductTerms";

const TutorCodeofConduct: React.FC = () => {
  return (
    <div className="mx-auto flex w-auto items-start justify-between gap-2.5 bg-white-A700 font-montserrat md:flex-row sm:w-full sm:flex-col sm:gap-5">
      <Sidebar />
      <div className="mx-auto mr-3 flex w-auto flex-col items-start justify-between gap-2.5 bg-white-A700 font-montserrat md:ml-0 md:mt-0 sm:my-5 sm:ml-[90px] sm:mt-[-100vh]">
        <TutorDashboardProfileHeader />
        <div className="lg:gap-5 flex w-full flex-col items-center justify-start md:w-full sm:gap-2">
          <h1>Tutor4U Code of Conduct</h1>
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <p className="text-center">
              As a tutor on the platform, you have already agreed to the
              following code of conduct during your onboarding. If any of the
              below rules are broken, your account may be suspended without
              notice. <br />
              Every negative incident will be taken seriously & dealt with on a
              case-by-case basis by the Tutor4U team
            </p>
            <CodeOfConductTerms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCodeofConduct;
