import React, { useState } from 'react';
import newsData from '../../components/newsData';

const LatestNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleContent, setArticleContent] = useState('');

  // Open modal and load article content
  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
    loadArticleContent(news.contentFile);
  };

  // Load article content from file
  const loadArticleContent = async (filePath) => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('Failed to fetch article content');
      const text = await response.text();
      setArticleContent(text);
    } catch (error) {
      console.error('Error loading article:', error);
      setArticleContent('Unable to load article content. Please try again later.');
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
    setArticleContent('');
  };

  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-xl text-primary-100 font-bold mb-8 text-center">Latest News</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => handleNewsClick(news)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNewsClick(news)}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p className="text-sm text-gray-500">{news.date}</p>
              <p className="text-gray-700 truncate">{news.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed news */}
      {isModalOpen && selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl mx-4 overflow-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
              <button
                className="text-sm text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700 focus:outline-none"
                onClick={handleCloseModal}
              >
                Close &times;
              </button>
            </div>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">{selectedNews.date}</p>
            <div className="text-gray-700 whitespace-pre-line">
              {articleContent || 'Loading...'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
