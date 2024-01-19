import React from "react";
import { Button, Input } from "components";

const Onboarding2: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-2.5">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex w-full flex-col items-center justify-start gap-2.5">
          <h1>Well Done - We would love to get to know you better!</h1>
          <p>The next step is to schedule an interview with one of our team!</p>
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <img
              className=" w-[70%] object-cover md:h-auto"
              src="images/img_createtutor4ulogin_263x1000.png"
              alt="Tutor onboarding journey- Stage 2"
            />
            <p className="text-center">
              Click the button below to book in a time with one of our team so
              that we can get to know you a little better and answer any
              questions that you may have :)
            </p>
          </div>
        </div>
      </div>
      <Button
        className="min-w-[212px] cursor-pointer text-center text-sm font-medium leading-[normal]"
        shape="round"
        color="blue_gray_700"
        size="sm"
        variant="fill"
      >
        Book Your Interview Here
      </Button>
    </div>
  );
};

export default Onboarding2;