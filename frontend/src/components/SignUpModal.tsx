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

const SignUpModal = (props: SignUpModalProps) => {
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
    <div className="relative z-10">
      <div className="fixed top-0 flex h-full w-[100vw] bg-gray-900 opacity-50" onClick={() => props.onHide()}></div>
      
        <div className="fixed top-1/2 left-1/2 mt-[54px] flex w-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:mt-0 md:w-auto md:px-5 sm:w-[90%]">
          <div className="fixed top-0 right-1 p-2 cursor-pointer" onClick={() => props.onHide()}
        
          >
            <h3 className="text-gray-600">X</h3>
          </div>
          <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
            <h3
            >
              Epic to hear you want to become a tutor!
            </h3>
            <p className="text-center text-sm"
            >
              Put in your details below to get access to the tutor portal and
              we'll let you know the next steps
            </p>
            <form
              className="flex w-full flex-col items-center justify-start gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex md:flex-row sm:flex-col w-full gap-2">
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
              <div className="flex w-full flex-col text-left text-lg">
                <h4
        
                  className="w-auto text-left text-lg"
                >
                  Password
                </h4>
                <input
                  required
                  type="password"
                  onChange={(e) => handleChange("password", e)}
                  placeholder="Hopefully a stronger password than abcde12345"
                  className="h-auto w-full items-start rounded-[10px] bg-white-A700 px-5 py-3"
                ></input>
              </div>
              <div className="flex w-full flex-col text-left text-lg">
                <h4
        
                  className="w-auto text-left text-lg"
                >
                  Confirm Password
                </h4>
                <input
                  required
                  type="password"
                  onChange={(e) => handleChange("password", e)}
                  placeholder="Just to make sure it's correct :D"
                  className="h-auto w-full items-start rounded-[10px] bg-white-A700 px-5 py-3"
                ></input>
              </div>
              <Button>Sign Me Up!</Button>
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

export default SignUpModal;
