// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MainQuiz from './Components/MainQuiz'; // Import your Quiz component
import TeamMembers from './Components/TeamMembers';
import TypesOfConstitution from './Components/TypesOfConstitution';
import CrimeDatasetApp from './Components/CrimeDatasetApp';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<MainQuiz/>} /> {/* Route for the Quiz component */}
          <Route path="/TeamMembers" element={<TeamMembers/>} /> {/* Route for the Quiz component */}
          <Route path="/OrgChart" element={<TypesOfConstitution />} />
          <Route path="/CrimeDatasetApp" element={<CrimeDatasetApp />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
