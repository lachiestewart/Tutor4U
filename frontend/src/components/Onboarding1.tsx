import React from "react";
import Button from "./Button";
import Input from "./Input";

const Onboarding1: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex w-full flex-col items-center justify-start gap-2.5">
          <h1>Welcome to Tutor4U!</h1>
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <p className="text-center">
              It's so awesome to see that you are taking your first steps in
              joining our amazing community of tutors!
              <br />
              <br />
              As you can see below, there are a few steps you will need to
              complete in order to get fully onboarded. Once you complete all of them, 
              you will have complete access to all the
              functionalities of the Tutor4U platform. But don't worry, we've
              tried to make the process as streamlined as possible so that you
              can start getting students as quickly as possible!
            </p>
            <img
              className="lg:w-[70%] sm:w-[100%] object-cover"
              src="images/img_createtutor4ulogin.png"
              alt="Stage 1: Tutor4U onboarding journey"
            />
            <p className="text-center">
              Please complete all the details below. Once submitted, the Tutor4U
              team will review your application. Once it's reviewed, you will be
              informed of the outcome and whether you will be invited for an
              interview.
              <br />
              <br />
              All fields are required unless otherwise stated. Please know, you
              will be able to change your profile settings if your application
              is accepted.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-start rounded-[10px] bg-blue_gray-100">
        <div className="flex w-full flex-col items-start justify-start gap-5 rounded-[10px] bg-blue_gray-100 p-[15px]">
          <h3>Personal Details</h3>
          <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>First Name</h4>
              <Input
                name="emailtextentry"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>Last Name</h4>
              <Input
                name="emailtextentry_One"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>Email Address</h4>
              <Input
                name="emailtextentry_Two"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>Phone Number</h4>
              <Input
                name="emailtextentry_Three"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start">
            <h4>Date of Birth</h4>
            <Input
              name="emailtextentry_Four"
              placeholder=""
              className="w-full p-0"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>Profile Photo</h4>
              <div className="flex w-auto flex-row items-center justify-start gap-[50px] px-2.5 py-[5px]">
                <img
                  className="h-16 w-[63px] rounded-[31px] object-cover md:h-auto"
                  src="images/img_36477397310160_64x63.png"
                  alt="Stage one of tutor onboarding journey"
                />
                <Button
                  className="min-w-[164px] cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Add Profile Picture
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>Gender</h4>
              <Input
                name="emailtextentry_Five"
                placeholder=""
                className="w-full p-0"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <div className="flex w-full flex-col items-start justify-start">
              <h4>About You</h4>
              <p>
                If your application is accepted, this will be what visitors read
                on your profile page so try to advertise yourself well!
              </p>
              <div className="h-[180px] w-full rounded-[10px] bg-white-A700"></div>
            </div>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>LinkedIn Link (Optional)</h4>
                <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>Website Link (Optional)</h4>
                <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
              </div>
            </div>
            <h3>Academic Details</h3>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>School Attended</h4>
                <Input
                  name="emailtextentry_Nine"
                  placeholder=""
                  className="w-full p-0"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>University Attended (Optional)</h4>
                <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Highest Academic Qualification</h4>
              <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
            </div>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4 className="w-full text-center">CV Upload</h4>
                <Button
                  className="w-full cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Select File for CV Upload
                </Button>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4 className="w-full text-center">
                  Academic Transcript Upload
                </h4>
                <Button
                  className="w-full cursor-pointer text-center text-sm font-medium leading-[normal]"
                  shape="round"
                  color="blue_gray_700"
                  size="sm"
                  variant="fill"
                >
                  Select File for CV Upload
                </Button>
              </div>
            </div>
            <h3>Tutoring Details</h3>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Highest Academic Level You Can Tutor</h4>
              <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
            </div>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>Primary Subject You Can Tutor</h4>
                <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>Secondary Subject You Can Tutor (Optional)</h4>
                <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Specific Courses / Papers You Can Tutor</h4>
              <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Usual Tutoring Location</h4>
              <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Hourly Rate ($XX/hr)</h4>
              <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
            </div>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-col">
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>Tutorial Format</h4>
                <Input
                  name="emailtextentry_Eighteen"
                  placeholder=""
                  className="w-full p-0"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-start">
                <h4>Tutoring Availability</h4>
                <div className="h-[50px] w-full rounded-[10px] bg-white-A700"></div>
              </div>
            </div>
          </div>
          <Button
            className="min-w-[161px] cursor-pointer text-center text-sm font-medium leading-[normal]"
            shape="round"
            color="blue_gray_700"
            size="sm"
            variant="fill"
          >
            Submit My Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding1;
