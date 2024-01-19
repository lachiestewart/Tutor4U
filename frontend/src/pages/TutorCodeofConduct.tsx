import React from "react";
import Sidebar from "components/Sidebar";

import { List, Text } from "components";
import TutorDashboardProfileHeader from "components/ProfileHeader";
import CodeOfConductTerms from "components/CodeOfConductTerms";

const TutorCodeofConduct: React.FC = () => {
  return (
    <div className="flex w-full flex-row items-start justify-between bg-white-A700 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5">
      <Sidebar />
      <div className="flex w-full flex-col items-start justify-start gap-2.5 p-[50px] md:px-5">
        <TutorDashboardProfileHeader />
        <div className="flex w-full flex-col items-center justify-start gap-5 md:w-full">
          <h1>Tutor4U Code of Conduct</h1>
          <div className="flex w-full flex-col items-center justify-start gap-5">
            {/* Need to make the message below change depending on the page they are on */}
            <p className="text-center">
              As a tutor on the platform, you have already agreed to the
              following code of conduct during your onboarding. If any of the
              below rules are broken, your account may be suspended without
              notice. <br />
              Every negative incident will be dealt with on a case by case basis
              by the Tutor4U team
            </p>
            <CodeOfConductTerms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCodeofConduct;
