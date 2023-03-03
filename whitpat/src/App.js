import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import NewReportForm from "./components/NewReportForm";
const url ="https://emergencybackend.herokuapp.com"
function App({params}) {
  // const [isDarkMode,setIsDarkMode]=useState(false)
  const [report, setReport] = useState([]);
  // this will be used for the Dark Mode Toggle feature
  // function handleButton(){
  //   setIsDarkMode((isDarkMode)=> !isDarkMode)

  // }
  // const appClass = isDarkMode ? "App dark" : "App light"

  // fetching

  useEffect(() => {
    fetch(`${url}/reports`)
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  const onAddReport = (addNewReport) => {
    setReport([addNewReport, ...report]);
  };
  const handleDeleteReport = (id) => {
    const updateReport = report.filter((report) => report.id !== id);
    setReport(updateReport);
  };


  return (
    <div>
      <Routes>
        <Route
          path="/:id/:username/:role"
          element={
            <Home
            params={params}
              report={report}
              onAddReport={onAddReport}
              onReportDelete={handleDeleteReport}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/addreport" element={<NewReportForm  params={params} onAddReport={onAddReport} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
