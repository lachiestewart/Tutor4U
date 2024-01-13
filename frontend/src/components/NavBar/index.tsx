import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type NavBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const NavBar: React.FC<NavBarProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="common-pointer h-14 md:h-auto object-cover w-[222px] sm:w-full"
          src="images/img_union1.png"
          alt="unionOne"
          onClick={() => navigate("/homepagemvp")}
        />
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start px-2.5 w-auto md:w-full">
            <div className="flex flex-col items-center justify-start py-[3px] w-auto">
              <Text
                className="common-pointer text-center text-white-A700 text-xl w-auto"
                size="txtMontserratRomanMedium20"
                onClick={() => navigate("/homepagemvp")}
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
              <Img
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
              <Img
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

NavBar.defaultProps = {};

export default NavBar;
