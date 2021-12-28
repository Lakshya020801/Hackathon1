import StudentLogin from "./components/Student/StudentLogin";
import Navbar from "./components/Navbar/TopBar";
import CourseList from "./pages/CourseList/CourseList";
import StudentList from "./pages/StudentList/StudentList";
import MentorProfile from "./components/MentorProfile/Studentprofile";
import StudentProfile from "./components/StudentProfile/Studentprofile";
import { useContext } from "react";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function App() {
  const { user } = useContext(Context);
  return (
    <>
<Navbar/>
  <Routes>
  {user ? (<Route path="/mentor" element={<StudentList/>} />) : (<Route path="/mentor" element={<Navigate to="/login" />}/>) }
  {user ? (<Route path="/course" element={<CourseList/>} />) : (<Route path="/course" element={<Navigate to="/login" />}/>) }
  {user ? (<Route path="/Studentprofile" element={<StudentProfile/>} />) : (<Route path="/Studentprofile" element={<Navigate to="/login" />}/>) }
  {user ? (<Route path="/profile/:id" element={<MentorProfile/>} />) : (<Route path="/profile:id" element={<Navigate to="/login" />}/>) }
   </Routes>
  <div className="outer">
  <div className="inner">
   <Routes>
   {!user ? (<Route  exact path="/login" element={<StudentLogin/>} />) :  (<Route path="/login" element={<Navigate to="/Studentprofile" />} />) }
   </Routes>
   </div>
   </div>
    </>
  );
}

export default App;
