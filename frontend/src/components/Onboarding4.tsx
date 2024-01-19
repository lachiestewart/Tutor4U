import React from "react";
import { Button } from "components";

const Onboarding4:React.FC = () => {
    return ( 
        <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <h1
            >
              Congratulations & Welcome To Our Tutor Community!
            </h1>
            <p
            >
              We’re so excited to have you onboard!
            </p>
            <img
              className="w-[70%] object-cover sm:h-auto"
              src="images/img_createtutor4ulogin_2.png"
              alt="createtutor4ulo_Three"
            />
            <p
            >
              Now you have full access to Tutor4U's platform :D
            </p>
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
     );
}
 
export default Onboarding4;