

export const TrendingCard = ({ cover_image, tag_list, title, published_at }) => {
    return (
        <div className="grow">
            <div className="relative w-full pt-[110%]">
                <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                    <img className="relative top-0 left-0 w-full h-full object-cover" src={cover_image ? cover_image : '/nrl.jpg'} />
                    <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-50 z-10" ></div>
                    <div className="flex flex-col gap-[20px] absolute bottom-[10%] left-[50%] w-full  z-20 text-white translate-x-[-50%] p-[20px]">
                        <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[10px] text-[white]">{tag_list[0]}</div>
                        <div className="text-[14px] grow">{title}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}