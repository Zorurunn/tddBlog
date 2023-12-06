'use client'
import Image from 'next/image'
import { Container } from './components/Container'
import { BlogSvg } from './svg/BlogSvg'
import { Hamburger } from './components/Hamburger'
import { Navbar } from './components/Navbar'
import { createContext, useContext, useEffect, useState } from 'react'
import { Header } from './components/Header'


const DataContext = createContext();


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const result = await fetch('https://dev.to/api/articles?username=johnrushx');
    const data = await result.json();
    setPosts(data);
    console.log(data);
    setIsLoading(false);
    console.log(isLoading);
  };
  useEffect(() => {

    getData();
  }, [])
  return (
    <div>
      <DataContext.Provider
        value={
          {
            posts,
            isLoading,
          }
        }
      >
        {/* {console.log(posts[0].url)} */}
        {/* <img src={posts[0].cover_image} />/ */}
        {/* {console.log(posts)} */}
        <Container >

          <Navbar />
          <Header />
        </Container>
      </DataContext.Provider>
    </div>
  )
}

export const useData = () => useContext(DataContext);