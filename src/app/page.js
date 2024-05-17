"use client";
import Image from "next/image";
import { BlogSvg } from "../svg/BlogSvg";
import { createContext, useContext, useEffect, useState } from "react";
import { SearchBlogComponent } from "../components/SearchBlogComponent";
import { Container } from "../components/Container";
import { Header } from "../components/HeaderAndFooter/Header";
import { Trending } from "../components/Trending";
import { AllBlog } from "../components/AllBlog";

const DataContext = createContext();

const menu = [
  {
    title: "Home",
  },
  {
    title: "Blog",
  },
  {
    title: "Contact",
  },
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const getData = async () => {
    setIsLoading(true);
    const result = await fetch(
      "https://dev.to/api/articles?username=johnrushx"
    );
    const data = await result.json();
    setPosts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        posts,
        isLoading,
      }}
    >
      <Container>
        <div className="flex flex-row gap-4 items-center">
          <input
            placeholder="Serach"
            className="bg-white"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        <Header />
      </Container>

      <Container>
        <Trending />
      </Container>

      <Container>
        <AllBlog />
      </Container>
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
