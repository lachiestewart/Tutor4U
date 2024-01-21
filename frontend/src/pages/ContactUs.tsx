import { useState } from "react";

import { Input, Text } from "components";
import NavBar from "components/NavBar";

interface MessageForm {
  fname: string;
  lname: string;
  email: string;
  role: string;
  message: string;
}

const ContactUs = () => {
  const [messageForm, setMessageForm] = useState<MessageForm>({
    fname: "",
    lname: "",
    email: "",
    role: "",
    message: "",
  });
  const [formComplete, setFormComplete] = useState<boolean>(false);

  const handleChange = (field: keyof MessageForm, value: string) => {
    /** Updates the state of messageForm when a change is made to an input */
    setMessageForm((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(messageForm)
      .map((key: string) => messageForm[key])
      .every((str) => str !== "");
    if (!validForm) return;
    console.log("messageForm", messageForm);
    setFormComplete(true);
    //send message to backend or email
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto flex w-auto flex-col items-center bg-gray-200 font-montserrat md:w-full sm:w-full">
        <div className="w-auto rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:px-5 sm:w-full">
          <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
            <img
              className="h-[60px] w-[241px] object-cover md:h-auto sm:w-full"
              src="images/img_union21.png"
              alt="unionTwentyOne"
            />
            <Text
              className="w-[254px] text-center text-lg text-black-900"
              size="txtMontserratRomanSemiBold18"
            >
              We’d love to hear from you!
            </Text>
            <Text
              className="max-w-[315px] text-center text-sm text-black-900 md:max-w-full"
              size="txtMontserratRomanMedium14"
            >
              Fill in the details below and one of our team will get back to you
              as soon as possible :)
            </Text>

            {!formComplete ? (
              <form
                className="flex w-full flex-col items-center justify-start gap-2.5"
                onSubmit={handleSubmit}
              >
                <Input
                  label="First Name"
                  onChange={(e) => handleChange("fname", e)}
                  placeHolder="first name"
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="Last Name"
                  onChange={(e) => handleChange("lname", e)}
                  placeHolder="last name"
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="Email"
                  onChange={(e) => handleChange("email", e)}
                  placeHolder="email address"
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="For context are you a..."
                  onChange={(e) => handleChange("role", e)}
                  placeHolder="student, tutor, parent ..."
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="Message"
                  onChange={(e) => handleChange("message", e)}
                  placeHolder="message"
                  className="w-full"
                  wrapClassName="flex h-[130px] w-full"
                ></Input>

                <button
                  className="w-1/2 min-w-[83px] rounded-[10px] bg-blue_gray-700 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            ) : (
              <Text>
                Thank you for submitting a message to the Tutor4U team, we will
                be in touch shortly
              </Text>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
