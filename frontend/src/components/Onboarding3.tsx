import React from "react";
import Button from "./Button";
import CodeOfConductTerms from "./CodeOfConductTerms";

const Onboarding3: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-3">
      <h1 className="text-center">
        Congratulations - We would love to have you onboard!
      </h1>
      <p className="text-center">
        The last step is to agree to our Code of Conduct and then you'll join
        our tutor community & have full access to Tutor4U!
      </p>
      <div className="flex w-full flex-col items-center justify-start gap-2.5">
        <img
          className="lg:w-[70%] object-cover sm:h-auto sm:w-full"
          src="images/img_createtutor4ulogin_1.png"
          alt="createtutor4ulo_Two"
        />
        <p className=" text-center">
          Please read the following carefully. We need to ensure that all tutors
          on the platform abides by these rules. If any tutor is found to be
          behaving out of line with the below, Tutor4U has the right to suspend
          their account.
        </p>
        <div className="flex w-full flex-col items-center justify-start gap-5 md:w-full">
          <h1>Tutor4U Code of Conduct</h1>
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <p className="text-center">
              Before becoming a tutor on the Tutor4U platform, you need to agree
              to the following Code of Conduct. If any of the below rules are
              broken, your account may be suspended without notice. <br />
              Every negative incident will be dealt with on a case by case basis
              by the Tutor4U team
            </p>
            <CodeOfConductTerms />
          </div>
        </div>
      </div>
      <Button
        className="w-auto cursor-pointer text-center text-sm font-medium leading-[normal]"
        shape="round"
        color="blue_gray_700"
        size="sm"
        variant="fill"
      >
        I agree to the Tutor Code of Conduct
      </Button>
    </div>
  );
};

export default Onboarding3;
