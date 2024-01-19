import React, { ReactNode, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const [forStudentsOpen, setForStudentsOpen] = useState<boolean>(false);
  const [forTutorsOpen, setForTutorsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  type SidebarItemProps = {
    title: string;
    onClick?: () => void;
    children?: ReactNode;
  };

  const NavBarItem: React.FC<SidebarItemProps> = ({ title, onClick, children }) => (
    <div className="flex flex-col">
      <div
        className="common-pointer flex flex-row gap-[5px] items-center"
        onClick={onClick}
      >
        <Text
          className="text-center text-white-A700 text-xl w-auto"
          size="txtMontserratRomanMedium20"
        >
          {title}
        </Text>
        {!!children && <img
          className="h-5 md:h-auto object-cover w-5"
          src="images/img_chevrondown.png"
          alt="chevrondown"
        />}
      </div>
      {!!children && children}
    </div>
  );

  return (
    <>
      <header className="flex w-full items-center justify-between bg-blue_gray-700 px-[60px] py-[27px] md:flex-col md:gap-2.5 md:px-5">
        <div className="flex items-center justify-between md:w-full p-2">

          {/* Tutor4U logo */}
          <img
            className="common-pointer h-14 md:h-auto object-cover w-[222px] sm:w-full"
            src="images/img_union1.png"
            alt="Tutor4ULogo"
            onClick={() => navigate("/homepage")}
          />

          {/* hamburger menu */}
          <div
            className="px-10 cursor-pointer md:block hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-8 h-8 stroke-white-A700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div className={`flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-auto md:w-full ${menuOpen && "md:hidden"}`}>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start px-2.5 w-auto md:w-full">

            <NavBarItem title={"HOME"}
              onClick={() => navigate("/homepage")}
            />

            <NavBarItem title={"FOR STUDENTS"}
              children={forStudentsOpen ? <div>for students submenu</div>: <></>}
              onClick={() => setForStudentsOpen(!forStudentsOpen)}
            />

            <NavBarItem title={"FOR TUTORS"}
              children={forTutorsOpen ? <div>for tutors submenu</div>: <></>}
              onClick={() => setForTutorsOpen(!forTutorsOpen)}
            />

            <NavBarItem title={"ABOUT"} 
            />

            <NavBarItem title={"CONTACT"}
              onClick={() => navigate("/contactus")}
            />

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
