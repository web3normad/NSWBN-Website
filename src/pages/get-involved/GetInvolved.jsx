import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Volunteer from './Volunteer'
import Membership from "./Membership";
import Donate from "./Donate";
import Advocacy from "./Advocacy";

const GetInvolved = () => {
  return (
    <Routes>
    <Route path="volunteer" element={<Volunteer />} />
   <Route path="membership" element={<Membership />} />
  <Route path="donate" element={<Donate />} />
  <Route path="advocacy" element={<Advocacy />} />
  </Routes>
  )
}

export default GetInvolved