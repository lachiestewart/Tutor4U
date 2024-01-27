import SignUpModal from "components/SignUpModal";
import ForgotPasswordModal from "components/ForgotPasswordModal";
import SubjectRequestModal from "components/SubjectRequestModal";

import React from "react";
import { useState } from "react";


const Modals: React.FC = () => {

  const [displaySignup, setDisplaySignup] = useState<boolean>(false);
  const [displayForgotPassword, setdisplayForgotPassword] = useState<boolean>(false);
  const [displaySubjectRequest, setdisplaySubjectRequest] = useState<boolean>(false);


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
        <button
          className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue_gray-700 text-white-A700 p-[5px]"
          onClick={() => setdisplaySubjectRequest(true)}>
          show Subject Request
        </button>
      </div>
      {displaySignup && <SignUpModal onHide={() => setDisplaySignup(false)} />}
      {displayForgotPassword && <ForgotPasswordModal onHide={() => setdisplayForgotPassword(false)} />}
      {displaySubjectRequest && <SubjectRequestModal onHide={() => setdisplaySubjectRequest(false)} />}
    </>
  );
};

export default Modals;
