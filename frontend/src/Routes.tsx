import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TutorProfilePageDesktopMVP = React.lazy(
  () => import("pages/TutorProfilePageDesktopMVP"),
);
const FindATutorPageMVPOne = React.lazy(
  () => import("pages/FindATutorPageMVPOne"),
);
const DesktopFrameContainerMVP = React.lazy(
  () => import("pages/DesktopFrameContainerMVP"),
);
const TutorDashboardMVP = React.lazy(() => import("pages/TutorDashboardMVP"));
const TutorOnboardingMVP = React.lazy(() => import("pages/TutorOnboardingMVP"));
const LoginPageMVP = React.lazy(() => import("pages/LoginPageMVP"));
const TutorCodeofConductMVP = React.lazy(
  () => import("pages/TutorCodeofConductMVP"),
);
const InfoDivMVP = React.lazy(() => import("pages/InfoDivMVP"));
const ContactUsMVP = React.lazy(() => import("pages/ContactUsMVP"));
const TutorProfilePageMVP = React.lazy(
  () => import("pages/TutorProfilePageMVP"),
);
const FindATutorPageMVP = React.lazy(() => import("pages/FindATutorPageMVP"));
const HomePageMVP = React.lazy(() => import("pages/HomePageMVP"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagemvp" element={<HomePageMVP />} />
          <Route path="/findatutorpagemvp" element={<FindATutorPageMVP />} />
          <Route
            path="/tutorprofilepagemvp"
            element={<TutorProfilePageMVP />}
          />
          <Route path="/contactusmvp" element={<ContactUsMVP />} />
          <Route path="/infodivmvp" element={<InfoDivMVP />} />
          <Route
            path="/tutorcodeofconductmvp"
            element={<TutorCodeofConductMVP />}
          />
          <Route path="/loginpagemvp" element={<LoginPageMVP />} />
          <Route path="/tutoronboardingmvp" element={<TutorOnboardingMVP />} />
          <Route path="/tutordashboardmvp" element={<TutorDashboardMVP />} />
          <Route
            path="/desktopframecontainermvp"
            element={<DesktopFrameContainerMVP />}
          />
          <Route
            path="/findatutorpagemvpone"
            element={<FindATutorPageMVPOne />}
          />
          <Route
            path="/tutorprofilepagedesktopmvp"
            element={<TutorProfilePageDesktopMVP />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
