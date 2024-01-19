import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, List, Text } from "components";
import NavBar from "components/NavBar";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto flex w-auto flex-col items-start justify-start gap-[30px] font-montserrat md:w-full sm:w-full">
        <NavBar/>
        <div className="main-margin-div">
          <div
            className="flex w-full flex-row items-center justify-between gap-2.5 px-[60px] py-[15px] md:flex-col md:px-10 sm:px-5
          "
          >
            <div className="flex w-auto flex-col items-start justify-start gap-6 py-[47px] sm:w-full sm:flex-1">
              <Text className="w-auto text-4xl font-bold text-black-900 md:text-[34px] sm:text-[32px]">
                Your Top Tutor Marketplace
              </Text>
              <Text className="max-w-[522px] text-lg font-semibold leading-[22.00px] text-black-900 md:max-w-full">
                We connect amazing tutors with motivated students in every
                subject at all levels right across NZ
              </Text>
              <div className="flex w-full flex-row items-center justify-start gap-2.5">
                <Button
                  className="common-pointer min-w-[132px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                  onClick={() => navigate("/findatutor")}
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Browse Tutors
                </Button>
                <Button
                  className="min-w-[162px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Register as a Tutor
                </Button>
              </div>
            </div>
            <div className="flex h-auto w-full max-w-[637px] flex-1 flex-col items-end justify-center bg-red-600 md:h-auto">
              <Text className=" max-w-[463px] text-center text-[28px] font-semibold text-black-900 md:max-w-full md:text-[26px] sm:text-2xl">
                SPLINE FIND A TUTOR DASHBOARD GRAPHIC
              </Text>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[30px] px-[60px] py-5 md:px-10 sm:px-5">
            <Text className="w-auto text-center text-4xl font-bold text-black-900 md:text-[34px] sm:text-[32px]">
              What Tutors Think Of Tutor4U
            </Text>
            <List
              className="mx-auto grid w-full max-w-[1320px] grid-cols-2 flex-row justify-between gap-5 md:flex md:grid-cols-1 md:gap-10 sm:flex-col"
              orientation="horizontal"
            >
              <div className="flex w-full max-w-[650px] flex-1 flex-col items-center justify-start gap-2.5">
                <img
                  className="h-[199px] w-[200px] rounded-[50%] md:h-auto"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
                <div className="gap-auto flex h-3 w-full flex-row items-center justify-between md:h-auto">
                  <Text
                    className="w-auto text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Dr Josh Houlton
                  </Text>
                  <img
                    className="h-12 w-[119px] object-cover md:h-auto"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-start rounded-[10px] bg-gray-400_01 p-[5px]">
                  <Text
                    className="max-w-screen-sm text-lg leading-[24.00px] text-black-900 md:max-w-full"
                    size="txtMontserratRomanRegular18"
                  >
                    <>
                      I&#39;ve been amazed with how straight-forward and simple
                      it was to sign up as a tutor with Tutor4U. Within hours my
                      profile was up on the well-designed website, with the
                      option to modify my profile with ease whenever I want.
                      It&#39;s been awesome - within weeks I had students
                      getting in contact for tutoring, allowing me to help them
                      learn the science I&#39;m passionate about whilst putting
                      some money in my back pocket! I would definitely recommend
                      Tutor4U for anyone that wants to tutor students in a
                      hassle-free and flexible way.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-1 flex-col items-center justify-start gap-2.5">
                <img
                  className="h-[200px] w-[200px] rounded-[50%] md:h-auto"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <div className="gap-auto flex h-3 w-full flex-row items-center justify-between md:h-auto">
                  <Text
                    className="w-auto text-lg text-black-900"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Ryan Dai
                  </Text>
                  <img
                    className="h-12 w-[119px] object-cover md:h-auto"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-start rounded-[10px] bg-gray-400_01 p-[5px]">
                  <Text
                    className="max-w-screen-sm text-lg leading-[24.00px] text-black-900 md:max-w-full"
                    size="txtMontserratRomanRegular18"
                  >
                    Tutor4U has been a great platform to get myself out there
                    and directly connect with students. I have been tutoring for
                    a few years now- usually I have to find the students through
                    different ways but the students now come to me. No signing
                    to be contracted with tutoring companies either. Just a
                    service that connects students directly to tutors. Easy to
                    set up and the students come rolling to you.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[30px] px-[60px] py-5 md:px-10 sm:px-5">
            <Text
              className="w-auto text-center text-4xl text-black-900 md:text-[34px] sm:text-[32px]"
              size="txtMontserratRomanBold36"
            >
              As Featured In...
            </Text>
            <div className="mx-auto flex w-full max-w-[1320px] flex-row items-center justify-between md:flex-col md:gap-10">
              <img
                className="h-[122px] w-[187px] object-cover md:h-auto sm:w-1/2"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <img
                className="h-[114px] w-[463px] object-cover md:w-1/2 sm:h-auto"
                src="images/img_image6.png"
                alt="imageSix"
              />
              <img
                className="h-[97px] w-[252px] object-cover md:h-auto sm:w-1/2"
                src="images/img_image7.png"
                alt="imageSeven"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[30px] px-[60px] py-5 md:px-10 sm:px-5">
            <Text
              className="w-auto text-center text-4xl text-black-900 md:text-[34px] sm:text-[32px]"
              size="txtMontserratRomanBold36"
            >
              Proudly Working Alongside....
            </Text>
            <div className="mx-auto flex w-full max-w-[1320px] flex-row items-center justify-between md:flex-col md:gap-10">
              <img
                className="h-[106px] w-[303px] object-cover md:w-1/2 sm:h-auto"
                src="images/img_image8.png"
                alt="imageEight"
              />
              <img
                className="h-[57px] w-[417px] object-cover md:w-1/2 sm:h-auto"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <img
                className="h-[202px] w-[202px] object-cover md:h-auto"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
          </div>
          <div className="flex h-[1636px] w-full flex-col items-center justify-start gap-[30px] px-[60px] pt-5 md:h-auto md:px-10 sm:px-5">
            <Text
              className="w-auto text-center text-4xl text-black-900 md:text-[34px] sm:text-[32px]"
              size="txtMontserratRomanBold36"
            >
              How Tutor4U Works...
            </Text>
            <Text
              className="w-auto text-center text-lg text-black-900"
              size="txtMontserratRomanSemiBold18"
            >
              Are you wanting to....
            </Text>
            <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-start gap-[30px]">
              <div className="flex h-[37px] w-full flex-col items-center justify-center md:h-auto">
                <div className="flex h-[37px] w-[400px] flex-row items-center justify-between gap-2.5 md:h-auto sm:w-full">
                  <Button
                    className="min-w-[118px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                    shape="round"
                    color="blue_gray_700"
                    size="sm"
                    variant="fill"
                  >
                    Find A Tutor
                  </Button>
                  <Button
                    className="min-w-[145px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                    shape="round"
                    color="blue_gray_700"
                    size="sm"
                    variant="fill"
                  >
                    Become A Tutor
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start pt-[25px]">
                <div className="flex w-full max-w-[1269px] flex-row items-start justify-center gap-[68px] pl-[82px] md:flex-col md:gap-10 md:pl-10 sm:pl-5">
                  <div className="flex w-[300px] flex-col items-end justify-start">
                    <Text
                      className="w-auto text-right text-lg text-black-900"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Why Find A Tutor On Tutor4U?
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex w-full flex-1 flex-col items-start justify-start gap-2.5">
                    <Text
                      className="text-sm text-black-900"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Tutor4U allows you to easily find private tutors from
                        around NZ based on your needs so that you can find one
                        as quickly as possible!
                        <br />
                        <br />
                        All our tutors have been through interviews and academic
                        checks when they register ensuring top quality of all
                        the tutors on the platform.
                      </>
                    </Text>
                    <Button
                      className="common-pointer min-w-[136px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
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
                <div className="h-5 w-full bg-transparent"></div>
                <div className="flex w-full max-w-[1269px] flex-row items-start justify-start gap-[68px] pl-[82px] md:flex-col md:gap-10 md:pl-10 sm:pl-5">
                  <div className="flex w-auto flex-col items-center justify-start">
                    <Text
                      className="w-[300px] text-right text-lg leading-[22.00px] text-black-900 md:max-w-full"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Step 1. Browse Through The Tutor4U Tutors
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex w-full flex-1 flex-col items-start justify-start gap-2.5 py-5">
                    <img
                      className="h-[279px] w-[481px] object-cover md:w-full sm:h-auto"
                      src="images/img_image11.png"
                      alt="imageEleven"
                    />
                    <Text
                      className="text-sm text-black-900"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Tutor4U has developed a state of the art filtering
                        system so that you can quickly and easily find a tutor
                        that suits your needs.
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
                    <div className="flex w-full flex-row items-center justify-start gap-2.5">
                      <Button
                        className="min-w-[197px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                        shape="round"
                        color="blue_gray_700"
                        size="sm"
                        variant="fill"
                      >
                        Browse Through Tutors
                      </Button>
                      <Button
                        className="min-w-[145px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
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
                <div className="h-5 w-full bg-transparent"></div>
                <div className="flex w-full max-w-[1269px] flex-row items-start justify-center gap-[68px] pl-[82px] md:flex-col md:gap-10 md:pl-10 sm:pl-5">
                  <div className="flex w-auto flex-col items-center justify-start">
                    <Text
                      className="w-[300px] text-right text-lg leading-[22.00px] text-black-900 md:max-w-full"
                      size="txtMontserratRomanSemiBold18"
                    >
                      <>Step 2. Read More On Each Tutor&#39;s Profile Page</>
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex w-full flex-1 flex-col items-start justify-start gap-2.5 py-5">
                    <img
                      className="h-auto w-auto object-cover md:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="text-sm text-black-900"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        Each tutor has their own personalised profile page.
                        Their pages will provide key details and information so
                        you can know a little about them before you get in
                        touch.
                        <br />
                        <br />
                        Often they will mention their background, why they are
                        qualified to tutor and their interests.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="h-5 w-full bg-transparent"></div>
                <div className="flex w-full max-w-[1269px] flex-row items-start justify-center gap-[68px] pl-[82px] md:flex-col md:gap-10 md:pl-10 sm:pl-5">
                  <div className="flex w-auto flex-col items-center justify-start">
                    <Text
                      className="w-[300px]  text-right text-lg leading-[22.00px] text-black-900 md:max-w-full"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Step 3. Get In Touch With The Tutor
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>

                  <div className="flex w-full flex-1 flex-col items-start justify-start py-5">
                    <Text
                      className="text-sm text-black-900"
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
                <div className="h-5 w-full bg-transparent"></div>
                <div className="flex w-full max-w-[1269px] flex-row items-start justify-center gap-[68px] pl-[82px] md:flex-col md:gap-10 md:pl-10 sm:pl-5">
                  <div className="flex w-auto flex-col items-center justify-start">
                    <Text
                      className="w-[300px] text-right text-lg text-black-900  "
                      size="txtMontserratRomanSemiBold18"
                    >
                      Step 4. Get Tutored!
                    </Text>
                  </div>
                  <div className="home-line-seperator"></div>
                  <div className="flex w-full flex-1 flex-col items-start justify-start py-5">
                    <Text
                      className="text-sm text-black-900"
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
