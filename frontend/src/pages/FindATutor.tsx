import React, { useState, useEffect } from "react";

import { Button, Input, Line, Text } from "components";
import NavBar from "components/NavBar";
import Sidebar from "components/Sidebar";
import TutorCard from "components/TutorCard";
import TutorFilterSidebar from "components/TutorFilterSidebar";
import { Tutor } from "interfaces";

type SearchParams = {
  subjects: string[];
  levels: string[];
  min_rating: number;
  location: string[];
  availability: string[];
  gender: string[];
  lesson_format: string[];
  min_rate: number;
  max_rate: number;
};

const FindATutor: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<boolean>(false);
  const [tutors, setTutors] = useState<Tutor[]>(null);

  const updateTutors = async () => {
    const response: Response = await fetch(
      `http://127.0.0.1:8000/api/all-tutors/`,
    );

    const tutorList: Tutor[] = await response.json();

    console.log(
      tutorList.map(
        (tutor) =>
          tutor.user.first_name +
          " " +
          tutor.user.last_name +
          " " +
          tutor.user.profile_photo,
      ),
    );

    setTutors(tutorList);
  };

  const tutorCardList = (): JSX.Element[] => {
    return tutors.map((tutor) => <TutorCard key={tutor.id} tutor={tutor} />);
  };

  useEffect(() => {
    console.log("querying backend for tutor details");
    updateTutors();
  }, [searchParams]);

  return (
    <>
      <div
        className={`flex w-full ${loggedIn ? "flex-row" : "flex-col"} items-start justify-between bg-gray-300 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5`}
      >
        {loggedIn ? <Sidebar /> : <NavBar />}
        <button onClick={() => setSearchParams(!searchParams)}>
          press to refresh tutors
        </button>
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-4 p-2.5 py-6 md:px-5">
          <div className="mb-4 flex w-auto flex-col items-center justify-start gap-4 md:w-auto">
            <h1
            >
              Find A Tutor
            </h1>

            <p className="text-center">
              If you see a tutor that you think could be a good fit, click their
              box for their detailed profile page and to get in touch with them.
              <br />
              <br />
              Can't seem to find the perfect tutor? Make a subject request and
              we will do our best to find one for you!
            </p>
            <Button
              className="min-w-[247px] cursor-pointer bg-purple-primary text-center text-lg font-semibold leading-[normal]"
              shape="round"
              color="blue_gray_700"
              size="sm"
              variant="fill"
            >
              Make A Subject Request
            </Button>
          </div>

          <div className="relative flex w-full flex-row items-start justify-center gap-2.5">
            <TutorFilterSidebar />
            <div className="relative flex h-[1208px] w-[66%] flex-col items-center justify-start gap-[15px] ">
              <div className="sticky top-5 z-10 flex w-full flex-row items-center rounded-[10px] bg-white-A700 p-2 text-left text-lg">
                <p className="w-auto font-medium">Filtering by:</p>
              </div>
              {/* Need to change grid-cols-3 to be grid-cols-1 below if there are no tutors matching the filter*/}
              <div className="grid min-h-[auto] w-full grid-cols-3 justify-center gap-3 md:grid-cols-2 md:gap-5 sm:grid-cols-2">
                {tutors ? (
                  tutorCardList()
                ) : (
                  // I want to format the below to have a better error message when no tutors match the filters...
                  <div className="flex w-full flex-col items-center justify-center">
                    <p>No Tutors Found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindATutor;
