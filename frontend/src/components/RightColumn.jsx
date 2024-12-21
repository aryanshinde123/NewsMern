import React from 'react';

const RightColumn = ({ articles }) => {
  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-300">
          {/* Left Side: Article Information */}
          <div className="flex-[1]">
            <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
            <p className="text-gray-700 mt-2">
              {article.description.length > 100
                ? `${article.description.substring(0, 300)}...`
                : article.description}
            </p>
            <p className="text-sm text-gray-500 mt-4">{article.readTime || "4 MIN READ"}</p>
          </div>

          {/* Right Side: Image */}
          <div className="flex-[1] h-auto">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover rounded-md shadow-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightColumn;
