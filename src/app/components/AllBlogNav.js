import { useSearch } from "../layout";
import { useBlogContext } from "./AllBlog";


export const AllBlogNav = () => {
    const { setTagValue } = useSearch();
    const data = [
        {
            title: 'All'
        },
        {
            title: 'JavaScript'
        },
        {
            title: 'CSS'
        },
        {
            title: 'Technology'
        },
        {
            title: 'Discuss'
        },
        {
            title: 'Gaming'
        },
    ]
    const clicked = (event) => {
        const viewTagValue = (event.target.innerHTML).toLowerCase();
        viewTagValue === 'all' ? setTagValue(' ') : setTagValue(viewTagValue)

    }
    return (

        <div className="flex justify-between items-center">
            <div className="flex gap-[10px] ">
                {data.map((item) => {
                    return <div onClick={clicked} className="hover:text-[green] cursor-pointer">{item.title}</div>
                })}
            </div>

            <div>
                <div className="hover:text-[green] cursor-pointer">View all</div>
            </div>
        </div>
    )
}