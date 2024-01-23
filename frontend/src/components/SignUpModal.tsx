import Text from "./Text";
import Input from "./Input";
import { useState } from "react";

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
    <div>
      <div className="flex absolute top-0 bg-gray-900 opacity-50 w-[100vw] h-[100vh]"></div>
      <div className="fixed top-1/2 left-1/2 mt-[54px] flex w-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:mt-0 md:px-5 md:w-auto sm:w-full">
        <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
          <Text
            className="max-w-[264px] text-center text-lg text-black-900 md:max-w-full"
            size="txtMontserratRomanSemiBold18"
          >
            Awesome to hear you want to become a Tutor!
          </Text>
          <Text
            className="max-w-[315px] text-center text-sm text-black-900 md:max-w-full"
            size="txtMontserratRomanMedium14"
          >
            Put in your details below to get access to the tutor portal
          </Text>
          <form
            className="flex w-full flex-col items-center justify-start gap-2.5"
            onSubmit={handleSubmit}
          >
            <Input
              label="First Name"
              onChange={(e) => handleChange("fname", e)}
              placeholder="first name"
              className="w-full"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
            <Input
              label="Last Name"
              onChange={(e) => handleChange("lname", e)}
              placeholder="last name"
              className="w-full"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
            <Input
              label="Email"
              onChange={(e) => handleChange("email", e)}
              placeholder="email address"
              className="w-full"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
            <Input
              label="Password"
              onChange={(e) => handleChange("password", e)}
              placeholder="password"
              className="w-full"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
            <button
              className="w-1/2 min-w-[83px] rounded-[10px] bg-blue_gray-700 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
