import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(true);

  type SidebarItemProps = {
    title: string;
    src: string;
    link?: string;
  };

  const SidebarItem: React.FC<SidebarItemProps> = ({ title, src, link }) => (
    <div className="flex w-full flex-col items-center justify-between px-[10px] py-[5px]">
      <div
        className="flex w-full cursor-pointer flex-row items-center justify-start gap-5 rounded-xl p-3 hover:bg-blue-800"
        onClick={() => link && navigate(link)}
      >
        <img className="h-8 w-8 object-cover" src={src} alt={title + " icon"} />
        {open && <h2 className="text-xl font-medium text-gray-100">{title}</h2>}
      </div>
    </div>
  );

  return (
    <div className={`lg:w-auto lg:h-[100vh] sticky left-0 top-0 flex flex-col items-start justify-between bg-blue_gray-700   ${open? "sm:w-full md:min-w-[250px] lg:min-w-[300px]": "md:w-15" }`}>
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex w-full flex-row items-center justify-start gap-2 bg-gray-800 p-2 py-4">
          <svg
            className="z-10 m-1 h-8 w-8 min-w-[20px]"
            viewBox="0 -4.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#ffffff"
            stroke="#ffffff"
            transform="rotate(90)"
            onClick={() => setOpen(!open)}
          >
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-260.000000, -6684.000000)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                      id="arrow_up-[#ffffff]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          {open && (
            <img
              src="images\img_union1.png"
              className="lg:w-[180px] h-auto w-[250px] pb-2"
            />
          )}
        </div>

        <div className="flex w-full flex-col items-start">
          <SidebarItem title={"Dashboard"} src={"images/img_analytics.png"} />
          <SidebarItem
            title={"Find A Tutor"}
            src={"images/img_graduationcap.png"}
            link={"/findatutor"}
          />
          <SidebarItem
            title={"Lesson Requests"}
            src={"images/img_googleforms.png"}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start">
        <SidebarItem
          title={"Profile Settings"}
          src={"images/img_maleuser.png"}
        />
        <SidebarItem
          title={"Account Details"}
          src={"images/img_usdollarcircled.png"}
        />
        <SidebarItem title={"FAQs"} src={"images/img_questions.png"} />
        <SidebarItem title={"Logout"} src={"images/img_logout.png"} />
      </div>
    </div>
  );
};

export default Sidebar;
