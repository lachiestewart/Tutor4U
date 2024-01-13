import React from "react";

import { Img, Text } from "components";

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto py-[169px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-[30px] items-start justify-start sm:px-5 px-[30px] w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start md:px-5 w-auto md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
              size="txtMontserratRomanBold32Black900"
            >
              Meet the Team
            </Text>
            <Text
              className="text-black-900 text-lg w-auto"
              size="txtMontserratRomanSemiBold18"
            >
              We are a dynamic and cohesive team changing the landscape of
              education delivery.{" "}
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start max-w-[1380px] mx-auto md:px-5 w-full">
            <Img
              className="h-[247px] md:h-auto object-cover w-[247px]"
              src="images/img_36477397310160_247x247.png"
              alt="36477397310160"
            />
            <Img
              className="sm:flex-1 h-[247px] md:h-auto object-cover w-[220px] sm:w-full"
              src="images/img_37729092789282.png"
              alt="37729092789282"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
