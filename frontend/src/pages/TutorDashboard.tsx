import React from "react";
import Sidebar from "components/Sidebar";
import { Button, Text } from "components";
import TutorDashboardProfileHeader from "components/ProfileHeader";

const TutorDashboard: React.FC = () => {
  return (
    <>
      <div className="relative flex w-full flex-row items-start justify-center gap-2.5 bg-white-A700 font-montserrat md:w-full md:flex-col sm:w-full sm:flex-col">
        <Sidebar />
        <div className="flex h-[200vh] w-full flex-1 flex-col items-start justify-start gap-2.5 p-[30px] md:px-5">
          <TutorDashboardProfileHeader />
          <div className="flex w-full flex-col items-start justify-start">
            <div className="flex h-[300px] w-full flex-col items-center justify-start gap-2.5 md:h-auto">
              <h1>My Students</h1>
              <div className="items-left flex h-full w-full flex-col justify-start gap-2.5 rounded-[10px] bg-blue_gray-100 px-5 py-[15px]">
                <div className="flex w-full flex-row items-center justify-between gap-2.5 sm:flex-col">
                  <div className="flex w-auto flex-row items-center justify-start gap-2.5">
                    <img
                      className="h-[52px] w-[52px] rounded-[50%] md:h-auto"
                      src="images/img_studentimg.png"
                      alt="studentimg"
                    />
                    <h3>Student Full Name</h3>
                  </div>
                  <div className="flex h-[53px] w-[53px] flex-col items-center justify-between md:h-auto">
                    <img
                      className="h-[34px] w-[34px] object-cover md:h-auto"
                      src="images/img_expandarrow.png"
                      alt="expandarrow"
                    />
                  </div>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-start gap-[5px]">
                  <div className="flex w-full flex-row items-center justify-between gap-2.5">
                    <h4>Subject:</h4>
                    <h4>Level:</h4>
                    <h4>Last Session:</h4>
                    <h4>Status:</h4>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <h4>Average Rating:</h4>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <h4>Next Session:</h4>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <Button
                      className="text-md min-w-[157px] cursor-pointer text-center font-medium leading-[normal]"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      Book Next Lesson
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorDashboard;
