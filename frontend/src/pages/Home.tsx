import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "components/NavBar";
import Button from "components/Button";
import SignUpModal from "components/SignUpModal";

// 

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState<boolean>(true);
  const [displaySignup, setDisplaySignup] = useState<boolean>(false);
  return (
    <>
    {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      <div className="mx-auto flex w-auto flex-col items-start justify-start gap-[30px] font-montserrat md:w-full sm:w-full">
        <NavBar />

        <div className="main-margin-div">
          <div
            className="flex w-full lg:flex-row items-center justify-between gap-20 px-[60px] py-[15px] md:px-10 sm:px-5 sm:flex-col-reverse
          "
          >
            <div className="flex w-auto flex-col lg:items-start sm:items-center text-center justify-start gap-6 py-[47px] sm:w-full sm:flex-1">
              <h1>Your Top Tutor Marketplace</h1>
              <h3>
                We connect amazing tutors with motivated students in every
                subject at all levels right across NZ
              </h3>
              <div className="flex w-full flex-row items-center lg:justify-start sm:justify-center gap-2.5">
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
                  onClick={setDisplaySignup}
                >
                  Register as a Tutor
                </Button>
              </div>
            </div>
            <div className="flex h-auto w-full max-w-[637px] flex-1 flex-col items-end justify-center bg-red-600 md:h-auto">
              <h3>SPLINE FIND A TUTOR DASHBOARD GRAPHIC</h3>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[30px] px-[60px] py-5 md:px-10 sm:px-5">
            <h1>What Tutors Think Of Tutor4U</h1>
            <div className="mx-auto flex w-full max-w-[1320px] lg:flex-row sm:flex-col gap-5">
              <div className="flex w-full sm:flex-row gap-5 lg:flex-col items-center justify-start">
                <img
                  className="h-[199px] w-[200px] rounded-[50%] md:h-auto"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
                <div>
                  <div className="gap-auto flex w-full flex-row items-center justify-between md:h-auto">
                    <h4>Dr Josh Houlton</h4>
                    <img
                      className="h-12 w-[119px] object-cover"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                  <div className="flex w-full px-2 text-justify flex-col items-center justify-start rounded-[10px] bg-gray-400_01 p-[5px]">
                    <p>
                      I've been amazed with how straight-forward and simple it was
                      to sign up as a tutor with Tutor4U. Within hours my profile
                      was up on the well-designed website, with the option to
                      modify my profile with ease whenever I want. It's been
                      awesome - within weeks I had students getting in contact for
                      tutoring, allowing me to help them learn the science I'm
                      passionate about whilst putting some money in my back
                      pocket! I would definitely recommend Tutor4U for anyone that
                      wants to tutor students in a hassle-free and flexible way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:flex-row-reverse gap-5 lg:flex-col items-center justify-start">
                <img
                  className="h-[200px] w-[200px] rounded-[50%]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <div>
                  <div className="gap-auto flex w-full flex-row items-center justify-between">
                    <h4>Ryan Dai</h4>
                    <img
                      className="h-12 w-[119px] object-cover"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                  <div className="flex w-full text-justify px-2 flex-col items-center justify-start rounded-[10px] bg-gray-400_01 p-[5px]">
                    <p>
                      Tutor4U has been a great platform to get myself out there
                      and directly connect with students. I have been tutoring for
                      a few years now- usually I have to find the students through
                      different ways but the students now come to me. No signing
                      to be contracted with tutoring companies either. Just a
                      service that connects students directly to tutors. Easy to
                      set up and the students come rolling to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[30px] px-[60px] py-5 md:px-10 sm:px-5">
            <h2>As Featured In...</h2>
            <div className="lg:flex-row mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between md:gap-10 sm:gap-5">
              <img
                className="h-[122px] w-[187px] object-cover"
                src="images/img_image5.png"
                alt="Otago Daily Times Loge"
              />
              <img
                className="lg:h-[114px] lg:w-[463px] object-cover sm:h-20"
                src="images/img_image6.png"
                alt="Audacious- Powered by Startup Dunedin"
              />
              <img
                className="h-[97px] w-[252px] object-cover"
                src="images/img_image7.png"
                alt="Critic"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[30px] px-[60px] py-5 md:px-10 sm:px-5">
            <h2>Proudly Working Alongside....</h2>
            <div className="lg:flex-row mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between md:gap-10 sm:gap-5">
              <img
                className="h-[106px] w-[303px] object-cover"
                src="images/img_image8.png"
                alt="imageEight"
              />
              <img
                className="h-[57px] w-[417px] object-cover"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <img
                className="h-[202px] w-[202px] object-cover"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
          </div>
          <div className=" flex h-[1636px] w-full flex-col items-center justify-start gap-[30px] px-[60px] pt-5 md:h-auto md:px-10 sm:px-5">
            <h1>How Tutor4U Works...</h1>
            <h2>Are you wanting to....</h2>

            <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-start gap-[30px]">
              <div className="flex h-[37px] w-full flex-row items-center justify-center gap-4">
                <Button
                  className="min-w-[118px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                  onClick={() => setInfo(true)}
                >
                  Find A Tutor
                </Button>
                <Button
                  className="min-w-[145px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                  onClick={() => setInfo(false)}
                >
                  Become A Tutor
                </Button>
              </div>
              {info ? (
                <div className="info-blocks-wrapper">
                  <div className="info-blocks">
                    <h4 className="info-title">Why Find A Tutor On Tutor4U?</h4>
                    <div className="info-information">
                      <p>
                        Tutor4U allows you to easily find private tutors from
                        around NZ based on your needs so that you can find one
                        as quickly as possible!
                        <br />
                        <br />
                        All our tutors have been through interviews and academic
                        checks when they register ensuring top quality of all
                        the tutors on the platform.
                      </p>
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
                  <div className="info-blocks">
                    <h4 className="info-title">
                      Step 1. Browse Through The Tutor4U Tutors
                    </h4>
                    <div className="info-information">
                      <img
                        className="h-[279px] w-[481px] object-cover  md:h-auto"
                        src="images/img_image11.png"
                        alt="imageEleven"
                      />
                      <p>
                        
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
                          Also, if you can't find a tutor to suit your needs,
                          get in touch with us and we will do our best to find
                          one for you.
                        
                      </p>
                      <div className="flex w-full flex-row items-center justify-start gap-2.5">
                        <Button
                          className="min-w-[197px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                          shape="round"
                          color="blue_gray_700"
                          size="sm"
                          variant="fill"
                          onClick={() => navigate("/findatutor")}
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
                  <div className="info-blocks">
                    <h4 className="info-title">
                      Step 2. Read More On Each Tutor's Profile Page
                    </h4>

                    <div className="info-information">
                      <img
                        className="lg:w-1/2 h-auto w-auto"
                        src="images/img_image12.png"
                        alt="imageTwelve"
                      />
                      <p>
                        
                          Each tutor gets a personalised profile page where
                          you'll be able to see their key details and information
                          so you can know a little about them before you get in
                          touch.
                          <br />
                          <br />
                          Often they will mention talk about background, why they're
                          qualified to tutor and their interests.
                        
                      </p>
                    </div>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">
                      Step 3. Get In Touch With The Tutor
                    </h4>

                    <div className="info-information">
                      <p>
                        <>
                          So what's the next step when you think you've found
                          the right tutor? <br />
                          <br />
                          Each profile has a contact form to fill out that will
                          allow you to email the tutor directly. They will then
                          receive your details and reply to you so that you can
                          organise a tutoring session.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">Step 4. Get Tutored!</h4>
                    <div className="info-information">
                      <p>
                        
                          Now that you're in touch with the tutor, you can
                          receive their academic services.
                          <br />
                          <br />
                          It's that simple!
                        
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="info-blocks-wrapper">
                  <div className="info-blocks">
                    <h4 className="info-title">
                      Why Become A Tutor On Tutor4U?
                    </h4>
                    <div className="info-information">
                      <p>
                        Tutor4U welcomes anyone who thinks they have the
                        knowledge in a given subject and ability to teach
                        students.
                        <br />
                        <br />
                        Tutor4U allows all tutors to customise their profiles so
                        that they can work on their own terms! <br />
                        This includes choosing their own:
                        <br />- Availability
                        <br />- Subjects & Level
                        <br />- Lesson Format (Online or Remote or Both!)
                        <br />- Rate ($/hr)
                        <br />
                        <br />
                        Additionally, every tutor gets their very own detailed
                        personalised profile page where potential students can
                        contact them directly :)
                      </p>
                      <Button
                        className="min-w-[132px] cursor-pointer text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                        shape="round"
                        color="blue_gray_700"
                        size="sm"
                        variant="fill"
                        onClick={setDisplaySignup}
                      >
                        Sign Up Today
                      </Button>
                    </div>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">
                      <>Step 1. Create a Login & Complete A Tutor Application</>
                    </h4>
                    <div className="info-information">
                      <p>
                        So you want to join Tutor4U? That's fantastic!
                        <br />
                        <br />
                        The first step is to create a login. You will then get
                        taken through the onboarding process when you jump into
                        the Tutor4U login portal.
                        <br />
                        <br />
                        Once you have completed your application with all your
                        details, our team will review them to see if you're a
                        good fit for tutoring.
                      </p>
                      <Button
                        className="flex w-full min-w-[108px] cursor-pointer flex-col items-center justify-start text-center text-sm font-medium leading-[normal] !text-blue_gray-100"
                        shape="round"
                        color="blue_gray_700"
                        size="sm"
                        variant="fill"
                        onClick={setDisplaySignup}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">
                      <>Step 2. Complete The Onboarding Process</>
                    </h4>
                    <div className="info-information">
                      <img
                        className="h-[279px] w-[481px] object-cover sm:h-auto"
                        src="images/img_image12.png"
                        alt="imageTwelve"
                      />
                      <p>
                        If the Tutor4U team progresses your application, you
                        will be invited for an interview to get to know you
                        better. The key things we will want to know are why you
                        want to tutor, if you have any teaching experience and
                        what you do outside of academics :)
                        <br />
                        <br />
                        It's also a great opportunity to ask us questions if you
                        have any!
                      </p>
                    </div>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">
                      <>Step 3. Profile Approval</>
                    </h4>
                    <p className="info-information">
                      After that, we will let you know the outcome of the
                      interview. If you are accepted to be a tutor on our
                      platform, the final step is for you to accept our Code of
                      Conduct. This will be on your login portal to accept.
                    </p>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">
                      <>Step 4. Publish Your Profile</>
                    </h4>

                    <div className="info-information">
                      <p>
                        Once all the above steps are taken care of there is only
                        1 last thing to do: Publish your profile!
                        <br />
                        <br />
                        Any visitors to the site will be able to view your
                        profile and if they want to receive your tutoring
                        services, they can easily complete the form on your
                        profile page.
                      </p>
                    </div>
                  </div>
                  <div className="info-blocks">
                    <h4 className="info-title">
                      <>Step 5. Manage Your Student Enquiries & Get Paid!</>
                    </h4>

                    <div className="lg:pl-10 flex w-full flex-1 flex-col items-start justify-start border-l-2 border-gray-400 py-5 md:pl-5">
                      <p>
                        Every time that someone completes the form on your
                        profile page, you will receive the message directly to
                        your email inbox. From there it's your responsibility to
                        get back to them and manage the tutor-student
                        relationship.
                        <br />
                        <br />
                        Once you start tutoring, you can get paid by them!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
