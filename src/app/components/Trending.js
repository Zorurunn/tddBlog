import { useEffect, useState } from "react";
import { GroupArticle } from "./GroupArticle"
import { TrendingCard } from "./TrendingCard";


export const Trending = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        setIsLoading(true);
        const result = await fetch(`https://dev.to/api/articles?page=1&per_page=4&top=2`);
        const data = await result.json();
        setPosts(data);
        setIsLoading(false);
    };
    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="flex flex-col gap-[30px]">
            <GroupArticle title='Trending' />
            {isLoading ?
                (<div>Loading...</div>)
                :
                (
                    <div className="w-full ">
                        <div className="w-full grid grid-cols-4 gap-[20px]">
                            {posts.map((item, index) => {
                                return <TrendingCard key={index} {...item} />
                            })}
                        </div>
                    </div>
                )
            }

        </div>
    )
}