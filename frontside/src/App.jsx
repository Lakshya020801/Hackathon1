import Cards from "./components/Cards/test";
import Navbar from "./components/Navbar/navbar";
import Teachers from "./components/TeacherCard/teachercard";
import "./App.css"

function App() {
  return (
    <>
    
<Navbar/>
<div className="adjust conatiner-fluid">
<Teachers/>
</div>

    </>
  );
}

export default App;
