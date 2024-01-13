import React from "react";

import { Button, Img, List, Text } from "components";

const TutorJobBoardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-start justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-blue_gray-700 flex flex-col items-center justify-start md:px-5 w-[27%] md:w-full">
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
        </div>
        <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1060px] p-[30px] md:px-5 w-full">
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
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtMontserratRomanBold32Black900"
              >
                Job Board
              </Text>
              <Text
                className="leading-[24.00px] text-black-900 text-lg"
                size="txtMontserratRomanRegular18"
              >
                <>
                  Below are the jobs that come through on our &#39;Tutor
                  Requests&#39; form from visitors to the Tutor4U platform.
                  <br />
                  <br />
                  You will be able to see all tutor requests that come through
                  but will only be able to apply to the ones that you have been
                  approved to teach. By default, the one&#39;s you can teach
                  will be at the top of your list.
                  <br />
                  <br />
                  Please note, if you apply for one of the jobs below, an email
                  will be sent to the person who made the original submission.
                  The email will include a link to your profile for them to
                  view. It will ultimately be up to the visitor if they wish to
                  book a lesson through your profile. In order for them to book,
                  please ensure you have updated your calendar with times that
                  they can book in a lesson with you. <br />
                  <br />
                  If you know someone who could be suitable for one of the jobs
                  below, we would love for you to make an introduction. Follow
                  the steps below to get in touch with them. <br />
                  <br />
                  Please note, all the jobs below are on a first come, first
                  served basis. Once there is a connection made between a
                  student and tutor, the lesson request will be taken off the
                  job board
                </>
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-2.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanBold32Black900"
                >
                  Requests for your subjects
                </Text>
                <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-start px-5 py-[15px] rounded-[10px] w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                        src="images/img_studentimg.png"
                        alt="studentimg"
                      />
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                        size="txtMontserratRomanSemiBold25"
                      >
                        [Subject Level]
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                        size="txtMontserratRomanSemiBold25"
                      >
                        [Subject]
                      </Text>
                    </div>
                    <div className="flex flex-col h-[53px] md:h-auto items-center justify-between w-[53px]">
                      <Img
                        className="h-[34px] md:h-auto object-cover w-[34px]"
                        src="images/img_expandarrow.png"
                        alt="expandarrow"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-[191px]"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Lesson Rate ($/hr):
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-48"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Lesson Frequency:
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-[157px]"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Lesson Format:
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-[233px]"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Tutoring Help Needed:
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[72px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="xs"
                        variant="fill"
                      >
                        Apply
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[132px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="xs"
                        variant="fill"
                      >
                        Refer A Friend
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="xs"
                        variant="fill"
                      >
                        Hide
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanBold32Black900"
                >
                  Requests for other subjects
                </Text>
                <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-start px-5 py-[15px] rounded-[10px] w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                        src="images/img_studentimg.png"
                        alt="studentimg"
                      />
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                        size="txtMontserratRomanSemiBold25"
                      >
                        [Subject Level]
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                        size="txtMontserratRomanSemiBold25"
                      >
                        [Subject]
                      </Text>
                    </div>
                    <div className="flex flex-col h-[53px] md:h-auto items-center justify-between w-[53px]">
                      <Img
                        className="h-[34px] md:h-auto object-cover w-[34px]"
                        src="images/img_expandarrow.png"
                        alt="expandarrow"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-[191px]"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Lesson Rate ($/hr):
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-48"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Lesson Frequency:
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-[157px]"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Lesson Format:
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-[233px]"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Tutoring Help Needed:
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[132px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="xs"
                        variant="fill"
                      >
                        Refer A Friend
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="xs"
                        variant="fill"
                      >
                        Hide
                      </Button>
                    </div>
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

export default TutorJobBoardPage;
