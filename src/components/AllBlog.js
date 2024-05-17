import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { GroupArticle } from "./GroupArticle";
import { AllBlogCard } from "./AllBlogCard";
import { LoadMoreButton } from "./LoadMoreButton";
import { AllBlogNav } from "./AllBlogNav";
import { useData } from "../app/page";
import { useSearch } from "./providers/SearchDataProvider";

export const AllBlog = () => {
  const { tagValue } = useSearch();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(9);

  const getData = async () => {
    if (number <= 9) {
      setIsLoading(true);
    }
    const result = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${number}&tag=${tagValue}`
    );
    const data = await result.json();
    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [number, tagValue]);

  const incrementNumber = () => {
    if (number <= 60) {
      setNumber((prev) => prev + 3);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-[30px]">
        <GroupArticle title="All Blog Post" />
        <AllBlogNav />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full ">
            <div
              className={` w-full grid grid-cols-3 grid-rows${number} gap-[20px]`}
            >
              {posts.map((item, index) => {
                return <AllBlogCard key={index} {...item} />;
              })}
            </div>
          </div>
        )}
        <div
          onClick={incrementNumber}
          className="flex justify-center items-center"
        >
          <LoadMoreButton />
        </div>
      </div>
      {/* {console.log(posts)} */}
    </div>
  );
};
