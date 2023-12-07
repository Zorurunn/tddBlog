import { useEffect, useState } from "react";
import { GroupArticle } from "./GroupArticle"
import { TrendingCard } from "./TrendingCard";
import { AllBlogCard } from "./AllBlogCard";
import { LoadMoreButton } from "./LoadMoreButton";
import { AllBlogNav } from "./AllBlogNav";


export const AllBlog = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        setIsLoading(true);
        const result = await fetch(`https://dev.to/api/articles?page=1&per_page=9`);
        const data = await result.json();
        setPosts(data);
        setIsLoading(false);
    };
    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="flex flex-col gap-[30px]">
            <GroupArticle title='All Blog Post' />
            <AllBlogNav />
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
            <div className="flex justify-center items-center">
                <LoadMoreButton />
            </div>

        </div>
    )
}