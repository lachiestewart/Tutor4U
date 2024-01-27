import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/findatutor">FindATutor</Link>
        </li>
        <li>
          <Link to="/tutorprofile/1">TutorProfile</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/modals">Modals</Link>
        </li>
        <li>
          <Link to="/tutorcodeofconduct">TutorCodeofConduct</Link>
        </li>
        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>
        <li>
          <Link to="/tutoronboarding">TutorOnboarding</Link>
        </li>
        <li>
          <Link to="/tutordashboard">TutorDashboard</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
