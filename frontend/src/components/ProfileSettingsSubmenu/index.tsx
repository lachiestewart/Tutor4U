import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";

type ProfileSettingsSubmenuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "profilesettingstext"
  | "savebutton"
  | "firstnamelabel"
  | "lastnamelabel"
  | "emaillabel"
  | "phonenumberlabel"
  | "genderlabel"
  | "aboutyoulabel"
> &
  Partial<{
    profilesettingstext: string;
    savebutton: string;
    firstnamelabel: string;
    lastnamelabel: string;
    emaillabel: string;
    phonenumberlabel: string;
    genderlabel: string;
    aboutyoulabel: string;
  }>;

const ProfileSettingsSubmenu: React.FC<ProfileSettingsSubmenuProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtMontserratRomanBold36"
              >
                {props?.profilesettingstext}
              </Text>
              <Line className="bg-blue-A200 h-2.5 w-full" />
            </div>
            <Button
              className="cursor-pointer font-black font-montserrat leading-[normal] mb-4 min-w-[100px] text-center text-lg"
              shape="round"
              color="blue_A200"
              size="md"
              variant="fill"
            >
              {props?.savebutton}
            </Button>
          </div>
          <Text
            className="ml-0.5 md:ml-[0] mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.firstnamelabel}
          </Text>
          <Input
            name="firstnametext"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 mt-2 rounded-[5px] w-full"
            color="white_A700"
            variant="fill"
          ></Input>
          <Text
            className="md:ml-[0] ml-[3px] mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.lastnamelabel}
          </Text>
          <Input
            name="lastnametextent"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 mt-2 rounded-[5px] w-full"
            color="white_A700"
            variant="fill"
          ></Input>
          <Text
            className="mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.emaillabel}
          </Text>
          <Input
            name="emailtextentry"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 mt-2 rounded-[5px] w-full"
            color="white_A700"
            variant="fill"
          ></Input>
          <Text
            className="ml-0.5 md:ml-[0] mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.phonenumberlabel}
          </Text>
          <Input
            name="phonenumbertext"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 ml-0.5 md:ml-[0] mt-2 rounded-[5px] w-full"
            color="white_A700"
            variant="fill"
          ></Input>
          <Text
            className="ml-0.5 md:ml-[0] mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.genderlabel}
          </Text>
          <div className="bg-white-A700 flex flex-col items-end justify-end mt-2 p-[13px] rounded-[5px] w-full">
            <Img
              className="h-px mr-[9px] mt-[13px]"
              src="images/img_dropdownarrow.svg"
              alt="dropdownarrow"
            />
          </div>
          <Text
            className="mt-[19px] text-black-900 text-center text-lg"
            size="txtMontserratRomanSemiBold18"
          >
            {props?.aboutyoulabel}
          </Text>
          <TextArea
            className="bg-white-A700 border-0 mt-2 rounded-[5px] w-full"
            name="aboutyoutextent"
            placeholder=""
          ></TextArea>
        </div>
      </div>
    </>
  );
};

ProfileSettingsSubmenu.defaultProps = {
  profilesettingstext: "Profile",
  savebutton: "Save",
  firstnamelabel: "First Name",
  lastnamelabel: "Last Name",
  emaillabel: "Email",
  phonenumberlabel: "Phone Number",
  genderlabel: "Gender",
  aboutyoulabel: "About You",
};

export default ProfileSettingsSubmenu;
