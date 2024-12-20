import React from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import NewsGrid from '../components/NewsGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  // Example data for articles
  const featuredArticle = {
    title: 'Breaking: Major Event Shakes the World',
    summary: 'An in-depth look at the recent developments and their impact globally.',
    image: 'https://via.placeholder.com/800x400',
  };

  const newsArticles = [
    {
      title: 'Technology Advancements in 2024',
      summary: 'How the tech industry is revolutionizing our daily lives.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Global Economic Trends',
      summary: 'A closer look at the economic outlook for the upcoming year.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Health Breakthroughs',
      summary: 'Scientists uncover a cure for a long-standing disease.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Environmental Challenges',
      summary: 'The effects of climate change and what’s being done to combat it.',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar/>
      <div className="container mx-auto px-4 py-8">
        {/* Featured Article Section */}
        <FeaturedArticle article={featuredArticle} />

        {/* News Grid Section */}
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Latest News</h2>
        <NewsGrid articles={newsArticles} />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
