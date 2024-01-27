import React, { useState } from "react";
import Sidebar from "components/TutorSidebar";

import TutorDashboardProfileHeader from "components/ProfileHeader";
import Onboarding1 from "components/Onboarding1";
import Onboarding2 from "components/Onboarding2";
import Onboarding3 from "components/Onboarding3";
import Onboarding4 from "components/Onboarding4";

const TutorOnboarding: React.FC = () => {
  const Onboarding: React.FC<{ stage: number }> = ({ stage }) => {
    switch (stage) {
      case 1:
        return <Onboarding1 />;
      case 2:
        return <Onboarding2 />;
      case 3:
        return <Onboarding3 />;
      case 4:
        return <Onboarding4 />;
    }
    return <p>Invalid Onboarding Stage</p>;
  };

  const [onboardingStage, setOnboardingStage] = useState<number>(1);

  return (
    <div className="mx-auto flex w-auto flex-row items-start justify-between bg-white-A700 font-montserrat md:w-full md:flex-row md:gap-5 sm:w-full sm:flex-col sm:gap-2">
      <Sidebar />
      <div className="flex w-full flex-col items-start justify-start gap-2.5 md:mt-0 md:px-5 sm:mt-[-100vh] sm:py-3 sm:pr-2 sm:pl-20">
        <TutorDashboardProfileHeader />
        <Onboarding stage={onboardingStage} />
      </div>
    </div>
  );
};

export default TutorOnboarding;
