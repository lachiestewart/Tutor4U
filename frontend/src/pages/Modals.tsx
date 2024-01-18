import SignUpModal from "components/SignUpModal";
import ForgotPasswordModal from "components/ForgotPasswordModal";
import React from "react";
import { useState } from "react";


const Modals: React.FC = () => {

  const [displaySignup, setDisplaySignup] = useState<boolean>(false);
  const [displayForgotPassword, setdisplayForgotPassword] = useState<boolean>(false);



  return (
    <>
      <div className="flex flex-col gap-10 items-center m-10">
        <button
          className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue_gray-700 text-white-A700 p-[5px]"
          onClick={() => setDisplaySignup(true)}>
          show signup modal
        </button>
        <button
          className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue_gray-700 text-white-A700 p-[5px]"
          onClick={() => setdisplayForgotPassword(true)}>
          show forgot password modal
        </button>
      </div>
      {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      {displayForgotPassword && <ForgotPasswordModal onHide={() => setdisplayForgotPassword(false)} />}
    </>
  );
};

export default Modals;
