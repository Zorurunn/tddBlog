"use client";

import { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { AllBlogCard } from "./AllBlogCard";
import { SearchedBlogsCard } from "../components/SearchedBlogsCard";

export const SearchBlogComponent = ({ searchValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    setIsLoading(true);
    const result = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${100}`
    );
    const data = await result.json();
    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [searchValue]);

  return (
    <div className="w-full flex flex-col items-start gap-6">
      <p className="text-xl text-black">Search result</p>
      <div
        className="w-full"
        style={{
          padding: "20px",
        }}
      >
        {isLoading ? (
          <div className="w-full h-40 flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full h-[400px] overflow-scroll">
            {posts.map((item) => {
              return item.title.toLowerCase().includes(searchValue) ? (
                <SearchedBlogsCard key={item.id} {...item} />
              ) : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
