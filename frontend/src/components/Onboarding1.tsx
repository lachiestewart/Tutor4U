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
              complete in order to get fully onboarded. Once you complete all of
              them, you will have complete access to all the functionalities of
              the Tutor4U platform. But don't worry, we've tried to make the
              process as streamlined as possible so that you can start getting
              students as quickly as possible!
            </p>
            <img
              className="lg:w-[70%] object-cover sm:w-[100%]"
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

          {/* <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>First Name</h4>
              <Input
                name="emailtextentry"
                placeholder="Your first name"
                className="w-full p-0"
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
            </div> */}

          <Input
            name="DateOfBirth"
            placeholder="dd/mm/yyyy"
            className="w-full p-0"
            label="Date of Birth"
            type="date"
            required
          ></Input>

          <div className="flex w-full flex-row items-start justify-start gap-2.5 md:flex-row sm:flex-col">
            <div className="flex w-full flex-1 flex-col items-start justify-start">
              <h4>Profile Photo</h4>
              <div className="flex w-auto flex-row items-center justify-start gap-[10px] px-2.5 py-[5px]">
                {/* See below options. Ideally they can click on the image and upload their profile photo as well as the button */}
                <input
                  type="image"
                  src="images/img_36477397310160_64x63.png"
                  alt="Submit"
                  width="64"
                  height="64"
                ></input>
                <img
                  className="h-16 w-[63px] rounded-[31px] object-cover md:h-auto"
                  src="images/img_36477397310160_64x63.png"
                  alt="Profile photo"
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
              <h4 className={`w-auto text-left  `}>Gender</h4>
              <select className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3">
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
              </select>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start gap-5">
            <h3>Contact Details</h3>
            <Input
              description="Note: Tutor4U won't publish your number publicly. This is just for the Tutor4U team in case we need to get in touch with you"
              label="Mobile Number"
              name="PhoneNumber"
              placeholder="027 1234 567"
              required
              type="number"
            ></Input>
            <Input
              label="Address"
              placeholder="Street Address"
              description="Note: Tutor4U won't publish your address publicly. This is just for the Tutor4U team in case we want to send something to our tutors :)"
            ></Input>
            <Input placeholder="Suburb"></Input>
            <Input placeholder="City/ Town"></Input>
            <Input placeholder="Country"></Input>

            <h3>Academic Details</h3>
            <div className="lg:flex-row flex w-full flex-col items-start justify-start gap-2.5">
              <Input
                name="School"
                placeholder=""
                label="School Attended"
              ></Input>
              <Input
                name="university"
                label="University Attended (Optional)"
              ></Input>
            </div>
            <Input
              name="Academic qualification"
              label="Highest Academic Qualification"
            ></Input>

            <div className="flex w-full items-start justify-start gap-2.5 md:flex-row sm:flex-col">
              <div className="flex w-full flex-1 flex-col items-center justify-start">
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
              <div className="flex w-full flex-1 flex-col items-center justify-start">
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
                  Select File for Academic Transcript Upload
                </Button>
              </div>
            </div>
            <h3>Professional & Tutoring Details</h3>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>About You</h4>
              <p>
                If your application is accepted, this will be what visitors read
                on your profile page so try to advertise yourself well!
              </p>
              <textarea
                required
                rows={5}
                className="h-auto w-full rounded-[10px] border-0 p-2 px-5 py-3 placeholder-gray-400"
                placeholder="Some things you could include are your teaching history, what you've done academically and what other interests you have. Try to be as friendly (but professional) as possible :)"
                onChange={(e) => handleChange("About you", e.target.value)}
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Highest Academic Level You Can Tutor</h4>
              <select className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3">
                <option>Primary School (Yrs 1-6)</option>
                <option>Intermediate School(Yrs 7-8)</option>
                <option>Early Secondary School(Yrs 9-10)</option>
                <option>NCEA Level 1 (Yr 11)</option>
                <option>NCEA Level 2(Yr 12)</option>
                <option>NCEA Level 3(Yr 13)</option>
                <option>NCEA Scholarship(Yr 13)</option>
                <option>University Y1</option>
                <option>University Y2</option>
                <option>University Y3</option>
                <option>University Y4</option>
                <option>University Postgraduate Level</option>
              </select>
            </div>
            <div className="lg:flex-row flex w-full flex-col gap-2">
              <div className="flex w-full flex-col items-start justify-start">
                <h4>Primary Subject You Can Tutor</h4>
                <select
                  required
                  className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3"
                >
                  <option>Accounting</option>
                  <option>Another Language</option>
                  <option>Art History</option>
                  <option>Biology</option>
                  <option>Business Studies</option>
                  <option>Chemistry</option>
                  <option>Chinese</option>
                  <option>Classical Studies</option>
                  <option>Drama</option>
                  <option>Economics</option>
                  <option>English</option>
                  <option>French</option>
                  <option>Geography</option>
                  <option>Health</option>
                  <option>History</option>
                  <option>Mathematics</option>
                  <option>Music</option>
                  <option>Other</option>
                  <option>Physical Education</option>
                  <option>Physics</option>
                  <option>Sciences</option>
                  <option>Technology</option>
                  <option>Visual Arts</option>
                </select>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <h4>Secondary Subject You Can Tutor (Optional)</h4>
                <select className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3">
                  <option>Accounting</option>
                  <option>Another Language</option>
                  <option>Art History</option>
                  <option>Biology</option>
                  <option>Business Studies</option>
                  <option>Chemistry</option>
                  <option>Chinese</option>
                  <option>Classical Studies</option>
                  <option>Drama</option>
                  <option>Economics</option>
                  <option>English</option>
                  <option>French</option>
                  <option>Geography</option>
                  <option>Health</option>
                  <option>History</option>
                  <option>Mathematics</option>
                  <option>Music</option>
                  <option>Other</option>
                  <option>Physical Education</option>
                  <option>Physics</option>
                  <option>Sciences</option>
                  <option>Technology</option>
                  <option>Visual Arts</option>
                </select>
              </div>
            </div>
            <Input
              name="courses"
              label="Specific Courses / Papers You Can Tutor"
              description="This can be super helpful for when students search for tutors!"
              placeholder="Include specific university courses in here (eg BIOSCI107)"
            ></Input>
            <Input
              name="location"
              label="Usual Tutoring Location"
              placeholder="Just the city is fine"
            ></Input>
            <Input
              label="Hourly Rate ($XX/hr)"
              description="Note: We don't allow you to put less than the NZ minimum wage. This can always be adjusted later if you get accepted"
              type="number"
              placeholder="If you don't know, we recommend starting at $25 :)"
            ></Input>
            <div className="flex w-full flex-row gap-2">
              <div className="flex w-full flex-col items-start justify-start">
                <h4>Tutorial Format</h4>
                <select
                  required
                  className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3"
                >
                  <option>Face-To-Face</option>
                  <option>Online</option>
                  <option>Face-To-Face & Online</option>
                </select>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <h4>Tutoring Availability</h4>
                <select className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3">
                  <option>Available</option>
                  <option>Limited Availability</option>
                  <option>Not Available</option>
                </select>
              </div>
            </div>
            <div className="flex w-full items-start justify-start gap-2.5 md:flex-row sm:flex-row">
              <Input
                label="LinkedIn Link (Optional)"
                placeholder="https://www.linkedin.com/in/yourlinkedin"
              ></Input>
              <Input
                label="Website Link (Optional)"
                placeholder="https://www.yourwebsite.com"
              ></Input>
            </div>
          </div>
          <Button
            className="min-w-[161px] cursor-pointer text-center text-sm font-medium leading-[normal]"
            shape="round"
            color="blue_gray_700"
            size="sm"
            variant="fill"
            type="Submit"
          >
            Submit My Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding1;
