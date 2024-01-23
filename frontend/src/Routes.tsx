import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const TutorProfileLoggedIn = React.lazy(() => import("./pages/TutorProfileLoggedIn"));
const Modals = React.lazy(() => import("./pages/Modals"));
const TutorDashboard = React.lazy(() => import("./pages/TutorDashboard"));
const TutorOnboarding = React.lazy(() => import("./pages/TutorOnboarding"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const TutorCodeofConduct = React.lazy(() => import("./pages/TutorCodeofConduct"));
const InfoDiv = React.lazy(() => import("./pages/InfoDiv"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const TutorProfile = React.lazy(() => import("./pages/TutorProfile"));
const FindATutor = React.lazy(() => import("./pages/FindATutor"));
const Home = React.lazy(() => import("./pages/Home"));
const TestPage = React.lazy(() => import("./pages/TestPage"));
const Index = React.lazy(() => import("./pages/Index"));



const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
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
      </BrowserRouter>
    </React.Suspense>
  )
}

export default ProjectRoutes