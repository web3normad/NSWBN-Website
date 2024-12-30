import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CurrentProjects from "./CurrentProjects"
import PastProjects from  "./PastProjects"
import GetInvolved from './GetInvolved'



const ProjectsInitiatives = () => {
  return (
    <Routes>
    <Route path="current-projects" element={<CurrentProjects />} />
   <Route path="past-projects" element={<PastProjects />} />
  <Route path="how-to-get-involved" element={<GetInvolved />} />
 
  </Routes>
  )
}

export default ProjectsInitiatives