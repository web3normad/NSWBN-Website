import React from 'react';
import { Routes, Route } from 'react-router-dom';
import History from './History';
import MissionVision from './MissionVision';
import OrgStructure from './OrgStructure';
import BoardMembers from './BoardProfiles';
import ContactInfo from './ContactInfo';

const AboutUs = () => {
  return (
    <Routes>
      <Route path="history" element={<History />} />
      <Route path="mission-vision" element={<MissionVision />} />
      <Route path="org-structure" element={<OrgStructure />} />
      <Route path="board-members" element={<BoardMembers />} />
      <Route path="contact-info" element={<ContactInfo />} />
    </Routes>
  );
};

export default AboutUs;
