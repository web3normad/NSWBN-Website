import React, { useState } from 'react';
import upcomingEventsData from '../../components/eventData'; // Correctly import the data

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleContent, setArticleContent] = useState(''); 

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    loadArticleContent(event.contentFile);
  };

  // Function to load article content from file
  const loadArticleContent = async (filePath) => {
    try {
      const response = await fetch(filePath);
      const text = await response.text();
      setArticleContent(text);
    } catch (error) {
      console.error('Error loading article:', error);
      setArticleContent('Error loading article content.');
    }
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setArticleContent('');
  };

  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-2xl text-primary-100 font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {upcomingEventsData.map((event) => (
          <div
            key={event.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{event.date}</p>
            <p className="text-sm text-gray-500 mb-1">{event.time}</p>
            <p className="text-sm text-gray-500 mb-1">{event.location}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <button
              className="px-4 py-2 bg-primary-100 text-white rounded hover:bg-blue-700 transition-colors duration-300"
              onClick={() => handleEventClick(event)} // Call handleEventClick on button click
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      
      {/* Modal for showing full event details */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex py-5 items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl h-full max-h-full overflow-auto mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
              <button
                className="text-white bg-red-600 p-1 rounded hover:text-gray-800"
                onClick={handleCloseModal}
              >
                Close &times;
              </button>
            </div>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">{selectedEvent.date}</p>
            <div className="text-gray-700 whitespace-pre-line">
              {articleContent ? articleContent : 'Loading...'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpcomingEvents;
