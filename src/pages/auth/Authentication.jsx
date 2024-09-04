import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MemberLogin from './MemberLogin';
import Registration from "./Registration";


const Authentication = () => {
  return (
    <Routes>
    <Route path="member-login" element={<MemberLogin />} />
    <Route path="registration" element={<Registration />} />
  </Routes>
  )
}

export default Authentication;