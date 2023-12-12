'use client'
import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { GroupArticle } from "../../components/GroupArticle";
import { LoadMoreButton } from "../../components/LoadMoreButton";
import { AllBlogCard } from "../../components/AllBlogCard";
import { useBlogContext } from "../../components/AllBlog";
import { useSearch } from "../layout";




export default function Blog() {
    const { tagValue } = useSearch();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [number, setNumber] = useState(12);

    const getData = async () => {
        if (number <= 12) {
            setIsLoading(true);

        }
        const result = await fetch(`https://dev.to/api/articles?page=1&per_page=${number}`);
        const data = await result.json();
        setPosts(data);
        setIsLoading(false);
    };

    // const x = useMemo(() => {
    //     console.log(posts.length);
    //     return posts;
    // }, [number])
    useEffect(() => {
        getData();
    }, [number])

    const incrementNumber = () => {

        if (number <= 60) {
            setNumber((prev) => prev + 3)
        }
    }

    return (

        <Container>
            <div className="flex flex-col gap-[30px]">
                <GroupArticle title='All Blog Post' />
                {isLoading ?
                    (<div>Loading...</div>)
                    :
                    (
                        <div className="w-full ">
                            <div className="w-full grid grid-cols-3 gap-[20px]">
                                {posts.map((item, index) => {
                                    return <AllBlogCard key={index} {...item} />
                                })}
                            </div>
                        </div>
                    )
                }
                <div
                    onClick={incrementNumber}
                    className="flex justify-center items-center">
                    <LoadMoreButton />
                </div>
            </div>

        </Container>
    )
}