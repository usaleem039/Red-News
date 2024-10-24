/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props) => {
  const [articles, setArticles] = useState([]); // State for holding articles
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [page, setPage] = useState(1); // State for pagination

  

  // Format category name (capitalize first letter)
  const formatCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  //function to fetch news
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      );
      setArticles(response.data.articles);
    } catch (error) {
      if (error.message.includes("ERR_NETWORK_CHANGED")) {
        // Retry logic
        console.log("Network changed, retrying...");
        fetchNews();
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };
  

  // Fetch more news data for infinite scroll
  const fetchMoreData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
      );
      setArticles(articles.concat(response.data.articles)); // Append new data
      setPage(page + 1); // Increment page
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [props.category]);

  if (loading && articles.length === 0) {
    return <Spinner />; // Show spinner while loading
  }

  if (error) {
    return <div>Error fetching news: {error.message}</div>; // Show error message if there's an error
  }

  return (
    <div className="mb-60">
      <h2 className="flex content-center justify-center text-center p-2 font-serif text-lg font-bold ">
        RedNews - {formatCategory(props.category)} Headlines
      </h2>

      {/* Category component */}
      <div>
        <ul className="flex flex-wrap gap-2 pl-2 justify-evenly bg-red-600 rounded-lg text-white">
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/business"> Business</Link>
          </li>
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/general">General</Link>
          </li>
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/health">Health</Link>
          </li>
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/science">Science</Link>
          </li>
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="border-r-2 border-white hover:bg-white hover:text-red-600 hover:cursor-pointer p-2 rounded-lg">
            <Link to="/technology">Technology </Link>
          </li>
        </ul>
      </div>

      {/* Infinite Scroll Component */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
      >
        <div className="flex justify-evenly flex-wrap mt-4 gap-4">
          {articles.map((article) => (
            <div
              key={article.url}
              className="rounded-xl hover:border hover:border-red-600 mb-6 mt-4 ml-4 hover:shadow-rose-500 hover:shadow-md"
            >
              <NewsItem
                content={article.content}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                published={article.publishedAt}
                name={article.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
