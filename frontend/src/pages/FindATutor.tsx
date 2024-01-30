import React, { useState, useEffect, useContext } from "react";

import NavBar from "../components/NavBar";
import TutorCard from "../components/TutorCard";
import TutorFilterSidebar from "../components/TutorFilterSidebar";
import { Tutor, User } from "interfaces";
import Button from "../components/Button";
import StudentSidebar from "components/StudentSidebar";
import SubjectRequestModal from "components/SubjectRequestModal";
import { UserContext } from "components/UserProvider";

const TOTAL_TUTORS = 561;

export type SearchParams = {
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

const defaultParams: SearchParams = {
  subjects: [],
  levels: [],
  min_rating: 0,
  location: [],
  availability: [],
  gender: [],
  lesson_format: [],
  min_rate: 0,
  max_rate: Infinity,
};

const FindATutor: React.FC = () => {

  const { user, setUser } = useContext(UserContext);

  const [searchParams, setSearchParams] = useState<SearchParams>(defaultParams);
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [displaySubjectRequest, setdisplaySubjectRequest] = useState<boolean>(false);

  const handleClick = () => user ? setUser(null) : setUser({email: "sup bitch"} as User);

  const updateTutors = async () => {
    const response: Response = await fetch(
      `http://127.0.0.1:8000/api/all-tutors/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchParams),
      },
    );

    const tutorList: Tutor[] = await response.json();

    console.log(
      tutorList.map(
        (tutor) => tutor.user.first_name + " " + tutor.user.last_name,
      ),
    );
    setTutors(tutorList);
  };

  const handleChange = (params: SearchParams) => setSearchParams(params);

  useEffect(() => {
    console.log("searching tutors...");
    updateTutors();
  }, [searchParams]);

  return (
    <>
    {user?.email}
    <button onClick={handleClick}>click to set site user to blank user</button>
      {/* <div
        className={`relative flex w-full ${loggedIn ? "md:flex-row" : "flex-col"} items-start justify-center bg-gray-300 font-montserrat md:w-full md:flex-col md:gap-5 sm:w-full sm:flex-col sm:gap-5`}
      > */}
      {displaySubjectRequest && (
        <SubjectRequestModal onHide={() => setdisplaySubjectRequest(false)} />
      )}
      <div
        className={`relative flex w-full items-start justify-center gap-2.5 ${user ? "flex-row" : "flex-col"} bg-gray-300 font-montserrat `}
      >
        {user ? <StudentSidebar /> : <NavBar />}
        <div
          className={`mx-auto flex w-[90%] flex-col items-center justify-center gap-4 ${user ? "" : ""} p-2.5 py-6 md:px-5`}
        >
          <div className="mb-4 flex w-auto flex-col items-center justify-start gap-4 md:w-auto">
            <h1>Find A Tutor</h1>

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
              onClick={() => setdisplaySubjectRequest(true)}
            >
              Make A Subject Request
            </Button>
          </div>

          <div className="relative flex w-full flex-row items-start justify-center gap-2.5">
            <TutorFilterSidebar
              defaultParams={defaultParams}
              onChange={handleChange}
              selectedTutors={tutors.length}
              totalTutors={TOTAL_TUTORS}
            />
            <div className="relative flex h-[1208px] w-[66%] flex-col items-center justify-start gap-[15px] ">
              <div className="sticky top-5 z-10 flex w-full flex-row items-center rounded-[10px] bg-white-A700 p-2 text-left text-lg">
                <p className="w-auto font-medium">Filtering by:</p>
              </div>
              {/* Need to change grid-cols-3 to be grid-cols-1 below if there are no tutors matching the filter*/}
              <div className="grid min-h-[auto] w-full grid-cols-3 justify-center gap-3 md:grid-cols-2 md:gap-5 sm:grid-cols-2">
                {tutors ? (
                  tutors.map((tutor) => (
                    <TutorCard key={tutor.id} tutor={tutor} />
                  ))
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
