import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LatestNews from "./LatestNews";
import Gallery from './Gallery';
import EventCalendar from './EventCalendar';
import UpcomingEvents from './UpcomingEvents'

const NewsEvents = () => {
  return (
    <Routes>
    <Route path="latest-news" element={<LatestNews />} />
  <Route path="upcoming-events" element={<UpcomingEvents />} />
  <Route path="event-calender" element={<EventCalendar />} />
  <Route path="gallery" element={<Gallery />} />
  </Routes>
  )
}

export default NewsEvents