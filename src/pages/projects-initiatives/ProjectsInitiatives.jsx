import React from 'react'
import { Routes, Route } from 'react-router-dom';
import GetInvolved from './GetInvolved'



const ProjectsInitiatives = () => {
  return (
    <Routes>
  <Route path="how-to-get-involved" element={<GetInvolved />} />
 
  </Routes>
  )
}

export default ProjectsInitiatives