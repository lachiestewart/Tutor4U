import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, List, Text } from "components";

const TutorMyBadgesPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-center mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[380px] bg-blue_gray-700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <Img
            className="h-[120px]"
            src="images/img_sidebarheader_blue_gray_900.svg"
            alt="sidebarheader"
          />
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Job Board
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Profile Settings
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Account Details
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[275px] p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              FAQs
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-end p-[9px] w-full">
            <div className="bg-blue_gray-100 h-[60px] my-1.5 rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Code of Conduct
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start p-[15px] w-full">
            <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Logout
            </Text>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-2.5 items-center justify-start max-w-[1060px] p-[30px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1000px] rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start rounded-[10px] w-full">
              <div className="flex flex-col h-[118px] md:h-auto items-start justify-start w-[120px]">
                <Img
                  className="h-[118px] md:h-auto rounded-[50%] w-full"
                  src="images/img_36477397310160.png"
                  alt="36477397310160"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start max-w-[870px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[181px]"
                  size="txtMontserratRomanBold32Black900"
                >
                  Jason Hart
                </Text>
                <Text
                  className="leading-[24.00px] text-black-900 text-xl"
                  size="txtMontserratRomanRegular20"
                >
                  <>
                    Academic Tutor - Science, Mathematics
                    <br />
                    Wellington, NZ
                    <br />
                    Tutor Rating: X X X X
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanBold32Black900"
                    >
                      My Badges
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[1000px] md:max-w-full text-black-900 text-center text-lg"
                      size="txtMontserratRomanRegular18"
                    >
                      As well as an additional income, you can get recognised by
                      how you use the platform. See below for all the badges
                      that you can earn as a tutor.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-2.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-start justify-start py-2.5 w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  Category Title (eg Lessons, Ratings, Availability etc)
                </Text>
                <div className="md:gap-10 gap-[89px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between sm:px-5 px-9 w-full">
                  <div className="flex flex-1 flex-col gap-2.5 items-center justify-start py-2.5 w-full">
                    <div className="bg-blue_gray-100 h-[172px] rounded-[50%] w-[172px]"></div>
                    <Text
                      className="text-black-900 text-center text-lg w-[53px]"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize 1
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize Description
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-center justify-start py-2.5 w-full">
                    <div className="bg-blue_gray-100 h-[172px] rounded-[50%] w-[172px]"></div>
                    <Text
                      className="text-black-900 text-center text-lg w-[53px]"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize 1
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize Description
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-center justify-start py-2.5 w-full">
                    <div className="bg-blue_gray-100 h-[172px] rounded-[50%] w-[172px]"></div>
                    <Text
                      className="text-black-900 text-center text-lg w-[53px]"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize 1
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize Description
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start py-2.5 w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanSemiBold28"
                >
                  Category Title
                </Text>
                <div className="md:gap-10 gap-[89px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between sm:px-5 px-9 w-full">
                  <div className="flex flex-1 flex-col gap-2.5 items-center justify-start py-2.5 w-full">
                    <div className="bg-blue_gray-100 h-[172px] rounded-[50%] w-[172px]"></div>
                    <Text
                      className="text-black-900 text-center text-lg w-[53px]"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize 1
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize Description
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-center justify-start py-2.5 w-full">
                    <div className="bg-blue_gray-100 h-[172px] rounded-[50%] w-[172px]"></div>
                    <Text
                      className="text-black-900 text-center text-lg w-[53px]"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize 1
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize Description
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-center justify-start py-2.5 w-full">
                    <div className="bg-blue_gray-100 h-[172px] rounded-[50%] w-[172px]"></div>
                    <Text
                      className="text-black-900 text-center text-lg w-[53px]"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize 1
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtMontserratRomanRegular18"
                    >
                      Prize Description
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default TutorMyBadgesPage;
