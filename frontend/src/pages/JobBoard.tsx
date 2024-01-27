import React from "react";
import TutorSidebar from "components/TutorSidebar";
import Button from "components/Button";
import TutorDashboardProfileHeader from "components/ProfileHeader";

const JobBoard: React.FC = () => {
  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-center gap-2.5 bg-white-A700 font-montserrat md:flex-row ">
        <TutorSidebar />
        <div className="flex w-full flex-1 flex-col items-start justify-start gap-2.5 p-[30px] md:ml-0 md:mt-0 md:px-5 sm:mt-[-100vh] sm:ml-[50px]">
          <TutorDashboardProfileHeader />
          <div className="flex w-full flex-col items-start justify-start">
            <div>
              <h1>Job Board</h1>
              <p>
                Below are the jobs that come through on our 'Tutor Requests'
                form from visitors to the Tutor4U platform.
                <br />
                <br />
                You will be able to see all tutor requests that come through but
                will only be able to apply to the ones that you have been
                approved to teach. By default, the one's you can teach will be
                at the top of your list.
                <br />
                <br />
                Please note, if you apply for one of the jobs below, an email
                will be sent to the person who made the original submission. The
                email will include a link to your profile for them to view. It
                will ultimately be up to the visitor if they wish to book a
                lesson through your profile. In order for them to book, please
                ensure you have updated your calendar with times that they can
                book in a lesson with you.
                <br />
                <br />
                If you know someone who could be suitable for one of the jobs
                below, we would love for you to make an introduction. Follow the
                steps below to get in touch with them.
                <br />
                <br />
                Please note, all the jobs below are on a first come, first
                served basis. Once there is a connection made between a student
                and tutor, the lesson request will be taken off the job board
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5">
              <h1>Requests for your subjects</h1>
              <div className="items-left flex h-full w-full flex-col justify-start gap-2.5 rounded-[10px] bg-blue_gray-100 px-5 py-[15px]">
                <div className="flex w-full flex-row items-center justify-between gap-2.5">
                  <div className="flex w-auto flex-row items-center justify-start gap-2.5">
                    <img
                      className="h-[52px] w-[52px] rounded-[50%] md:h-auto"
                      src="images/img_studentimg.png"
                      alt="studentimg"
                    />
                    <h3>Student Full Name</h3>
                  </div>
                  <img
                    className="m-2 h-[34px] w-[34px] object-cover md:h-auto"
                    src="images/img_expandarrow.png"
                    alt="expandarrow"
                  />
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

export default JobBoard;
