import React from "react";
import Sidebar from "components/Sidebar";

import { Button, Input, List, Text } from "components";
import TutorDashboardProfileHeader from "components/ProfileHeader";
import Onboarding1 from "components/Onboarding1";
import Onboarding2 from "components/Onboarding2";
import CodeOfConductTerms from "components/CodeOfConductTerms";
import Onboarding3 from "components/Onboarding3";
import Onboarding4 from "components/Onboarding4";

const TutorOnboarding: React.FC = () => {
  return (
    
      <div className="mx-auto flex w-auto flex-row items-start justify-between bg-white-A700 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5">
        <Sidebar />
        <div className="flex w-full flex-col items-start justify-start gap-2.5 p-[30px] md:px-5">
          <TutorDashboardProfileHeader />
          <Onboarding1 />
          <Onboarding2 />
          <Onboarding3 />
          <Onboarding4 />
         
        </div>
      </div>
    
  );
};

export default TutorOnboarding;
