import { useState } from "react";

import { Button, Img, Input, Text } from "components";
import NavBar from "components/NavBar";

interface MessageForm {
  fname: string;
  lname: string;
  email: string;
  role: string;
  message: string;
};

const ContactUs = () => {

  const [messageForm, setMessageForm] = useState<MessageForm>({
    fname: "",
    lname: "",
    email: "",
    role: "",
    message: ""
  });
  const [formComplete, setFormComplete] = useState<boolean>(false);

  
  const handleChange = (field: keyof MessageForm, value: string) => {
    /** Updates the state of messageForm when a change is made to an input */
    setMessageForm(prevState => ({ ...prevState, [field]: value }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(messageForm).map((key: string) => messageForm[key]).every(str => str !== "");
    if (!validForm) return;
    console.log("messageForm", messageForm);
    setFormComplete(true);
    //send message to backend or email
  }

  return (
    <>
      <NavBar />
      <div className="bg-gray-200 flex flex-col font-montserrat items-center mx-auto w-auto sm:w-full md:w-full">

        <div className="bg-gray-200_01 md:px-5 px-[50px] py-5 rounded-[10px] w-auto sm:w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto sm:w-full">
            <Img
              className="h-[60px] md:h-auto object-cover w-[241px] sm:w-full"
              src="images/img_union21.png"
              alt="unionTwentyOne"
            />
            <Text
              className="text-black-900 text-center text-lg w-[254px]"
              size="txtMontserratRomanSemiBold18"
            >
              We’d love to hear from you!
            </Text>
            <Text
              className="max-w-[315px] md:max-w-full text-black-900 text-center text-sm"
              size="txtMontserratRomanMedium14"
            >
              Fill in the details below and one of our team will get back to
              you as soon as possible :)
            </Text>

            {!formComplete ?
              <form
                className="flex flex-col gap-2.5 items-center justify-start w-full"
                onSubmit={handleSubmit}
              >

                <Input
                  label="First Name"
                  onChange={e => handleChange('fname', e)}
                  placeholder="first name"
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="Last Name"
                  onChange={e => handleChange('lname', e)}
                  placeholder="last name"
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="Email"
                  onChange={e => handleChange('email', e)}
                  placeholder="email address"
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="For context are you a..."
                  onChange={e => handleChange('role', e)}
                  placeholder="student, tutor, parent ..."
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input>

                <Input
                  label="Message"
                  onChange={e => handleChange('message', e)}
                  placeholder="message"
                  className="w-full"
                  wrapClassName="flex h-[130px] w-full"
                ></Input>


                <button
                  className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue_gray-700 text-white-A700 p-[5px]"
                  type="submit"
                >Submit</button>

              </form>

              : <Text>
                Thank you for submitting a message to the Tutor4U team, we will be in touch shortly
              </Text>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
