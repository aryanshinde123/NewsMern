import React from 'react';

const NewsGrid = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600">{article.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
