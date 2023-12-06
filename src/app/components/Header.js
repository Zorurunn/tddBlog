import { useEffect, useState } from "react"
import { useData } from "../page"
import { BackSvg } from "../BackSvg";
import { ForwardSvg } from "../forwardSvg";
import styles from '../page.module.css'

export const Header = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [number, setNumber] = useState(1);

    const getData = async () => {
        setIsLoading(true);
        const result = await fetch(`https://dev.to/api/articles?page=${number}&per_page=1`);
        const data = await result.json();
        setPosts(data);
        console.log(data);
        setIsLoading(false);
    };
    useEffect(() => {
        getData();
    }, [number])


    const backClcik = () => {
        if (number === 0) return
        setNumber((prev) => prev - 1);

    }
    const forwardClcik = () => {
        setNumber((prev) => prev + 1);
    }
    return (

        <div className="flex flex-col gap-[10px]">



            {isLoading ?
                <div>Loading...</div>
                :
                <div className="relative w-full pt-[56.25%]">
                    <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                        <img className="relative top-0 left-0 w-full h-full object-cover" src={posts[0].cover_image ? posts[0].cover_image : '/nrl.jpg'} />
                        <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10" ></div>
                        <div className="flex flex-col gap-[20px] absolute w-[50%] h-[35%] left-[20px] bottom-[20px] bg-white rounded-[20px] p-[20px]  z-20">
                            <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">{posts[0].tag_list[0]}</div>
                            <div className="text-[24px] grow">{posts[0].title}</div>
                            <div className="text-[12px] text-[gray]">{posts[0].published_at}</div>
                        </div>
                    </div>
                </div>
            }
            <div className="flex self-end gap-[8px]">
                <div onClick={backClcik}>
                    <BackSvg />
                </div>
                <div onClick={forwardClcik}>
                    <ForwardSvg />
                </div>

            </div>

        </div>
    )
}