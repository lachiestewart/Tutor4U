import React from "react";

import { Button, Text } from "components";

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
          className="h-14 md:h-auto object-cover w-[222px] sm:w-full"
          src="images/img_union1.png"
          alt="unionOne"
        />
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start px-2.5 w-auto md:w-full">
            <div className="flex flex-col items-center justify-start py-[3px] w-auto">
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtMontserratRomanMedium20"
              >
                HOME
              </Text>
            </div>
            <div className="flex flex-row gap-[5px] items-center justify-start py-[3px] w-auto">
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtMontserratRomanMedium20"
              >
                FOR STUDENTS
              </Text>
              <img
                className="h-5 md:h-auto object-cover w-5"
                src="images/img_chevrondown.png"
                alt="chevrondown"
              />
            </div>
            <div className="flex flex-row gap-[5px] items-center justify-start py-[3px] w-auto">
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtMontserratRomanMedium20"
              >
                FOR TUTORS
              </Text>
              <img
                className="h-5 md:h-auto object-cover w-5"
                src="images/img_chevrondown.png"
                alt="chevrondown_One"
              />
            </div>
            <div className="flex flex-col items-center justify-start py-[3px] w-auto">
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtMontserratRomanMedium20"
              >
                ABOUT
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start py-[3px] w-auto">
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtMontserratRomanMedium20"
              >
                CONTACT
              </Text>
            </div>
          </div>
          <Button
            className="!text-black-900 cursor-pointer font-medium font-montserrat leading-[normal] min-w-[194px] text-center text-xl"
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
