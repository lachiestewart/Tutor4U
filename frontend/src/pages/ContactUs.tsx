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
      <div className="mx-auto min-h-[100vh] h-auto flex flex-col items-center justify-start rounded-[10px] bg-gray-200 py-10  px-[50px] font-montserrat md:w-full md:px-5 sm:w-full">
        <div className="flex flex-col items-center gap-3">
          <img
            className="md:w-[241px] object-cover md:h-[60px] sm:w-3/4"
            src="images/img_union21.png"
            alt="unionTwentyOne"
          />
          <h4 className="pt-3"
          >
            We’d love to hear from you!
          </h4>
          <p
          >
            Fill in the details below and one of our team will get back to you as
            soon as possible :)
          </p>
          {!formComplete ? (
            <form
              className="flex w-full flex-col items-center justify-start gap-3"
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
                label="So that we can help you better, are you a..."
                onChange={(e) => handleChange("role", e)}
                placeholder="student, tutor, educational professional, parent ..."
                className="w-full"
                wrapClassName="flex h-[50px] w-full"
              ></Input>
              <Input
                label="Message"
                onChange={(e) => handleChange("message", e)}
                placeholder="Let us know how we can help you :)"
                className="w-full"
                wrapClassName="flex items-start h-[130px] w-full"
              ></Input>
              <button
                className="w-1/2 min-w-[83px] rounded-[10px] bg-blue_gray-700 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : (
            <h4 className="py-40">
              Thank you for submitting a message to the Tutor4U team, we will be
              in touch shortly!
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
