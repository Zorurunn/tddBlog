'use client'
import Image from 'next/image'
import { Container } from './components/Container'
import { BlogSvg } from './svg/BlogSvg'
import { Hamburger } from './components/Hamburger'
import { Navbar } from './components/Navbar'
import { createContext, useContext, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Trending } from './components/Trending'
import { AllBlog } from './components/AllBlog'
// import { AllBlog } from '../Blog/page'
import Link from 'next/link'


const DataContext = createContext();

const menu = [
  {
    title: 'Home'
  },
  {
    title: 'Blog'
  },
  {
    title: 'Contact'
  },
]

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // setIsLoading(false);

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

  const notShow = false;
  return (

    <DataContext.Provider
      value={
        {
          posts,
          isLoading,
        }
      }
    >

      {/* <Link href='/Blog' >feafrefre</Link> */}

      {/* {notShow && <Navbar />} */}
      {/* <Navbar /> */}


      <Container >
        <Header />
      </Container>

      <Container >
        <Trending />
      </Container>

      <Container >
        <AllBlog />
      </Container>


    </DataContext.Provider >

  )
}

export const useData = () => useContext(DataContext);