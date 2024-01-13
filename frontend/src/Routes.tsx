import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TutorProfilePage = React.lazy(() => import("pages/TutorProfilePage"));
const FindATutorPage = React.lazy(() => import("pages/FindATutorPage"));
const StudentLessonRequest = React.lazy(
  () => import("pages/StudentLessonRequest"),
);
const TutoringSettingsSubmenu = React.lazy(
  () => import("pages/TutoringSettingsSubmenu"),
);
const HistorySettingsSubmenu = React.lazy(
  () => import("pages/HistorySettingsSubmenu"),
);
const ProfileSettingsSubmenu = React.lazy(
  () => import("pages/ProfileSettingsSubmenu"),
);
const TutorMyBadges = React.lazy(() => import("pages/TutorMyBadges"));
const TutorCodeofConduct = React.lazy(() => import("pages/TutorCodeofConduct"));
const ProfileSettingsPage = React.lazy(
  () => import("pages/ProfileSettingsPage"),
);
const TutorDashboard = React.lazy(() => import("pages/TutorDashboard"));
const TutorOnboarding = React.lazy(() => import("pages/TutorOnboarding"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const TabDivInactiveTutors = React.lazy(
  () => import("pages/TabDivInactiveTutors"),
);
const TabDivActiveTutors = React.lazy(() => import("pages/TabDivActiveTutors"));
const TabDivCodeofConduct = React.lazy(
  () => import("pages/TabDivCodeofConduct"),
);
const TabDivInterviews = React.lazy(() => import("pages/TabDivInterviews"));
const TabDivUpcomingLessons = React.lazy(
  () => import("pages/TabDivUpcomingLessons"),
);
const TabDivSuggestedTutors = React.lazy(
  () => import("pages/TabDivSuggestedTutors"),
);
const TabDivApplications = React.lazy(() => import("pages/TabDivApplications"));
const TabDivLessonRequests = React.lazy(
  () => import("pages/TabDivLessonRequests"),
);
const TabDivLoginCreated = React.lazy(() => import("pages/TabDivLoginCreated"));
const AdminLessons = React.lazy(() => import("pages/AdminLessons"));
const AdminTutors = React.lazy(() => import("pages/AdminTutors"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const TutorProfilePageDesktop = React.lazy(
  () => import("pages/TutorProfilePageDesktop"),
);
const Contact = React.lazy(() => import("pages/Contact"));
const FindATutor = React.lazy(() => import("pages/FindATutor"));
const About = React.lazy(() => import("pages/About"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const TutorJobBoard = React.lazy(() => import("pages/TutorJobBoard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<TutorJobBoard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/findatutor" element={<FindATutor />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/tutorprofilepagedesktop"
            element={<TutorProfilePageDesktop />}
          />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/admintutors" element={<AdminTutors />} />
          <Route path="/adminlessons" element={<AdminLessons />} />
          <Route path="/tabdivlogincreated" element={<TabDivLoginCreated />} />
          <Route
            path="/tabdivlessonrequests"
            element={<TabDivLessonRequests />}
          />
          <Route path="/tabdivapplications" element={<TabDivApplications />} />
          <Route
            path="/tabdivsuggestedtutors"
            element={<TabDivSuggestedTutors />}
          />
          <Route
            path="/tabdivupcominglessons"
            element={<TabDivUpcomingLessons />}
          />
          <Route path="/tabdivinterviews" element={<TabDivInterviews />} />
          <Route
            path="/tabdivcodeofconduct"
            element={<TabDivCodeofConduct />}
          />
          <Route path="/tabdivactivetutors" element={<TabDivActiveTutors />} />
          <Route
            path="/tabdivinactivetutors"
            element={<TabDivInactiveTutors />}
          />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/tutoronboarding" element={<TutorOnboarding />} />
          <Route path="/tutordashboard" element={<TutorDashboard />} />
          <Route
            path="/profilesettingspage"
            element={<ProfileSettingsPage />}
          />
          <Route path="/tutorcodeofconduct" element={<TutorCodeofConduct />} />
          <Route path="/tutormybadges" element={<TutorMyBadges />} />
          <Route
            path="/profilesettingssubmenu"
            element={<ProfileSettingsSubmenu />}
          />
          <Route
            path="/historysettingssubmenu"
            element={<HistorySettingsSubmenu />}
          />
          <Route
            path="/tutoringsettingssubmenu"
            element={<TutoringSettingsSubmenu />}
          />
          <Route
            path="/studentlessonrequest"
            element={<StudentLessonRequest />}
          />
          <Route path="/findatutorpage" element={<FindATutorPage />} />
          <Route path="/tutorprofilepage" element={<TutorProfilePage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
