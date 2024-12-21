import React from 'react';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-200">
          {article.title}
        </h1>
        <p className="text-gray-600 leading-relaxed">
          {article.summary}
        </p>
       
      </div>
    </div>
  );
};

export default FeaturedArticle;

