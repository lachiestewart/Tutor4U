import { Text } from "./Text";
import { Input } from "./Input";
import { useState } from "react";

type ForgotPasswordModalProps = {
  onHide: () => void;
};

const ForgotPasswordModal = (props: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState<string>("");

const closeModal = () => {
  //Need to add logic to close Modal
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    console.log(email);
    props.onHide();
    //send reset link to email
  };

  return (
    <div >
      <div className="flex absolute top-0 bg-gray-900 opacity-50 w-[100vw] h-[100vh]"
      onClick={closeModal}></div>
      <div className="fixed top-1/2 left-1/2 mb-[588px] mt-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[10px] bg-gray-200_01 px-[50px] py-5 md:mt-0 md:px-5 md:w-auto sm:w-full">
        <div className="flex w-auto flex-col items-center justify-start gap-2.5 py-5 sm:w-full">
          <Text size="txtMontserratRomanSemiBold18">Forgot your password?</Text>
          <Text
            className="max-w-[315px] text-center text-sm text-black-900 md:max-w-full"
            size="txtMontserratRomanMedium14"
          >
            Enter your email below and a reset password link will be sent to your
            inbox
          </Text>
          <form
            className="flex w-full flex-col items-center justify-start gap-2.5"
            onSubmit={handleSubmit}
          >
            <Input
              label="Email"
              onChange={(e: string) => setEmail(e)}
              placeholder="email"
              className="w-full"
              wrapClassName="flex h-[50px] w-full"
            ></Input>
            <button
              className="w-1/2 min-w-[83px] rounded-[10px] bg-blue_gray-700 p-[5px] py-3 text-center text-sm font-medium text-white-A700"
              type="submit"
            >
              Send reset link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
