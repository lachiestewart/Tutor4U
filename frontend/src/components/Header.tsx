import React from "react";

import Button from "./Button";
import Text from "./Text";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <img
          className="h-14 w-[222px] object-cover md:h-auto sm:w-full"
          src="images/img_union1.png"
          alt="unionOne"
        />
        <div className="flex w-auto flex-row items-center justify-center gap-2.5 p-2.5 md:w-full md:flex-col">
          <div className="flex w-auto flex-row items-center justify-start gap-5 px-2.5 md:w-full md:flex-col">
            <div className="flex w-auto flex-col items-center justify-start py-[3px]">
              <Text
                className="w-auto text-center text-xl text-white-A700"
                size="txtMontserratRomanMedium20"
              >
                HOME
              </Text>
            </div>
            <div className="flex w-auto flex-row items-center justify-start gap-[5px] py-[3px]">
              <Text
                className="w-auto text-center text-xl text-white-A700"
                size="txtMontserratRomanMedium20"
              >
                FOR STUDENTS
              </Text>
              <img
                className="h-5 w-5 object-cover md:h-auto"
                src="images/img_chevrondown.png"
                alt="chevrondown"
              />
            </div>
            <div className="flex w-auto flex-row items-center justify-start gap-[5px] py-[3px]">
              <Text
                className="w-auto text-center text-xl text-white-A700"
                size="txtMontserratRomanMedium20"
              >
                FOR TUTORS
              </Text>
              <img
                className="h-5 w-5 object-cover md:h-auto"
                src="images/img_chevrondown.png"
                alt="chevrondown_One"
              />
            </div>
            <div className="flex w-auto flex-col items-center justify-start py-[3px]">
              <Text
                className="w-auto text-center text-xl text-white-A700"
                size="txtMontserratRomanMedium20"
              >
                ABOUT
              </Text>
            </div>
            <div className="flex w-auto flex-col items-center justify-start py-[3px]">
              <Text
                className="w-auto text-center text-xl text-white-A700"
                size="txtMontserratRomanMedium20"
              >
                CONTACT
              </Text>
            </div>
          </div>
          <Button
            className="min-w-[194px] cursor-pointer text-center font-montserrat text-xl font-medium leading-[normal] !text-black-900"
            shape="round"
            color="gray_400"
            size="sm"
            variant="fill"
          >
            TUTOR SIGN-UP
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
