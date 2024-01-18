import { Img, List, Text } from "components";

const Sidebar = () => {
    return (
        <List
            className="sticky justify-between left-0 top-0 bg-blue_gray-700 flex flex-col h-[100vh] items-start md:px-5 w-[380px] sm:w-full"
        >
            <div className="flex flex-col items-start justify-start my-0 w-full">
                <Img
                    className="h-[120px] w-[380px]"
                    src="images/img_sidebarheader_blue_gray_900.svg"
                    alt="sidebarheader"
                />
                <div className="flex flex-col items-start justify-center w-full">
                    <div className="sidebar-items-outside-div">
                        <div className="sidebar-items-inside-div">
                            <Img
                                className="h-10 md:h-auto object-cover w-10"
                                src="images/img_analytics.png"
                                alt="analytics"
                            />
                            <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                                size="txtMontserratRomanSemiBold28WhiteA700"
                            >
                                Dashboard
                            </Text>
                        </div>
                    </div>
                    <div className="sidebar-items-outside-div">
                        <div className="sidebar-items-inside-div">
                            <Img
                                className="h-10 md:h-auto object-cover w-10"
                                src="images/img_graduationcap.png"
                                alt="graduationcap"
                            />
                            <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                                size="txtMontserratRomanSemiBold28WhiteA700"
                            >
                                Find A Tutor
                            </Text>
                        </div>
                    </div>
                    <div className="sidebar-items-outside-div">
                        <div className="sidebar-items-inside-div">
                            <Img
                                className="h-10 md:h-auto object-cover w-10"
                                src="images/img_googleforms.png"
                                alt="googleforms"
                            />
                            <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                                size="txtMontserratRomanSemiBold28WhiteA700"
                            >
                                Lessons Requests
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-center my-0 w-full">
                <div className="sidebar-items-outside-div">
                    <div className="sidebar-items-inside-div">
                        <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_maleuser.png"
                            alt="maleuser"
                        />
                        <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold28WhiteA700"
                        >
                            Profile Settings
                        </Text>
                    </div>
                </div>
                <div className="sidebar-items-outside-div">
                    <div className="sidebar-items-inside-div">
                        <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_usdollarcircled.png"
                            alt="usdollarcircled"
                        />
                        <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold28WhiteA700"
                        >
                            Account Details
                        </Text>
                    </div>
                </div>
                <div className="sidebar-items-outside-div">
                    <div className="sidebar-items-inside-div">
                        <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_questions.png"
                            alt="questions"
                        />
                        <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold28WhiteA700"
                        >
                            FAQs
                        </Text>
                    </div>
                </div>
                <div className="sidebar-items-outside-div">
                    <div className="sidebar-items-inside-div">
                        <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_logout.png"
                            alt="logout"
                        />
                        <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold28WhiteA700"
                        >
                            Logout
                        </Text>
                    </div>
                </div>
            </div>
        </List>
    )
}

export default Sidebar