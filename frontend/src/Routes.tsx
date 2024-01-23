import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TutorProfileLoggedIn = React.lazy(
  () => import("pages/TutorProfileLoggedIn"),
);
const Modals = React.lazy(() => import("pages/Modals"));
const TutorDashboard = React.lazy(() => import("pages/TutorDashboard"));
const TutorOnboarding = React.lazy(() => import("pages/TutorOnboarding"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const TutorCodeofConduct = React.lazy(() => import("pages/TutorCodeofConduct"));
const InfoDiv = React.lazy(() => import("pages/InfoDiv"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const TutorProfile = React.lazy(() => import("pages/TutorProfile"));
const FindATutor = React.lazy(() => import("pages/FindATutor"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const TestPage = React.lazy(() => import("pages/TestPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/findatutor" element={<FindATutor />} />
          <Route path="/tutorprofile" element={<TutorProfile />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/infodiv" element={<InfoDiv />} />
          <Route path="/tutorcodeofconduct" element={<TutorCodeofConduct />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/tutoronboarding" element={<TutorOnboarding />} />
          <Route path="/tutordashboard" element={<TutorDashboard />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/modals" element={<Modals />} />
          <Route
            path="/tutorprofileloggedin"
            element={<TutorProfileLoggedIn />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
