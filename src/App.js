
import { useEffect, useState } from 'react';
import './App.css';
import Students from './Components/Students';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddStudents from './Components/AddStudents';
import Nopage from './Components/Nopage';
import LoginPage from './Components/LoginPage';

function App() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    const getStudentDetails = async()=>{
      const res = await fetch(`https://cloud-mongo-qveq.vercel.app/students/all/`, {
        method: "GET",
        headers : {
          "x-auth-token" : localStorage.getItem("token")
        }
      }); 
      const data = await res.json();
      setStudents(data.data)
    }
    if(!localStorage.getItem("token")){
      navigate("/login")
    }else {
      getStudentDetails()
    }

  }, [])
  
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element ={<Dashboard/>}/>

          <Route path="/students" element ={<Students
          students={students}
          setStudents={setStudents}
          />}/>

          <Route
          path="/add-student"
          element ={<AddStudents
            students={students}
            setStudents={setStudents}
          />}
          />

<       Route
         path="/login"
         element ={<LoginPage/>}
         />
      
       <Route
       path="*"
       element={<Nopage/>}/>
       
      </Routes>

    </div>
  );
}

export default App;
//crud 
//read- done
//update - done
//delete - done
//create - done