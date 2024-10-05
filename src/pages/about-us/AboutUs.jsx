import React from 'react';
import { Routes, Route } from 'react-router-dom';
import History from './History';
import MissionVision from './MissionVision';
import OrgStructure from './OrgStructure';
import BoardMembers from './BoardProfiles';


const AboutUs = () => {
  return (
    <Routes>
      <Route path="history" element={<History />} />
      <Route path="mission-vision" element={<MissionVision />} />
      <Route path="org-structure" element={<OrgStructure />} />
      <Route path="board-members" element={<BoardMembers />} />
     
    </Routes>
  );
};

export default AboutUs;
