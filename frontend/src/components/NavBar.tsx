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

  //NavBarChild was created by Jason. May need Lachie to check...
  const NavBarChild: React.FC<SidebarItemProps> = ({
    title,
    onClick,
    children,
  }) => (
    <div className="relative-t-25 flex flex-col bg-blue_gray-700 text-center">
      <div
        className="common-pointer flex w-full cursor-pointer flex-row items-center gap-[5px] rounded p-3 text-white-A700 hover:bg-blue_gray-400"
        onClick={onClick}
      >
        <h3 className="text-align break-normal text-center text-gray-50">
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

  const NavBarItem: React.FC<SidebarItemProps> = ({
    title,
    onClick,
    children,
  }) => (
    <div className="lg:w-auto flex flex-col sm:w-full">
      <div
        className="common-pointer flex w-full flex-row items-center gap-[5px]"
        onClick={onClick}
      >
        <h3 className="lg:text-lg max-text-[10px] text-center text-gray-50">
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
      <header className="lg:flex-row flex w-full flex-col justify-between bg-blue_gray-700 px-[30px] py-[20px] md:gap-2.5 md:px-5">
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
            className="lg:hidden block cursor-pointer md:px-10"
            onClick={() => {
              setMenuOpen(!menuOpen);
              console.log("Hamburger");
              // Need help with the function below to show navbar items. Unsure how to write the logic
              menuOpen ? <></> : <></>;
            }}
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
          className={`lg:flex-row lg:min-w-[76.5%] lg:flex w-full items-center justify-end gap-5 p-2.5 sm:flex-col ${menuOpen ? "sm:flex" : "sm:hidden"}`}
        >
          <NavBarItem title={"HOME"} onClick={() => navigate("/homepage")} />

          <NavBarItem
            title={"FOR STUDENTS"}
            children={
              forStudentsOpen ? (
                <div className="lg:absolute lg:mt-16">
                  <NavBarChild
                    title={"Find A Tutor"}
                    onClick={() => navigate("/findatutor")}
                  />
                  <NavBarChild
                    title={"Request A Lesson"}
                    onClick={() => navigate("/requestalesson")}
                  />{" "}
                </div>
              ) : (
                <></>
              )
            }
            onClick={() => setForStudentsOpen(!forStudentsOpen)}
          />

          <NavBarItem
            title={"FOR TUTORS"}
            children={
              forTutorsOpen ? (
                <div className="lg:absolute lg:mt-16">
                  <NavBarChild
                    title={"Login"}
                    onClick={() => navigate("/loginpage")}
                  />
                </div>
              ) : (
                <></>
              )
            }
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
            size="md"
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
