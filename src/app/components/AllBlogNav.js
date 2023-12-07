

export const AllBlogNav = () => {
    const data = [
        {
            title: 'All'
        },
        {
            title: 'Blog'
        },
        {
            title: 'Design'
        },
        {
            title: 'Technology'
        },
        {
            title: 'Work'
        },
        {
            title: 'Domain'
        },
    ]
    return (

        <div className="flex justify-between items-center">
            <div className="flex gap-[10px] ">
                {data.map((item) => {
                    return <div className="hover:text-[green] cursor-pointer">{item.title}</div>
                })}
            </div>

            <div>
                <div className="hover:text-[green] cursor-pointer">View all</div>
            </div>
        </div>
    )
}