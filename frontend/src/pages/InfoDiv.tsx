import React from "react";

import { Button, Img, Text } from "components";

const InfoDiv: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto pt-[25px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-end justify-start w-[286px]">
            <Text
              className="leading-[22.00px] max-w-[286px] md:max-w-full text-black-900 text-lg text-right"
              size="txtMontserratRomanSemiBold18"
            >
              Why Become A Tutor On Tutor4U?
            </Text>
          </div>
          <Img
            className="h-full w-[138px]"
            src="images/img_centrelinediv.svg"
            alt="centrelinediv"
          />
          <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRomanMedium14"
            >
              <>
                Tutor4U welcomes anyone who thinks they have the knowledge in a
                given subject and ability to teach students.
                <br />
                <br />
                Tutor4U allows all tutors to customise their profiles so that
                they can work on their own terms! <br />
                This includes choosing their own:
                <br />- Availability
                <br />- Subjects & Level
                <br />- Lesson Format (Online or Remote or Both!)
                <br />- Rate ($/hr)‍
                <br />
                <br />
                Additionally, every tutor gets their very own detailed profile
                page where potential students can contact them directly :)
              </>
            </Text>
            <Button
              className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[132px] text-center text-sm"
              shape="round"
              color="blue_gray_700"
              size="sm"
              variant="fill"
            >
              Sign Up Today
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start max-w-[1269px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="leading-[22.00px] max-w-[286px] md:max-w-full text-black-900 text-lg text-right"
              size="txtMontserratRomanSemiBold18"
            >
              <>Step 1. Complete A Tutor Application</>
            </Text>
          </div>
          <Img
            className="h-full w-[138px]"
            src="images/img_centrelinediv.svg"
            alt="centrelinediv_One"
          />
          <div className="flex flex-1 flex-col gap-2.5 items-start justify-start py-5 w-full">
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRomanMedium14"
            >
              <>
                So you want to join Tutor4U? That&#39;s fantastic!
                <br />
                <br />
                The first step is to complete an application. You will then get
                taken through the onboarding process when you create a profile
                on our login portal.
                <br />
                <br />
                Once you have completed your application with your details, our
                team will review them to see if you’re a good fit for tutoring.
              </>
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Button
                className="!text-blue_gray-100 cursor-pointer font-medium leading-[normal] min-w-[108px] text-center text-sm"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="leading-[22.00px] max-w-[286px] md:max-w-full text-black-900 text-lg text-right"
              size="txtMontserratRomanSemiBold18"
            >
              <>Step 2. Complete The Onboarding Process</>
            </Text>
          </div>
          <Img
            className="h-full w-[138px]"
            src="images/img_centrelinediv.svg"
            alt="centrelinediv_Two"
          />
          <div className="flex flex-1 flex-col gap-2.5 items-start justify-start py-5 w-full">
            <Img
              className="h-[274px] sm:h-auto object-cover w-[366px] md:w-full"
              src="images/img_image12.png"
              alt="imageTwelve"
            />
            <Text
              className="max-w-[627px] md:max-w-full text-black-900 text-sm"
              size="txtMontserratRomanMedium14"
            >
              <>
                If the Tutor4U team progresses your application, you will be
                invited for an interview to get to know you better. The key
                things we will want to know are why you want to tutor, if you
                have any teaching experience and what you do outside of
                academics :)
                <br />
                <br />
                It&#39;s also a great opportunity to ask us questions if you
                have any!
              </>
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-black-900 text-lg text-right w-auto"
              size="txtMontserratRomanSemiBold18"
            >
              <>Step 3. Profile Approval</>
            </Text>
          </div>
          <Img
            className="h-full w-[138px]"
            src="images/img_centrelinediv.svg"
            alt="centrelinediv_Three"
          />
          <div className="flex flex-1 flex-col items-start justify-start py-5 w-full">
            <Text
              className="max-w-[627px] md:max-w-full text-black-900 text-sm"
              size="txtMontserratRomanMedium14"
            >
              After that, we will let you know the outcome of the interview. If
              you are accepted to be a tutor on our platform, the final step is
              for you to accept our Code of Conduct. This will be on your login
              portal to accept.{" "}
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-black-900 text-lg text-right w-auto"
              size="txtMontserratRomanSemiBold18"
            >
              <>Step 4. Publish Your Profile</>
            </Text>
          </div>
          <Img
            className="h-full w-[138px]"
            src="images/img_centrelinediv.svg"
            alt="centrelinediv_Four"
          />
          <div className="flex flex-1 flex-col items-start justify-start py-5 w-full">
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRomanMedium14"
            >
              <>
                Once all the above steps are taken care of there is only 1 last
                thing to do: Publish your profile!
                <br />
                <br />
                Any visitors to the site will be able to view your profile and
                if they want to receive your tutoring services, they can easily
                complete the form on your profile page.
              </>
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-center max-w-[1269px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="leading-[22.00px] max-w-[286px] md:max-w-full text-black-900 text-lg text-right"
              size="txtMontserratRomanSemiBold18"
            >
              <>Step 5. Manage Your Student Enquiries & Get Paid!</>
            </Text>
          </div>
          <Img
            className="h-full w-[138px]"
            src="images/img_centrelinediv.svg"
            alt="centrelinediv_Five"
          />
          <div className="flex flex-1 flex-col items-start justify-start py-5 w-full">
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRomanMedium14"
            >
              <>
                Every time that someone completes the form on your profile page,
                you will receive the message directly to your email inbox. From
                there it&#39;s your responsibility to get back to them and
                manage the tutor-student relationship.
                <br />
                <br />
                Once you start tutoring, you can get paid by them!{" "}
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDiv;
