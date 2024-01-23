import { List, Text } from "components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(true);

    type SidebarItemProps = {
        title: string;
        src: string;
        link?: string;
    }

    const SidebarItem: React.FC<SidebarItemProps> = ({ title, src, link }) => (
        <div className="flex w-full flex-col items-center justify-between px-[10px] py-[5px]">
            <div
                className="flex w-full cursor-pointer flex-row items-center justify-start gap-5 rounded-xl p-3 hover:bg-blue-800"
                onClick={() => navigate(link)}
            >
                <img
                    className="h-10 md:h-auto object-cover w-10"
                    src={src}
                    alt={title + " icon"}
                />
                {open && (
                    <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold28WhiteA700"
                    >
                        {title}
                    </Text>
                )}
            </div>
        </div>
    );

    return (
        <div
            className="sticky justify-between left-0 top-0 bg-blue_gray-700 flex flex-col h-[100vh] items-start md:w-[380px]"
        >
            <div className="flex flex-col items-start justify-start w-full">
                {open && <img
                    className="h-[120px] w-[380px]"
                    src="images/img_sidebarheader_blue_gray_900.svg"
                    alt="sidebarheader"
                    onClick={() => setOpen(!open)}
                />}
                <div className="flex flex-col items-start w-full">
                    <SidebarItem title={"Dashboard"} src={"images/img_analytics.png"} />
                    <SidebarItem title={"Find A Tutor"} src={"images/img_graduationcap.png"} link={"/findatutor"}/>
                    <SidebarItem title={"Lesson Requests"} src={"images/img_googleforms.png"} />
                </div>
            </div>
            <div className="flex flex-col items-start w-full">
                <SidebarItem title={"Profile Settings"} src={"images/img_maleuser.png"} />
                <SidebarItem title={"Account Details"} src={"images/img_usdollarcircled.png"} />
                <SidebarItem title={"FAQs"} src={"images/img_questions.png"} />
                <SidebarItem title={"Logout"} src={"images/img_logout.png"} />
            </div>

        </div>
    )
}

export default Sidebar