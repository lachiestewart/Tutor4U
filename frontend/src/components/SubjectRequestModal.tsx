import Text from "./Text";
import Input from "./Input";
import { useState } from "react";

// import setDisplaySignup from "./LoginPage";
import Button from "./Button";

interface SignUpForm {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

type SignUpModalProps = {
  onHide: () => void;
};

const SubjectRequestModal = (props: SignUpModalProps) => {
  const [messageForm, setMessageForm] = useState<SignUpForm>({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (field: keyof SignUpForm, value: string) => {
    /** Updates the state of messageForm when a change is made to an input */
    setMessageForm((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(messageForm)
      .map((key: string) => messageForm[key as keyof SignUpForm])
      .every((str) => str !== "");
    if (!validForm) return;
    console.log("messageForm", messageForm);
    props.onHide();
    //send user info to backend and close modal
  };

  return (
    <div className="relative z-20">
      <div
        className="fixed top-0 flex h-full w-[100vw] bg-gray-900 opacity-50"
        onClick={() => props.onHide()}
      ></div>
      <div className="fixed top-1/2 left-1/2 max-h-[90vh] overflow-auto flex w-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-start rounded-[10px] bg-gray-200_01 px-[50px] py-5  md:w-auto md:px-5 sm:w-[90%]">
        <div
          className="fixed top-0 right-1 cursor-pointer p-2"
          onClick={() => props.onHide()}
        >
          <h3 className="text-gray-600">X</h3>
        </div>
        <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
          <h3>We'd love to help you find the perfect tutor :)</h3>
          <p>
            Add your details below and we'll do our best to sort one for you
          </p>
          <form
            className="flex w-full flex-col items-center justify-start gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full gap-2 md:flex-row sm:flex-col">
              <Input
                label="First Name"
                onChange={(e) => handleChange("fname", e)}
                placeholder="First Name"
                className="w-full"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
              <Input
                label="Last Name"
                onChange={(e) => handleChange("lname", e)}
                placeholder="Last Name"
                className="w-full"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
            </div>
            <Input
              label="Email"
              onChange={(e) => handleChange("email", e)}
              placeholder="eg YouAreAwesome@gmail.com"
              className="w-full"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Just so we have context, are you a...</h4>
              <select className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3">
                <option>Student</option>
                <option>Tutor</option>
                <option>Parent/ Caregiver</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex lg:flex-row w-full gap-2">
              <div className="flex w-full flex-col items-start justify-start">
                <h4>Tutoring Level Needed</h4>
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
              
              <div className="flex w-full flex-col items-start justify-start">
                <h4>Subject</h4>
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
            </div>
            <div className="flex w-full flex-col text-left text-lg">
              <h4 className="w-auto text-left text-lg">Specific Subjects / Papers (Optional)</h4>
              <input
              
                type="text"
                onChange={(e) => handleChange("papers", e)}
                placeholder="Specific university paper codes can go here"
                className="h-auto w-full items-start rounded-[10px] bg-white-A700 px-5 py-3"
              ></input>
            </div>
            <div className="flex w-full gap-2 flex-col">
              <Input
                label="Roughly, how many hours of tutoring would you like? (Hours)"
                onChange={(e) => handleChange("fname", e)}
                placeholder="eg 6"
                className="w-full"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
              <div className="flex w-full flex-col items-start justify-start">
                <h4>How urgently would you like a tutor?</h4>
                <select
                  required
                  className="h-auto w-full items-start rounded-[10px] border-0 bg-transparent bg-white-A700 px-5 py-3"
                >
                  <option>Today</option>
                  <option>Within a few days</option>
                  <option>Within a week</option>
                  <option>Within a fortnight</option>
                  <option>Within a month</option>
                  <option>Longer than a month</option>
                  
                </select>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <h4>Specific Help Needed</h4>
              <p>
                The more information you can give about the help that's needed, the better :)
              </p>
              <textarea
                required
                rows={5}
                className="h-auto w-full rounded-[10px] border-0 p-2 px-5 py-3 placeholder-gray-400"
                placeholder="Let us know what specifically you want from a tutor"
                onChange={(e) => handleChange("About you", e.target.value)}
              ></textarea>
            </div>
            
            
            
            <Button>Put in lesson request</Button>
            {/* <button
              className="w-1/2 min-w-[83px] rounded-[10px] bg-blue_gray-700 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
              type="submit"
            >
              Sign Up
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubjectRequestModal;
