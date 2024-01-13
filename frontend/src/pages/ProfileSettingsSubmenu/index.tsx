import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import ProfileSettingsSubmenu from "components/ProfileSettingsSubmenu";

const ProfileSettingsSubmenuPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto pb-[60px] md:pr-10 sm:pr-5 pr-[60px] w-full">
        <div className="bg-blue_gray-100 flex flex-col items-center justify-start p-[50px] md:px-5 rounded-br-[10px] rounded-tr-[10px] w-[55%] md:w-full">
          <ProfileSettingsSubmenu className="flex flex-col items-center justify-start w-[70%] md:w-full" />
        </div>
      </div>
    </>
  );
};

export default ProfileSettingsSubmenuPage;
