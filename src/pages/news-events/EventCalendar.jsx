import React, { useState } from 'react';
import upcomingEventsData from '../../components/eventData'; // Ensure to import your event data

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Helper function to filter events based on the selected date
  const getEventsForDate = (date) => {
    return upcomingEventsData.filter(event => event.date === date);
  };

  // Function to handle date selection (for demonstration purposes)
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-2xl text-primary-100 font-bold mb-8">Event Calendar</h1>

      <div className="grid grid-cols-7 gap-4 mb-8">
        {/* Render days of the week */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-center font-bold text-gray-600">{day}</div>
        ))}
        
        {/* Render calendar days (Assuming current month with 30 days for demonstration) */}
        {[...Array(30)].map((_, index) => {
          const day = index + 1; // Days from 1 to 30
          const dateString = `October ${day}, 2024`; // Change to your desired month/year
          const events = getEventsForDate(dateString); // Get events for that date

          return (
            <div 
              key={day}
              className={`p-4 border rounded-lg text-center cursor-pointer ${events.length ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => handleDateClick(dateString)}
            >
              <span className="block font-bold">{day}</span>
              {events.length > 0 && (
                <span className="text-sm text-gray-700">{events.length} event{events.length > 1 ? 's' : ''}</span>
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Events on {selectedDate}</h2>
          <ul>
            {getEventsForDate(selectedDate).length === 0 ? (
              <li>No events scheduled for this date.</li>
            ) : (
              getEventsForDate(selectedDate).map((event) => (
                <li key={event.id} className="border-b py-2">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.time} - {event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EventCalendar;
