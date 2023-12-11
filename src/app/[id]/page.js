'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { Container } from "../components/Container";


export default function Pages() {
    const { id } = useParams();

    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        console.log(`a`);
        const getData = async () => {
            // console.log(isLoading);
            const result = await fetch(`https://dev.to/api/articles/${id}`);
            const data = await result.json();
            setPost(data);
            setIsLoading(false);
        };
        getData();

    }, [id])
    console.log(post);
    return (
        <>
            <Container>
                {isLoading ?
                    <div>Loading...</div>
                    :
                    <div className="flex flex-col justify-center items-center w-full gap-[40px]">
                        <img src={post.cover_image ? post.cover_image : '/nrl.jpg'}></img>
                        <h1 className="text-[50px] ">{post.title}</h1>
                        <p>
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                            {post.description}
                        </p>
                    </div>
                }
            </Container>
        </>

    )
}