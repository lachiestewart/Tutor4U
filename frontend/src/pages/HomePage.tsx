import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import NavBar from "components/NavBar";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat gap-[30px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <NavBar className="bg-purple-primary flex md:flex-col md:gap-2.5 items-center justify-between md:px-5 px-[60px] py-[27px] w-full" />
        <div className="main-margin-div">
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between md:px-10 sm:px-5 px-[60px] py-[15px] w-full
          ">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start py-[47px] w-auto sm:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] font-bold text-black-900 w-auto"
              >
                Your Top Tutor Marketplace
              </Text>
              <Text
                className="leading-[22.00px] max-w-[522px] md:max-w-full text-black-900 font-semibold text-lg"
              >
                We connect amazing tutors with motivated students in every subject
                at all levels right across NZ
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                <Button
                  className="common-pointer !text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[132px] text-center text-sm"
                  onClick={() => navigate("/findatutor")}
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Browse Tutors
                </Button>
                <Button
                  className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[162px] text-center text-sm"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Register as a Tutor
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col bg-red-600 h-auto md:h-auto items-end justify-center max-w-[637px] w-full">
              <Text
                className=" max-w-[463px] md:max-w-full font-semibold sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
              >
                SPLINE FIND A TUTOR DASHBOARD GRAPHIC
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[60px] py-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] font-bold text-black-900 text-center w-auto"
            >
              What Tutors Think Of Tutor4U
            </Text>
            <List
              className="md:flex sm:flex-col flex-row md:gap-10 gap-5 grid md:grid-cols-1 grid-cols-2 justify-between max-w-[1320px] mx-auto w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-2.5 items-center justify-start max-w-[650px] w-full">
                <Img
                  className="h-[199px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
                <div className="flex flex-row gap-auto h-3 md:h-auto items-center justify-between w-full">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Dr Josh Houlton
                  </Text>
                  <Img
                    className="h-12 md:h-auto object-cover w-[119px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="bg-gray-400_01 flex flex-col items-center justify-start p-[5px] rounded-[10px] w-full">
                  <Text
                    className="leading-[24.00px] md:max-w-full max-w-screen-sm text-black-900 text-lg"
                    size="txtMontserratRomanRegular18"
                  >
                    <>
                      I&#39;ve been amazed with how straight-forward and simple it
                      was to sign up as a tutor with Tutor4U. Within hours my
                      profile was up on the well-designed website, with the option
                      to modify my profile with ease whenever I want. It&#39;s
                      been awesome - within weeks I had students getting in
                      contact for tutoring, allowing me to help them learn the
                      science I&#39;m passionate about whilst putting some money
                      in my back pocket! I would definitely recommend Tutor4U for
                      anyone that wants to tutor students in a hassle-free and
                      flexible way.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <div className="flex flex-row gap-auto h-3 md:h-auto items-center justify-between w-full">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Ryan Dai
                  </Text>
                  <Img
                    className="h-12 md:h-auto object-cover w-[119px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="bg-gray-400_01 flex flex-col items-center justify-start p-[5px] rounded-[10px] w-full">
                  <Text
                    className="leading-[24.00px] md:max-w-full max-w-screen-sm text-black-900 text-lg"
                    size="txtMontserratRomanRegular18"
                  >
                    Tutor4U has been a great platform to get myself out there and
                    directly connect with students. I have been tutoring for a few
                    years now- usually I have to find the students through
                    different ways but the students now come to me. No signing to
                    be contracted with tutoring companies either. Just a service
                    that connects students directly to tutors. Easy to set up and
                    the students come rolling to you.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[60px] py-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
              size="txtMontserratRomanBold36"
            >
              As Featured In...
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mx-auto w-full">
              <Img
                className="h-[122px] md:h-auto object-cover sm:w-1/2 w-[187px]"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <Img
                className="h-[114px] sm:h-auto object-cover md:w-1/2 w-[463px]"
                src="images/img_image6.png"
                alt="imageSix"
              />
              <Img
                className="h-[97px] md:h-auto object-cover sm:w-1/2 w-[252px]"
                src="images/img_image7.png"
                alt="imageSeven"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[60px] py-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
              size="txtMontserratRomanBold36"
            >
              Proudly Working Alongside....
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mx-auto w-full">
              <Img
                className="h-[106px] sm:h-auto object-cover md:w-1/2 w-[303px]"
                src="images/img_image8.png"
                alt="imageEight"
              />
              <Img
                className="h-[57px] sm:h-auto object-cover md:w-1/2 w-[417px]"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <Img
                className="h-[202px] md:h-auto object-cover w-[202px]"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[30px] h-[1636px] md:h-auto items-center justify-start pt-5 md:px-10 sm:px-5 px-[60px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
              size="txtMontserratRomanBold36"
            >
              How Tutor4U Works...
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-auto"
              size="txtMontserratRomanSemiBold18"
            >
              Are you wanting to....
            </Text>
            <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1320px] mx-auto w-full">
              <div className="flex flex-col h-[37px] md:h-auto items-center justify-center w-full">
                <div className="flex flex-row gap-2.5 h-[37px] md:h-auto items-center justify-between w-[400px] sm:w-full">
                  <Button
                    className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[118px] text-center text-sm"
                    shape="round"
                    color="blue_gray_700"
                    size="sm"
                    variant="fill"
                  >
                    Find A Tutor
                  </Button>
                  <Button
                    className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[145px] text-center text-sm"
                    shape="round"
                    color="blue_gray_700"
                    size="sm"
                    variant="fill"
                  >
                    Become A Tutor
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-[25px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] md:pl-10 sm:pl-5 pl-[82px] w-full">
                  <div className="flex flex-col items-end justify-start w-[300px]">
                    <Text
                      className="text-black-900 text-lg text-right w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Why Find A Tutor On Tutor4U?
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Tutor4U allows you to easily find private tutors from
                        around NZ based on your needs so that you can find one as
                        quickly as possible!
                        <br />
                        <br />
                        All our tutors have been through interviews and academic
                        checks when they register ensuring top quality of all the
                        tutors on the platform.
                      </>
                    </Text>
                    <Button
                      className="common-pointer !text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[136px] text-center text-sm"
                      onClick={() => navigate("/findatutor")}
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      See Our Tutors
                    </Button>
                  </div>
                </div>
                <div className="bg-transparent h-5 w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start max-w-[1269px] md:pl-10 sm:pl-5 pl-[82px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="leading-[22.00px] w-[300px] md:max-w-full text-black-900 text-lg text-right"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Step 1. Browse Through The Tutor4U Tutors
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start py-5 w-full">
                    <Img
                      className="h-[279px] sm:h-auto object-cover w-[481px] md:w-full"
                      src="images/img_image11.png"
                      alt="imageEleven"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Tutor4U has developed a state of the art filtering system
                        so that you can quickly and easily find a tutor that suits
                        your needs.
                        <br />
                        <br />
                        You can search based on:
                        <br />- Subjects
                        <br />- Tutor rate
                        <br />- Teaching level
                        <br />- Location
                        <br />- Lesson format
                        <br />- Gender
                        <br />- Availability
                        <br />
                        <br />
                        Also, if you can&#39;t find a tutor to suit your needs,
                        get in touch with us and we will do our best to find one
                        for you.
                      </>
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Button
                        className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[197px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="sm"
                        variant="fill"
                      >
                        Browse Through Tutors
                      </Button>
                      <Button
                        className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[145px] text-center text-sm"
                        shape="round"
                        color="blue_gray_700"
                        size="sm"
                        variant="fill"
                      >
                        Request A Tutor
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent h-5 w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] md:pl-10 sm:pl-5 pl-[82px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="leading-[22.00px] w-[300px] md:max-w-full text-black-900 text-lg text-right"
                      size="txtMontserratRomanSemiBold18"
                    >
                      <>Step 2. Read More On Each Tutor&#39;s Profile Page</>
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start py-5 w-full">
                    <Img
                      className="h-auto object-cover w-auto md:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Each tutor has their own personalised profile page. Their
                        pages will provide key details and information so you can
                        know a little about them before you get in touch.
                        <br />
                        <br />
                        Often they will mention their background, why they are
                        qualified to tutor and their interests.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-transparent h-5 w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] md:pl-10 sm:pl-5 pl-[82px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="leading-[22.00px]  w-[300px] md:max-w-full text-black-900 text-lg text-right"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Step 3. Get In Touch With The Tutor
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  
                  <div className="flex flex-1 flex-col items-start justify-start py-5 w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        So what&#39;s the next step when you think you&#39;ve
                        found the right tutor? <br />
                        <br />
                        Each profile has a contact form to fill out that will
                        allow you to email the tutor directly. They will then
                        receive your details and reply to you so that you can
                        organise a tutoring session.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-transparent h-5 w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] md:pl-10 sm:pl-5 pl-[82px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-lg text-right w-[300px]  "
                      size="txtMontserratRomanSemiBold18"
                    >
                      Step 4. Get Tutored!
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex flex-1 flex-col items-start justify-start py-5 w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Now that you&#39;re in touch with the tutor, you can
                        receive their academic services.
                        <br />
                        <br />
                        It&#39;s that simple!
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
