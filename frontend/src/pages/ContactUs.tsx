import { useState } from "react";
import NavBar from "components/NavBar";
import Input from "components/Input";
import Button from "components/Button";
import SignUpModal from "components/SignUpModal";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [formComplete, setFormComplete] = useState<boolean>(false);
  const [displaySignup, setDisplaySignup] = useState<boolean>(false);

  const handleChange = (field: keyof MessageForm, value: string) => {
    /** Updates the state of messageForm when a change is made to an input */
    setMessageForm((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /** Handles validation and updating the form */
    e.preventDefault();
    const validForm: boolean = Object.keys(messageForm)
      .map((key: string) => messageForm[key as keyof MessageForm])
      .every((str) => str !== "");
    if (!validForm) return;
    console.log("messageForm", messageForm);
    setFormComplete(true);
    //send message to backend or email
  };

  return (
    <>
      {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      <NavBar />
      <div className="mx-auto flex h-auto min-h-[100vh] flex-col items-center justify-start rounded-[10px] bg-gray-200 py-10  px-[50px] font-montserrat md:w-full md:px-5 sm:w-full">
        <div className="flex flex-col items-center gap-3">
          <img
            className="object-cover md:h-[60px] md:w-[241px] sm:w-3/4"
            src="images/img_union21.png"
            alt="unionTwentyOne"
          />
          <h4 className="pt-3">We'd love to hear from you!</h4>

          {!formComplete ? (
            <div className="flex flex-col gap-3">
              <p className="text-center">
                Fill in the details below and one of our team will get back to
                you as soon as possible :)
              </p>
              <form
                className="flex w-full flex-col items-center justify-start gap-3"
                onSubmit={handleSubmit}
              >
                <Input
                  label="First Name"
                  onChange={(e) => handleChange("fname", e)}
                  placeholder="First name"
                  className="w-full"
                ></Input>
                <Input
                  label="Last Name"
                  onChange={(e) => handleChange("lname", e)}
                  placeholder="Last name"
                  className="w-full"
                ></Input>
                <Input
                  label="Email"
                  onChange={(e) => handleChange("email", e)}
                  placeholder="Email address"
                  className="w-full"
                ></Input>
                <div className="flex w-full flex-col text-left text-lg">
                  <h4 className="w-auto text-left text-lg">
                    So that we can help you better, are you a...
                  </h4>
                  <select
                    required
                    className="h-auto w-full rounded-[10px] border-0 p-2 px-5 py-3 placeholder-gray-200"
                    onChange={(e) => handleChange("role", e.target.value)}
                  >
                    <option className="text-gray-300" value="">
                      Please select one of the options...
                    </option>
                    <option value="Student">Student</option>
                    <option value="Tutor">Tutor</option>
                    <option value="Parent / Caregiver">
                      Parent / Caregiver
                    </option>
                    <option value="Teacher / Educational Professional">
                      Teacher / Educational Professional
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* <Input
                  label="So that we can help you better, are you a..."
                  onChange={(e) => handleChange("role", e)}
                  placeholder="student, tutor, educational professional, parent ..."
                  className="w-full"
                  wrapClassName="flex h-[50px] w-full"
                ></Input> */}
                {/* <Input
                  label="Message"
                  onChange={(e) => handleChange("message", e)}
                  placeholder="Let us know how we can help you :)"
                  className="w-full"
                  wrapClassName="flex items-start h-[130px] w-full"
                ></Input> */}
                <div className="flex w-full flex-col text-left text-lg">
                  <h4 className="w-auto text-left text-lg">Message</h4>
                  <textarea
                    required
                    rows={5}
                    className="h-auto w-full rounded-[10px] border-0 p-2 px-5 py-3 placeholder-gray-400"
                    placeholder="Let us know how we can help you :)"
                    onChange={(e) => handleChange("message", e.target.value)}
                  ></textarea>
                </div>
                <Button
                  className="w-1/2 min-w-[83px] rounded-[10px] bg-blue_gray-700 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-10 pt-10">
              <img
                src="\images\1214637_sent_email_envelope_letter_mail_icon.png"
                className="h-[200px] w-[200px]"
              />
              {/* <div
                data-w-id="d917c723-9525-cf8b-9d77-0fb07d154426"
                data-animation-type="lottie"
                data-src="\images\lottieflow-success-05-3E4369-easey.json"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="2"
                data-duration="0"
                className="w-20 h-20"
              ></div> */}
              <h4 className="lg:pb-20 text-center">
                Thank you for submitting a message to the Tutor4U team, we will
                be in touch shortly!
              </h4>
              <div className="flex gap-2.5">
                <Button onClick={() => navigate("/findatutor")}>
                  Look Through Our Tutors
                </Button>
                <Button onClick={setDisplaySignup}>
                  Apply To Become A Tutor
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
