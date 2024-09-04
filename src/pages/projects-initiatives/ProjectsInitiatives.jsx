import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CurrentProjects from "./CurrentProjects"
import PastProjects from  "./PastProjects"
import GetInvolved from './GetInvolved'
import SuccessStories from "./SuccessStories"


const ProjectsInitiatives = () => {
  return (
    <Routes>
    <Route path="current-projects" element={<CurrentProjects />} />
  <Route path="past-projects" element={<PastProjects />} />
  <Route path="how-to-get-involved" element={<GetInvolved />} />
  <Route path="success-stories" element={<SuccessStories />} />
  </Routes>
  )
}

export default ProjectsInitiatives