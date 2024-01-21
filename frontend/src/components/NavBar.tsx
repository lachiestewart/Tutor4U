import React, { ReactNode, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const [forStudentsOpen, setForStudentsOpen] = useState<boolean>(false);
  const [forTutorsOpen, setForTutorsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  type SidebarItemProps = {
    title: string;
    onClick?: () => void;
    children?: ReactNode;
  };

  const NavBarItem: React.FC<SidebarItemProps> = ({
    title,
    onClick,
    children,
  }) => (
    <div className="flex flex-col">
      <div
        className="common-pointer flex flex-row w-auto items-center gap-[5px]"
        onClick={onClick}
      >
        <h3 className="text-gray-50 text-align text-center break-normal"
        >
          {title}
        </h3>
        {!!children && (
          <img
            className="h-5 w-5 object-cover md:h-auto"
            src="images/img_chevrondown.png"
            alt="chevrondown"
          />
        )}
      </div>
      {!!children && children}
    </div>
  );

  return (
    <>
      <header className="flex w-full items-center justify-between bg-blue_gray-700 px-[60px] py-[27px] flex-col lg:flex-row md:gap-2.5 md:px-5">
        <div className="flex items-center justify-between p-2 md:w-full">
          {/* Tutor4U logo */}
          <img
            className="common-pointer h-14 w-[222px] object-cover md:h-auto"
            src="images/img_union1.png"
            alt="Tutor4ULogo"
            onClick={() => navigate("/homepage")}
          />

          {/* hamburger menu */}
          <div
            className="lg:hidden block cursor-pointer px-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-8 w-8 stroke-white-A700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div
          className="lg:flex-row min-w-[900px] flex bg-red-500 items-center justify-end gap-5 p-2.5 md:flex-col"
        >
          <NavBarItem title={"HOME"} onClick={() => navigate("/homepage")} />

          <NavBarItem
            title={"FOR STUDENTS"}
            children={
              forStudentsOpen ? (
                <div className="lg:absolute item-center xl:mt-20 text-center">
                  <div className="w-full rounded bg-blue_gray-700 p-3 text-white-A700 hover:bg-blue_gray-400">
                    Item 1
                  </div>
                  <div>Item 1</div>
                </div>
              ) : (
                <></>
              )
            }
            onClick={() => setForStudentsOpen(!forStudentsOpen)}
          />

          <NavBarItem
            title={"FOR TUTORS"}
            children={forTutorsOpen ? <div>for tutors submenu</div> : <></>}
            onClick={() => setForTutorsOpen(!forTutorsOpen)}
          />

          <NavBarItem title={"ABOUT"} />

          <NavBarItem
            title={"CONTACT"}
            onClick={() => navigate("/contactus")}
          />

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

NavBar.defaultProps = {};

export default NavBar;
